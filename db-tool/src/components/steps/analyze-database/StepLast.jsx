import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StepLast = ({ previousStep, information, files, analytic, userInfo }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    const formdata = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append("files", files[i]);
    }

    formdata.append("email", userInfo?.email);
    formdata.append("systeminformation", information);
    formdata.append("analysisoption", analytic);

    axios
      .post("/api/aws/uploadfile", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        navigate("/");
        Swal.fire("Perfect!", "Your Data has been submitted!", "success");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something Went wrong",
        });
      });
  };

  return (
    <fieldset>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">
            Customer request
          </h1>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-3">
              <h2 className="mb-2 text-lg font-semibold">
                What do you want to do ?
              </h2>
              <ul className="pl-5 list-disc text-base font-medium capitalize grid md:grid-cols-2 gap-2">
                {/* <li>
                  <h5>Information</h5>
                  <ol className="mt-1 text-sm space-y-1 list-disc pl-4">
                    <li>
                      <span>Sub Item 1</span>
                    </li>
                    <li>
                      <span>Sub Item 2</span>
                    </li>
                  </ol>
                </li> */}
                {information?.map((item) => (
                  <li>
                    <h5>{item}</h5>
                  </li>
                ))}
                {/*                
                <li>
                  <h5>Find Dependencies</h5>
                </li> */}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h2 className="mb-2 text-lg font-semibold">Uploaded Files</h2>
              <ul className="pl-5 list-disc text-base font-medium grid md:grid-cols-2 gap-2">
                {files?.map((item) => (
                  <li>
                    <h5>{item?.name}</h5>
                  </li>
                ))}

                {/* <li>
                  <h5>icon-3.jpg</h5>
                </li>
                <li>
                  <h5>icon-4.jpg</h5>
                </li>
                <li>
                  <h5>user-1.jpg</h5>
                </li> */}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h2 className="mb-2 text-lg font-semibold">
                Analytic Information
              </h2>
              <ul className="pl-5 list-disc text-base font-medium capitalize grid md:grid-cols-2 gap-2">
                {/* <li>
                  <h5>Information</h5>
                  <ol className="mt-1 text-sm space-y-1 list-disc pl-4">
                    <li>
                      <span>Sub Item 1</span>
                    </li>
                    <li>
                      <span>Sub Item 2</span>
                    </li>
                  </ol>
                </li> */}
                {analytic?.map((item) => (
                  <li>
                    <h5>{item}</h5>
                  </li>
                ))}
                {/*                
                <li>
                  <h5>Find Dependencies</h5>
                </li> */}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3">
              <h2 className="mb-2 text-lg font-semibold">
                Customer information
              </h2>
              <ul className="text-base font-medium  grid md:grid-cols-2 gap-2">
                <li>
                  <div>
                    <h6 className="mb-1 text-gray-600">Full Name:</h6>
                    <h6 className="capitalize">
                      {userInfo?.firstName} {userInfo?.lastName}
                    </h6>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="mb-1 text-gray-600">Email:</h6>
                    <h6>{userInfo?.email}</h6>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="mb-1 text-gray-600">Phone Number:</h6>
                    <h6>{userInfo?.phoneNumber}</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="mt-8 flex items-center gap-4 justify-between">
            <button
              type="button"
              onClick={previousStep}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={onSubmit}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Player autoplay loop src="/assets/lottiefiles/step-image-4.json" />
        </div>
      </div>
    </fieldset>
  );
};

export default StepLast;
