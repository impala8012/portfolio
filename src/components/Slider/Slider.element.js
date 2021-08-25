import styled from "styled-components"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const SliderContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
`;

export const SliderTextWrapper = styled.div`
  position: absolute;
  top: 5%;
  right: 20%;
`;

export const SliderTitle = styled.h1`
 font-size: 48px;
`;

export const SliderContent = styled.div``

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 768px) {
    right: 10px;
    font-size: 2.5rem;
  }
`;

export const LefttArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 768px) {
    left: 10px;
    font-size: 2.5rem;
  }
`;
export const ImgInfo = styled.div`
  position: absolute;
  top: 34%;
  left: 10%;
  width: 80%;
  height: 65%;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  transition: 0.5s;

`;
export const ImageContainer = styled.div`
  opacity: 0;
  transition: 10s ease;
  position: relative;

  ${({ active }) =>
    active === true &&
    `
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.03);
  `}

  &:hover ${ImgInfo} {
    opacity: 1;
    transform: scale(1);
    transition: 1.5s;
  }
`;

export const Img = styled.img`
  width: 800px;
  height: 400px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 450px;
    height: 300px;
  }
`;


export const ImgInfoTitle = styled.h3`
  margin-bottom: 0.4em;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImgInfoContent = styled.p`
  font-weight: 100;
  line-height: 1.7;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;



export const ImgInfoLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ImgInfoLink = styled.a`
  display: flex;
  margin-right: 10px;
  align-items: center;
  text-decoration: none;
  padding: 5px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  background: #4b59f7;
  white-space: nowrap;
  font-size: 24px;
  outline: none;
  color: #fff;

  &:visited {
    color: #fff
  }
`;