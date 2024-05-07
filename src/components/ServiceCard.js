import React from "react";

const ServiceCard = (props) => {
  const { logo, heading, subHeading } = props;
  return (
    <div className="md:w-3/12 min-w-[300px] shadow-md p-3 rounded-md hover:shadow-xl">
      <div className="logo border-[8px] border-blue-600 h-20 w-20 rounded-full flex justify-center align-middle hover:bg-blue-600 hover:text-white m-auto my-4">
        <i className={`${logo} text-center m-auto text-2xl`}></i>
      </div>
      <div className="heading text-center text-xl font-serif my-3">
        <h1>{heading}</h1>
      </div>
      <div className="text text-justify font-light italic p-2 text-md">
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
