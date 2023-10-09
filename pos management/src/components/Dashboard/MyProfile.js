import React, { useRef } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const linkdinRef = useRef("");
  const facebookRef = useRef("");
  const phoneRef = useRef("");
  const educationRef = useRef("");
  const locationRef = useRef("");
  const [user] = useAuthState(auth);
  const email = user.email;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};
    data.linkdin = linkdinRef.current.value;
    data.facebook = facebookRef.current.value;
    data.phone = phoneRef.current.value;
    data.education = educationRef.current.value;
    data.location = locationRef.current.value;
    fetch(`http://manufactureing.sahacompany.site/profile?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.acknowledged === true) {
          toast(`Your Profile Updated Successfully ${user.email}`);
        }
      });
  };
  return (
    <>
      <h3 class="text-2xl">{user.displayName}</h3>
      <h2 class="text-xl">{user.email}</h2>
      <div class="flex justify-center mt-20">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 class="card-title">Update Profile</h2>

            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter linkdin profile"
                  ref={linkdinRef}
                  className="input input-bordered w-96 max-w-xs"
                  required
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter facebook link"
                  ref={facebookRef}
                  className="input input-bordered w-96 max-w-xs"
                  required
                />
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  ref={phoneRef}
                  className="input input-bordered w-96 max-w-xs"
                  required
                />
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter your education"
                  ref={educationRef}
                  className="input input-bordered w-96 max-w-xs"
                  required
                />
              </div>

              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter Location"
                  ref={locationRef}
                  className="input input-bordered w-96 max-w-xs"
                  required
                />
              </div>

              <br />
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Update Profile"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
