import { AnimationContainer } from "./animation-container";

export const AboutMe = () => {
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            About Me
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            I'm a software developer and designer passionate about creating
            seamless, visually stunning digital experiences. With expertise in
            React and React Native, I build responsive web and mobile
            applications that blend functionality with elegant design. When I'm
            not coding, I'm refining interfaces in Figma, always aiming for the
            perfect balance between form and function. Let's build something
            amazing! 🚀
          </p>
        </div>
      </AnimationContainer>
    </div>
  );
};
