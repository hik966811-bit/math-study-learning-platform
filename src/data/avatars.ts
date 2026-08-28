export interface AvatarPreset {
  id: string;
  name: string;
  url: string;
  category: 'cyber' | 'retro' | 'anime' | 'creature';
}

export const AVATAR_PRESETS: AvatarPreset[] = [
  {
    id: 'cyber-ninja',
    name: 'Кибер Ниндзя',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ninja&backgroundColor=0070f3',
    category: 'cyber',
  },
  {
    id: 'neon-gamer',
    name: 'Неоновый Геймер',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=CyberNeon&backgroundColor=00d2ff',
    category: 'cyber',
  },
  {
    id: 'school-hacker',
    name: 'Школьный Хакер',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=MatrixHacker&backgroundColor=050b18',
    category: 'cyber',
  },
  {
    id: 'arcade-legend',
    name: 'Легенда Аркад',
    url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ArcadeLegend',
    category: 'retro',
  },
  {
    id: 'pixel-hero',
    name: 'Пиксельный Герой',
    url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=PixelHero',
    category: 'retro',
  },
  {
    id: 'space-pilot',
    name: 'Пилот Корабля',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=CosmicPilot&backgroundColor=9d00ff',
    category: 'cyber',
  },
  {
    id: 'cyber-cat',
    name: 'Механический Кот',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=MechaCat&backgroundColor=ff007f',
    category: 'creature',
  },
  {
    id: 'retro-wizard',
    name: 'Пиксельный Маг',
    url: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=WizardArcane',
    category: 'retro',
  },
  {
    id: 'cyber-samurai',
    name: 'Кибер Самурай',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=Samurai&backgroundColor=00ff66',
    category: 'cyber',
  },
  {
    id: 'quantum-ai',
    name: 'Квантовый ИИ',
    url: 'https://api.dicebear.com/7.x/bottts/svg?seed=QuantumAI&backgroundColor=ffaa00',
    category: 'cyber',
  }
];

export const PROFILE_TITLES = [
  'Новичок Школы',
  'Школьный Хакер',
  'Любитель Перемен',
  'Мастер Аркад',
  'Гроза Клавиатур',
  'Легенда Игр',
  'Кибер-Чемпион',
  'Владыка 2048',
  'Бессмертный Раннер',
  'Великий Магистр Игр'
];

export const ACHIEVEMENTS_LIST = [
  {
    id: 'first_game',
    title: 'Первый Шаг',
    description: 'Сыграйте в любую игру на портале',
    icon: '🎮',
    xpReward: 50,
  },
  {
    id: 'play_3_games',
    title: 'Игровой Маньяк',
    description: 'Опробуйте 3 разные игры',
    icon: '🔥',
    xpReward: 150,
  },
  {
    id: 'runner_1000',
    title: 'Кибер-Спринтер',
    description: 'Наберите 1,000 очков в Cyber Runner',
    icon: '⚡',
    xpReward: 200,
  },
  {
    id: 'space_wave_5',
    title: 'Защитник Галактики',
    description: 'Уничтожьте 25 вражеских кораблей в Space Invaders',
    icon: '🚀',
    xpReward: 250,
  },
  {
    id: 'snake_length_20',
    title: 'Неоновый Питон',
    description: 'Наберите 200+ очков в Neon Snake',
    icon: '🐍',
    xpReward: 200,
  },
  {
    id: 'stealth_master',
    title: 'Мастер Маскировки',
    description: 'Используйте кнопку школьной маскировки (Stealth Mode)',
    icon: '🕵️',
    xpReward: 100,
  },
  {
    id: 'custom_game_add',
    title: 'Архитектор Портала',
    description: 'Добавьте свою собственную игру в каталог',
    icon: '🛠️',
    xpReward: 300,
  },
  {
    id: 'level_5_reached',
    title: 'Ветеран Портала',
    description: 'Достигните 5-го уровня профиля',
    icon: '👑',
    xpReward: 500,
  }
];
