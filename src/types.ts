export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  sprite: string;
}

export interface PokemonAPI {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
