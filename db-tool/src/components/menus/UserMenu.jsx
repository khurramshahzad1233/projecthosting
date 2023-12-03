import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";

const UserMenu = () => {
  const user = useSelector((state) => state.user.user.user);
  console.log(user)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div className="flex items-center gap-3">
          <Menu.Button className="relative flex rounded-full bg-indigo-500 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
            <span className="absolute -inset-1.5" />
            <span className="flex items-center justify-center h-8 w-8 rounded-full text-white font-medium text-lg">
              N
            </span>
          </Menu.Button>
          <div>
            <span class="block text-xs text-gray-500">Signed in as</span>
            <span class="mt-0.5 font-semibold text-xs">{user?.email}</span>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <p class="truncate px-3.5 py-3">
                <span class="block text-xs text-gray-500">Signed in as</span>
                <span class="mt-0.5 font-semibold text-xs">{user?.email}</span>
              </p>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={handleLogout}
                type="button"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Sign out
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserMenu;
