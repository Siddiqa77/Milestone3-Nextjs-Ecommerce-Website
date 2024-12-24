import React from 'react'

const About = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font wrapper">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 bg-[#F9F1E7]">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="/aboutpic1.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 family">
        Know About Us
       
      </h1>
      <p className="mb-8 leading-relaxed poppins">
      Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.


      </p>
      <div className="flex justify-center">
        <button className="inline-flex px-8 md:px-10 py-3 md:py-4 bg-[#B88E2F] poppins text-[#fff] text-[16px] font-medium rounded-sm hover:bg-amber-700  hover:font-bold">
          Button
        </button>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About