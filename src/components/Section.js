import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundimg ,leftbutton, rightbutton}) {
    return (
        <div>
            <Wrap bgImg = {backgroundimg}>

            <Fade bottom>

                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

                <Buttons>
                    <Fade bottom>
                        <ButtonGroup>
                            <LeftButton>
                                {leftbutton}
                            </LeftButton>
                            { rightbutton &&
                                <RightButton>
                                {rightbutton}
                            </RightButton> 
                            }
                            
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src={"/images/down-arrow.svg"} />
                </Buttons>

            </Wrap>
        </div>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    // background-color:orange;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image:url('/images/model-s.jpg');
    background-image: ${props => `url('/images/${props.bgImg}')` };

    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal

    @media (max-width:768px){
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow-x: hidden;
    }
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-algin: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width:768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    margin: 8px 16px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;

`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;

`

const Buttons = styled.div``