import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { lightSpeedIn, lightSpeedOut } from 'react-animations';

const animationIn = keyframes`${lightSpeedIn}`;
const animationOut = keyframes`${lightSpeedOut}`;


export const SliderPic = styled.div`
position: relative;
height: 100vh;
width: 100%;
`

export const SliderTextOne = styled.div`
position: absolute;
top: 30%;
left: 60%;
color: ${({ theme }) => theme.colors.white};
animation: 3s ${animationIn} ;
`

export const SliderTextTwo = styled.div`
position: absolute;
top: 25%;
left: 5%;
color: ${({ theme }) => theme.colors.white};
animation: 3s ${animationIn} 4s;
`

export const SliderTextThree = styled.div`
position: absolute;
top: 45%;
left: 50%;
color: ${({ theme }) => theme.colors.white};
animation: 3s ${animationIn} 13s;
`

export const SliderTextFour = styled.div`
position: absolute;
top: 65%;
left: 10%;
color: ${({ theme }) => theme.colors.white};
animation: 3s ${animationIn} 21s;
`

export const SliderTextFive = styled.div`
position: absolute;
top: 20%;
left: 30%;
color: ${({ theme }) => theme.colors.white};
animation: 3s ${animationIn} 30s;
`

export const Title = styled.h2`
font-size: ${({ theme }) => theme.fontSize[7]};
color: ${({ theme }) => theme.colors.white};
font-style: italic;
line-height: 0.8
`

export const SubTitle = styled.p`
font-size: ${({ theme }) => theme.fontSize[4]};
color: ${({ theme }) => theme.colors.white};
font-style: italic;
`