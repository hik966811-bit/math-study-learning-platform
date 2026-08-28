export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl || typeof targetUrl !== 'string') {
    return res.status(400).send('Missing url parameter');
  }

  let formattedUrl = targetUrl.trim();
  if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
    formattedUrl = 'https://' + formattedUrl;
  }

  try {
    const urlObj = new URL(formattedUrl);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': req.headers['accept'] || 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': req.headers['accept-language'] || 'en-US,en;q=0.9',
      'Referer': urlObj.origin,
      'Origin': urlObj.origin,
    };

    const response = await fetch(formattedUrl, {
      method: 'GET',
      headers,
      redirect: 'follow',
    });

    const contentType = response.headers.get('content-type') || 'text/html';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (contentType.includes('text/html')) {
      let html = await response.text();

      const injectScript = `
        <base href="${formattedUrl}">
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('a').forEach(a => {
              const orig = a.getAttribute('href');
              if (orig && !orig.startsWith('#') && !orig.startsWith('javascript:')) {
                a.addEventListener('click', (e) => {
                  try {
                    const abs = new URL(orig, "${formattedUrl}").href;
                    if (abs.startsWith('http')) {
                      e.preventDefault();
                      window.location.href = '/api/proxy?url=' + encodeURIComponent(abs);
                    }
                  } catch(err) {}
                });
              }
            });
          });
        </script>
      `;

      if (html.includes('<head>')) {
        html = html.replace('<head>', '<head>' + injectScript);
      } else if (html.includes('<html>')) {
        html = html.replace('<html>', '<html><head>' + injectScript + '</head>');
      } else {
        html = injectScript + html;
      }

      return res.send(html);
    } else {
      const buffer = Buffer.from(await response.arrayBuffer());
      return res.send(buffer);
    }
  } catch (err) {
    console.error('Proxy fetch error:', err.message);
    res.status(502).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Unable to load page</title>
      </head>
      <body>
        <h2>Page Cannot Be Loaded</h2>
        <p>Error: ${err.message}</p>
      </body>
      </html>
    `);
  }
}
