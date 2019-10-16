import React from 'react';

import sliderLeft from "../../../Images/sliderLeft.svg";
import sliderRight from "../../../Images/sliderRight.svg";

var images = importAll(require.context('../../../Images/Home/Slider/', false, /\.(png|jpe?g|svg|webp)$/));
var image = Object.values(images);

export default class Carousel extends React.Component
{
    render()
    {
        console.log(image);
        return (
            <div className="row">
                <div id="HomeSlider" className="carousel">
                    <div className="carousel-inner">
				        <div className="carousel-item">
                            <img className="d-block" src={image[0]} alt="First slide" />
                        </div>

                        

                        <div className="carousel-item">
                            <img className="d-block" src={images['2.jpg']} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={images['3.jpg']} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" src={images['4.jpg']} alt="Forth slide" />
                        </div>
                    </div>
                    <button className="carousel-control float-left" href="#HomeSlider" data-slide="prev">
                        <img src={sliderLeft} alt="LeftSlider" />
                    </button>
                    <button className="carousel-control float-right" href="#HomeSlider" data-slide="next">
                        <img src={sliderRight} alt="RightSlider" />
                    </button>
                </div>
            </div>
        );
    }
}
function importAll(r)
{
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

    return images;
}