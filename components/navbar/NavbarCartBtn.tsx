"use client";

import Link from "next/link";
import { useState } from "react";

const NavbarBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsModalOpen((prev) => !prev)}
        id="myCartDropdownButton1"
        data-dropdown-toggle="myCartDropdown1"
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
      >
        <span className="sr-only">Cart</span>
        <svg
          className="w-5 h-5 lg:me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
        <span className="hidden sm:flex">My Cart</span>
        <svg
          className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {isModalOpen && (
        <div
          id="myCartDropdown1"
          className="absolute top-13 right-2 w-[300px] z-10 mx-auto space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800"
        >
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
              >
                Apple iPhone 15
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $599
              </p>
            </div>

            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>

              <button
                data-tooltip-target="tooltipRemoveItem1a"
                type="button"
                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
              >
                <span className="sr-only"> Remove </span>
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="tooltipRemoveItem1a"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              >
                Remove item
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
              >
                Apple iPad Air
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $499
              </p>
            </div>

            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>

              <button
                data-tooltip-target="tooltipRemoveItem2a"
                type="button"
                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
              >
                <span className="sr-only"> Remove </span>
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="tooltipRemoveItem2a"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              >
                Remove item
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>

          <Link
            href="/checkout"
            onClick={() => setIsModalOpen(false)}
            title=""
            aria-label="go to  checkout"
            className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white "
            role="button"
          >
            {" "}
            Proceed to Checkout{" "}
          </Link>
          <button
            onClick={() => setIsModalOpen((prev) => !prev)}
            type="button"
            className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white "
            role="button"
          >
            {" "}
            Close{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarBtn;
