import React from "react";

const RoadMapPahse = (props) => {
    return (
    <div className='bg-[#393547] py-5 px-10 lg:px-5 flex flex-col justify-center'>
    <span className={`${props.color} w-12 h-12 mx-auto pt-1 text-[#3C3C40] rounded-full  text-2xl font-black text-center`}>{props.title}</span>
    <div className='  text-white py-5 text-center text-lg  '>
    <p>KYC integration</p>
    <p>KYC integration</p>
    </div>
    </div>


  );
};

export default RoadMapPahse;
