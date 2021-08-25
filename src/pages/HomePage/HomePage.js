import React from 'react'
import { InfoSection, Slider, InfoExperience } from "../../components";
import { experienceData, introObj, educationData } from "./Data";
import { SliderData } from "../../components/Slider/Data"
const HomePage = () => {
  return (
    <>
      <InfoSection {...introObj} />
      {/* <InfoSection {...projectObj} /> */}
      <Slider slides={SliderData} />
      <InfoExperience experienceData={educationData} id="experience" />
      <InfoExperience experienceData={experienceData} lightBg="true" />
    </>
  );
}

export default HomePage
