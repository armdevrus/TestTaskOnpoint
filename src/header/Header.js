import React from "react";
import styles from './Header.module.css'
import {FaHome} from "react-icons/all";
import {useHistory} from "react-router-dom";


const Header = () => {

    const handleToFollowFirstPage = () => {
        window.location.href = 'http://localhost:3000'
    }

    return(
        <div className={styles.container__header}>
            <button className={styles.container__header_button} onClick={handleToFollowFirstPage}>
                <FaHome className={styles.header_button}/>
            </button>
            <symbol className={styles.header_symbol}>|</symbol>
            <span className={styles.header_text}>Project</span>
        </div>

    )
}
export default Header