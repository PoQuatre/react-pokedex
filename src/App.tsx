import { Pages, PokeCard, PokeDisplay } from "$components";
import { Pokemon, PokemonAPI } from "$types";
import { ChangeEvent, Component } from "react";
import styles from "./App.module.css";

interface State {
  selected?: Pokemon;
  pokemonsPerPage: number;
  totalPokemons: number;
  currentPage: number;
  pokemons: Pokemon[];
  controller?: AbortController;
}

const endpoint = "https://pokeapi.co/api/v2/pokemon/";

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pokemonsPerPage: 20,
      totalPokemons: 0,
      currentPage: 0,
      pokemons: [],
    };
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    this.state.controller?.abort();
    const controller = new AbortController();
    this.setState({ pokemons: [], controller }, () => {
      fetch(
        `${endpoint}?limit=${this.state.pokemonsPerPage}&offset=${
          this.state.currentPage * this.state.pokemonsPerPage
        }`,
        { signal: controller.signal }
      )
        .then((res) => res.json())
        .then((res: { count: number; results: any[] }) => {
          this.setState({ totalPokemons: res.count });
          return res.results;
        })
        .then((res: { url: string }[]) => {
          res.forEach((entry) =>
            fetch(entry.url, { signal: controller.signal })
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
    });
  };

  onChangePokemonsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState(
      { pokemonsPerPage: parseInt(e.target.value) },
      this.fetchPokemons
    );
  };

  onPageChange = (newPage: number) => {
    this.setState({ currentPage: newPage }, this.fetchPokemons);
  };

  render() {
    return (
      <>
        {this.state.selected !== undefined && (
          <PokeDisplay {...this.state.selected} />
        )}

        <h1 className={styles.title}>Pokedex</h1>

        <div className={styles.perPage}>
          <label htmlFor="per-page">Pokemons per page: </label>
          <select id="per-page" onChange={this.onChangePokemonsPerPage}>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <ul className={styles.grid}>
          {this.state.pokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => this.setState({ selected: pokemon })}
            />
          ))}
        </ul>

        <Pages
          current={this.state.currentPage}
          elements={this.state.totalPokemons}
          pageSize={this.state.pokemonsPerPage}
          onPageChange={this.onPageChange}
        />
      </>
    );
  }
}
