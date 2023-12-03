import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const StepOne = ({ nextStep, setInformation }) => {
  const [warning, setWarning] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    {
      id: "Information",
      label: "Information",
      checked: false,
      subitems: [
        { id: "subitem1", label: "Subitem 1", checked: true },
        { id: "subitem2", label: "Subitem 2", checked: true },
        // Add more subitems as needed
      ],
    },
    {
      id: "Security",
      label: "Security",
      checked: false,
    },
    {
      id: "Performance",
      label: "Performance",
      checked: false,
    },
    {
      id: "Bestpractices",
      label: "Best practices",
      checked: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      });
    });
  };

  const handleSubitemChange = (checkboxId, subitemId) => {
    setCheckboxes((prevCheckboxes) => {
      return prevCheckboxes.map((checkbox) => {
        if (checkbox.id === checkboxId) {
          return {
            ...checkbox,
            subitems: checkbox.subitems.map((subitem) => {
              if (subitem.id === subitemId) {
                return { ...subitem, checked: !subitem.checked };
              }
              return subitem;
            }),
          };
        }
        return checkbox;
      });
    });
  };

  const isAnyCheckboxChecked = checkboxes.some((checkbox) => checkbox.checked);

  const handleSubmit = () => {
    if (isAnyCheckboxChecked) {
      const selected = checkboxes
        .filter((item) => item.checked === true)
        .map((v) => v?.id);
      setInformation(selected);

      nextStep();
    } else {
      // alert("Please select at least one option.");
      setWarning(true);
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
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">
            What do you want to do ?
          </h1>
          {/* == */}
          <div className="space-y-5">
            {checkboxes.map((checkbox) => (
              <div key={checkbox.id}>
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id={checkbox.id}
                      name={checkbox.id}
                      type="checkbox"
                      className="h-6 w-6 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor={checkbox.id}
                      className="font-medium text-gray-900 text-lg capitalize"
                    >
                      {checkbox.label}
                    </label>
                  </div>
                </div>
                {checkbox.checked &&
                  checkbox.subitems &&
                  checkbox.subitems.length > 0 && (
                    <div className="ml-6 space-y-3 mt-3">
                      {checkbox?.subitems.map((item) => (
                        <div
                          key={item.id}
                          className="relative flex items-start"
                        >
                          <div className="flex h-6 items-center">
                            <input
                              id={item.id}
                              name={item.id}
                              type="checkbox"
                              className="h-5 w-5 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                              checked={item.checked}
                              onChange={() =>
                                handleSubitemChange(checkbox.id, item.id)
                              }
                            />
                          </div>
                          <div className="ml-3">
                            <label
                              htmlFor={item.id}
                              className="font-medium text-gray-900 text-base capitalize"
                            >
                              {item.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
          {warning === true && (
            <span style={{ color: "red" }}>Please select one</span>
          )}
          {/* buttons */}
          <div className="mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-base font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </div>
        {/* image */}
        <div className="hidden md:block">
          <Player
            autoplay
            loop
            src="/assets/lottiefiles/step-image-1.json"
            className="h-full w-full"
          />
        </div>
      </div>
    </fieldset>
  );
};

export default StepOne;
