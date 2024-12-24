import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div>
      <div className="w-[1440px] h-[270px] py-[100px] bg-[#faf3ea] flex-col justify-between items-center inline-flex">
        <div className="w-[1334px] justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="w-[60px] h-[60px] relative  overflow-hidden" />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <Image src="/supportpic1.png"
              alt="supportpic"
              width={20}
              height={20}
              
              
              />
              <div className="text-[#242424] text-xl font-semibold poppins leading-[37.50px]">
                High Quality
              </div>
              <div className="text-[#898989] text-xl font-medium font-['Poppins'] leading-[30px]">
                crafted from top materials
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="w-[60px] h-[60px] relative  overflow-hidden" />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="text-[#242424] text-[25px] font-semibold poppins leading-[37.50px]">
                Warranty Protection
              </div>
              <div className="text-[#898989] text-xl font-medium poppins leading-[30px]">
                Over 2 years
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-2.5 flex">
            <div className="w-[60px] h-[60px] relative  overflow-hidden" />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="text-[#242424] text-[25px] font-semibold poppins leading-[37.50px]">
                Free Shipping
              </div>
              <div className="text-[#898989] text-xl font-medium font-['Poppins']poppins leading-[30px]">
                Order over 150 $
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2.5 flex">
            <div className="w-[60px] h-[60px] relative  overflow-hidden" />
            <div className="flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="text-[#242424] text-[25px] font-semibold poppins leading-[37.50px]">
                24 / 7 Support
              </div>
              <div className="text-[#898989] text-xl font-medium poppins leading-[30px]">
                Dedicated support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
