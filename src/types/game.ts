export type GameCategory = 
  | 'all'
  | 'favorites'
  | 'action'
  | 'arcade'
  | 'puzzle'
  | 'runner'
  | 'retro'
  | 'custom';

export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  thumbnail: string;
  type: 'builtin' | 'iframe' | 'custom';
  componentName?: string;
  embedUrl?: string;
  rating: number;
  playsCount: number;
  featured?: boolean;
  badge?: 'HOT' | 'NEW' | 'POPULAR' | 'RETRO';
  controls: {
    key: string;
    action: string;
  }[];
  tags: string[];
}
