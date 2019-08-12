import React from 'react';
import Dots from "./dots";
import Button from "./button";
import styled from "styled-components";

let images = [];
const slide = false;

for (let i = 0; i < 7; i++) {
    images[i] = require(`./../img/photo${i + 1}.jpeg`);
}
const Main = styled.div`
    background-size: auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CompletedSlider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ContainerSlider = styled.div`
    box-shadow: 4px 4px rgba(0, 0, 0, .2);
    order: 2;
    border: 5px solid rgb(116, 154, 168);
    border-radius: 15px;
    width: 500px;
    overflow: hidden;   
`;
const SliderStyle = styled.div`
    display: flex;
    flex-direction: row;
`;
const PrevButton = styled.div`
    order: 1
`;
const NextButton = styled.div`
    order: 3
`;

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 1,
            pressedDot: 1,
            animTransition: '',
        };
    }

    dotMove(event) {
        let dotId = event.target.id;
        let numberFromId = dotId.replace(/dot/g, '');
        this.setState({
            currentIndex: parseInt(numberFromId),
            pressedDot: parseInt(numberFromId),
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    animEndCheck() {
        let newIndex = this.state.currentIndex;
        if (newIndex === 0) {
            newIndex = images.length;
            this.setState({
                currentIndex: newIndex,
                pressedDot: newIndex,
                animTransition: 'none',
            });
        }
        if (newIndex === images.length + 1) {
            newIndex = 1;
            this.setState({
                currentIndex: newIndex,
                pressedDot: newIndex,
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
            pressedDot: newIndex,
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    nextSlide() {
        let newIndex = this.state.currentIndex;
        if (newIndex >= 8) return;
        newIndex++;
        this.setState({
            currentIndex: newIndex,
            pressedDot: newIndex,
            animTransition: `transform 0.4s ease-in-out`,
        });
    }

    render() {
        return (
            <Main>
                <Container>
                    <CompletedSlider>
                        <ContainerSlider>
                            <SliderStyle
                                 onTransitionEnd={this.animEndCheck.bind(this)}
                                 style={{
                                     transition: this.state.animTransition,
                                     transform: `translateX(${-500 * this.state.currentIndex}px)`
                                 }}>
                                <img src={images[6]} alt=""/>
                                {images.map(item => <img key={item} src={item} alt={""}/>)}
                                <img src={images[0]} alt=""/>
                            </SliderStyle>
                        </ContainerSlider>
                        <PrevButton>
                            <Button name="prev-button" func={this.prevSlide.bind(this)}> </Button>
                        </PrevButton>
                        <NextButton>
                            <Button name="next-button" func={this.nextSlide.bind(this)}> </Button>
                        </NextButton>
                    </CompletedSlider>
                </Container>
                <Dots number={images.length}
                      func={this.dotMove.bind(this)}
                      ignore={this.state.pressedDot}
                />
            </Main>
        )
    }
}
export default Slider;