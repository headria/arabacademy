import React from "react";
import styles from "../../styles/Header.module.css";

type Props = {};

function Header({}: Props) {
    return (
        <div className={styles.header}>
            <div>Header</div>
        </div>
    );
}

export default Header;
