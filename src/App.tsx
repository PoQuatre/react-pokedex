import { PokeCard } from "$components";
import { Pokemon } from "$types";
import { Component } from "react";
import styles from "./App.module.css";

interface State {
  pokemons: Pokemon[];
}

export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      pokemons: [
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          height: 4,
          weight: 5,
          types: ["plant"],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h1 className={styles.title}>Pokedex</h1>

        <div className={styles.grid}>
          {this.state.pokemons.map((pokemon) => (
            <PokeCard pokemon={pokemon} />
          ))}
        </div>
      </>
    );
  }
}
