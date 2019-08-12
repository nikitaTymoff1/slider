import React from 'react';
import styled from 'styled-components'

const StyledDots = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: auto;
    height: auto;
`;
const StyledDot = styled.div`
    border: 2px solid #749aa8;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin: 2px;
    background: ${props => (props.color)} ;
    border-radius: 50%;
    transition: all 0.4s ease-in-out;
    
    &:hover{
       transition: all 0.4s ease-in-out;
       background: #749aa8;
    }
    
`;


class Dots extends React.Component {
    array = [];

    render() {
        for (let i = 0; i < this.props.number; i++) {
            this.array[i] = i;
        }
        return (
            <StyledDots>
                {this.array.map((a, index) => {
                    let colorOfActiveDot;
                    index === this.props.ignore - 1 ? colorOfActiveDot = `rgb(116, 154, 168)` : colorOfActiveDot = `transparent`;
                    return (
                        <StyledDot
                            id={`dot${index + 1}`}
                            onClick={this.props.func}
                            color={colorOfActiveDot}
                        >
                        </StyledDot>)
                })
                }
            </StyledDots>
        );
    }
}

export default Dots;