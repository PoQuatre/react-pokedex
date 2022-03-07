import { PokeCard, PokeDisplay } from "$components";
import { Pokemon, PokemonAPI } from "$types";
import { Component } from "react";
import styles from "./App.module.css";

interface State {
  selected?: Pokemon;
  pokemons: Pokemon[];
}

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { pokemons: [] };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((res: { results: any[] }) => res.results)
      .then((res: { url: string }[]) => {
        res.forEach((entry) =>
          fetch(entry.url)
            .then((res) => res.json())
            .then((pokemon: PokemonAPI) =>
              this.setState((state) => ({
                pokemons: [
                  ...state.pokemons,
                  {
                    id: pokemon.id,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    sprite: pokemon.sprites.front_default,
                    types: pokemon.types.map((type) => type.type.name),
                  },
                ].sort((poke1, poke2) => poke1.id - poke2.id),
              }))
            )
        );
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        {this.state.selected !== undefined && (
          <PokeDisplay {...this.state.selected} />
        )}

        <h1 className={styles.title}>Pokedex</h1>

        <ul className={styles.grid}>
          {this.state.pokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => this.setState({ selected: pokemon })}
            />
          ))}
        </ul>
      </>
    );
  }
}
