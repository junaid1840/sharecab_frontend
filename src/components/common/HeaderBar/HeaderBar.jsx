import React from "react";
import "./headerBar.module.scss"
import styles from './headerBar.module.scss'
const HeaderBar = () => {
    return (
        <>
            <header className={styles.fixedTop}>
                <button>Junaid</button>
            </header>
        </>
    )
}

export default HeaderBar
