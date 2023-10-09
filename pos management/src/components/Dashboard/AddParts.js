import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddParts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";

  const onSubmit = async (data) => {
    // console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            minQuantity: data.minQuantity,
            availableQuantity: data.availableQuantity,
            description: data.description,
            price: data.price,
            img: img,
          };
          // send to your database
          fetch("http://manufactureing.sahacompany.site/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Parts added successfully");
                reset();
              } else {
                toast.error("Failed to add the Parts");
              }
            });
        }
      });
  };

  return (
    <div class="flex justify-center mt-20">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 className="text-2xl">Add a New Parts</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">minQuantity</span>
              </label>
              <input
                type="text"
                placeholder="Enter Minimum Quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("minQuantity", {
                  required: {
                    value: true,
                    message: "minQuantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.minQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minQuantity.message}
                  </span>
                )}
                {errors.minQuantity?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.minQuantity.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">availableQuantity</span>
              </label>
              <input
                type="availableQuantity"
                placeholder="Your availableQuantity"
                className="input input-bordered w-full max-w-xs"
                {...register("availableQuantity", {
                  required: {
                    value: true,
                    message: "availableQuantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.availableQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.availableQuantity.message}
                  </span>
                )}
                {errors.availableQuantity?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.availableQuantity.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <input
                type="text"
                placeholder="Your description"
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
                {errors.description?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">price</span>
              </label>
              <input
                type="text"
                placeholder="Your price"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
                {errors.price?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddParts;
