import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ShowReview from "./ShowReview";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://manufactureing.sahacompany.site/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-20">
      <div className="flex align-center justify-center mb-8">
        <h3 className="text-4xl text-secondary text-center font-bold">
          Review - ({reviews.length})
        </h3>
      </div>
      <div className="mt-8 px-12 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
