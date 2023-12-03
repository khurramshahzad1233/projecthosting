import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";

const StepOne = ({ nextStep, previousStep, setFiles }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]); // Add new files to the existing selectedFiles array
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...files]); // Add new files to the existing selectedFiles array
  };

  const handleDelete = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
      nextStep();
    } else {
      setWarning(true);
      // alert("Please select a file before proceeding.");
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
            Upload the following files
          </h1>
          <div className="space-y-5">
            <div className="col-span-full">
              <div
                className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        multiple
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    any file up to 200MB
                  </p>
                </div>
              </div>
            </div>
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Selected Files:</h2>
                <ul className="list-disc pl-4">
                  {selectedFiles.map((file, index) => (
                    <li key={index}>
                      <div className="flex items-center">
                        <span className="mr-auto">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => handleDelete(index)}
                          className="ml-2 text-red-600 hover:text-red-500"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {warning === true && (
            <span style={{ color: "red" }}>Please add atleast one file</span>
          )}
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
          <Player
            autoplay
            loop
            src="/assets/lottiefiles/step-image-2.json"
            className="mx-auto w-[17.5rem] h-[17.5rem]"
          />
        </div>
      </div>
    </fieldset>
  );
};

export default StepOne;
