"use client"

import Link from "next/link";

export default function ConfirmPayment() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Payment Confirmation</h1>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Thank you for your purchase!</h2>
          <p className="text-gray-700 mb-4">
            Your payment has been successfully processed. A confirmation email has been sent to your registered email address.
          </p>
          <Link href="/"><button className="bg-green-500 text-white py-2 px-4 rounded">
            Return to Home
          </button></Link>
        </div>
      </div>
    );
  }