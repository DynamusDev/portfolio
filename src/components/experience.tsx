import { TimeLine, TimeLineItem } from "./exp-timeline";

export const Experience = () => {
  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        <TimeLineItem active>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Software Engineer at iFood
            </span>{" "}
            • <span className="text-neutral-200">2022 - Current</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Developed with technologies such as NextJS, ReactJS, SASS,
            CSS-IN-JS, Faster, Datalake, GraphQL, and NodeJS (ExpressJS).
            <br />
            Contributed significantly to the homepage development and user
            experience improvements.
            <br />
            <strong>MarTech Experience:</strong> Implemented data-driven
            decisions for dynamic homepages, enhancing user engagement and
            conversion rates through A/B testing and analytics.
            <br />
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Full-stack Engineer at Baires Dev
            </span>{" "}
            • <span className="text-neutral-200">2021 - 2022</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Worked on the Myriad Genetics client as a full-stack developer using
            Typescript, ReactJS, GraphQL, and Python on projects for patients
            and doctors.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Front-end Engineer at Mevo Health
            </span>{" "}
            • <span className="text-neutral-200">2021 - 2022</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Led the front-end team for two major products, collaborating with
            product staff on research and testing to improve user experience.
            <br />
            Responsible for the first A/B tests (using Google Optimize) to
            increase purchase conversion rates in sensitive user products.
            <br />
            <strong>MarTech Experience:</strong> Utilized Google Optimize,
            Google Analytics, GTM, and AWS for A/B testing and user experience
            improvements, significantly enhancing the company's e-commerce
            performance.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Full-Stack Engineer at 5A Attiva
            </span>{" "}
            • <span className="text-neutral-200">2021 - 2021</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Developed for TORO Investimentos client, focusing on fraud
            assessment using NestJS and ReactJS.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem last>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Full-Stack Engineer & Technical leader at Helicidade heliport
            </span>{" "}
            • <span className="text-neutral-200">2018 - 2020</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Oversaw the design, development, and testing of the heliport
            management application using Typescript, NodeJS, ReactJS, and
            React-Native.
          </TimeLineItem.Description>
        </TimeLineItem>
      </TimeLine>
    </div>
  );
};
