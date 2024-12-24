import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] py-12 px-8 poppins tracking-wide wrapper">
    <div className="max-w-screen-xl mx-auto">
      <div className="grid max-sm:grid-cols-1 lg:grid-cols-3 items-center gap-8">
        <h4 className="lg:col-span-2 text-lg font-semibold text-[#000] leading-relaxed poppins">Join our newsletter to keep up to date with us!<br /> Enter your email Subscribe</h4>
        <div className="bg-transparent border border-gray-600 flex px-1 py-1 rounded-full max-lg:max-w-md">
          <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent pl-4 text-sm text-gray-400" />
          <button type='button'
            className=" bg-[#B88E2F] poppins text-[#fff] text-sm font-medium  hover:bg-amber-700 rounded-full px-4 py-2 poppins hover:font-bold">Subscribe</button>
        </div>
      </div>

      <hr className="my-12 " />

      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8">
        <div className="text-xl sm:text-2xl font-bold text-[#000] family">
         <Link href="/">
         E-Market
         </Link>
          <p className="text-gray-400 leading-relaxed text-sm lg:max-w-sm mt-6 poppins">Lorem ipsum dolor sit amet consectetur adipiscing elit.
            .</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-white family">Services</h4>
          <ul className="space-y-4 ">
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Web
              Development</a></li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Mobile App
              </a></li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">UI/UX
              Design</a></li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Digital Marketing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-white family">About Us</h4>
          <ul className="space-y-4 ">
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Our Story</a>
            </li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Mission and
              Values</a></li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Team</a></li>
            <li><a href="#" className="text-gray-400 font-semibold hover:text-[#000] text-[16px] poppins">Testimonials</a></li>
          </ul>
        </div>
      </div>

      <p className='text-[16px] text-gray-600 mt-8 poppins'>© E-Market. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
