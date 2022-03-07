import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import styles from "./Pages.module.css";

interface Props {
  current: number;
  elements: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
}

export class Pages extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <button
          className={styles.button}
          disabled={this.props.current <= 0}
          onClick={() => this.props.onPageChange(this.props.current - 1)}
        >
          <FontAwesomeIcon icon={solid("angle-left")} fixedWidth />
        </button>
        <button
          className={styles.button}
          disabled={
            this.props.current >=
            Math.floor(this.props.elements / this.props.pageSize)
          }
          onClick={() => this.props.onPageChange(this.props.current + 1)}
        >
          <FontAwesomeIcon icon={solid("angle-right")} fixedWidth />
        </button>
      </div>
    );
  }
}
