import { Pokemon } from "$types";
import { Component } from "react";
import styles from "./PokeDisplay.module.css";

interface Props extends Pokemon {}

export class PokeDisplay extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.img}
          src={this.props.sprite}
          alt={this.props.name}
        />

        <div className={styles.dataContainer}>
          <p className={styles.dataLine}>
            ID: <span className={styles.data}>{this.props.id}</span>
          </p>
          <p className={styles.dataLine}>
            Name:{" "}
            <span className={`${styles.data} ${styles.caps}`}>
              {this.props.name}
            </span>
          </p>
          <p className={styles.dataLine}>
            Height:{" "}
            <span className={styles.data}>{this.props.height / 10}m</span>
          </p>
          <p className={styles.dataLine}>
            Weight:{" "}
            <span className={styles.data}>{this.props.weight / 10}kg</span>
          </p>
          <p className={styles.dataLine}>
            Type{this.props.types.length > 1 && "s"}:{" "}
            <span className={`${styles.data} ${styles.caps}`}>
              {this.props.types.join(" / ")}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
