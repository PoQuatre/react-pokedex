import { Pokemon } from "$types";
import { Component } from "react";
import styles from "./PokeCard.module.css";

interface Props {
  pokemon: Pokemon;
}

export class PokeCard extends Component<Props> {
  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.pokemon.img} alt={this.props.pokemon.name} />
        <p className={styles.name}>{this.props.pokemon.name}</p>
      </div>
    );
  }
}
