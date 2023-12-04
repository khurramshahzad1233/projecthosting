import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import RegisterModal from "./RegisterModal";
import UserMenu from "../menus/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../../features/user/userSlice";
import Swal from "sweetalert2";
import { GoogleLogin } from "@react-oauth/google";

const LoginModal = () => {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cancelButtonRef = useRef(null);

  const loginsuccess = async (res) => {
    const token = res.credential;
    try {
      const response = await axios.post(
        "/api/google/new",
        { token }
      );
      console.log(response)
       localStorage.setItem("auth", JSON.stringify(response.data));
        dispatch(login(response.data));
        console.log(response.data)
        setOpen(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const onloginerror = (res) => {
    console.log(res);
    Swal.fire({
      icon:"error",
      title:"opps...",
      text:"newwork issue, try again please"
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { email: email, password: password };
    axios
      .post("/api/user/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch(login(res.data));
        // console.log(res.data)
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.message,
        });
        setOpen(false);
      });
    // setAuth(true);
    // setOpen(false);
  };

  const handleLoginModal = () => {
    setSignUpModal(false);
    setOpen(true);
  };

  const handleSignUpModal = () => {
    setSignUpModal(true);
    setOpen(false);
  };

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:flex">
        {user?.authenticated === true ? (
          <UserMenu Logout={() => setAuth(false)} />
        ) : (
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="flex text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        )}
      </div>

      {/* mobile view */}
      <div className="block lg:hidden">
        {user?.authenticated === true ? (
          <UserMenu Logout={() => setAuth(false)} />
        ) : (
          <button
            onClick={() => setOpen(true)}
            type="button"
            className="block -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Log in
          </button>
        )}
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <fieldset>
                    <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
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

                      <div>
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

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">
                      Not registered?{" "}
                      <button
                        type="button"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        onClick={handleSignUpModal}
                      >
                        Create account
                      </button>
                    </p>
                    <div className="mt-6 text-center text-sm text-gray-500">
                      <GoogleLogin
                        onSuccess={loginsuccess}
                        onError={onloginerror}
                      />
                      ;
                    </div>
                  </fieldset>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <RegisterModal
        open={signUpModal}
        onClose={() => setSignUpModal(false)}
        loginButton={handleLoginModal}
      />
    </>
  );
};

export default LoginModal;
