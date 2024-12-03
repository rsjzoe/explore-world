import { PropsWithChildren } from "react";
import "./landing.css";
import { H2, P } from "../typography/typography";

export function Landing({}: LandingProps) {
  return (
    <>
      <div className="landing-container">
        <div className="background-carousel">
            <img src="3.jpg" alt="" />
        </div>
        <div className="title-container">
          <P>Sierra Nevada United States</P>
          <H2>YOSEMITE NATIONAL PARK</H2>
          <P>
            Lorem ipsum dolor sit amet adipisicing elit. Odio, eius excepturi!
            Iure molestiae minima voluptates?
          </P>
        </div>
        <div className="carousel-container">
          <div className="img-container">
            <div className="img-carousel one">
              <img src="bg1.jpg" alt="" />
            </div>
            <div className="img-carousel">
              <img src="bg2.jpg" alt="" />
            </div>
            <div className="img-carousel">
              <img src="bg3.jpg" alt="" />
            </div>
            <div className="img-carousel">
              <img src="bg1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type LandingProps = PropsWithChildren<{}>;
