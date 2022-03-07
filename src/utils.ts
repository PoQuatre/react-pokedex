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

const cache: { [key: string]: any } = {};

export function fetchCache(
  input: RequestInfo,
  init?: RequestInit
): Promise<any> {
  if (cache[input.toString()] !== undefined) {
    return Promise.resolve(cache[input.toString()]);
  } else {
    return fetch(input, init).then(
      (res) => (cache[input.toString()] = res.json())
    );
  }
}
