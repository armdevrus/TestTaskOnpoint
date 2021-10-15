import React from 'react'
import styles from './ElementsSliderFirstPage.module.css'
import {SliderData} from "../../features/SliderData";
import arrow_right from '../../icons/arrow_right.png'

const ElementsSliderFirstPage = () => {


    const image = SliderData.find(elem => elem.firstImage).firstImage
    return(
        <>
            <img src={image} alt="pills" className={styles.image}/>
            <div className={styles.container__elements}>
                <h3 className={styles.welcome}>Привет,</h3>
                <p className={styles.text}>Это <b>не</b> коммерческое задание</p>
                <button className={styles.button_next}>
                    <img  className={styles.arrow_right} src={arrow_right} alt="Arrow right"/>Что дальше?
                </button>
            </div>
        </>

    )
}
export default ElementsSliderFirstPage