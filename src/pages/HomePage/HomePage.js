import React from 'react'
import { InfoSection, Slider, Pricing, InfoExperience } from "../../components";
import { experienceData, introObj, educationData, projectObj } from "./Data";
import { SliderData } from "../../components/Slider/Data"
const HomePage = () => {
  return (
    <>
      <InfoSection {...introObj} />
      <InfoSection {...projectObj} />
      <InfoExperience experienceData={educationData} />
      <Slider slides={SliderData} />
      <Pricing />
      <InfoExperience experienceData={experienceData} lightBg="true" id="experience"/>
    </>
  );
}

export default HomePage
