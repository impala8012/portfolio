import React from 'react'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Time,
  Content,
} from "./InfoExperience.element";
import {Container} from "../../globalStyles"

function InfoExperience({
  id,
  experienceData,
}) {
  console.log("experienceData", experienceData);
  return (
    <>
      <InfoSec lightBg={experienceData[0].lightBg} id={id}>
        <Container>
          {experienceData.map((data) => {
            return (
              <InfoRow key={data.id}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={data.lightTopLine}>
                      {data.topLine}
                    </TopLine>
                    <Heading lightText={data.lightText}>
                      {data.headLine}
                    </Heading>
                    <Subtitle lightTextDesc={data.lightTextDesc}>
                      {data.description}
                    </Subtitle>
                    <Time lightText={data.lightText}>{data.time}</Time>
                    <Content lightText={data.lightText}>{data.content}</Content>
                  </TextWrapper>
                </InfoColumn>
              </InfoRow>
            );
          })}
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoExperience;
