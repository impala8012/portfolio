import React from "react";
import { Slider } from "../../components";
import { SliderData } from "../../components/Slider/Data";
const ProjectPage = () => {
  return (
    <>
      <Slider slides={SliderData} />
    </>
  );
};

export default ProjectPage;
