import React, {useState} from "react";
import {SliderData} from '../features/SliderData';

import ElementsSliderFirstPage from "../pages/ElementsSliderFirstPage/ElementsSliderFirstPage";
import ElementsSliderSecondPage from "../pages/ElementsSliderSecondPage/ElementsSliderSecondPage";
import ElementsSliderThirdPage from "../pages/ElementsSliderThirdPage/ElementsSliderThirdPage";

import './ImageSlider.css'
import Header from "../header/Header";
const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }

    if(!Array.isArray(slides) || length <= 0){
        return null
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            prevSlide();
        }

        if (touchStart - touchEnd < -150) {
            nextSlide();
        }
    }

    return (
        <section className="container__slider">
            {SliderData.map((slide, index) => {
                return (
                        <div key={index} className={index === current ? 'slide active' : 'slide'} >
                            {index === current && (
                                <div className="container__slider_content" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
                                    <Header/>
                                        {
                                            slide.firstImage ?
                                                    <ElementsSliderFirstPage/>
                                               :
                                                slide.secondImage ?
                                                        <ElementsSliderSecondPage/>
                                                   :
                                                    slide.thirdImage ?
                                                            <ElementsSliderThirdPage/>
                                                        :
                                                            <ElementsSliderFirstPage/>

                                        }
                                </div>
                            )}
                        </div>
                )
            })}
        </section>
    )
}
export default ImageSlider