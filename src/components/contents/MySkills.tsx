import React from "react";

import { skills } from "@/lib/skills";
import { AnimationContainer } from "../animation-container";
import { ShowSkills } from "../show-skills";

const MySkills = () => {
  return (
    <div className="w-full relative pb-20 py-10 z-40">
      <AnimationContainer
        animation="slide-up"
        delay={0.1}
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Skills & Tools
          </h2>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-10">
            A creative problem solver with over 8 years of experience, I’ve
            worked across Frontend, Backend, and App development, mastering a
            wide range of technologies, libraries, and frameworks.
          </p>

          <p className="text-justify lg:leading-7 text-foreground/80 lg:text-start mt-4">
            Always eager to learn, I quickly adapt to new technologies, thriving
            in the ever-evolving tech landscape.
          </p>
        </div>
      </AnimationContainer>

      <div className="flex flex-col pt-10 w-full">
        <div className="flex flex-col flex-wrap items-start gap-5">
          {skills.map((skill, index) => (
            <AnimationContainer
              key={skill.title}
              delay={0.1 * index + 0.1}
              className="flex flex-col mb-4"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold">{skill.title}</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <ShowSkills stacks={skill.stack} />
                </div>
              </div>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
