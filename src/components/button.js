import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    margin-top: 215px;
    margin-left: 10px;
    margin-right: 10px;
    width: 50px;
    height: 40px;
    background: linear-gradient(to bottom, #4eb5e5 0%, #389ed5 100%);
    border: none;
    border-radius: 5px;
    position: relative;
    border-bottom: 4px solid #2b8bc6;
    color: #fbfbfb;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, .2);
    cursor: pointer;
    
    &:active {
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, .2);
        top: 1px;
    }
    &:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-top: 20px solid #187dbc;
        border-bottom: 20px solid #187dbc;
        border-left: 16px solid transparent;
        border-right: 20px solid #187dbc;
        position: absolute;
        opacity: 0.6;
        right: 0;
        top: 0;
        border-radius: 0 5px 5px 0;
     }
    &back{
        padding-right: 12px;
        box-sizing: border-box;  
    }
    
`;

class Button extends React.Component {
    render() {
        return (
            <StyledButton className={this.props.name} onClick={this.props.func}> </StyledButton>
        )
    }
}

export default Button;