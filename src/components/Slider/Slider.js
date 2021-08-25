import React,{useState} from 'react'
import {
  SliderContainer,
  Img,
  RightArrow,
  LefttArrow,
  ImageContainer,
  ImgInfo,
  ImgInfoTitle,
  ImgInfoContent,
  ImgInfoLinks,
  ImgInfoLink,
  SliderTitle,
  SliderContent,
  SliderTextWrapper,
} from "./Slider.element";
import { SliderData } from "./Data";

const Slider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

  if(!Array.isArray(slides) || length <= 0 ) {
    return null;
  }
  return (
    <SliderContainer>
      <SliderTextWrapper id="projects">
        <SliderTitle>我的作品</SliderTitle>
        {/* <SliderContent>一共有四個作品，可以按左右箭頭查看</SliderContent> */}
      </SliderTextWrapper>
      <RightArrow onClick={prevSlide} />
      <LefttArrow onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <ImageContainer active={index === current ? true : false} key={index}>
            {index === current && (
              <>
                <Img src={slide.image} alt="image" />
                <ImgInfo>
                  <ImgInfoTitle>{slide.title}</ImgInfoTitle>
                  <ImgInfoContent>{slide.content}</ImgInfoContent>
                  <ImgInfoLinks>
                    <ImgInfoLink href={slide.demo}>demo</ImgInfoLink>
                    <ImgInfoLink href={slide.github}>github</ImgInfoLink>
                  </ImgInfoLinks>
                </ImgInfo>
              </>
            )}
          </ImageContainer>
        );
      })}
    </SliderContainer>
  );
}

export default Slider
