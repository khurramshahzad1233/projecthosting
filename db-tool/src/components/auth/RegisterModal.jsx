import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";

const RegisterModal = ({ open, onClose, loginButton }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const cancelButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    } else {
      let data = { email: email, password: password };
      axios
        .post("/api/user/register", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("auth", JSON.stringify(res.data));
          dispatch(login(res.data));
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err?.response?.data?.message,
          });
        });
      onClose();
    }

    // onClose();
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <fieldset>
                    <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign up to your account
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col">
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First name
                          </label>
                          <div className="mt-2">
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <label
                            htmlFor="LastName"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="mt-2">
                            <input
                              id="LastName"
                              name="LastName"
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Phone Number
                          </label>
                          <div className="mt-2">
                            <input
                              id="phone-number"
                              name="phone-number"
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autoComplete="current-password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col">
                          <div className="flex items-center justify-between">
                            <label
                              htmlFor="confirm-password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Confirm password
                            </label>
                          </div>
                          <div className="mt-2">
                            <input
                              id="confirm-password"
                              name="confirm-password"
                              type="password"
                              autoComplete="current-password"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              required
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">
                      Already have an Account?{" "}
                      <button
                        onClick={loginButton}
                        type="button"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Login here
                      </button>
                    </p>
                  </fieldset>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default RegisterModal;
