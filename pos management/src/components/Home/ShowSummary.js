import React from "react";

const ShowSummary = ({
  background,
  img,
  backgroundClass,
  summaryTitle,
  value,
}) => {
  return (
    <div className={`card w-lg-max shadow-xl ${backgroundClass}`}>
      <div className="flex align-center justify-center pt-5">
        <img src={img} alt="Album" />
      </div>
      <div className="card-body text-white">
        <h2 className="text-center lg:text-3xl sm:text-2xl">{summaryTitle}</h2>
        <p className="text-center lg:text-2xl sm:text-xl">{value}</p>
      </div>
    </div>
  );
};

export default ShowSummary;
