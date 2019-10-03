import React from 'react';
import Dots from "./dots";
import Button from "./button";
import styled from "styled-components";
let images = [];
for (let i = 0; i < 7; i++) {
    images[i] = require(`./../img/photo${i + 1}.jpeg`);
}
const CompletedSlider = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const ContainerSlider = styled.div`
    box-shadow: 4px 4px rgba(0, 0, 0, .2);
    border: 5px solid rgb(116, 154, 168);
    border-radius: 15px;
    width: 500px;
    overflow: hidden;   
`;
const SliderStyle = styled.div`
    display: flex;
    flex-direction: row;
`;
class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideMode: true,
            currentIndex: 1,
            animTransition: '',
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.animEndCheck = this.animEndCheck.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.dotChange = this.dotChange.bind(this);
    }

    dotChange(event) {
        let dotId = event.target.id;
        let numberFromId = dotId.replace(/dot/g, '');
        this.setState({
            currentIndex: parseInt(numberFromId),
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    animEndCheck() {
        let newIndex = this.state.currentIndex;
        if (newIndex === 0) {
            newIndex = images.length;
            this.setState({
                currentIndex: newIndex,
                animTransition: 'none',
            });
        }
        if (newIndex === images.length + 1) {
            newIndex = 1;
            this.setState({
                currentIndex: newIndex,
                animTransition: `none`,
            });
        }
    }

    prevSlide() {
        let newIndex = this.state.currentIndex;
        if (newIndex <= 0) return;
        newIndex--;
        this.setState({
            currentIndex: newIndex,
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    nextSlide() {
        let newIndex = this.state.currentIndex;
        if (newIndex >= 8) return;
        newIndex++;
        this.setState({
            currentIndex: newIndex,
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    render() {
        return (
            <div>
                <CompletedSlider>
                    <Button name="prev-button" func={this.prevSlide}> </Button>
                    <ContainerSlider>
                        <SliderStyle
                            onTransitionEnd={this.animEndCheck}
                            style={{
                                transition: this.state.animTransition,
                                transform: `translateX(${-500 * this.state.currentIndex}px)`
                            }}>
                            <img src={images[6]} alt=""/>
                            {images.map(item => <img key={item} src={item} alt={""}/>)}
                            <img src={images[0]} alt=""/>
                        </SliderStyle>
                    </ContainerSlider>
                    <Button name="next-button" func={this.nextSlide}> </Button>
                </CompletedSlider>
                <Dots number={images.length}
                      func={this.dotChange}
                      pressedDotNumber={this.state.currentIndex}
                />
            </div>
        )
    }
}




export default Slider;