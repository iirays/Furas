import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            eius maiores totam atque, non enim, unde corporis pariatur dicta,
            voluptas voluptatum. Sint asperiores quos, voluptatum a similique
            illum exercitationem earum.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, et,
          earum, optio sit repudiandae distinctio corrupti nisi inventore modi
          qui fugit ullam est perferendis incidunt debitis libero voluptates
          iste labore?
        </p>
      </div>
    </div>
  );
};

export default About;
