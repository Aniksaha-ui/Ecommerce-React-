import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3OdsLhL6pNaUOFEDJFYQyg2Ngn6teUQ0hUMyKCUWi6wtQ68cTljmyOreOULjr9MYmvZdrI70wjUdqMqv6Ocvmq00Iq4YYiAH"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://manufactureing.sahacompany.site/purchase/${id}`;

  const { data: purchase, isLoading } = useQuery(["purchase", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="flex justify-center">
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <p className="text-success font-bold">
              You are pay for - {purchase.name}
            </p>
            <p>
              Dear {purchase.username} you purchase
              <span className="text-orange-700">{purchase.quantity}</span> which
              indivial price is - {purchase.price}
            </p>
            <p>So,Please pay: ${purchase.quantity * purchase.price}</p>
          </div>
        </div>
      </div>

      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchase={purchase} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
