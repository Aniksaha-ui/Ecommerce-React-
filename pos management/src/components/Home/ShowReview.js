import React from "react";

const ShowReview = ({ review }) => {
  //   console.log(review);
  return (
    <div className="card w-lg-max shadow-xl bg-[#9da2bb] p-5">
      <h3 className="text-3xl text-white">{review.partsName}</h3>
      <div className="card-body text-white">
        <h2 className="text-center lg:text-3xl sm:text-2xl">
          {review.napartsName}
        </h2>
        <div className="flex align-center justify-center">
          <p className="text-center lg:text-2xl sm:text-xl">
            Name : {review.user}
          </p>
          <p className="text-center lg:text-2xl sm:text-xl">
            Review : {review.rating}
          </p>
        </div>

        <h3 className="text-xl font-bold">Comment : {review.description}</h3>
      </div>
    </div>
  );
};

export default ShowReview;
