const BASE = self.location.pathname.replace(/[^/]*$/, "");
const ADBLOCK_PATTERNS = [
    "googlesyndication.com", "googleadservices.com", "doubleclick.net",
    "pagead2.googlesyndication", "adservice.google", "googletagservices.com",
    "adnxs.com", "amazon-adsystem.com", "rubiconproject.com", "pubmatic.com",
    "criteo.com", "criteo.net", "openx.net", "taboola.com", "outbrain.com",
    "moatads.com", "casalemedia.com", "adsafeprotected.com", "smartadserver.com",
    "yieldmo.com", "sharethrough.com", "gumgum.com", "33across.com", "indexww.com",
    "contextweb.com", "bidswitch.net", "adform.net", "teads.tv", "spotxchange.com",
    "districtm.io", "media.net", "adroll.com", "bluekai.com", "rlcdn.com",
    "chartbeat.com", "scorecardresearch.com", "quantserve.com", "quantcount.com",
    "krxd.net", "demdex.net", "advertising.com", "adtechus.com", "hotjar.com",
    "mouseflow.com", "fullstory.com", "mixpanel.com", "segment.io", "branch.io",
    "popads.net", "popcash.net", "popmyads.com", "propellerads.com", "propellerclick",
    "hilltopads.net", "hilltopads.com", "adsterra.com", "adsterra.net",
    "onclickads.net", "onclkds.com", "clickadu.com", "exoclick.com", "exosrv.com",
    "juicyads.com", "trafficjunky.com", "trafficstars.com", "popunder",
    "adcash.com", "admaven", "ad-maven", "mgid.com", "revcontent.com",
    "bidvertiser.com", "clicksor.com", "adhood.com", "zeropark.com", "voluumtrk",
    "propu.sh", "poptm.com", "monetag.com", "datrk.io", "clickaine.com",
    "highperformanceformat", "yllix.com", "clksite.com", "adservetx.media",
    "pushnest", "a.realsrv.com", "syndication.realsrv.com", "creativecdn.com",
    "adskeeper.com", "servedbyadbutler", "zedo.com", "2mdn.net",
    "youtube.com/api/stats/ads", "youtube.com/pagead", "youtube.com/get_midroll",
    "youtube.com/ptracking", "/api/stats/qoe?adformat",
    "/pagead/", "/ptracking", "/popunder", "/pop.js", "/push-sw", "/adframe",
    "/advert", "ad-banner", "_ads.js",
    "unityads.unity3d.com",

    "id5-sync.com", "marfeel.com", "marfeel.io", "marfeel-sdk",
    "fundingchoicesmessages.google.com", "wrapperMessagingWithoutDetection",
    "confiant-integrations", "adlightning.com", "sourcepoint.mgr.consensu.org",
    "cdn.privacy-mgmt.com", "prebid.org", "pbstck.com", "browsiprod.com",
];

let adblockOn = true;

function isAdBlocked(url) {
    if (!adblockOn) return false;
    const s = url.toString().toLowerCase();
    return ADBLOCK_PATTERNS.some(p => s.includes(p));
}

if (navigator.userAgent.includes('Firefox')) {
    Object.defineProperty(globalThis, 'crossOriginIsolated', { value: true, writable: false });
}

const PREFIX = BASE + "cdn/";

self.$scramjet = {
    files: {
        wasm: BASE + "assets/core.wasm",
        sync: BASE + "assets/sync.js",
    }
};

importScripts(BASE + "assets/app.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker({ prefix: PREFIX });

scramjet.config = {
    prefix: PREFIX,
    files: {
        wasm: BASE + "assets/core.wasm",
        all: BASE + "assets/app.js",
        sync: BASE + "assets/sync.js",
    },
    flags: {
        serviceworkers: true,
        captureErrors: true,
        cleanErrors: true,
        allowInvalidJs: true,
        allowFailedIntercepts: true,
    },
    siteFlags: {},
    codec: {
        encode: "e => e ? encodeURIComponent(e) : e",
        decode: "e => e ? decodeURIComponent(e) : e"
    }
};

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

let darkTheme = false;

self.addEventListener("message", ({ data }) => {
    if (!data) return;
    if (data.type === "adblock") adblockOn = !!data.on;
    if (data.type === "theme") darkTheme = !!data.dark;
});

const unesc = (s) =>
    s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&amp;/g, "&");

async function errorPage(reqUrl, body) {
    let target = "";
    try {
        const u = new URL(reqUrl);
        if (u.pathname.startsWith(PREFIX)) target = decodeURIComponent(u.pathname.slice(PREFIX.length)) + u.search;
    } catch {}

    let trace = "";
    if (body) {
        const dec = body.replace(/%[0-9A-Fa-f]{2}/g, (m) => {
            try {
                return decodeURIComponent(m);
            } catch {
                return m;
            }
        });
        const m =
            dec.match(/errorTrace["']?\s*\)?\s*\.\s*(?:value|textContent)\s*=\s*(["'`])([\s\S]*?)\1\s*;/) ||
            dec.match(/(Message:[\s\S]{0,1500}?)(?:["'`]\s*[;,)]|<\/textarea>)/);
        if (m) trace = (m[2] || m[1] || "").trim();
        if (!trace) {
            const t = dec.match(/id="errorTrace"[^>]*>([\s\S]*?)<\/textarea>/i);
            if (t) trace = unesc(t[1]).trim();
        }
        trace = trace.replace(/\\n/g, "\n").replace(/\\t/g, "  ").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    }

    const ctx = JSON.stringify({
        url: target,
        host: self.location.hostname,
        dark: darkTheme,
        trace,
        code: "ERR_PROXY_CONNECTION_FAILED",
    }).replace(/</g, "\\u003c");

    const tpl = await (await fetch(BASE + "errorpage.html", { cache: "no-store" })).text();
    return new Response(tpl.replace("__CTX__", ctx), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    });
}

const WASM_PATH = BASE + "assets/core.wasm";
const SKIP = [BASE + "assets/", BASE + "css/", BASE + "js/", BASE + "img/"];

async function handle(event) {
    try {
        await scramjet.loadConfig();
    } catch {}
    try {
        if (scramjet.route(event)) {
            const res = await scramjet.fetch(event);
            const dest = event.request.destination;
            if (res && res.status === 500 && (dest === "document" || dest === "iframe")) {
                let body = "";
                try {
                    body = await res.clone().text();
                } catch {}
                if (!body || body.includes("fetchedURL")) return errorPage(event.request.url, body);
            }
            return res;
        }
    } catch {}
    return fetch(event.request);
}

self.addEventListener("fetch", event => {
    const url = event.request.url;
    let path = "";
    try { path = new URL(url).pathname; } catch {}
    
    // Only intercept Scramjet proxy traffic (/cdn/...) and core wasm
    if (path.startsWith(PREFIX) || path === WASM_PATH) {
        if (isAdBlocked(url)) {
            event.respondWith(new Response(null, { status: 204 }));
            return;
        }
        event.respondWith(handle(event));
    }
});
