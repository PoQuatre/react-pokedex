import { Pokemon } from "../../utils";
import { Component } from "react";
import styles from "./PokeCard.module.css";

interface Props {
  pokemon: Pokemon;
  onClick: () => void;
}

export class PokeCard extends Component<Props> {
  render() {
    return (
      <li className={styles.card} onClick={() => this.props.onClick()}>
        <img src={this.props.pokemon.sprite} alt={this.props.pokemon.name} />
        <p className={styles.name}>{this.props.pokemon.name}</p>
      </li>
    );
  }
}
