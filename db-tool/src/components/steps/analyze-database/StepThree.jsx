import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const StepThree = ({ nextStep, previousStep, setUserInfo }) => {
  const [warning, setWarning] = useState(false);
  const handleSubmit = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (!firstName || !lastName || !email || !phoneNumber) {
      setWarning(true);
      // alert("Please fill in all fields before proceeding.");
    } else {
      let data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      };

      setUserInfo(data);
      nextStep();
    }
  };

  useEffect(() => {
    if (warning === true) {
      const timeoutId = setTimeout(() => {
        setWarning(false); // Change myState after 2 seconds
        // Reset triggerChange
      }, 1000); // 2000 milliseconds = 2 seconds

      // Cleanup function to clear the timeout if triggerChange changes before the timeout
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [warning]);

  return (
    <fieldset>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">
            Customer information
          </h1>
          <ul className="grid md:grid-cols-2 gap-4">
            <li>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your first name"
                />
              </div>
            </li>
            <li>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your last name"
                />
              </div>
            </li>
            <li>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </li>
            <li>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your phone number"
                />
              </div>
            </li>
          </ul>
          {warning === true && (
            <span style={{ color: "red" }}>Please fill all fields</span>
          )}
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
              onClick={handleSubmit}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Player autoplay loop src="/assets/lottiefiles/step-image-3.json" />
        </div>
      </div>
    </fieldset>
  );
};

export default StepThree;
