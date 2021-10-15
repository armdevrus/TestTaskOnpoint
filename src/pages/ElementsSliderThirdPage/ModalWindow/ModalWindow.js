import React from "react";
import './ModalWindow.css'

const ModalWindow = ({active, setActive, children}) => {
    return(
        <div className={active ? 'container__modal active' : 'container__modal'} onClick={() => setActive(false)}>
            <div className={active ? 'container__modal_content active' : 'container__modal_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default ModalWindow