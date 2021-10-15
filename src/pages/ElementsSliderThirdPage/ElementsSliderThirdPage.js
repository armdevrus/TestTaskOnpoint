import React from 'react'
import styles from './ElementsSliderThirdPage.module.css'
import {SliderData} from "../../features/SliderData";
import icon_thirdPage_plus_button from "../../icons/icon_thirdPage_plus_button.png";
import ModalWindow from "./ModalWindow/ModalWindow";

const ElementsSliderThirdPage = () => {

    const [modalActive, setModalActive] = React.useState(false)

    const image = SliderData.find(elem => elem.thirdImage).thirdImage
    return (
        <div>
            <div>
                <img src={image} alt="pills" className={styles.image}/>
                <div className={styles.container__elements_top}>
                    <h3 className={styles.welcome}>Ключевое сообщение</h3>
                    <p className={styles.text}>Brend<b>xy</b></p>
                </div>
                <div className={styles.container__elements_bottom}>
                    <span className={styles.left_text}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    <span className={styles.right_text}>Nemo enim ipsam voluptatem, quia voluptas sit</span>
                    <button
                        className={styles.right_button}
                        onClick={() => setModalActive(true)}
                    >
                        <img  className={styles.arrow_right} src={icon_thirdPage_plus_button} alt="icon plus"/>
                        Подробнее
                    </button>
                </div>
            </div>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <button className={styles.modal_right_button} onClick={() => setModalActive(false)}/>
                <div className={styles.container__modal_elements_top}>
                    <h3 className={styles.modal_welcome}>Преимущества</h3>
                    <p className={styles.modal_text}>Brend<b>xy</b></p>
                </div>
                <div className={styles.container__modal_elements_bottom}>
                    <div>
                        <div className={styles.modal_number}>01</div>
                        <span className={styles.modal_left_text}>Ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    </div>
                    <div>
                        <div className={styles.modal_number}>02</div>
                        <span className={styles.modal_left_text}>Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    </div>
                    <div>
                        <div className={styles.modal_number}>03</div>
                        <span className={styles.modal_left_text}>Ut enim ad minim veniam, quis nostrud exercitation.</span>
                    </div>
                </div>
            </ModalWindow>
        </div>
    )
}
export default ElementsSliderThirdPage