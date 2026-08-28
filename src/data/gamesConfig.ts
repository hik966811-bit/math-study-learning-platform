import { Game } from '../types/game';

export const INITIAL_GAMES: Game[] = [
  {
    id: 'fnaf-1',
    title: 'Five Nights at Freddy\'s 1',
    description: 'Survive five nights as the security guard at Freddy Fazbear\'s Pizza.',
    category: 'action',
    thumbnail: '/assets/games/FNAF_1__Scratch_.webp',
    type: 'iframe',
    embedUrl: '/games/fnaf-1/index.html',
    rating: 4.5,
    playsCount: 9420,
    featured: true,
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'fnaf-2',
    title: 'Five Nights at Freddy\'s 2',
    description: 'The classic sequel with new animatronics and the Freddy mask.',
    category: 'action',
    thumbnail: 'https://via.placeholder.com/300x300/8b5cf6/ffffff?text=FNAF+2',
    type: 'iframe',
    embedUrl: '/games/fnaf/index.html',
    rating: 4.5,
    playsCount: 7850,
    featured: true,
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'fnaf-last-breath',
    title: 'Five Nights at Last Breath',
    description: 'Intense FNAF survival battle with relentless mechanics.',
    category: 'action',
    thumbnail: '/assets/games/Sans_Last_Breath.webp',
    type: 'iframe',
    embedUrl: '/games/fnaf-last-breath/index.html',
    rating: 4.9,
    playsCount: 4210,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'fnaf-epstein',
    title: 'Five Nights at Epstein\'s',
    description: 'Custom parody horror survival.',
    category: 'action',
    thumbnail: '/assets/games/FNAF_1__Scratch_.webp',
    type: 'iframe',
    embedUrl: '/games/fnaf-epstein/index.html',
    rating: 4.2,
    playsCount: 3100,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'minecraft-1-12-2',
    title: 'Minecraft 1.12.2',
    description: 'Full WebGL Minecraft sandbox with multiplayer server support.',
    category: 'arcade',
    thumbnail: '/assets/games/Eaglercraft_v1_8.webp',
    type: 'iframe',
    embedUrl: '/games/minecraft-1-12-2/index.html',
    rating: 4.5,
    playsCount: 12500,
    featured: true,
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: '1v1-lol',
    title: '1v1.LOL',
    description: 'Online building & shooting simulator with competitive modes.',
    category: 'action',
    thumbnail: '/assets/games/1v1_LOL.webp',
    type: 'iframe',
    embedUrl: '/games/1v1-lol/index.html',
    rating: 4.9,
    playsCount: 8900,
    featured: true,
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'half-life',
    title: 'Half Life',
    description: 'Classic Valve FPS running directly in WebGL.',
    category: 'action',
    thumbnail: '/assets/games/Half_Life.webp',
    type: 'iframe',
    embedUrl: '/games/half-life/index.html',
    rating: 4.8,
    playsCount: 5400,
    
    badge: 'RETRO',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'terraria',
    title: 'Terraria',
    description: '2D action-adventure sandbox. Dig, fight, explore, build.',
    category: 'action',
    thumbnail: '/assets/games/Terraria.webp',
    type: 'iframe',
    embedUrl: '/games/terraria/index.html',
    rating: 5.0,
    playsCount: 7100,
    featured: true,
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'backrooms',
    title: 'The Backrooms',
    description: 'Endless yellow maze psychological horror exploration.',
    category: 'action',
    thumbnail: '/assets/games/Backrooms.webp',
    type: 'iframe',
    embedUrl: '/games/backrooms/index.html',
    rating: 4.8,
    playsCount: 4300,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'schoolboy-runaway',
    title: 'Schoolboy Runaway',
    description: 'Stealth adventure game. Sneak past parents and escape.',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/schoolboy-runaway.png',
    type: 'iframe',
    embedUrl: '/games/schoolboy-runaway/index.html',
    rating: 4.2,
    playsCount: 6200,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'repo',
    title: 'R.E.P.O.',
    description: 'Cooperative multiplayer salvage and horror extraction.',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/repo.png',
    type: 'iframe',
    embedUrl: '/games/repo/index.html',
    rating: 5.0,
    playsCount: 3900,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'madalin-stunt-cars-2',
    title: 'Madalin Stunt Cars 2',
    description: 'Supercars 3D stunt driving with giant loops and ramps.',
    category: 'arcade',
    thumbnail: '/assets/games/Madalin_Cars_Multiplayer.webp',
    type: 'iframe',
    embedUrl: '/games/madalin-stunt-cars-2/index.html',
    rating: 5.0,
    playsCount: 8200,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'madalin-stunt-cars-3',
    title: 'Madalin Stunt Cars 3',
    description: 'Multiplayer 3D stunt racing with modern supercars.',
    category: 'arcade',
    thumbnail: '/assets/games/Madalin_Cars_Multiplayer.webp',
    type: 'iframe',
    embedUrl: '/games/madalin-stunt-cars-3/index.html',
    rating: 5.0,
    playsCount: 6800,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'crazy-cars',
    title: 'Crazy Cars',
    description: 'Fast-paced arcade obstacle track driving.',
    category: 'arcade',
    thumbnail: '/assets/games/Crazy_for_Speed.webp',
    type: 'iframe',
    embedUrl: '/games/crazy-cars/index.html',
    rating: 4.4,
    playsCount: 3400,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'crush-cars-3d',
    title: 'Crush Cars 3D',
    description: 'Demolition derby and vehicle destruction sandbox.',
    category: 'arcade',
    thumbnail: '/assets/games/Crazy_Stunt_Cars_Multiplayer.webp',
    type: 'iframe',
    embedUrl: '/games/crush-cars-3d/index.html',
    rating: 4.8,
    playsCount: 2900,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'aquapark-io',
    title: 'Aquapark.io',
    description: 'Slide down water slides, bump rivals, and take shortcuts.',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/aquapark-io.png',
    type: 'iframe',
    embedUrl: '/games/aquapark-io/index.html',
    rating: 4.2,
    playsCount: 4800,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'brawl-simulator-3d',
    title: 'Brawl Simulator 3D',
    description: '3D arena combat battle simulator.',
    category: 'action',
    thumbnail: '/assets/games/Monster_Battlegrounds.webp',
    type: 'iframe',
    embedUrl: '/games/brawl-simulator-3d/index.html',
    rating: 4.3,
    playsCount: 3200,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-0-bowmasters',
    title: 'Bowmasters',
    description: 'Bowmasters by Azur Games, Playgendary',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/0.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/0.html',
    rating: 4.4,
    playsCount: 6234,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-1-ovo',
    title: 'OvO',
    description: 'OvO by Dedra Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/1.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/1-fde.html',
    rating: 4.7,
    playsCount: 7139,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-2-ovo-2',
    title: 'OvO 2',
    description: 'OvO 2 by Dedra Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/2.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/2e.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-3-ovo-3-dimensions',
    title: 'OvO 3 Dimensions',
    description: 'OvO 3 Dimensions by Dedra Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/3.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/3-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-4-gladihoppers',
    title: 'Gladihoppers',
    description: 'Gladihoppers by Dreamon Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/4.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/4-pf.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-5-ice-dodo',
    title: 'Ice Dodo',
    description: 'Ice Dodo by Onionfist Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/5.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/5-f.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-6-block-blast',
    title: 'Block Blast',
    description: 'Block Blast by reunbozdo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/6.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/6-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-7-jetpack-joyride',
    title: 'Jetpack Joyride',
    description: 'Jetpack Joyride by Halfbrick Studios',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/7.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/7-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-8-friday-night-funkin',
    title: 'Friday Night Funkin',
    description: 'Friday Night Funkin by ninja-muffin24',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/8.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/8-wow2.html',
    rating: 4.7,
    playsCount: 7132,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-9-sprunki',
    title: 'Sprunki',
    description: 'Sprunki by NyankoBfLol',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/9.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/9-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-10-temple-run-2',
    title: 'Temple Run 2',
    description: 'Temple Run 2 by Imangi STUDIOS',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/10.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/10-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-11-stickman-hook',
    title: 'Stickman Hook',
    description: 'Stickman Hook by Madbox',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/11.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/11-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-13-attack-hole',
    title: 'Attack Hole',
    description: 'Attack Hole by Homa Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/13.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/13.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-14-bridge-race',
    title: 'Bridge Race',
    description: 'Bridge Race by QubicGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/14.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/14.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-15-color-water-sort-3d',
    title: 'Color Water Sort 3D',
    description: 'Color Water Sort 3D by Tapnation',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/15.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/15.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-16-hide-n-seek',
    title: 'Hide N Seek',
    description: 'Hide N Seek by Supersonic Studios LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/16.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/16.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-17-magic-tiles-3',
    title: 'Magic Tiles 3',
    description: 'Magic Tiles 3 by AmaNotes',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/17.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/17.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-18-stacky-dash',
    title: 'Stacky Dash',
    description: 'Stacky Dash by Supersonic Studios LTD',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/18.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/18.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-19-supreme-duelist',
    title: 'Supreme Duelist',
    description: 'Supreme Duelist by Neron\'s Brother',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/19.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/19.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-20-tall-man-run',
    title: 'Tall Man Run',
    description: 'Tall Man Run by Supersonic Studios LTD',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/20.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/20a.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-21-turbo-stars',
    title: 'Turbo Stars',
    description: 'Turbo Stars by https://play.google.com/store/apps/details?id=com.turbo.stars',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/21.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/21.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-22-mob-control-html5',
    title: 'Mob Control HTML5',
    description: 'Mob Control HTML5 by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/22.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/22.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-23-pou',
    title: 'Pou',
    description: 'Pou by Zakeh',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/23.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/23.html',
    rating: 4.7,
    playsCount: 7139,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-24-crossy-road',
    title: 'Crossy Road',
    description: 'Crossy Road by Hipster Whale',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/24.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/24.html',
    rating: 4.2,
    playsCount: 1226,
    
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-25-basket-battle',
    title: 'Basket Battle',
    description: 'Basket Battle by Supersonic Studios LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/25.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/25.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-26-amaze',
    title: 'Amaze',
    description: 'Amaze by CrazyLabs',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/26.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/26.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-27-geometry-dash-lite-remake',
    title: 'Geometry Dash Lite (REMAKE)',
    description: 'Geometry Dash Lite (REMAKE) by RobTop Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/27.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/27-f.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-28-basketball-frvr',
    title: 'Basketball Frvr',
    description: 'Basketball Frvr by FRVR',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/28.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/28.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-29-bazooka-boy',
    title: 'Bazooka Boy',
    description: 'Bazooka Boy by Supersonic Studios LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/29.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/29.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-30-bottle-jump-3d',
    title: 'Bottle Jump 3D',
    description: 'Bottle Jump 3D by CASUAL AZUR GAMES',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/30.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/30.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-31-color-match',
    title: 'Color Match',
    description: 'Color Match by Supersonic Studios LTD',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/31.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/31.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-32-dig-deep',
    title: 'Dig Deep',
    description: 'Dig Deep by CrazyLabs LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/32.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/32.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-33-retro-bowl',
    title: 'Retro Bowl',
    description: 'Retro Bowl by New Star Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/33.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/33-ff.html',
    rating: 4.4,
    playsCount: 6234,
    
    badge: 'HOT',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-34-retro-bowl-college',
    title: 'Retro Bowl College',
    description: 'Retro Bowl College by New Star Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/34.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/34-fixed.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-36-monster-tracks',
    title: 'Monster Tracks',
    description: 'Monster Tracks by Fancade',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/36.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/36-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-37-gobble',
    title: 'Gobble',
    description: 'Gobble by Fancade',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/37.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/37-f.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-38-five-nights-at-freddy-s',
    title: 'Five Nights at Freddy\'s',
    description: 'Five Nights at Freddy\'s by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/38.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/38-f.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-40-five-nights-at-freddy-s-3',
    title: 'Five Nights at Freddy\'s 3',
    description: 'Five Nights at Freddy\'s 3 by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/40.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/40-f.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-41-five-nights-at-freddy-s-4',
    title: 'Five Nights at Freddy\'s 4',
    description: 'Five Nights at Freddy\'s 4 by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/41.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/41-f.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-42-road-of-fury',
    title: 'Road of Fury',
    description: 'Road of Fury by IriySoft',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/42.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/42-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-43-driven-wild',
    title: 'Driven Wild',
    description: 'Driven Wild by KilledByAPixel',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/43.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/43-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-44-ragdoll-hit',
    title: 'Ragdoll Hit',
    description: 'Ragdoll Hit by Kids Games LLC',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/44.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/44-fix.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-45-vex-1',
    title: 'Vex 1',
    description: 'Vex 1 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/45.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/45-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-46-vex-2',
    title: 'Vex 2',
    description: 'Vex 2 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/46.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/46-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-47-vex-3',
    title: 'Vex 3',
    description: 'Vex 3 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/47.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/47-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-48-vex-3-xmas',
    title: 'Vex 3 XMAS',
    description: 'Vex 3 XMAS by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/48.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/48-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-49-vex-4',
    title: 'Vex 4',
    description: 'Vex 4 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/49.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/49-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-50-vex-5',
    title: 'Vex 5',
    description: 'Vex 5 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/50.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/50-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-51-vex-6',
    title: 'Vex 6',
    description: 'Vex 6 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/51.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/51-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-52-vex-7',
    title: 'Vex 7',
    description: 'Vex 7 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/52.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/52-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-53-vex-8',
    title: 'Vex 8',
    description: 'Vex 8 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/53.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/53-f.html',
    rating: 4.2,
    playsCount: 2901,
    
    badge: 'POPULAR',
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-54-vex-challenges',
    title: 'Vex Challenges',
    description: 'Vex Challenges by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/54.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/54-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-55-vex-x3m',
    title: 'Vex X3M',
    description: 'Vex X3M by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/55.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/55-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-56-vex-x3m-2',
    title: 'Vex X3M 2',
    description: 'Vex X3M 2 by Lorenzo De Carlo',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/56.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/56-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-59-a-dance-of-fire-and-ice',
    title: 'A Dance of Fire and Ice',
    description: 'A Dance of Fire and Ice by fizzd',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/59.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/59.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-60-achievement-unlocked',
    title: 'Achievement Unlocked',
    description: 'Achievement Unlocked by jmtb02',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/60.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/60.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-61-achievement-unlocked-2',
    title: 'Achievement Unlocked 2',
    description: 'Achievement Unlocked 2 by jmtb02',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/61.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/61.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-62-achievement-unlocked-3',
    title: 'Achievement Unlocked 3',
    description: 'Achievement Unlocked 3 by jmtb02',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/62.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/62.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-63-angry-birds',
    title: 'Angry Birds',
    description: 'Angry Birds by Rovio Entertainment',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/63.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/63.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-65-baldi-s-basics',
    title: 'Baldi\'s Basics',
    description: 'Baldi\'s Basics by Basically Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/65.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/65-fixed.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-66-basket-random',
    title: 'Basket Random',
    description: 'Basket Random by RHM Interactive OÜ',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/66.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/66.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-67-big-tower-tiny-square',
    title: 'Big Tower Tiny Square',
    description: 'Big Tower Tiny Square by EvilObjective',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/67.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/67-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-68-big-neon-tower-tiny-square',
    title: 'Big NEON Tower Tiny Square',
    description: 'Big NEON Tower Tiny Square by EvilObjective',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/68.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/68.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-69-big-ice-tower-tiny-square',
    title: 'Big ICE Tower Tiny Square',
    description: 'Big ICE Tower Tiny Square by EvilObjective',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/69.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/69.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-70-bitlife',
    title: 'BitLife',
    description: 'BitLife by Candywriter',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/70.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/70.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-71-bloons-td',
    title: 'Bloons TD',
    description: 'Bloons TD by Ninja Kiwi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/71.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/71.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-72-bloons-td-2',
    title: 'Bloons TD 2',
    description: 'Bloons TD 2 by Ninja Kiwi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/72.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/72.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-73-bloons-td-3',
    title: 'Bloons TD 3',
    description: 'Bloons TD 3 by Ninja Kiwi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/73.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/73.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-74-bloons-td-4',
    title: 'Bloons TD 4',
    description: 'Bloons TD 4 by Ninja Kiwi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/74.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/74.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-75-bloons-td-5',
    title: 'Bloons TD 5',
    description: 'Bloons TD 5 by Ninja Kiwi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/75.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/75-fix2.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-76-bob-the-robber-2',
    title: 'Bob The Robber 2',
    description: 'Bob The Robber 2 by Meow Beast',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/76.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/76-fix2.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-77-boxing-random',
    title: 'Boxing Random',
    description: 'Boxing Random by RHM Interactive',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/77.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/77.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-78-burrito-bison-launcha-libre',
    title: 'Burrito Bison: Launcha Libre',
    description: 'Burrito Bison: Launcha Libre by Juicy Beast',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/78.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/78.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-79-cannon-basketball',
    title: 'Cannon Basketball',
    description: 'Cannon Basketball by Oleh "qzix13" Kuzyk',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/79.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/79.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-80-cannon-basketball-2',
    title: 'Cannon Basketball 2',
    description: 'Cannon Basketball 2 by Oleh "qzix13" Kuzyk',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/80.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/80.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-81-cluster-rush',
    title: 'Cluster Rush',
    description: 'Cluster Rush by Landfall',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/81.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/81.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-82-cookie-clicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker by Orteil',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/82.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/82-a.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-83-coreball',
    title: 'Coreball',
    description: 'Coreball by Ben Vinegar',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/83.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/83-f.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-84-cubefield',
    title: 'Cubefield',
    description: 'Cubefield by Max Abernethy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/84.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/84.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-85-cut-the-rope',
    title: 'Cut the Rope',
    description: 'Cut the Rope by ZeptoLab',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/85.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/85-f2.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-86-draw-climber',
    title: 'Draw Climber',
    description: 'Draw Climber by VOODOO',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/86.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/86.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-87-emulator-js',
    title: 'Emulator.JS',
    description: 'Emulator.JS by Ethan O\'Brien',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/87.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/87-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-88-fireboy-and-watergirl-2',
    title: 'Fireboy and Watergirl 2',
    description: 'Fireboy and Watergirl 2 by Oslo Albet',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/88.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/88.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-89-fireboy-and-watergirl-3',
    title: 'Fireboy and Watergirl 3',
    description: 'Fireboy and Watergirl 3 by Oslo Albet',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/89.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/89.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-90-granny',
    title: 'Granny',
    description: 'Granny by DVloper',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/90.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/90-fix2.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-91-gunspin',
    title: 'Gunspin',
    description: 'Gunspin by minijuegos.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/91.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/91.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-92-highway-racer-2',
    title: 'Highway Racer 2',
    description: 'Highway Racer 2 by Bone Cracker Games',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/92.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/92.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-93-johnny-trigger',
    title: 'Johnny Trigger',
    description: 'Johnny Trigger by SayGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/93.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/93.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-94-journey-downhill',
    title: 'Journey Downhill',
    description: 'Journey Downhill by Megagon Industries',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/94.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/94.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-95-line-rider',
    title: 'Line Rider',
    description: 'Line Rider by Boštjan Čadež',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/95.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/95.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-96-moto-x3m',
    title: 'Moto X3M',
    description: 'Moto X3M by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/96.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/96.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-97-moto-x3m-2',
    title: 'Moto X3M 2',
    description: 'Moto X3M 2 by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/97.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/97.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-98-moto-x3m-3',
    title: 'Moto X3M 3',
    description: 'Moto X3M 3 by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/98.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/98.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-99-moto-x3m-spooky',
    title: 'Moto X3M Spooky',
    description: 'Moto X3M Spooky by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/99.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/99.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-100-moto-x3m-winter',
    title: 'Moto X3M Winter',
    description: 'Moto X3M Winter by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/100.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/100-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-101-ninja-vs-evilcorp',
    title: 'Ninja vs EvilCorp',
    description: 'Ninja vs EvilCorp by Rémi Vansteelandt',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/101.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/101.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-102-paper-io-2',
    title: 'Paper.io 2',
    description: 'Paper.io 2 by VOODOO',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/102.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/102.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-103-the-world-s-hardest-game',
    title: 'The World\'s Hardest Game',
    description: 'The World\'s Hardest Game by Stevie Critoph',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/103.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/103.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-104-the-world-s-hardest-game-3',
    title: 'The World\'s Hardest Game 3',
    description: 'The World\'s Hardest Game 3 by Stevie Critoph',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/104.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/104.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-105-the-world-s-hardest-game-4',
    title: 'The World\'s Hardest Game 4',
    description: 'The World\'s Hardest Game 4 by Stevie Critoph',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/105.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/105.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-106-this-is-the-only-level',
    title: 'This Is The Only Level',
    description: 'This Is The Only Level by jmtb02',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/106.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/106.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-107-this-is-the-only-level-2',
    title: 'This Is The Only Level 2',
    description: 'This Is The Only Level 2 by jmtb02',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/107.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/107.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-108-tiny-fishing',
    title: 'Tiny Fishing',
    description: 'Tiny Fishing by Winter Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/108.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/108.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-109-tomb-of-the-mask',
    title: 'Tomb Of The Mask',
    description: 'Tomb Of The Mask by Happymagenta UAB',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/109.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/109.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-110-toss-the-turtle',
    title: 'Toss The Turtle',
    description: 'Toss The Turtle by GonzoSSM',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/110.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/110-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-111-tube-jumpers',
    title: 'Tube Jumpers',
    description: 'Tube Jumpers by New Eich Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/111.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/111.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-112-wordle',
    title: 'Wordle',
    description: 'Wordle by New York Times',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/112.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/112-fix2.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-113-ruffle',
    title: 'Ruffle',
    description: 'Ruffle by Mike Welsh',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/113.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/113.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-114-2048',
    title: '2048',
    description: '2048 by Gabriele Cirulli',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/114.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/114-f.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-115-8-ball-pool',
    title: '8 Ball Pool',
    description: '8 Ball Pool by Miniclip.com',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/115.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/115.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-116-offroad-mountain-bike',
    title: 'Offroad Mountain Bike',
    description: 'Offroad Mountain Bike by RHM Interactive OÜ',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/116.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/116.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-117-space-waves',
    title: 'Space Waves',
    description: 'Space Waves by do.games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/117.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/117-fixf.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-118-solar-smash',
    title: 'Solar Smash',
    description: 'Solar Smash by Paradyme Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/118.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/118.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-119-snow-rider-3d',
    title: 'Snow Rider 3D',
    description: 'Snow Rider 3D by gamebiz',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/119.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/119.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-120-fortzone-battle-royale',
    title: 'Fortzone Battle Royale',
    description: 'Fortzone Battle Royale by Mirra Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/120.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/120-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-121-brawl-guys-io',
    title: 'Brawl Guys.io',
    description: 'Brawl Guys.io by Lagged',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/121.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/121.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-122-survival-race',
    title: 'Survival Race',
    description: 'Survival Race by Brain Massage',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/122.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/122.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-123-poly-track',
    title: 'Poly Track',
    description: 'Poly Track by Kodub',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/123.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/123-win2.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-124-moto-x3m-pool-party',
    title: 'Moto X3M Pool Party',
    description: 'Moto X3M Pool Party by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/124.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/124.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-125-granny-2',
    title: 'Granny 2',
    description: 'Granny 2 by DVloper',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/125.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/125.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-126-granny-3',
    title: 'Granny 3',
    description: 'Granny 3 by DVloper',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/126.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/126.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-127-fashion-battle',
    title: 'Fashion Battle',
    description: 'Fashion Battle by Apps Mobile Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/127.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/127.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-128-slice-it-all',
    title: 'Slice it All',
    description: 'Slice it All by VOODOO',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/128.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/128.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-129-flappy-bird',
    title: 'Flappy Bird',
    description: 'Flappy Bird by Dong Nguyen',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/129.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/129.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-130-osu',
    title: 'osu!',
    description: 'osu! by ppy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/130.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/130-f.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-146-8-ball-classic',
    title: '8 Ball Classic',
    description: '8 Ball Classic by Famobi',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/146.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/146.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-147-angry-birds-showdown',
    title: 'Angry Birds Showdown',
    description: 'Angry Birds Showdown by Rovio Entertainment',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/147.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/147.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-148-archery-world-tour',
    title: 'Archery World Tour',
    description: 'Archery World Tour by Famobi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/148.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/148.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-149-ball-blast',
    title: 'Ball Blast',
    description: 'Ball Blast by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/149.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/149.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-150-cannon-balls-3d',
    title: 'Cannon Balls 3D',
    description: 'Cannon Balls 3D by Famobi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/150.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/150.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-151-chess-classic',
    title: 'Chess Classic',
    description: 'Chess Classic by Famobi',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/151.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/151.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-152-draw-the-line',
    title: 'Draw the Line',
    description: 'Draw the Line by Supersonic Studios LTD',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/152.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/152.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-153-flappy-dunk',
    title: 'Flappy Dunk',
    description: 'Flappy Dunk by Voodoo',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/153.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/153.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-154-fork-n-sausage',
    title: 'Fork n Sausage',
    description: 'Fork n Sausage by SayGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/154.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/154.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-155-guess-their-answer',
    title: 'Guess Their Answer',
    description: 'Guess Their Answer by TapNation',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/155.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/155.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-156-harvest-io',
    title: 'Harvest.io',
    description: 'Harvest.io by CASUAL AZUR GAMES',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/156.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/156.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-157-hill-climb-racing-lite',
    title: 'Hill Climb Racing Lite',
    description: 'Hill Climb Racing Lite by Fingersoft',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/157.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/157.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-158-pac-man-superfast',
    title: 'Pac-Man Superfast',
    description: 'Pac-Man Superfast by RedFox Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/158.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/158.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-159-parking-rush',
    title: 'Parking Rush',
    description: 'Parking Rush by Nine&Nine',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/159.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/159.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-160-race-master-3d',
    title: 'Race Master 3D',
    description: 'Race Master 3D by Beresnev Games',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/160.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/160.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-161-state-io',
    title: 'State.io',
    description: 'State.io by CASUAL AZUR GAMES',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/161.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/161.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-162-tower-crash-3d',
    title: 'Tower Crash 3D',
    description: 'Tower Crash 3D by Famobi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/162.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/162.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-163-trivia-crack',
    title: 'Trivia Crack',
    description: 'Trivia Crack by etermax',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/163.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/163.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-164-crazy-cattle-3d',
    title: 'Crazy Cattle 3D',
    description: 'Crazy Cattle 3D by 4nn4t4t',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/164.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/164-temp2.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-165-cheese-chompers-3d',
    title: 'Cheese Chompers 3D',
    description: 'Cheese Chompers 3D by NavaNoid',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/165.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/165.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-166-bad-parenting-1',
    title: 'Bad Parenting 1',
    description: 'Bad Parenting 1 by 98corbins',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/166.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/166-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-167-blade-ball',
    title: 'Blade Ball',
    description: 'Blade Ball by ??',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/167.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/167.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-168-blocky-snakes',
    title: 'Blocky Snakes',
    description: 'Blocky Snakes by Beedo Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/168.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/168.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-169-bloxorz',
    title: 'Bloxorz',
    description: 'Bloxorz by Damien Clarke',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/169.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/169.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-170-big-tower-tiny-square-2',
    title: 'Big Tower Tiny Square 2',
    description: 'Big Tower Tiny Square 2 by EO Interactive',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/170.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/170.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-171-candy-crush',
    title: 'Candy Crush',
    description: 'Candy Crush by King.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/171.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/171.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-172-melon-playground',
    title: 'Melon Playground',
    description: 'Melon Playground by playducky.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/172.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/172-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-173-drift-hunters',
    title: 'Drift Hunters',
    description: 'Drift Hunters by Illia Kaminetskyi',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/173.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/173.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-174-world-box',
    title: 'World Box',
    description: 'World Box by Kendja',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/174.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/174.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-175-run-1',
    title: 'Run 1',
    description: 'Run 1 by Joseph Cloutier',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/175.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/175.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-176-run-2',
    title: 'Run 2',
    description: 'Run 2 by Joseph Cloutier',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/176.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/176.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-177-run-3',
    title: 'Run 3',
    description: 'Run 3 by Joseph Cloutier',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/177.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/177.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-178-swords-and-souls',
    title: 'Swords and Souls',
    description: 'Swords and Souls by Armor Games',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/178.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/178.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-179-soundboard',
    title: 'Soundboard',
    description: 'Soundboard by genizy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/179.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/179-a2.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-180-n-gon',
    title: 'n-gon',
    description: 'n-gon by landgreen',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/180.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/180.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-181-minecraft-1-8-8',
    title: 'Minecraft 1.8.8',
    description: 'Minecraft 1.8.8 by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/181.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/181-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-183-minecraft-1-21-4',
    title: 'Minecraft 1.21.4',
    description: 'Minecraft 1.21.4 by zardoy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/183.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/183.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-185-five-nights-at-freddy-s-sister-location',
    title: 'Five Nights at Freddy\'s: Sister Location',
    description: 'Five Nights at Freddy\'s: Sister Location by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/185.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/185-f.html',
    rating: 4.9,
    playsCount: 5201,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-186-ragdoll-archers',
    title: 'Ragdoll Archers',
    description: 'Ragdoll Archers by Ericetto',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/186.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/186.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-187-papers-please',
    title: 'Papers, Please',
    description: 'Papers, Please by Lucas Pope',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/187.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/187.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-188-scrap-metal-3',
    title: 'Scrap Metal 3',
    description: 'Scrap Metal 3 by Ciorbyn',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/188.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/188e.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-190-five-nights-at-freddy-s-world',
    title: 'Five Nights at Freddy\'s: World',
    description: 'Five Nights at Freddy\'s: World by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/190.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/190-f.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-191-five-nights-at-freddy-s-pizza-simulator',
    title: 'Five Nights at Freddy\'s: Pizza Simulator',
    description: 'Five Nights at Freddy\'s: Pizza Simulator by Scott Cawthon',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/191.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/191-f.html',
    rating: 4.9,
    playsCount: 5201,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-192-five-nights-at-freddy-s-ultimate-custom-night',
    title: 'Five Nights at Freddy\'s: Ultimate Custom Night',
    description: 'Five Nights at Freddy\'s: Ultimate Custom Night by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/192.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/192-f.html',
    rating: 5.0,
    playsCount: 3793,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-193-do-not-take-this-cat-home',
    title: 'Do NOT Take This Cat Home',
    description: 'Do NOT Take This Cat Home by Pixelliminal',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/193.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/193-f.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-194-people-playground',
    title: 'People Playground',
    description: 'People Playground by Studio Minus, 98corbins',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/194-m.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/194-a.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-195-r-e-p-o',
    title: 'R.E.P.O',
    description: 'R.E.P.O by semiwork, 98corbins',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/195.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/195-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-196-ultrakill',
    title: 'ULTRAKILL',
    description: 'ULTRAKILL by New Blood Interactive, Cake Logic',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/196.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/196-fixedf.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-197-elastic-man',
    title: 'Elastic Man',
    description: 'Elastic Man by David Li',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/197.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/197.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-198-slope',
    title: 'Slope',
    description: 'Slope by coweggs',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/198.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/198.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-199-time-shooter-1',
    title: 'Time Shooter 1',
    description: 'Time Shooter 1 by g80g',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/199.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/199.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-200-time-shooter-2',
    title: 'Time Shooter 2',
    description: 'Time Shooter 2 by g80g',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/200.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/200.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-201-time-shooter-3-swat',
    title: 'Time Shooter 3: SWAT',
    description: 'Time Shooter 3: SWAT by g80g',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/201.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/201.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-202-carrom-clash',
    title: 'Carrom Clash',
    description: 'Carrom Clash by GameSnacks',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/202.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/202.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-203-doom',
    title: 'DOOM',
    description: 'DOOM by Id Software',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/203.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/203-a.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-204-five-nights-at-winston-s',
    title: 'Five Nights at Winston\'s',
    description: 'Five Nights at Winston\'s by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/204.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/204-a.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-205-buckshot-roulette',
    title: 'Buckshot Roulette',
    description: 'Buckshot Roulette by Mike Klubnika',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/205.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/205-ff.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-206-tunnel-rush',
    title: 'Tunnel Rush',
    description: 'Tunnel Rush by Deer Cat Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/206.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/206-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-207-snowbattle-io',
    title: 'Snowbattle.io',
    description: 'Snowbattle.io by Royalec/Tokyo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/207.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/207-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-208-rolly-vortex',
    title: 'Rolly Vortex',
    description: 'Rolly Vortex by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/208.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/208-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-209-draw-the-hill',
    title: 'Draw the Hill',
    description: 'Draw the Hill by Stelennnn',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/209.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/209-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-210-dragon-vs-bricks',
    title: 'Dragon vs Bricks',
    description: 'Dragon vs Bricks by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/210.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/210-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-211-death-run-3d',
    title: 'Death Run 3D',
    description: 'Death Run 3D by kevin.wang',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/211.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/211-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-213-cut-the-rope-time-travel',
    title: 'Cut the Rope: Time Travel',
    description: 'Cut the Rope: Time Travel by ZeptoLab',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/213.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/213-f2.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-214-cut-the-rope-holiday-gift',
    title: 'Cut the Rope: Holiday Gift',
    description: 'Cut the Rope: Holiday Gift by ZeptoLab',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/214.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/214-fi2.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-215-bendy-and-the-ink-machine',
    title: 'Bendy and the Ink Machine',
    description: 'Bendy and the Ink Machine by Joey Drew Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/215.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/215-f.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-216-that-s-not-my-neighbor',
    title: 'That\'s Not My Neighbor',
    description: 'That\'s Not My Neighbor by Nacho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/216.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/216-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-217-hotline-miami',
    title: 'Hotline Miami',
    description: 'Hotline Miami by Dennaton Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/217.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/217-cf.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-218-papa-s-bakeria',
    title: 'Papa\'s Bakeria',
    description: 'Papa\'s Bakeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/218.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/218.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-219-papa-s-burgeria',
    title: 'Papa\'s Burgeria',
    description: 'Papa\'s Burgeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/219.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/219.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-220-papa-s-cheeseria',
    title: 'Papa\'s Cheeseria',
    description: 'Papa\'s Cheeseria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/220.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/220.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-221-papa-s-cupcakeria',
    title: 'Papa\'s Cupcakeria',
    description: 'Papa\'s Cupcakeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/221.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/221.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-222-papa-s-donuteria',
    title: 'Papa\'s Donuteria',
    description: 'Papa\'s Donuteria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/222.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/222.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-223-papa-s-freezeria',
    title: 'Papa\'s Freezeria',
    description: 'Papa\'s Freezeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/223.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/223.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-224-papa-s-hot-doggeria',
    title: 'Papa\'s Hot Doggeria',
    description: 'Papa\'s Hot Doggeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/224.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/224.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-225-papa-s-pancakeria',
    title: 'Papa\'s Pancakeria',
    description: 'Papa\'s Pancakeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/225.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/225.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-226-papa-s-pastaria',
    title: 'Papa\'s Pastaria',
    description: 'Papa\'s Pastaria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/226.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/226.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-227-papa-s-pizeria',
    title: 'Papa\'s Pizeria',
    description: 'Papa\'s Pizeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/227.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/227.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-228-papa-s-scooperia',
    title: 'Papa\'s Scooperia',
    description: 'Papa\'s Scooperia by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/228.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/228.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-229-papa-s-sushiria',
    title: 'Papa\'s Sushiria',
    description: 'Papa\'s Sushiria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/229.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/229.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-230-papa-s-taco-mia',
    title: 'Papa\'s Taco Mia',
    description: 'Papa\'s Taco Mia by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/230.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/230.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-231-papa-s-wingeria',
    title: 'Papa\'s Wingeria',
    description: 'Papa\'s Wingeria by Flipline Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/231.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/231.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-232-plants-vs-zombies',
    title: 'Plants vs Zombies',
    description: 'Plants vs Zombies by PopCap Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/232.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/232.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-233-superhot',
    title: 'Superhot',
    description: 'Superhot by Superhot Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/233.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/233.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-234-duck-life',
    title: 'Duck Life',
    description: 'Duck Life by Mad.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/234.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/234.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-235-duck-life-2',
    title: 'Duck Life 2',
    description: 'Duck Life 2 by Mad.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/235.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/235.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-236-duck-life-3',
    title: 'Duck Life 3',
    description: 'Duck Life 3 by Mad.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/236.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/236.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-237-duck-life-4',
    title: 'Duck Life 4',
    description: 'Duck Life 4 by Mad.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/237.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/237.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-238-duck-life-5',
    title: 'Duck Life 5',
    description: 'Duck Life 5 by Mad.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/238.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/238.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-239-red-ball',
    title: 'Red Ball',
    description: 'Red Ball by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/239.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/239.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-240-red-ball-2',
    title: 'Red Ball 2',
    description: 'Red Ball 2 by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/240.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/240.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-241-red-ball-3',
    title: 'Red Ball 3',
    description: 'Red Ball 3 by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/241.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/241.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-242-red-ball-4',
    title: 'Red Ball 4',
    description: 'Red Ball 4 by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/242.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/242.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-243-red-ball-4-vol-2',
    title: 'Red Ball 4 Vol. 2',
    description: 'Red Ball 4 Vol. 2 by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/243.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/243.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-244-red-ball-4-vol-3',
    title: 'Red Ball 4 Vol. 3',
    description: 'Red Ball 4 Vol. 3 by Yohoho Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/244.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/244.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-245-wheely',
    title: 'Wheely',
    description: 'Wheely by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/245.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/245.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-246-wheely-2',
    title: 'Wheely 2',
    description: 'Wheely 2 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/246.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/246.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-247-wheely-3',
    title: 'Wheely 3',
    description: 'Wheely 3 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/247.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/247.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-248-wheely-4',
    title: 'Wheely 4',
    description: 'Wheely 4 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/248.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/248.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-249-wheely-5',
    title: 'Wheely 5',
    description: 'Wheely 5 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/249.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/249.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-250-wheely-6',
    title: 'Wheely 6',
    description: 'Wheely 6 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/250.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/250.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-251-wheely-7',
    title: 'Wheely 7',
    description: 'Wheely 7 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/251.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/251.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-252-wheely-8',
    title: 'Wheely 8',
    description: 'Wheely 8 by Pegas Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/252.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/252.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-253-chat-bot-ai-a-i-gpt',
    title: 'Chat Bot AI (A.I GPT)',
    description: 'Chat Bot AI (A.I GPT) by gn-math',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/253.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/253-update.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-255-crazy-chicken-3d',
    title: 'Crazy Chicken 3D',
    description: 'Crazy Chicken 3D by Teasle',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/255.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/255.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-256-crazy-kitty-3d',
    title: 'Crazy Kitty 3D',
    description: 'Crazy Kitty 3D by Teasle',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/256.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/256.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-257-google-baseball',
    title: 'Google Baseball',
    description: 'Google Baseball by Google',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/257.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/257-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-258-a-bite-at-freddy-s',
    title: 'A Bite at Freddy\'s',
    description: 'A Bite at Freddy\'s by Garrett McKay',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/258.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/258.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-259-class-of-09',
    title: 'Class of \'09',
    description: 'Class of \'09 by sbn3',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/259.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/259-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-260-re-run',
    title: 'RE:RUN',
    description: 'RE:RUN by DaniDev',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/260.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/260.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-261-fruit-ninja',
    title: 'Fruit Ninja',
    description: 'Fruit Ninja by Halfbrick Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/261.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/261.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-263-quake-iii-arena',
    title: 'Quake III Arena',
    description: 'Quake III Arena by Id Software',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/263.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/263-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-264-escape-road',
    title: 'Escape Road',
    description: 'Escape Road by AzGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/264.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/264.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-265-escape-road-2',
    title: 'Escape Road 2',
    description: 'Escape Road 2 by AzGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/265.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/265-fix2.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-266-speed-stars',
    title: 'Speed Stars',
    description: 'Speed Stars by Luke Doukakis',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/266.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/266-a.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-267-pizza-tower',
    title: 'Pizza Tower',
    description: 'Pizza Tower by Tour De Pizza, BurnedPopcorn',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/267.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/267-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-268-bacon-may-die',
    title: 'Bacon May Die',
    description: 'Bacon May Die by SnoutUp',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/268.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/268-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-269-bad-ice-cream',
    title: 'Bad Ice Cream',
    description: 'Bad Ice Cream by Nitrome',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/269.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/269-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-270-bad-ice-cream-2',
    title: 'Bad Ice Cream 2',
    description: 'Bad Ice Cream 2 by Nitrome',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/270.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/270-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-271-bad-ice-cream-3',
    title: 'Bad Ice Cream 3',
    description: 'Bad Ice Cream 3 by Nitrome',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/271.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/271-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-272-basketball-stars',
    title: 'Basketball Stars',
    description: 'Basketball Stars by MadPuffers',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/272.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/272-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-273-blockpost',
    title: 'BlockPost',
    description: 'BlockPost by SkullCap Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/273.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/273.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-274-circloo',
    title: 'CircloO',
    description: 'CircloO by Florian van Strien',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/274.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/274-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-275-circloo-2',
    title: 'CircloO 2',
    description: 'CircloO 2 by Florian van Strien',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/275.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/275.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-276-drift-boss',
    title: 'Drift Boss',
    description: 'Drift Boss by marketjs',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/276.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/276-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-277-evil-glitch',
    title: 'Evil Glitch',
    description: 'Evil Glitch by agar3s',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/277.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/277-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-280-papery-planes',
    title: 'Papery Planes',
    description: 'Papery Planes by Akos Makovics',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/280.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/280.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-281-pixel-gun-survival',
    title: 'Pixel Gun Survival',
    description: 'Pixel Gun Survival by Mentolatux',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/281.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/281.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-282-protektor',
    title: 'Protektor',
    description: 'Protektor by rujogames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/282.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/282-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-283-rooftop-snipers',
    title: 'Rooftop Snipers',
    description: 'Rooftop Snipers by New Eich Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/283.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/283-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-284-war-the-knights',
    title: 'War The Knights',
    description: 'War The Knights by BANZAI',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/284.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/284.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-285-basket-bros',
    title: 'Basket Bros',
    description: 'Basket Bros by Blue Wizard Digital',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/285.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/285-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-286-endoparasitic',
    title: 'Endoparasitic',
    description: 'Endoparasitic by Deep Root Interactive',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/286.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/286.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-287-riddle-school',
    title: 'Riddle School',
    description: 'Riddle School by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/287.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/287.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-288-riddle-school-2',
    title: 'Riddle School 2',
    description: 'Riddle School 2 by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/288.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/288.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-289-riddle-school-3',
    title: 'Riddle School 3',
    description: 'Riddle School 3 by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/289.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/289.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-290-riddle-school-4',
    title: 'Riddle School 4',
    description: 'Riddle School 4 by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/290.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/290.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-291-riddle-school-5',
    title: 'Riddle School 5',
    description: 'Riddle School 5 by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/291.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/291.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-292-riddle-transfer',
    title: 'Riddle Transfer',
    description: 'Riddle Transfer by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/292.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/292.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-293-riddle-transfer-2',
    title: 'Riddle Transfer 2',
    description: 'Riddle Transfer 2 by JonBro',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/293.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/293.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-294-idle-dice',
    title: 'Idle Dice',
    description: 'Idle Dice by Lutz Schönfelder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/294.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/294.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-295-12-mini-battles',
    title: '12 Mini Battles',
    description: '12 Mini Battles by Shared Dreams Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/295.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/295.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-297-minecraft-1-5-2',
    title: 'Minecraft 1.5.2',
    description: 'Minecraft 1.5.2 by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/297.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/297-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-298-minecraft-alpha-1-2-6',
    title: 'Minecraft Alpha 1.2.6',
    description: 'Minecraft Alpha 1.2.6 by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/298.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/298.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-299-minecraft-beta-1-3',
    title: 'Minecraft Beta 1.3',
    description: 'Minecraft Beta 1.3 by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/299.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/299.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-300-minecraft-beta-1-7-3',
    title: 'Minecraft Beta 1.7.3',
    description: 'Minecraft Beta 1.7.3 by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/300.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/300.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-301-minecraft-indev',
    title: 'Minecraft Indev',
    description: 'Minecraft Indev by lax1dude',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/301.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/301.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-302-little-runmo',
    title: 'Little Runmo',
    description: 'Little Runmo by juhosprite, gooseworx',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/302.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/302.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-303-territorial-io',
    title: 'Territorial.io',
    description: 'Territorial.io by TTCreator',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/303.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/303.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-304-alien-hominid',
    title: 'Alien Hominid',
    description: 'Alien Hominid by Tom Fulp, Dan Paladin',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/304.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/304.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-305-tanuki-sunset',
    title: 'Tanuki Sunset',
    description: 'Tanuki Sunset by Rewind Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/305.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/305.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-306-shipo-io',
    title: 'Shipo.io',
    description: 'Shipo.io by OnRush Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/306.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/306.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-307-rainbow-obby',
    title: 'Rainbow Obby',
    description: 'Rainbow Obby by emolingo games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/307.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/307.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-308-nazi-zombies-portable',
    title: 'Nazi Zombies: Portable',
    description: 'Nazi Zombies: Portable by nzp team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/308.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/308.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-309-sandboxels',
    title: 'Sandboxels',
    description: 'Sandboxels by R74N',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/309.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/309.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-310-dreadhead-parkour',
    title: 'Dreadhead Parkour',
    description: 'Dreadhead Parkour by GameTornado',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/310.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/310.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-311-sandtris',
    title: 'Sandtris',
    description: 'Sandtris by FRANCO MIRANDA',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/311.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/311.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-312-blackjack',
    title: 'BlackJack',
    description: 'BlackJack by Synic-dx',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/312.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/312.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-313-minesweeper-mania',
    title: 'Minesweeper Mania',
    description: 'Minesweeper Mania by gamesnacks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/313.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/313.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-314-super-mario-63',
    title: 'Super Mario 63',
    description: 'Super Mario 63 by Runouw',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/314.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/314.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-315-jelly-mario',
    title: 'Jelly Mario',
    description: 'Jelly Mario by Schteppe',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/315.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/315.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-316-angry-birds-chrome',
    title: 'Angry Birds Chrome',
    description: 'Angry Birds Chrome by Rovio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/316.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/316.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-317-sandspiel',
    title: 'sandspiel',
    description: 'sandspiel by maxbittker',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/317.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/317.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-318-side-effects',
    title: 'Side Effects',
    description: 'Side Effects by hi rohun, Mr.Pootsley, Jaybooty',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/318.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/318.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-319-build-a-queen',
    title: 'Build a Queen',
    description: 'Build a Queen by Supersonic Studios LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/319.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/319.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-320-3d-bowling',
    title: '3D Bowling',
    description: '3D Bowling by Italic Games',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/320.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/320.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-321-room-sort',
    title: 'Room Sort',
    description: 'Room Sort by Gamincat',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/321.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/321.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-322-sushi-roll',
    title: 'Sushi Roll',
    description: 'Sushi Roll by Famobi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/322.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/322.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-323-find-the-alien',
    title: 'Find the Alien',
    description: 'Find the Alien by MOONEE PUBLISHING LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/323.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/323.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-324-maze-speedrun',
    title: 'Maze Speedrun',
    description: 'Maze Speedrun by Raval Matic',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/324.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/324.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-325-kitchen-bazar',
    title: 'Kitchen Bazar',
    description: 'Kitchen Bazar by Gameloft',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/325.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/325.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-326-pokey-ball',
    title: 'Pokey Ball',
    description: 'Pokey Ball by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/326.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/326.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-327-slime-io',
    title: 'Slime.io',
    description: 'Slime.io by GameSnacks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/327.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/327.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-328-om-nom-run',
    title: 'Om Nom Run',
    description: 'Om Nom Run by ZeptoLab',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/328.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/328.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-329-tiletopia',
    title: 'TileTopia',
    description: 'TileTopia by GameSnacks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/329.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/329a.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-330-bitplanes',
    title: 'BitPlanes',
    description: 'BitPlanes by Anton Medvedev',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/330.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/330.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-333-fancy-pants-adventure',
    title: 'Fancy Pants Adventure',
    description: 'Fancy Pants Adventure by Brad Borne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/333.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/333.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-334-fancy-pants-adventure-2',
    title: 'Fancy Pants Adventure 2',
    description: 'Fancy Pants Adventure 2 by Brad Borne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/334.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/334.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-335-fancy-pants-adventure-3',
    title: 'Fancy Pants Adventure 3',
    description: 'Fancy Pants Adventure 3 by Brad Borne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/335.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/335.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-336-fancy-pants-adventure-4-part-1',
    title: 'Fancy Pants Adventure 4 Part 1',
    description: 'Fancy Pants Adventure 4 Part 1 by Brad Borne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/336.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/336.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-337-fancy-pants-adventure-4-part-2',
    title: 'Fancy Pants Adventure 4 Part 2',
    description: 'Fancy Pants Adventure 4 Part 2 by Brad Borne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/337.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/337.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-338-getaway-shootout',
    title: 'Getaway Shootout',
    description: 'Getaway Shootout by New Eich Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/338.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/338.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-339-house-of-hazards',
    title: 'House of Hazards',
    description: 'House of Hazards by New Eich Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/339.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/339.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-340-learn-to-fly',
    title: 'Learn to Fly',
    description: 'Learn to Fly by Light Bringer Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/340.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/340.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-341-learn-to-fly-2',
    title: 'Learn to Fly 2',
    description: 'Learn to Fly 2 by Light Bringer Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/341.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/341.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-342-learn-to-fly-3',
    title: 'Learn to Fly 3',
    description: 'Learn to Fly 3 by Light Bringer Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/342.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/342.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-343-learn-to-fly-idle',
    title: 'Learn to Fly Idle',
    description: 'Learn to Fly Idle by Light Bringer Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/343.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/343.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-344-raft-wars',
    title: 'Raft Wars',
    description: 'Raft Wars by GaZZer Game',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/344.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/344.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-345-raft-wars-2',
    title: 'Raft Wars 2',
    description: 'Raft Wars 2 by GaZZer Game',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/345.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/345.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-346-sort-the-court',
    title: 'Sort the Court',
    description: 'Sort the Court by graebor',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/346.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/346.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-347-spiderdoll',
    title: 'SpiderDoll',
    description: 'SpiderDoll by Ysopprod',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/347.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/347.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-348-they-are-coming',
    title: 'They Are Coming',
    description: 'They Are Coming by OnHit Developments',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/348.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/348.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-349-spiral-roll',
    title: 'Spiral Roll',
    description: 'Spiral Roll by Voodoo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/349.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/349.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-350-binding-of-issac-wrath-of-the-lamb',
    title: 'Binding of Issac: Wrath of the Lamb',
    description: 'Binding of Issac: Wrath of the Lamb by Edmund McMillen',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/350.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/350.html',
    rating: 4.4,
    playsCount: 6622,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-351-happy-sheepies',
    title: 'Happy Sheepies',
    description: 'Happy Sheepies by Berker Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/351.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/351.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-352-don-t-you-lecture-me',
    title: 'DON\'T YOU LECTURE ME',
    description: 'DON\'T YOU LECTURE ME by GD Colon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/352.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/352.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-353-blumgi-rocket',
    title: 'Blumgi Rocket',
    description: 'Blumgi Rocket by Blumgi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/353.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/353.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-354-adventure-capatalist',
    title: 'Adventure Capatalist',
    description: 'Adventure Capatalist by Hyper Hippo Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/354.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/354-a.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-355-dadish-2',
    title: 'Dadish 2',
    description: 'Dadish 2 by Thomas K. Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/355.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/355.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-356-dadish-3',
    title: 'Dadish 3',
    description: 'Dadish 3 by Thomas K. Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/356.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/356.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-357-dadish',
    title: 'Dadish',
    description: 'Dadish by Thomas K. Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/357.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/357.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-358-dadish-3d',
    title: 'Dadish 3D',
    description: 'Dadish 3D by Thomas K. Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/358.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/358.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-359-daily-dadish',
    title: 'Daily Dadish',
    description: 'Daily Dadish by Thomas K. Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/359.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/359.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-360-evowars-io',
    title: 'EvoWars.io',
    description: 'EvoWars.io by Night Steed S.C.',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/360.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/360.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-361-google-feud',
    title: 'Google Feud',
    description: 'Google Feud by Justin Hook',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/361.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/361.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-362-idle-breakout',
    title: 'Idle Breakout',
    description: 'Idle Breakout by Kodiqi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/362.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/362.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-363-idle-lumber-inc',
    title: 'Idle Lumber Inc',
    description: 'Idle Lumber Inc by NoPowerUp',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/363.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/363.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-364-idle-mining-empire',
    title: 'Idle Mining Empire',
    description: 'Idle Mining Empire by marketjs',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/364.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/364.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-365-justfall-lol',
    title: 'JustFall.lol',
    description: 'JustFall.lol by JustPlay.LOL',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/365.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/365.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-366-merge-harvest',
    title: 'Merge Harvest',
    description: 'Merge Harvest by idfk',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/366.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/366.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-367-parking-fury-3d',
    title: 'Parking Fury 3D',
    description: 'Parking Fury 3D by Brain Software',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/367.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/367.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-368-slope-2',
    title: 'Slope 2',
    description: 'Slope 2 by idfk',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/368.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/368.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-369-slowroads',
    title: 'Slowroads',
    description: 'Slowroads by Topograph Interactive',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/369.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/369.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-370-smash-karts',
    title: 'Smash Karts',
    description: 'Smash Karts by Tall Team',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/370.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/370-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-371-stickman-fight-ragdoll',
    title: 'Stickman Fight Ragdoll',
    description: 'Stickman Fight Ragdoll by Vanorium',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/371.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/371e.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-372-stickman-boost',
    title: 'Stickman Boost',
    description: 'Stickman Boost by y8',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/372.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/372.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-373-stickman-climb',
    title: 'Stickman Climb',
    description: 'Stickman Climb by No Pressure Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/373.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/373.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-374-stickman-golf',
    title: 'Stickman Golf',
    description: 'Stickman Golf by NoodleCake',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/374.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/374e2.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-375-2048-merge-run',
    title: '2048 Merge Run',
    description: '2048 Merge Run by Yandex',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/375.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/375-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-376-build-a-big-army',
    title: 'Build a Big Army',
    description: 'Build a Big Army by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/376.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/376.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-377-build-a-plane',
    title: 'Build a Plane',
    description: 'Build a Plane by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/377.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/377.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-378-camouflage-and-sniper',
    title: 'Camouflage and Sniper',
    description: 'Camouflage and Sniper by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/378.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/378.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-379-car-survival-3d',
    title: 'Car Survival 3D',
    description: 'Car Survival 3D by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/379.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/379.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-380-city-defense',
    title: 'City Defense',
    description: 'City Defense by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/380.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/380.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-381-clothing-shop-3d',
    title: 'Clothing Shop 3D',
    description: 'Clothing Shop 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/381.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/381-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-382-cool-cars-run-3d',
    title: 'Cool Cars Run 3D',
    description: 'Cool Cars Run 3D by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/382.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/382.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-384-destiny-run-3d',
    title: 'Destiny Run 3D',
    description: 'Destiny Run 3D by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/384.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/384.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-385-destroy-the-car-3d',
    title: 'Destroy The Car 3D',
    description: 'Destroy The Car 3D by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/385.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/385-f.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-386-diamond-seeker',
    title: 'Diamond Seeker',
    description: 'Diamond Seeker by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/386.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/386.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-387-draw-joust',
    title: 'Draw Joust',
    description: 'Draw Joust by Yandex',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/387.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/387-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-388-evolving-bombs-3d',
    title: 'Evolving Bombs 3D',
    description: 'Evolving Bombs 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/388.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/388-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-389-fire-and-frost-master',
    title: 'Fire and Frost Master',
    description: 'Fire and Frost Master by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/389.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/389-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-390-fitness-empire',
    title: 'Fitness Empire',
    description: 'Fitness Empire by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/390.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/390-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-391-flick-goal',
    title: 'Flick Goal',
    description: 'Flick Goal by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/391.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/391.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-392-flip-master',
    title: 'Flip Master',
    description: 'Flip Master by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/392.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/392.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-393-giant-wanted',
    title: 'Giant Wanted',
    description: 'Giant Wanted by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/393.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/393.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-394-gun-clone',
    title: 'Gun Clone',
    description: 'Gun Clone by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/394.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/394.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-395-gun-runner',
    title: 'Gun Runner',
    description: 'Gun Runner by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/395.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/395-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-396-kaji-run',
    title: 'Kaji Run',
    description: 'Kaji Run by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/396.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/396-f.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-397-make-a-superboat',
    title: 'Make a SuperBoat',
    description: 'Make a SuperBoat by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/397.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/397.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-398-makeover-run',
    title: 'Makeover Run',
    description: 'Makeover Run by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/398.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/398.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-399-mega-car-jumps',
    title: 'Mega Car Jumps',
    description: 'Mega Car Jumps by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/399.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/399.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-400-money-rush',
    title: 'Money Rush',
    description: 'Money Rush by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/400.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/400-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-401-monster-box-3d',
    title: 'Monster Box 3D',
    description: 'Monster Box 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/401.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/401.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-402-office-fight',
    title: 'Office Fight',
    description: 'Office Fight by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/402.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/402-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-403-robot-invasion',
    title: 'Robot Invasion',
    description: 'Robot Invasion by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/403.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/403.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-404-seat-jam-3d',
    title: 'Seat Jam 3D',
    description: 'Seat Jam 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/404.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/404.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-405-shooting-master',
    title: 'Shooting Master',
    description: 'Shooting Master by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/405.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/405.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-406-supermarket-3d',
    title: 'Supermarket 3D',
    description: 'Supermarket 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/406.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/406-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-407-survive-to-victory',
    title: 'Survive to Victory',
    description: 'Survive to Victory by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/407.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/407-f.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-408-telekinesis-attack',
    title: 'Telekinesis Attack',
    description: 'Telekinesis Attack by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/408.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/408-f.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-409-telekinesis-car',
    title: 'Telekinesis Car',
    description: 'Telekinesis Car by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/409.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/409.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-410-telekinesis-drive',
    title: 'Telekinesis Drive',
    description: 'Telekinesis Drive by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/410.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/410.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-411-telekinesis',
    title: 'Telekinesis',
    description: 'Telekinesis by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/411.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/411.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-413-tug-of-war-with-cars',
    title: 'Tug of War with Cars',
    description: 'Tug of War with Cars by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/413.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/413.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-414-twerk-race-3d',
    title: 'Twerk Race 3D',
    description: 'Twerk Race 3D by Yandex',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/414.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/414.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-415-twisted-rope-3d',
    title: 'Twisted Rope 3D',
    description: 'Twisted Rope 3D by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/415.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/415.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-416-wall-crawler',
    title: 'Wall Crawler',
    description: 'Wall Crawler by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/416.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/416-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-417-war-regions',
    title: 'War Regions',
    description: 'War Regions by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/417.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/417.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-418-weapon-craft-run',
    title: 'Weapon Craft Run',
    description: 'Weapon Craft Run by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/418.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/418.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-419-weapon-upgrade-rush',
    title: 'Weapon Upgrade Rush',
    description: 'Weapon Upgrade Rush by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/419.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/419-f.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-420-weapon-scale',
    title: 'Weapon Scale',
    description: 'Weapon Scale by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/420.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/420.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-421-rich-run-3d',
    title: 'Rich Run 3D',
    description: 'Rich Run 3D by Yandex',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/421.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/421-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-422-high-heels',
    title: 'High Heels',
    description: 'High Heels by Yandex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/422.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/422-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-423-webfishing',
    title: 'WebFishing',
    description: 'WebFishing by LameDev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/423.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/423-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-426-andy-s-apple-farm',
    title: 'Andy\'s Apple Farm',
    description: 'Andy\'s Apple Farm by M36games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/426.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/426-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-427-omori',
    title: 'OMORI',
    description: 'OMORI by Omocat',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/427.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/427-z.html',
    rating: 4.2,
    playsCount: 2901,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-428-five-nights-at-freddy-s-4-halloween',
    title: 'Five Nights at Freddy\'s 4: Halloween',
    description: 'Five Nights at Freddy\'s 4: Halloween by Scott Cawthon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/428.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/428-f.html',
    rating: 4.2,
    playsCount: 1967,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-429-code-editor',
    title: 'Code Editor',
    description: 'Code Editor by gn-math',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/429.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/429-ff.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-430-10-minutes-till-dawn',
    title: '10 Minutes Till Dawn',
    description: '10 Minutes Till Dawn by flanne',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/430.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/430.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-431-99-balls',
    title: '99 Balls',
    description: '99 Balls by Diamond Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/431.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/431.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-432-abandoned',
    title: 'Abandoned',
    description: 'Abandoned by krutovig',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/432.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/432.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-433-yume-nikki',
    title: 'Yume Nikki',
    description: 'Yume Nikki by kikiyama',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/433.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/433-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-434-god-s-flesh',
    title: 'God\'s Flesh',
    description: 'God\'s Flesh by Glompyy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/434.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/434.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-435-a-small-world-cup',
    title: 'A Small World Cup',
    description: 'A Small World Cup by rujogames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/435.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/435.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-436-awesome-tanks',
    title: 'Awesome Tanks',
    description: 'Awesome Tanks by coolmathgames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/436.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/436.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-437-bouncemasters',
    title: 'Bouncemasters',
    description: 'Bouncemasters by Azur Games, Playgendary',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/437.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/437.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-438-awesome-tanks-2',
    title: 'Awesome Tanks 2',
    description: 'Awesome Tanks 2 by coolmathgames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/438.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/438.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-439-bank-robbery-2',
    title: 'Bank Robbery 2',
    description: 'Bank Robbery 2 by justaliendev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/439.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/439.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-440-celeste-pico',
    title: 'Celeste PICO',
    description: 'Celeste PICO by Matt Thorson and Noel Berry',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/440.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/440.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-441-kitty-toy',
    title: 'Kitty Toy',
    description: 'Kitty Toy by Rakqoi',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/441.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/441.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-442-infinimoes',
    title: 'Infinimoes',
    description: 'Infinimoes by Werxzy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/442.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/442.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-443-adventure-drivers',
    title: 'Adventure Drivers',
    description: 'Adventure Drivers by Domas Kazragis',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/443.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/443-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-444-ages-of-conflict',
    title: 'Ages of Conflict',
    description: 'Ages of Conflict by JoySpark Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/444.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/444.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-445-kindergarten',
    title: 'Kindergarten',
    description: 'Kindergarten by Con Man Games, SmashGames and Sean Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/445.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/445-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-446-kindergarten-2',
    title: 'Kindergarten 2',
    description: 'Kindergarten 2 by Con Man Games, SmashGames and Sean Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/446.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/446-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-447-nijika-s-ahoge',
    title: 'Nijika\'s Ahoge',
    description: 'Nijika\'s Ahoge by TamaniDamani',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/447.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/447-e.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-449-city-smash',
    title: 'City Smash',
    description: 'City Smash by Paradyme Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/449.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/449.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-450-amanda-the-adventurer',
    title: 'Amanda the Adventurer',
    description: 'Amanda the Adventurer by MANGLEDmaw Games, DreadXP',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/450.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/450-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-451-slender-the-8-pages',
    title: 'Slender: The 8 Pages',
    description: 'Slender: The 8 Pages by Parsec Productions',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/451.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/451-f.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-452-station-141',
    title: 'Station 141',
    description: 'Station 141 by Maksim Chmutov',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/452.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/452.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-453-station-saturn',
    title: 'Station Saturn',
    description: 'Station Saturn by Maksim Chmutov',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/453.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/453.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-454-bloodmoney',
    title: 'BLOODMONEY!',
    description: 'BLOODMONEY! by SHROOMYCHRIST-STUDIOS',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/454.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/454-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-455-bergentruck-201x',
    title: 'BERGENTRUCK 201x',
    description: 'BERGENTRUCK 201x by Paledoptera',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/455.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/455-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-456-undertale-yellow',
    title: 'Undertale Yellow',
    description: 'Undertale Yellow by Team Undertale Yellow',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/456.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/456-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-457-raft',
    title: 'Raft',
    description: 'Raft by Redbeet Interactive, Axolot Games, Ashen Arrow',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/457.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/457-f.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-458-the-deadseat',
    title: 'The Deadseat',
    description: 'The Deadseat by Curious Fox Sox',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/458.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/458-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-459-the-man-in-the-window',
    title: 'The Man In The Window',
    description: 'The Man In The Window by Zed Technician',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/459.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/459-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-460-fears-to-fathom-home-alone',
    title: 'Fears to Fathom: Home Alone',
    description: 'Fears to Fathom: Home Alone by Rayll',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/460.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/460-f.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-461-slither-io',
    title: 'Slither.io',
    description: 'Slither.io by slither.io',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/461.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/461.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-462-dead-plate',
    title: 'DEAD PLATE',
    description: 'DEAD PLATE by racheldrawsthis',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/462.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/462-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-463-lacey-s-flash-games',
    title: 'Lacey\'s Flash Games',
    description: 'Lacey\'s Flash Games by ghosttundra, Euroclipse, Brand New Groove',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/463.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/463-f.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-464-choppy-orc',
    title: 'Choppy Orc',
    description: 'Choppy Orc by eddynardo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/464.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/464.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-465-cuphead',
    title: 'Cuphead',
    description: 'Cuphead by Studio MDHR Entertainment Inc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/465.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/465-fix.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-466-baldi-s-basics-classic-remastered',
    title: 'Baldi\'s Basics Classic Remastered',
    description: 'Baldi\'s Basics Classic Remastered by Basically Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/466.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/466-f.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-467-baldi-s-basics-plus',
    title: 'Baldi\'s Basics Plus',
    description: 'Baldi\'s Basics Plus by Basically Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/467.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/467-updateef.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-468-hollow-knight',
    title: 'Hollow Knight',
    description: 'Hollow Knight by Team Cherry',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/468.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/468-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-469-sandstone',
    title: 'sandstone',
    description: 'sandstone by ading2210',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/469.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/469.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-470-doodle-jump',
    title: 'Doodle Jump',
    description: 'Doodle Jump by Marko Pusenjak',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/470.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/470.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-471-madness-combat-project-nexus-classic',
    title: 'Madness Combat: Project Nexus (classic)',
    description: 'Madness Combat: Project Nexus (classic) by Krinkels, The-Swain, cheshyre, Luis, Rebel666',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/471.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/471.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-472-bad-time-simulator',
    title: 'Bad Time Simulator',
    description: 'Bad Time Simulator by jcw87',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/472.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/472.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-473-spacebar-clicker',
    title: 'Spacebar Clicker',
    description: 'Spacebar Clicker by Bruno Croci',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/473.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/473.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-474-friday-night-funkin-v-s-whitty',
    title: 'Friday Night Funkin\': V.S. Whitty',
    description: 'Friday Night Funkin\': V.S. Whitty by Nate Anim8',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/474.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/474.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-475-friday-night-funkin-b-sides',
    title: 'Friday Night Funkin\': B-Sides',
    description: 'Friday Night Funkin\': B-Sides by Rozebud',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/475.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/475.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-476-friday-night-funkin-vs-hex',
    title: 'Friday Night Funkin\': Vs. Hex',
    description: 'Friday Night Funkin\': Vs. Hex by YingYang48 etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/476.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/476.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-477-friday-night-funkin-vs-hatsune-miku',
    title: 'Friday Night Funkin\': Vs. Hatsune Miku',
    description: 'Friday Night Funkin\': Vs. Hatsune Miku by evidal etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/477.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/477.html',
    rating: 4.7,
    playsCount: 6930,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-478-friday-night-funkin-neo',
    title: 'Friday Night Funkin\': Neo',
    description: 'Friday Night Funkin\': Neo by JellyFishedm etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/478.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/478.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-479-steal-a-brainrot',
    title: 'Steal A Brainrot',
    description: 'Steal A Brainrot by nagami games',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/479.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/479.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-480-friday-night-funkin-sarvente-s-mid-fight-masses',
    title: 'Friday Night Funkin\': Sarvente\'s Mid-Fight Masses',
    description: 'Friday Night Funkin\': Sarvente\'s Mid-Fight Masses by Dokki.doodlez etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/480.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/480.html',
    rating: 4.2,
    playsCount: 3003,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-481-friday-night-funkin-vs-tricky',
    title: 'Friday Night Funkin\': vs. Tricky',
    description: 'Friday Night Funkin\': vs. Tricky by Banbuds etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/481.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/481.html',
    rating: 4.8,
    playsCount: 6205,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-482-human-expenditure-program',
    title: 'Human Expenditure Program',
    description: 'Human Expenditure Program by SHROOMYCHRIST-STUDIOS',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/482.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/482-2f.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-483-friday-night-funkin-hit-single-real',
    title: 'Friday Night Funkin\': Hit Single Real',
    description: 'Friday Night Funkin\': Hit Single Real by Sturm/Churgney Gurgney etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/483.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/483.html',
    rating: 4.3,
    playsCount: 5792,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-484-friday-night-funkin-creepypasta-jp',
    title: 'Friday Night Funkin\': Creepypasta JP',
    description: 'Friday Night Funkin\': Creepypasta JP by CPJP Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/484.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/484.html',
    rating: 4.2,
    playsCount: 1967,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-485-friday-night-funkin-vs-garcello',
    title: 'Friday Night Funkin\': vs. Garcello',
    description: 'Friday Night Funkin\': vs. Garcello by atsuover etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/485.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/485.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-486-friday-night-funkin-sonic-legacy',
    title: 'Friday Night Funkin\': Sonic Legacy',
    description: 'Friday Night Funkin\': Sonic Legacy by JoeDoughBoi etc',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/486.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/486.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-487-friday-night-funkin-vs-qt',
    title: 'Friday Night Funkin\': vs. QT',
    description: 'Friday Night Funkin\': vs. QT by Hazardous24 etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/487.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/487.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-488-friday-night-funkin-mistful-crimson-morning-reboot',
    title: 'Friday Night Funkin\': Mistful Crimson Morning Reboot',
    description: 'Friday Night Funkin\': Mistful Crimson Morning Reboot by Stonesteve etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/488.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/488.html',
    rating: 5.0,
    playsCount: 2177,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-489-friday-night-funkin-indie-cross',
    title: 'Friday Night Funkin\': Indie Cross',
    description: 'Friday Night Funkin\': Indie Cross by MORØ etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/489.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/489.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-490-rooftop-snipers-2',
    title: 'Rooftop Snipers 2',
    description: 'Rooftop Snipers 2 by Neweichgames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/490.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/490.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-491-i-woke-up-next-to-you-again',
    title: 'I woke up next to you again.',
    description: 'I woke up next to you again. by angela he',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/491.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/491.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-492-underwheels',
    title: 'UNDERWHEELS',
    description: 'UNDERWHEELS by LakenDaCoda',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/492.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/492.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-493-rigbmx',
    title: 'RigBMX',
    description: 'RigBMX by Cartoon Network',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/493.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/493.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-494-rigbmx-2',
    title: 'RigBMX 2',
    description: 'RigBMX 2 by Cartoon Network',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/494.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/494.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-495-groon-groon-babey',
    title: 'groon groon, babey!',
    description: 'groon groon, babey! by tanner bananer',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/495.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/495.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-496-friday-night-funkin-jeffy-s-endless-aethos',
    title: 'Friday Night Funkin\': Jeffy\'s Endless Aethos',
    description: 'Friday Night Funkin\': Jeffy\'s Endless Aethos by jeffyfansml99 etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/496.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/496.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-497-friday-night-funkin-vs-bopcity',
    title: 'Friday Night Funkin\': vs. BOPCITY',
    description: 'Friday Night Funkin\': vs. BOPCITY by Daniel Hummus',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/497.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/497.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-498-friday-night-funkin-17-bucks-floor-1',
    title: 'Friday Night Funkin\': 17 Bucks: Floor 1',
    description: 'Friday Night Funkin\': 17 Bucks: Floor 1 by Peacocok6k',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/498.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/498.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-499-friday-night-funkin-fire-in-the-hole-lobotomy-dash-funkin',
    title: 'Friday Night Funkin\': FIRE IN THE HOLE: Lobotomy Dash Funkin\'',
    description: 'Friday Night Funkin\': FIRE IN THE HOLE: Lobotomy Dash Funkin\' by CoolDudeCrafter',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/499.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/499.html',
    rating: 4.2,
    playsCount: 2748,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-500-friday-night-funkin-twiddlefinger',
    title: 'Friday Night Funkin\': TWIDDLEFINGER',
    description: 'Friday Night Funkin\': TWIDDLEFINGER by MAXPROLOVER998',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/500.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/500.html',
    rating: 4.4,
    playsCount: 6622,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-501-kindergarten-3',
    title: 'Kindergarten 3',
    description: 'Kindergarten 3 by Con Man Games, SmashGames and Sean Young',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/501.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/501.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-502-stick-with-it',
    title: 'Stick With It',
    description: 'Stick With It by Sam Hogan',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/502.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/502-fixed.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-503-five-nights-at-candy-s',
    title: 'Five Nights at Candy\'s',
    description: 'Five Nights at Candy\'s by Emil "Ace" Macko',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/503.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/503.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-504-five-nights-at-candy-s-2',
    title: 'Five Nights at Candy\'s 2',
    description: 'Five Nights at Candy\'s 2 by Emil "Ace" Macko',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/504.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/504.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-505-pokemon-red',
    title: 'Pokemon Red',
    description: 'Pokemon Red by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/505.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/505.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-506-pokemon-emerald',
    title: 'Pokemon Emerald',
    description: 'Pokemon Emerald by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/506.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/506-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-507-the-impossible-quiz',
    title: 'The Impossible Quiz',
    description: 'The Impossible Quiz by SPLAPP-ME-DO',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/507.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/507-f.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-508-super-mario-bros',
    title: 'Super Mario Bros',
    description: 'Super Mario Bros by Nintendo',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/508.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/508.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-509-friday-night-funkin-soft',
    title: 'Friday Night Funkin’ Soft',
    description: 'Friday Night Funkin’ Soft by ShiniTrexx etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/509.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/509.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-510-tomodachi-collection',
    title: 'Tomodachi Collection',
    description: 'Tomodachi Collection by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/510.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/510-f.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-511-doge-miner',
    title: 'Doge Miner',
    description: 'Doge Miner by rkn',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/511.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/511.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-512-final-earth-2',
    title: 'Final Earth 2',
    description: 'Final Earth 2 by flori9',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/512.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/512.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-513-swordfight',
    title: 'Swordfight!!',
    description: 'Swordfight!! by Studio-19',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/513.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/513-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-514-portaboy',
    title: 'PortaBoy+',
    description: 'PortaBoy+ by Enchae, Lumpy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/514.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/514-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-515-pacman-horror',
    title: 'PacMan (Horror)',
    description: 'PacMan (Horror) by BerickCook',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/515.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/515-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-516-oshi-oshi-punch',
    title: 'Oshi Oshi Punch!',
    description: 'Oshi Oshi Punch! by Empty House Games, Shuu',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/516.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/516-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-517-nubby-s-number-factory',
    title: 'Nubby\'s Number Factory',
    description: 'Nubby\'s Number Factory by MogDogBlog Productions',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/517.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/517-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-518-touhou-luminous-strike',
    title: 'Touhou: Luminous Strike',
    description: 'Touhou: Luminous Strike by NitNitori, LadyEbony',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/518.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/518-f.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-519-generic-fighter-maybe',
    title: 'Generic Fighter Maybe',
    description: 'Generic Fighter Maybe by Astrobard Games, Khao Mortadios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/519.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/519-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-520-dan-the-man',
    title: 'Dan The Man',
    description: 'Dan The Man by Halfbrick Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/520.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/520-fix2.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-521-bust-a-loop',
    title: 'Bust a Loop',
    description: 'Bust a Loop by PeachTreeOath',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/521.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/521-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-522-bad-monday-simulator',
    title: 'Bad Monday Simulator',
    description: 'Bad Monday Simulator by Lumpy, Spasco',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/522.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/522-f.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-523-touhou-mother',
    title: 'Touhou Mother',
    description: 'Touhou Mother by vgperson',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/523.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/523-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-524-parappa-the-rapper',
    title: 'Parappa The Rapper',
    description: 'Parappa The Rapper by NanaOn-Sha',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/524.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/524.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-525-friday-night-funkin-darkness-takeover',
    title: 'Friday Night Funkin\': Darkness Takeover',
    description: 'Friday Night Funkin\': Darkness Takeover by MiniSymba',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/525.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/525.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-526-spongebob-squarepants-land-ho',
    title: 'SpongeBob SquarePants: Land Ho!',
    description: 'SpongeBob SquarePants: Land Ho! by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/526.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/526.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-527-spongebob-squarepants-spongebob-run',
    title: 'SpongeBob SquarePants: SpongeBob Run',
    description: 'SpongeBob SquarePants: SpongeBob Run by Nickelodeon',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/527.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/527.html',
    rating: 4.2,
    playsCount: 1967,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-528-spongebob-squarepants-squidward-s-sizzlin-scare',
    title: 'SpongeBob SquarePants: Squidward\'s Sizzlin\' Scare',
    description: 'SpongeBob SquarePants: Squidward\'s Sizzlin\' Scare by Nickelodeon',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/528.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/528.html',
    rating: 4.2,
    playsCount: 3003,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-529-spongebob-squarepants-sandy-s-sponge-stacker',
    title: 'SpongeBob SquarePants: Sandy\'s Sponge Stacker',
    description: 'SpongeBob SquarePants: Sandy\'s Sponge Stacker by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/529.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/529.html',
    rating: 4.9,
    playsCount: 4351,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-530-spongebob-squarepants-tasty-pastry-party',
    title: 'SpongeBob SquarePants: Tasty Pastry Party',
    description: 'SpongeBob SquarePants: Tasty Pastry Party by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/530.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/530.html',
    rating: 4.5,
    playsCount: 7124,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-531-spongebob-squarepants-the-kah-ray-tay-squid',
    title: 'SpongeBob SquarePants: The Kah-Ray-Tay Squid',
    description: 'SpongeBob SquarePants: The Kah-Ray-Tay Squid by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/531.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/531.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-532-spongebob-squarepants-weresquirrel',
    title: 'SpongeBob SquarePants: WereSquirrel',
    description: 'SpongeBob SquarePants: WereSquirrel by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/532.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/532.html',
    rating: 4.4,
    playsCount: 6622,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-533-spongebob-squarepants-krabby-katch',
    title: 'SpongeBob SquarePants: Krabby Katch',
    description: 'SpongeBob SquarePants: Krabby Katch by Nickelodeon',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/533.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/533.html',
    rating: 4.4,
    playsCount: 6622,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-534-teen-titans-go-jump-jousts',
    title: 'Teen Titans GO!: Jump Jousts',
    description: 'Teen Titans GO!: Jump Jousts by Cartoon Network',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/534.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/534.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-535-teen-titans-go-jump-jousts-2',
    title: 'Teen Titans GO!: Jump Jousts 2',
    description: 'Teen Titans GO!: Jump Jousts 2 by Cartoon Network',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/535.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/535.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-536-cat-connection',
    title: 'Cat Connection',
    description: 'Cat Connection by MOSTLY MAD PRODUCTIONS',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/536.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/536.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-537-cat-gunner-super-zombie-shoot',
    title: 'Cat Gunner: Super Zombie Shoot',
    description: 'Cat Gunner: Super Zombie Shoot by Poki',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/537.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/537.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-538-love-letters',
    title: 'Love Letters',
    description: 'Love Letters by Nozomu Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/538.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/538.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-539-chiikawa-puzzle',
    title: 'Chiikawa Puzzle',
    description: 'Chiikawa Puzzle by emptygamer',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/539.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/539.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-540-myteardrop',
    title: 'myTeardrop',
    description: 'myTeardrop by VENDORMINT',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/540.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/540.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-541-friday-night-funkin-pibby-apocalypse',
    title: 'Friday Night Funkin\': Pibby: Apocalypse',
    description: 'Friday Night Funkin\': Pibby: Apocalypse by BAUDASlel etc.',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/541.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/541.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-542-karlson',
    title: 'Karlson',
    description: 'Karlson by DaniDev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/542.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/542-af.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-543-jelly-drift',
    title: 'Jelly Drift',
    description: 'Jelly Drift by DaniDev',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/543.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/543-af.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-544-plinko',
    title: 'Plinko',
    description: 'Plinko by Anson Heung',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/544.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/544.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-545-clash-of-vikings',
    title: 'Clash Of Vikings',
    description: 'Clash Of Vikings by unknown',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/545.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/545.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-546-recoil',
    title: 'Recoil',
    description: 'Recoil by Martin Magini',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/546.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/546.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-547-baseball-bros',
    title: 'Baseball Bros',
    description: 'Baseball Bros by Blue Wizard',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/547.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/547.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-548-football-bros',
    title: 'Football Bros',
    description: 'Football Bros by Blue Wizard',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/548.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/548.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-549-sonic-the-hedgehog-2-community-s-cut',
    title: 'Sonic the Hedgehog 2: Community\'s Cut',
    description: 'Sonic the Hedgehog 2: Community\'s Cut by heyjoeway and SEGA',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/549.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/549.html',
    rating: 4.3,
    playsCount: 5792,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-550-sonic-the-hedgehog-3-angel-island-remastered',
    title: 'Sonic the Hedgehog 3: Angel Island Remastered',
    description: 'Sonic the Hedgehog 3: Angel Island Remastered by Eukaryot3K and SEGA',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/550.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/550.html',
    rating: 4.9,
    playsCount: 4351,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-551-hypper-sandbox',
    title: 'Hypper Sandbox',
    description: 'Hypper Sandbox by VobbyGames, weirdnessworld',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/551.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/551.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-552-aviamasters',
    title: 'Aviamasters',
    description: 'Aviamasters by BGaming',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/552.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/552.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-553-rolling-sky',
    title: 'Rolling Sky',
    description: 'Rolling Sky by Dream Playz',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/553.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/553.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-554-yandere-simulator',
    title: 'Yandere Simulator',
    description: 'Yandere Simulator by YandereDev',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/554.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/554-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-555-friday-night-funkin-vs-kapi',
    title: 'Friday Night Funkin VS. KAPI',
    description: 'Friday Night Funkin VS. KAPI by paperkitty etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/555.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/555.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-556-friday-night-funkin-vs-sky',
    title: 'Friday Night Funkin VS. Sky',
    description: 'Friday Night Funkin VS. Sky by Alexander0110 etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/556.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/556.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-557-getting-over-it-with-bennett-foddy',
    title: 'Getting Over It with Bennett Foddy',
    description: 'Getting Over It with Bennett Foddy by Bennett Foddy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/557.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/557-f.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-558-friday-night-funkin-vs-cyber-sensation',
    title: 'Friday Night Funkin Vs. Cyber Sensation',
    description: 'Friday Night Funkin Vs. Cyber Sensation by Taeyai',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/558.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/558.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-559-friday-night-funkin-vs-shaggy',
    title: 'Friday Night Funkin vs Shaggy',
    description: 'Friday Night Funkin vs Shaggy by srPerez etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/559.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/559.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-560-deltatraveler',
    title: 'Deltatraveler',
    description: 'Deltatraveler by VyletBunni',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/560.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/560-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-561-bitgun-io',
    title: 'BitGun.io',
    description: 'BitGun.io by Hazmob',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/561.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/561-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-562-boom-slingers-reboom',
    title: 'Boom Slingers: Reboom',
    description: 'Boom Slingers: Reboom by Boom Corp',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/562.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/562-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-563-cg-fc-25',
    title: 'CG FC 25',
    description: 'CG FC 25 by Finz Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/563.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/563-f.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-564-count-masters-stickman-games',
    title: 'Count Masters: Stickman Games',
    description: 'Count Masters: Stickman Games by FreePlay LLC',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/564.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/564-f.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-565-dalgona-candy-honeycomb-cookie',
    title: 'Dalgona Candy Honeycomb Cookie',
    description: 'Dalgona Candy Honeycomb Cookie by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/565.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/565-f.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-567-highway-racer',
    title: 'Highway Racer',
    description: 'Highway Racer by CrazyGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/567.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/567-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-568-highway-racer-2-remastered',
    title: 'Highway Racer 2 REMASTERED',
    description: 'Highway Racer 2 REMASTERED by CrazyGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/568.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/568-f.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-569-hula-hoop-race',
    title: 'Hula Hoop Race',
    description: 'Hula Hoop Race by CrazyGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/569.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/569-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-570-jelly-restaurant',
    title: 'Jelly Restaurant',
    description: 'Jelly Restaurant by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/570.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/570-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-571-layers-roll',
    title: 'Layers Roll',
    description: 'Layers Roll by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/571.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/571-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-572-lazy-jumper',
    title: 'Lazy Jumper',
    description: 'Lazy Jumper by CrazyGames',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/572.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/572-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-573-man-runner-2048',
    title: 'Man Runner 2048',
    description: 'Man Runner 2048 by CrazyGames',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/573.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/573-f.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-574-pottery-master',
    title: 'Pottery Master',
    description: 'Pottery Master by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/574.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/574-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-575-shovel-3d',
    title: 'Shovel 3D',
    description: 'Shovel 3D by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/575.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/575-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-576-sky-riders',
    title: 'Sky Riders',
    description: 'Sky Riders by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/576.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/576-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-577-steal-brainrot-online',
    title: 'Steal Brainrot Online',
    description: 'Steal Brainrot Online by CrazyGames',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/577.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/577-f.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-578-stickman-and-guns',
    title: 'Stickman and Guns',
    description: 'Stickman and Guns by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/578.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/578-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-579-super-star-car',
    title: 'Super Star Car',
    description: 'Super Star Car by CrazyGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/579.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/579-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-580-traffic-rider',
    title: 'Traffic Rider',
    description: 'Traffic Rider by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/580.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/580-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-581-buildnow-gg',
    title: 'BuildNow.gg',
    description: 'BuildNow.gg by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/581.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/581-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-582-friday-night-funkin-mario-s-madness',
    title: 'Friday Night Funkin\': Mario\'s Madness',
    description: 'Friday Night Funkin\': Mario\'s Madness by Dewott2501 etc',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/582.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/582.html',
    rating: 4.3,
    playsCount: 5792,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-583-friday-night-funkin-vs-hypno-lullaby',
    title: 'Friday Night Funkin\' vs Hypno Lullaby',
    description: 'Friday Night Funkin\' vs Hypno Lullaby by Hypno Lullaby Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/583.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/583.html',
    rating: 4.3,
    playsCount: 5792,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-584-stone-grass-mowing-simulator',
    title: 'Stone Grass Mowing Simulator',
    description: 'Stone Grass Mowing Simulator by CrazyGames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/584-a.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/584.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-585-fallout',
    title: 'Fallout',
    description: 'Fallout by Bethesda Softworks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/585.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/585.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-586-the-oregon-trail',
    title: 'The Oregon Trail',
    description: 'The Oregon Trail by MECC',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/586.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/586.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-587-newgrounds-rumble',
    title: 'Newgrounds Rumble',
    description: 'Newgrounds Rumble by NegativeONE, Luis, MindChamber',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/587.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/587-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-588-super-mario-64',
    title: 'Super Mario 64',
    description: 'Super Mario 64 by Nintendo',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/588.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/588.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-589-sonic-cd',
    title: 'Sonic CD',
    description: 'Sonic CD by SEGA',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/589.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/589-f.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-590-sonic-mania',
    title: 'Sonic Mania',
    description: 'Sonic Mania by SEGA, crunch arcade',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/590.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/590-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-591-slime-rancher',
    title: 'Slime Rancher',
    description: 'Slime Rancher by Monomi Park, Ported by Snubby.top',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/591.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/591-awe.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-592-pac-man-world',
    title: 'Pac Man World',
    description: 'Pac Man World by Full Fat Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/592.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/592-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-593-pac-man-world-2',
    title: 'Pac Man World 2',
    description: 'Pac Man World 2 by Full Fat Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/593.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/593-ff.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-594-waterworks',
    title: 'Waterworks!',
    description: 'Waterworks! by scriptwelder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/594.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/594-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-595-shapez-io',
    title: 'Shapez.io',
    description: 'Shapez.io by scriptwelder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/595.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/595-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-596--comments',
    title: '[!] COMMENTS',
    description: '[!] COMMENTS by gn-math',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/596-uu.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/596-fixx.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-597-plants-vs-zombies-2-gardenless',
    title: 'Plants vs. Zombies 2 Gardenless',
    description: 'Plants vs. Zombies 2 Gardenless by Gzh0821',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/597.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/597-a.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-598-sonic-exe',
    title: 'Sonic.EXE',
    description: 'Sonic.EXE by  Cinossu',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/598.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/598.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-599-metal-gear-solid',
    title: 'Metal Gear Solid',
    description: 'Metal Gear Solid by  Konami Computer Entertainment Japan',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/599.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/599-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-600-fnf-vs-hypno-s-lullaby-v2',
    title: 'FNF Vs. Hypno\'s Lullaby v2',
    description: 'FNF Vs. Hypno\'s Lullaby v2 by Hypno\'s Lullaby Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/600.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/600.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-601-fnf-vs-sonic-exe-3-0-4-0',
    title: 'FNF Vs. Sonic.EXE 3.0/4.0',
    description: 'FNF Vs. Sonic.EXE 3.0/4.0 by FNF Vs. Sonic.EXE Team',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/601.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/601.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-602-doom-2',
    title: 'Doom 2',
    description: 'Doom 2 by id Software',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/602.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/602.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-603-growden-io',
    title: 'Growden.io',
    description: 'Growden.io by growden.io',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/603.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/603-aa2.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-604-minesweeper-plus',
    title: 'Minesweeper Plus',
    description: 'Minesweeper Plus by Jorel Simpson',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/604.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/604-a.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-606-sonic-exe-original',
    title: 'Sonic.EXE (ORIGINAL)',
    description: 'Sonic.EXE (ORIGINAL) by MY5TCrimson',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/606.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/606-ef.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-607-tattletail',
    title: 'Tattletail',
    description: 'Tattletail by Waygetter Electronics, Ported by Snubby.top',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/607.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/607-ef.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-608-friday-night-funkin-vs-impostor-v4',
    title: 'Friday Night Funkin VS Impostor v4',
    description: 'Friday Night Funkin VS Impostor v4 by Imposter v4 team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/608.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/608.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-609-friday-night-funkin-vs-sunday-remastered-hd',
    title: 'Friday Night Funkin vs Sunday Remastered HD',
    description: 'Friday Night Funkin vs Sunday Remastered HD by Sunday Remastered team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/609.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/609-a.html',
    rating: 4.3,
    playsCount: 4530,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-610-friday-night-funkin-vs-carol-v2',
    title: 'Friday Night Funkin vs Carol V2',
    description: 'Friday Night Funkin vs Carol V2 by Carol V2 team',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/610.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/610.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-611-the-legend-of-zelda-ocarina-of-time',
    title: 'The Legend of Zelda Ocarina of Time',
    description: 'The Legend of Zelda Ocarina of Time by Nintendo',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/611.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/611-f.html',
    rating: 4.4,
    playsCount: 6622,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-612-the-legend-of-zelda-majora-s-mask',
    title: 'The Legend of Zelda Majora\'s Mask',
    description: 'The Legend of Zelda Majora\'s Mask by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/612.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/612--f.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-613-friday-night-funkin-drop-and-roll-but-playable',
    title: 'Friday Night Funkin\' Drop and Roll, but Playable',
    description: 'Friday Night Funkin\' Drop and Roll, but Playable by Drop and roll team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/613.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/613.html',
    rating: 4.3,
    playsCount: 5040,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-614-toy-rider',
    title: 'Toy Rider',
    description: 'Toy Rider by CrazyGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/614.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/614.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-615-friday-night-funkin-vs-dave-and-bambi-v3',
    title: 'Friday Night Funkin Vs. Dave and Bambi v3',
    description: 'Friday Night Funkin Vs. Dave and Bambi v3 by Dave and Bambi team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/615.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/615.html-a',
    rating: 4.5,
    playsCount: 7124,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-616-friday-night-funkin-wednesday-s-infidelity',
    title: 'Friday Night Funkin’ Wednesday\'s Infidelity',
    description: 'Friday Night Funkin’ Wednesday\'s Infidelity by Wednesday\'s Infidelity team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/616.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/616.html',
    rating: 4.3,
    playsCount: 4530,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-617-postal',
    title: 'Postal',
    description: 'Postal by Stinkalistic, Running With Scissors',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/617.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/617-a.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-618-fnf-vs-bob-v2-0-bob-s-onslaught',
    title: 'FNF vs Bob v2.0 (Bob’s Onslaught)',
    description: 'FNF vs Bob v2.0 (Bob’s Onslaught) by bob v2.0 team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/618.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/618.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-619-friday-night-funkin-rev-mixed',
    title: 'Friday Night Funkin\': Rev-Mixed',
    description: 'Friday Night Funkin\': Rev-Mixed by Rev-Mixed team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/619.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/619.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-620-three-goblets',
    title: 'Three Goblets',
    description: 'Three Goblets by Adventale',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/620.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/620.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-621-friday-night-funkin-gumballs',
    title: 'Friday Night Funkin\': Gumballs',
    description: 'Friday Night Funkin\': Gumballs by Gumballs team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/621.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/621.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-622-oneshot-legacy',
    title: 'Oneshot (LEGACY)',
    description: 'Oneshot (LEGACY) by Future Cat LLC, ARandomPerson',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/622.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/622.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-623-celeste',
    title: 'Celeste',
    description: 'Celeste by MaddyMakesGames, Mercury Workshop',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/623.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/623-work.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-624-happy-wheels',
    title: 'Happy Wheels',
    description: 'Happy Wheels by Jim Bonacci',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/624.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/624.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-625-get-yoked',
    title: 'Get Yoked',
    description: 'Get Yoked by gregs games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/625.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/625.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-626-doom-3',
    title: 'Doom 3',
    description: 'Doom 3 by id Software, 98corbins',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/626.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/626-f.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-627-tag',
    title: 'Tag',
    description: 'Tag by WeLoPlay',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/627.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/627-f.html',
    rating: 4.7,
    playsCount: 7139,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-628-pizza-tower-scoutdigo',
    title: 'Pizza Tower: Scoutdigo',
    description: 'Pizza Tower: Scoutdigo by only1indigo, burnedpopcorn',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/628.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/628-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-629-off',
    title: 'Off',
    description: 'Off by Mortis Ghost, Fangamer',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/629.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/629.html',
    rating: 4.7,
    playsCount: 7139,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-630-space-funeral',
    title: 'Space Funeral',
    description: 'Space Funeral by Stephen Gillmurphy',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/630.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/630.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-631-endroll',
    title: 'Endroll',
    description: 'Endroll by  Segawa',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/631.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/631-a.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-632-cave-story',
    title: 'Cave Story',
    description: 'Cave Story by  Daisuke \'Pixel\' Amaya',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/632.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/632-a.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-633-friday-night-funkin-vs-impostor-alternated',
    title: 'Friday Night Funkin\': VS. Impostor: Alternated',
    description: 'Friday Night Funkin\': VS. Impostor: Alternated by Alternated team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/633.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/633.html',
    rating: 5.0,
    playsCount: 3793,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-634-friday-night-funkin-chaos-nightmare-sonic-vs-fleetway',
    title: 'Friday Night Funkin\': Chaos Nightmare - Sonic Vs. Fleetway',
    description: 'Friday Night Funkin\': Chaos Nightmare - Sonic Vs. Fleetway by Fleetway team',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/634.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/634.html',
    rating: 5.0,
    playsCount: 1915,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-635-spelunky-classic-hd',
    title: 'Spelunky Classic HD',
    description: 'Spelunky Classic HD by  nkrapivin',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/635.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/635.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-636-friday-night-funkin-d-sides',
    title: 'Friday Night Funkin\' D-Sides',
    description: 'Friday Night Funkin\' D-Sides by d-sides team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/636.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/636.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-637-bfdia-5b',
    title: 'BFDIA 5b',
    description: 'BFDIA 5b by Cary Huang',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/637.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/637-ff.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-638-bfdia-5b-5-30',
    title: 'BFDIA 5b: 5*30',
    description: 'BFDIA 5b: 5*30 by Mawilite, Cary Huang',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/638.gif',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/638-ff.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-639-friday-night-funkin-vs-impostor-b-sides',
    title: 'Friday Night Funkin\' VS Impostor B-Sides',
    description: 'Friday Night Funkin\' VS Impostor B-Sides by Imposter b-sides team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/639.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/639.html',
    rating: 4.9,
    playsCount: 5201,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-640-mutilate-a-doll-2',
    title: 'Mutilate a Doll 2',
    description: 'Mutilate a Doll 2 by SilverGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/640.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/640.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-641-godzilla-daikaiju-battle-royale',
    title: 'Godzilla Daikaiju Battle Royale',
    description: 'Godzilla Daikaiju Battle Royale by AWM Studio Productions LLC',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/641.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/641.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-642-friday-night-funkin-sunday-night-suicide-rookies-edition',
    title: 'Friday Night Funkin\' Sunday Night Suicide: Rookies Edition',
    description: 'Friday Night Funkin\' Sunday Night Suicide: Rookies Edition by Rookies team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/642.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/642.html',
    rating: 5.0,
    playsCount: 1915,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-643-rio-rex',
    title: 'Rio Rex',
    description: 'Rio Rex by Gametornado',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/643.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/643.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-644-friday-night-funkin-vs-nonsense',
    title: 'Friday Night Funkin vs Nonsense',
    description: 'Friday Night Funkin vs Nonsense by NonsenseNH',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/644.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/644.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-645-arthur-s-nightmare',
    title: 'Arthur\'s Nightmare',
    description: 'Arthur\'s Nightmare by Varun R.',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/645.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/645-e.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-646-buster-jam',
    title: 'Buster Jam',
    description: 'Buster Jam by TALL GLASS',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/646.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/646-fixed.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-647-super-smash-flash',
    title: 'Super Smash Flash',
    description: 'Super Smash Flash by McLeodGaming',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/647.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/647-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-648-mindwave',
    title: 'Mindwave',
    description: 'Mindwave by HoloHammer',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/648.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/648-el.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-649-look-outside',
    title: 'Look Outside',
    description: 'Look Outside by Francis Coulombe',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/649.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/649.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-650-milk-inside-a-bag-of-milk-inside-a-bag-of-milk',
    title: 'Milk Inside a Bag of Milk Inside a Bag of Milk',
    description: 'Milk Inside a Bag of Milk Inside a Bag of Milk by Nikita Kryukov',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/650.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/650-f.html',
    rating: 5.0,
    playsCount: 3793,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-651-milk-outside-a-bag-of-milk-outside-a-bag-of-milk',
    title: 'Milk Outside A Bag Of Milk Outside A Bag Of Milk',
    description: 'Milk Outside A Bag Of Milk Outside A Bag Of Milk by Nikita Kryukov',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/651.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/651.html',
    rating: 4.3,
    playsCount: 5040,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-653-1-date-danger',
    title: '1 Date Danger',
    description: '1 Date Danger by Knives',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/653.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/653-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-654-final-fantasy-vii',
    title: 'Final Fantasy VII',
    description: 'Final Fantasy VII by Square Enix',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/654.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/654-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-655-goblin-goopmaxxing',
    title: 'Goblin Goopmaxxing',
    description: 'Goblin Goopmaxxing by BugfightStudio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/655.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/655.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-656-rogue-sergeant-the-final-operation',
    title: 'Rogue Sergeant The Final Operation',
    description: 'Rogue Sergeant The Final Operation by Studiohammergames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/656.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/656.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-657-friday-night-funkin-vs-undertale',
    title: 'Friday Night Funkin vs Undertale',
    description: 'Friday Night Funkin vs Undertale by vs undertale team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/657.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/657.html',
    rating: 4.8,
    playsCount: 6205,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-658-midnight-shift',
    title: 'Midnight Shift',
    description: 'Midnight Shift by Phantom GD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/658.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/658.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-659-orange-roulette',
    title: 'Orange Roulette',
    description: 'Orange Roulette by Matzerath',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/659.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/659.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-660-please-dont-touch-anything',
    title: 'Please Dont Touch Anything',
    description: 'Please Dont Touch Anything by Four Quarters',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/660.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/660.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-661-royal-towers-medieval-td',
    title: 'Royal Towers: Medieval TD',
    description: 'Royal Towers: Medieval TD by Superplus Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/661.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/661.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-662-going-balls',
    title: 'Going Balls',
    description: 'Going Balls by Supersonic Studios LTD',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/662.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/662.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-663-3d-bolt-master',
    title: '3D Bolt Master',
    description: '3D Bolt Master by Joymaster Puzzle Game Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/663.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/663.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-664-tall-io',
    title: 'Tall.io',
    description: 'Tall.io by Playgama',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/664.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/664.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-665-match-triple-3d',
    title: 'Match Triple 3D',
    description: 'Match Triple 3D by LIHUHU PTE. LTD.',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/665.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/665.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-666-stick-war-legacy',
    title: 'Stick War: Legacy',
    description: 'Stick War: Legacy by Max Games Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/666.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/666.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-667-in-stars-and-time',
    title: 'In Stars and Time',
    description: 'In Stars and Time by insertdisc5',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/667.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/667-fixes2.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-668-gorilla-tag',
    title: 'Gorilla Tag',
    description: 'Gorilla Tag by Another Axiom Inc, Boolonx',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/668.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/668-fix2.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-670-raldi-s-crackhouse',
    title: 'Raldi\'s Crackhouse',
    description: 'Raldi\'s Crackhouse by RCHTeam, Grayson',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/670.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/670.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-671-we-become-what-we-behold',
    title: 'We Become What We Behold',
    description: 'We Become What We Behold by Ncase',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/671.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/671-f.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-672-a-difficult-game-about-climbing',
    title: 'A Difficult Game About Climbing',
    description: 'A Difficult Game About Climbing by Pontypants',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/672.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/672-2.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-673-hobo-1',
    title: 'Hobo 1',
    description: 'Hobo 1 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/673.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/673.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-674-hobo-2',
    title: 'Hobo 2',
    description: 'Hobo 2 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/674.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/674.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-675-hobo-3',
    title: 'Hobo 3',
    description: 'Hobo 3 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/675.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/675.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-676-hobo-4',
    title: 'Hobo 4',
    description: 'Hobo 4 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/676.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/676.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-677-hobo-5',
    title: 'Hobo 5',
    description: 'Hobo 5 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/677.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/677.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-678-hobo-6',
    title: 'Hobo 6',
    description: 'Hobo 6 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/678.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/678.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-679-hobo-7',
    title: 'Hobo 7',
    description: 'Hobo 7 by SeethingSwarm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/679.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/679.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-680-kirby-super-star-ultra',
    title: 'Kirby Super Star Ultra',
    description: 'Kirby Super Star Ultra by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/680.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/680-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-681-cooking-mama',
    title: 'Cooking Mama',
    description: 'Cooking Mama by Office Create',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/681.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/681.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-682-cooking-mama-2',
    title: 'Cooking Mama 2',
    description: 'Cooking Mama 2 by Office Create',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/682.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/682.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-683-cooking-mama-3',
    title: 'Cooking Mama 3',
    description: 'Cooking Mama 3 by Office Create',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/683.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/683-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-684-kirby-squeak-squad',
    title: 'Kirby Squeak Squad',
    description: 'Kirby Squeak Squad by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/684.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/684.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-685-fifa-11',
    title: 'FIFA 11',
    description: 'FIFA 11 by EA Sports',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/685.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/685-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-686-fifa-10',
    title: 'FIFA 10',
    description: 'FIFA 10 by EA Sports',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/686.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/686-f.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-687-pico-s-school-1999',
    title: 'Pico\'s School (1999)',
    description: 'Pico\'s School (1999) by Tom Fulp',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/687.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/687.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-688-peggle',
    title: 'Peggle',
    description: 'Peggle by PopCap Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/688.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/688.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-689-meatboy',
    title: 'Meatboy',
    description: 'Meatboy by Jonathan McEntee',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/689.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/689.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-690-friday-night-funkin-akage',
    title: 'Friday Night Funkin\': AKAGE',
    description: 'Friday Night Funkin\': AKAGE by owoskitty etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/690.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/690.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-691-friday-night-funkin-heartbreak-havoc-vs-sky-redux',
    title: 'Friday Night Funkin\': Heartbreak Havoc [Vs. Sky: REDUX]',
    description: 'Friday Night Funkin\': Heartbreak Havoc [Vs. Sky: REDUX] by REDUX Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/691.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/691.html',
    rating: 4.2,
    playsCount: 1332,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-692-kirby-soft-wet',
    title: 'Kirby ~ Soft & Wet',
    description: 'Kirby ~ Soft & Wet by Strimp\'s Kitchen',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/692.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/692.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-693-half-life-opposing-force',
    title: 'Half Life: Opposing Force',
    description: 'Half Life: Opposing Force by Valve',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/693.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/693.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-694-pokemon-firered',
    title: 'Pokemon Firered',
    description: 'Pokemon Firered by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/694.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/694.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-695-duck-life-8',
    title: 'Duck Life 8',
    description: 'Duck Life 8 by Wix Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/695.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/695.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-696-pokemon-heartgold',
    title: 'Pokemon HeartGold',
    description: 'Pokemon HeartGold by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/696.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/696-f.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-697-bank-robbery',
    title: 'Bank Robbery',
    description: 'Bank Robbery by justaliendev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/697.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/697-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-698-bank-robbery-3',
    title: 'Bank Robbery 3',
    description: 'Bank Robbery 3 by justaliendev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/698.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/698-f.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-699-stickman-destruction',
    title: 'Stickman Destruction',
    description: 'Stickman Destruction by freezenova',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/699.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/699.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-700-fnf-vs-pibby-corrupted',
    title: 'FNF vs Pibby Corrupted',
    description: 'FNF vs Pibby Corrupted by Pibby Corrupted team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/700.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/700.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-701-real-flight-simulator',
    title: 'Real Flight Simulator',
    description: 'Real Flight Simulator by freezenova',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/701.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/701.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-702-javascriptps1',
    title: 'JavascriptPS1',
    description: 'JavascriptPS1 by Alex Ashnov',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/702.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/702.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-703-vs-rewrite-round-2',
    title: 'VS Rewrite: ROUND 2',
    description: 'VS Rewrite: ROUND 2 by Rewrite team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/703.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/703.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-704-five-nights-at-freddy-s-world-refreshed',
    title: 'Five Nights at Freddy\'s: World Refreshed',
    description: 'Five Nights at Freddy\'s: World Refreshed by Pyturret, Willowy (squall.cc)',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/704.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/704-fix.html',
    rating: 4.9,
    playsCount: 5201,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-705-iron-lung',
    title: 'Iron Lung',
    description: 'Iron Lung by David Szymanski, 98corbins',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/705.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/705-fix.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-706-fear-hunger',
    title: 'Fear & Hunger',
    description: 'Fear & Hunger by Miro Haverinen, Happy Paintings',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/706.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/706-fix.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-707-traffic-racer',
    title: 'Traffic Racer',
    description: 'Traffic Racer by skgames, madkidgames',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/707.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/707-fixf.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-708-needy-streamer-overload',
    title: 'Needy Streamer Overload',
    description: 'Needy Streamer Overload by WSS playground, EDURocks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/708.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/708-fix.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-709-survivor-io',
    title: 'Survivor.io',
    description: 'Survivor.io by Habby Pte. Ltd, madkidgames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/709.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/709-fixagain2.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-711-antonblast',
    title: 'Antonblast',
    description: 'Antonblast by Summitsphere',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/711.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/711.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-712-jumbo-mario',
    title: 'Jumbo Mario',
    description: 'Jumbo Mario by wik',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/712.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/712-f.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-713-silent-hill',
    title: 'Silent Hill',
    description: 'Silent Hill by Konami, Team Silent',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/713.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/713.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-714-friday-night-funkin-vs-tabi',
    title: 'Friday Night Funkin vs Tabi',
    description: 'Friday Night Funkin vs Tabi by SangMareZG',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/714.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/714.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-715-friday-night-funkin-vs-zardy',
    title: 'Friday Night Funkin vs Zardy',
    description: 'Friday Night Funkin vs Zardy by SwankyBox',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/715.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/715.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-716-clover-pit',
    title: 'Clover Pit',
    description: 'Clover Pit by Panik Arcade',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/716.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/716-fix2.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-717-peaks-of-yore',
    title: 'Peaks of Yore',
    description: 'Peaks of Yore by Anders Grube Jensen',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/717.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/717-fix2.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-718-untitled-goose-game',
    title: 'Untitled Goose Game',
    description: 'Untitled Goose Game by House House',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/718.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/718.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-719-a-game-about-feeding-a-black-hole',
    title: 'A Game About Feeding A Black Hole',
    description: 'A Game About Feeding A Black Hole by Aarimous, Thornityco',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/719.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/719-f.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-720-roulette-hero',
    title: 'Roulette Hero',
    description: 'Roulette Hero by vfqd, Mr.Pootsley, Jaybooty, Kane Forster, shxyder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/720.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/720.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-721-shift-at-midnight',
    title: 'Shift at Midnight',
    description: 'Shift at Midnight by Bun Muen, Slqnt',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/721.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/721.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-722-fused-240',
    title: 'Fused 240',
    description: 'Fused 240 by Mike Klubnika, shxyder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/722.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/722.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-723-brotato',
    title: 'Brotato',
    description: 'Brotato by Blobfish, Individual/Stinkalistic',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/723.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/723.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-724-endoparasitic-2',
    title: 'Endoparasitic 2',
    description: 'Endoparasitic 2 by Miziziziz, Deep Root Interactive, Individual/Stinkalistic',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/724.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/724.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-725-shredsauce',
    title: 'ShredSauce',
    description: 'ShredSauce by Shredsauce Team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/725.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/725-fff.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-726-breath-of-the-wild-nds',
    title: 'Breath of the Wild NDS',
    description: 'Breath of the Wild NDS by unknown',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/726.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/726-f.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-727-dimension-incident',
    title: 'Dimension Incident',
    description: 'Dimension Incident by biznesbear',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/727.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/727.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-728-fear-assessment',
    title: 'Fear Assessment',
    description: 'Fear Assessment by Alexander Wiseman',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/728.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/728.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-729-game-inside-a-game-inside-a-game-inside-a-game-inside-a-game-inside-a-game',
    title: 'game inside a game inside a game inside a game inside a game inside a game',
    description: 'game inside a game inside a game inside a game inside a game inside a game by Sam Hogan',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/729.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/729.html',
    rating: 4.2,
    playsCount: 2230,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-730-cell-machine',
    title: 'Cell Machine',
    description: 'Cell Machine by Sam Hogan',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/730.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/730.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-731-undertale-last-breath',
    title: 'Undertale: Last Breath',
    description: 'Undertale: Last Breath by caijiqaq',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/731.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/731.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-732-64-in-1-nes',
    title: '64 in 1 NES',
    description: '64 in 1 NES by idk',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/732.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/732.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-733-tetris',
    title: 'Tetris',
    description: 'Tetris by Nintendo',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/733.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/733.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
  {
    id: 'game-734-christmas-massacre',
    title: 'Christmas Massacre',
    description: 'Christmas Massacre by Puppet Combo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/734.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/734.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-735-famidash',
    title: 'Famidash',
    description: 'Famidash by Zephyrside',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/735.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/735.html',
    rating: 5.0,
    playsCount: 2073,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-736-super-mario-bros-remastered',
    title: 'Super Mario Bros. Remastered',
    description: 'Super Mario Bros. Remastered by Zephyrside',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/736.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/736.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-737-saihate-station',
    title: 'Saihate Station (さいはて駅)',
    description: 'Saihate Station (さいはて駅) by びぶ/viv',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/737.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/737.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-738-dumb-ways-to-die',
    title: 'Dumb Ways to Die',
    description: 'Dumb Ways to Die by PlaySide Studios Ltd, Metro Trains',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/738.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/738-u.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-739-soccer-random',
    title: 'Soccer Random',
    description: 'Soccer Random by RHM Interactive OÜ',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/739.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/739.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-740-bart-blast',
    title: 'Bart Blast',
    description: 'Bart Blast by epickface',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/740.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/740-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-741-resident-evil',
    title: 'Resident Evil',
    description: 'Resident Evil by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/741.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/741-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-742-resident-evil-2',
    title: 'Resident Evil 2',
    description: 'Resident Evil 2 by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/742.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/742.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-743-power-hover',
    title: 'Power Hover',
    description: 'Power Hover by ODDROK',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/743.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/743.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-744-escape-road-city-2',
    title: 'Escape Road City 2',
    description: 'Escape Road City 2 by AZ Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/744.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/744-a.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-746-fundamental-paper-novel',
    title: 'Fundamental Paper Novel',
    description: 'Fundamental Paper Novel by yakubell',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/746.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/746.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-747-worst-time-simulator',
    title: 'Worst Time Simulator',
    description: 'Worst Time Simulator by omegafredo',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/747.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/747.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-748-undertale-last-breath-phase-three',
    title: 'Undertale Last Breath PHASE THREE',
    description: 'Undertale Last Breath PHASE THREE by mario1d240',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/748.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/748.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-749-super-monkey-ball-1-2',
    title: 'Super Monkey Ball 1&2',
    description: 'Super Monkey Ball 1&2 by Amusement Vision, camthesaxman etc',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/749.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/749.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-751-jeffrey-epstein-basics-in-education-and-kidnapping',
    title: 'Jeffrey Epstein Basics In Education And Kidnapping',
    description: 'Jeffrey Epstein Basics In Education And Kidnapping by Zakaria_ALZ',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/751.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/751.html',
    rating: 4.5,
    playsCount: 6989,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-752-bad-piggies',
    title: 'Bad Piggies',
    description: 'Bad Piggies by Rovio Entertainment, EDURocks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/752.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/752.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-753-breaklock',
    title: 'Breaklock',
    description: 'Breaklock by Print More India',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/753.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/753.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-754-minecraft-pocket-edition',
    title: 'Minecraft Pocket Edition',
    description: 'Minecraft Pocket Edition by Mojang',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/754.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/754-f.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-756-witch-s-heart',
    title: 'Witch\'s Heart',
    description: 'Witch\'s Heart by IZ (BLUE STAR Entertainment)',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/756.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/756-ff.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-757-ultrapool',
    title: 'Ultrapool',
    description: 'Ultrapool by Icedrop Games, mysmic',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/757.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/757-f.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-758-caseoh-s-basics-in-eating-and-fast-food',
    title: 'CaseOh\'s Basics in Eating and Fast Food',
    description: 'CaseOh\'s Basics in Eating and Fast Food by Ronezkj15',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/758.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/758a.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-759-dice-a-million',
    title: 'Dice a Million',
    description: 'Dice a Million by countlessnights, 2 Left Thumbs, NotRexed',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/759.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/759.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-760-overburden',
    title: 'Overburden',
    description: 'Overburden by notsospecialgames, shxyder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/760.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/760.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-761-fish',
    title: 'FISH',
    description: 'FISH by dmcaguy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/761.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/761.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-762-cheese-rolling',
    title: 'Cheese Rolling',
    description: 'Cheese Rolling by The Interviewed, wasm.com',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/762.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/762.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-763-flying-gorilla-3d',
    title: 'Flying Gorilla 3D',
    description: 'Flying Gorilla 3D by Pinbit LLC',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/763.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/763.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-764-five-night-s-at-shrek-s-hotel',
    title: 'Five Night\'s at Shrek\'s Hotel',
    description: 'Five Night\'s at Shrek\'s Hotel by rend-pii',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/764.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/764.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-765-scary-shawarma-kiosk-the-anomaly',
    title: 'Scary Shawarma Kiosk: the ANOMALY',
    description: 'Scary Shawarma Kiosk: the ANOMALY by kharbor_ykt',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/765.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/765.html',
    rating: 5.0,
    playsCount: 1279,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-766-suika-game',
    title: 'Suika Game',
    description: 'Suika Game by unknown',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/766.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/766.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-767-stick-slasher',
    title: 'Stick Slasher',
    description: 'Stick Slasher by Beruke Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/767.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/767.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-768-stickman-kombat-2d',
    title: 'Stickman Kombat 2D',
    description: 'Stickman Kombat 2D by GamePush',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/768.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/768.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-769-stickman-duel',
    title: 'Stickman Duel',
    description: 'Stickman Duel by unknown',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/769.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/769.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-770-sonic-robo-blast-2',
    title: 'Sonic Robo Blast 2',
    description: 'Sonic Robo Blast 2 by Sonic Team Junior, KBHGames',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/770.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/770-update.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-771-hollow-knight-silksong',
    title: 'Hollow Knight: Silksong',
    description: 'Hollow Knight: Silksong by Team Cherry, Edurocks',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/771.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/771-z.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-772-sam-max-hit-the-road',
    title: 'Sam & Max Hit the Road',
    description: 'Sam & Max Hit the Road by Lucasfilm',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/772.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/772.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-773-command-conquer',
    title: 'Command & Conquer',
    description: 'Command & Conquer by Westwood Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/773.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/773.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-774-mountain-bike-racer',
    title: 'Mountain Bike Racer',
    description: 'Mountain Bike Racer by stefano1234',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/774.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/774.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-775-bart-bash',
    title: 'Bart Bash',
    description: 'Bart Bash by TeleSTOP',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/775.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/775.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-776-your-only-move-is-hustle',
    title: 'Your Only Move Is HUSTLE',
    description: 'Your Only Move Is HUSTLE by ivysly',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/776.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/776.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-777-outhold',
    title: 'Outhold',
    description: 'Outhold by tellusgames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/777.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/777.html',
    rating: 4.9,
    playsCount: 5723,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-778-serial-experiments-lain',
    title: 'Serial Experiments Lain',
    description: 'Serial Experiments Lain by NBCUniversal Entertainment Japan, Pioneer Productions',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/778.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/778.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-779-i-have-no-mouth-and-i-must-scream',
    title: 'I Have No Mouth, and I Must Scream',
    description: 'I Have No Mouth, and I Must Scream by Cyberdreams',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/779.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/779.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-780-thing-thing-arena-3',
    title: 'Thing-Thing Arena 3',
    description: 'Thing-Thing Arena 3 by Weasel',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/780.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/780.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-781-scratch-inc',
    title: 'Scratch Inc',
    description: 'Scratch Inc by Makopaz',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/781.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/781.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-782-um-jammer-lammy',
    title: 'Um Jammer Lammy',
    description: 'Um Jammer Lammy by NanaOn-Sha',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/782.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/782ff.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-783-apes-vs-helium',
    title: 'Apes vs Helium',
    description: 'Apes vs Helium by mdtowerz',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/783.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/783.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-784-gabriel-s-awesome-schoolhouse-gash',
    title: 'Gabriel\'s Awesome Schoolhouse (GASH)',
    description: 'Gabriel\'s Awesome Schoolhouse (GASH) by Gabriel115GJ',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/784.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/784.html',
    rating: 4.2,
    playsCount: 1967,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-785-geometry-dash',
    title: 'Geometry Dash',
    description: 'Geometry Dash by RobTop Games',
    category: 'runner',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/785.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/785-upd2.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Runner', 'Unblocked'],
  },
  {
    id: 'game-786-volley-random',
    title: 'Volley Random',
    description: 'Volley Random by RHM Interactive',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/786.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/786.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-787-beatblock',
    title: 'BeatBlock',
    description: 'BeatBlock by BubbleTabby, sunsuke',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/787.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/787.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-788-vib-ribbon',
    title: 'Vib-Ribbon',
    description: 'Vib-Ribbon by NanaOn-Sha, Japan Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/788.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/788-f.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-789-stardew-valley',
    title: 'Stardew Valley',
    description: 'Stardew Valley by The Secret Police Limited, ConcernedApe, Cirsius',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/789.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/789-fix.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-790-helltaker',
    title: 'Helltaker',
    description: 'Helltaker by Vanripper, wasm.rip',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/790.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/790.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-791-who-s-your-daddy',
    title: 'Who\'s Your Daddy',
    description: 'Who\'s Your Daddy by Evil Tortilla Games, reeyuki',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/791.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/791-f.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-792-escape-road-3',
    title: 'Escape Road 3',
    description: 'Escape Road 3 by AzGames',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/792.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/792-ff.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-793-lethal-ape',
    title: 'Lethal Ape',
    description: 'Lethal Ape by StellaDev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/793.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/793.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-794-fear-hunger-2-termina',
    title: 'Fear & Hunger 2: Termina',
    description: 'Fear & Hunger 2: Termina by Miro Haverinen, Happy Paintings',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/794.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/794-fixed.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-795-uvuvwevwevweonyetenvewveugwemubwemossas',
    title: 'UvuvwevwevweOnyetenvewveUgwemubwemOssas',
    description: 'UvuvwevwevweOnyetenvewveUgwemubwemOssas by Zakaria_ALZ',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/795.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/795.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-796-slendytubbies-1',
    title: 'Slendytubbies 1',
    description: 'Slendytubbies 1 by Sean Toman',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/796.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/796.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-797-fih',
    title: 'Fih',
    description: 'Fih by starrymari',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/797.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/797.html',
    rating: 4.7,
    playsCount: 7139,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-798-hungry-lamu',
    title: 'Hungry Lamu',
    description: 'Hungry Lamu by kulurc / kulu',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/798.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/798.html',
    rating: 4.2,
    playsCount: 1226,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-799-hungry-lamu-2',
    title: 'Hungry Lamu 2',
    description: 'Hungry Lamu 2 by kulurc / kulu',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/799.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/799-fix.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-800-rocket-goal-io',
    title: 'Rocket Goal.io',
    description: 'Rocket Goal.io by Rocket Goal team',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/800.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/800-fix.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-801-trees-hate-you',
    title: 'Trees Hate You',
    description: 'Trees Hate You by tykenn',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/801.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/801-fix.html',
    rating: 5.0,
    playsCount: 2020,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-802-scampton-the-great',
    title: 'Scampton The Great',
    description: 'Scampton The Great by sad_bread, shyxder',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/802.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/802.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-803-bendy-and-the-ink-machine-all-chapters',
    title: 'Bendy and the Ink Machine: ALL CHAPTERS',
    description: 'Bendy and the Ink Machine: ALL CHAPTERS by Joey Drew Studios',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/803.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/803-fix.html',
    rating: 5.0,
    playsCount: 2799,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-804-vampire-survivors',
    title: 'Vampire Survivors',
    description: 'Vampire Survivors by Poncle',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/804.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/804.html',
    rating: 4.2,
    playsCount: 2850,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-805-plague-inc',
    title: 'Plague Inc',
    description: 'Plague Inc by Ndemic Creations, Reeyuki',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/805.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/805.html',
    rating: 4.4,
    playsCount: 6234,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-806-slendytubbies-2',
    title: 'Slendytubbies 2',
    description: 'Slendytubbies 2 by Sean Toman',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/806.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/806.html',
    rating: 4.9,
    playsCount: 5758,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-807-slendytubbies-2d',
    title: 'Slendytubbies 2D',
    description: 'Slendytubbies 2D by Sean Toman',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/807.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/807.html',
    rating: 4.5,
    playsCount: 6945,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-808-spaceflight-simulator',
    title: 'Spaceflight Simulator',
    description: 'Spaceflight Simulator by Team Curiosity',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/808.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/808.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-809-rhythm-heaven',
    title: 'Rhythm Heaven',
    description: 'Rhythm Heaven by Kazuyoshi Osawa, Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/809.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/809-f.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-810-need-for-speed-carbon',
    title: 'Need For Speed: Carbon',
    description: 'Need For Speed: Carbon by EA Sports',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/810.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/810-fix2.html',
    rating: 4.6,
    playsCount: 7199,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-811-need-for-speed-most-wanted',
    title: 'Need For Speed: Most Wanted',
    description: 'Need For Speed: Most Wanted by EA Sports',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/811.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/811-f.html',
    rating: 5.0,
    playsCount: 2952,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-812-need-for-speed-underground-2',
    title: 'Need For Speed: Underground 2',
    description: 'Need For Speed: Underground 2 by EA Sports',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/812.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/812-f.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-813-five-nights-at-frickbear-s-3',
    title: 'Five Nights at Frickbear\'s 3',
    description: 'Five Nights at Frickbear\'s 3 by SpookyRick, Reeyuki',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/813.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/813-f3.html',
    rating: 4.7,
    playsCount: 6975,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-814-miside',
    title: 'MiSide',
    description: 'MiSide by AIHASTO',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/814.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/814.html',
    rating: 4.5,
    playsCount: 6961,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-815-baldi-s-basics-the-ultra-decompile',
    title: 'Baldi\'s Basics The Ultra Decompile',
    description: 'Baldi\'s Basics The Ultra Decompile by SeenWonderAlex',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/815.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/815.html',
    rating: 4.8,
    playsCount: 6291,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-816--3',
    title: '-3',
    description: '-3 by Mauzer2137',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/816.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/816.html',
    rating: 5.0,
    playsCount: 3696,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-817--b',
    title: '-b',
    description: '-b by bermud',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/817.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/817-f.html',
    rating: 5.0,
    playsCount: 3696,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-818-t-t-cubed',
    title: 't³ (T cubed)',
    description: 't³ (T cubed) by Blidb',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/818.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/818.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-819-20-minutes-till-dawn',
    title: '20 Minutes Till Dawn',
    description: '20 Minutes Till Dawn by Flanne, Rah, Bog',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/819.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/819-fix2.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-820-phoenix-wright-ace-attorney',
    title: 'Phoenix Wright - Ace Attorney',
    description: 'Phoenix Wright - Ace Attorney by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/820.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/820-fix2.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-821-apollo-justice-ace-attorney',
    title: 'Apollo Justice - Ace Attorney',
    description: 'Apollo Justice - Ace Attorney by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/821.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/821-fix2.html',
    rating: 4.3,
    playsCount: 5688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-822-phoenix-wright-ace-attorney-justice-for-all',
    title: 'Phoenix Wright - Ace Attorney - Justice for All',
    description: 'Phoenix Wright - Ace Attorney - Justice for All by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/822.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/822-f.html',
    rating: 4.6,
    playsCount: 7154,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-823-ace-attorney-investigations-miles-edgeworth',
    title: 'Ace Attorney Investigations - Miles Edgeworth',
    description: 'Ace Attorney Investigations - Miles Edgeworth by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/823.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/823-fix2.html',
    rating: 4.9,
    playsCount: 4351,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-824-phoenix-wright-ace-attorney-trials-and-tribulations',
    title: 'Phoenix Wright - Ace Attorney - Trials and Tribulations',
    description: 'Phoenix Wright - Ace Attorney - Trials and Tribulations by Capcom',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/824.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/824-f.html',
    rating: 4.2,
    playsCount: 1332,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-825-cruelty-squad',
    title: 'Cruelty Squad',
    description: 'Cruelty Squad by Consumer Softproducts, dizzy',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/825.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/825.html',
    rating: 4.8,
    playsCount: 6644,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-826-just-shapes-beats',
    title: 'Just Shapes & Beats',
    description: 'Just Shapes & Beats by Berzerk Studio',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/826.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/826-f.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-827-totally-accurate-battle-simulator-tabs',
    title: 'Totally Accurate Battle Simulator (TABS)',
    description: 'Totally Accurate Battle Simulator (TABS) by Landfall',
    category: 'arcade',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/827.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/827-f.html',
    rating: 4.9,
    playsCount: 5201,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Arcade', 'Unblocked'],
  },
  {
    id: 'game-828-animal-crossing-gamecube',
    title: 'Animal Crossing (GAMECUBE)',
    description: 'Animal Crossing (GAMECUBE) by Nintendo, turtlekiosk',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/828.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/828.html',
    rating: 4.9,
    playsCount: 5081,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-829-touhou-1-touhou-reiiden',
    title: 'Touhou 1 Touhou-Reiiden',
    description: 'Touhou 1 Touhou-Reiiden by Jun\'ya Ōta ("ZUN")',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/829.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/829.html',
    rating: 4.3,
    playsCount: 4396,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-830-touhou-2-touhou-fuumaroku',
    title: 'Touhou 2 Touhou-Fuumaroku',
    description: 'Touhou 2 Touhou-Fuumaroku by Jun\'ya Ōta ("ZUN")',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/830.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/830.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-831-touhou-3-touhou-yumejikuu',
    title: 'Touhou 3 Touhou-Yumejikuu',
    description: 'Touhou 3 Touhou-Yumejikuu by Jun\'ya Ōta ("ZUN")',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/831.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/831.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-832-touhou-4-touhou-gensokyou',
    title: 'Touhou 4 Touhou-Gensokyou',
    description: 'Touhou 4 Touhou-Gensokyou by Jun\'ya Ōta ("ZUN")',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/832.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/832.html',
    rating: 4.5,
    playsCount: 7147,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-833-touhou-5-touhou-kaikidan',
    title: 'Touhou 5 Touhou-Kaikidan',
    description: 'Touhou 5 Touhou-Kaikidan by Jun\'ya Ōta ("ZUN")',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/833.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/833.html',
    rating: 4.2,
    playsCount: 3745,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-834-i-wanna-be-the-guy',
    title: 'I Wanna Be The Guy',
    description: 'I Wanna Be The Guy by Michael "Kayin" O\'Reilly',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/834.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/834.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-835-yohoho-io',
    title: 'YoHoHo.io',
    description: 'YoHoHo.io by Exodragon Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/835.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/835.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-836-friday-night-funkin-vs-shucks-v2',
    title: 'Friday Night Funkin vs Shucks v2',
    description: 'Friday Night Funkin vs Shucks v2 by CurtisDev',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/836.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/836.html',
    rating: 4.8,
    playsCount: 6205,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-837-into-space-2',
    title: 'Into Space 2',
    description: 'Into Space 2 by Armor Games',
    category: 'retro',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/837.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/837-f.html',
    rating: 4.4,
    playsCount: 6263,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Retro', 'Unblocked'],
  },
  {
    id: 'game-838-vena',
    title: 'Vena',
    description: 'Vena by Leonhard Kohl-Lörting',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/838.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/838.html',
    rating: 4.3,
    playsCount: 5121,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-839-s-p-l-i-t',
    title: 's.p.l.i.t',
    description: 's.p.l.i.t by Mike Klubnika',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/839.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/839.html',
    rating: 4.8,
    playsCount: 6666,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-840-my-talking-baby-hippo',
    title: 'My Talking Baby Hippo',
    description: 'My Talking Baby Hippo by Outfit7',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/840.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/840-fix2.html',
    rating: 4.9,
    playsCount: 4486,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-841-warioware-touched',
    title: 'WarioWare: Touched!',
    description: 'WarioWare: Touched! by Nintendo',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/841.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/841-f.html',
    rating: 4.7,
    playsCount: 7132,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-842-plants-vs-zombies-goty-edition',
    title: 'Plants vs. Zombies GOTY Edition',
    description: 'Plants vs. Zombies GOTY Edition by PopCap Games',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/842.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/842.html',
    rating: 4.4,
    playsCount: 6688,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-843-la-madriguera-lazy-bear-game',
    title: 'La Madriguera (Lazy Bear Game)',
    description: 'La Madriguera (Lazy Bear Game) by camiloh488',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/843.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/843.html',
    rating: 4.2,
    playsCount: 2125,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-844-hammer-2-reloaded',
    title: 'Hammer 2: Reloaded',
    description: 'Hammer 2: Reloaded by RewindApp',
    category: 'action',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/844.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/844-f.html',
    rating: 4.3,
    playsCount: 5161,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Action', 'Unblocked'],
  },
  {
    id: 'game-845-swords-and-sandals-2',
    title: 'Swords and Sandals 2',
    description: 'Swords and Sandals 2 by eGames',
    category: 'puzzle',
    thumbnail: 'https://raw.githubusercontent.com/gn-math/covers/main/845.png',
    type: 'iframe',
    embedUrl: 'https://rawcdn.githack.com/gn-math/html/main/845-f.html',
    rating: 5.0,
    playsCount: 3648,
    
    
    controls: [
      { key: 'Controls', action: 'In-game Keyboard / Mouse' },
    ],
    tags: ['Puzzle', 'Unblocked'],
  },
];
