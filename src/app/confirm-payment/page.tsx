"use client";

import Link from "next/link";

export default function ConfirmPayment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 family">
          Payment Confirmation
        </h1>
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-4 poppins">
          Thank you for your purchase!
        </h2>
        <p className="text-gray-700 text-center mb-6 poppins">
          Your payment has been successfully processed. A confirmation email has
          been sent to your registered email address.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <button className="px-6 py-3 w-full poppins max-w-xs md:px-10 md:py-4 bg-[#B88E2F] text-white text-base font-medium rounded-md hover:bg-amber-700 hover:font-bold transition duration-200">
              Payment Confirm
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}