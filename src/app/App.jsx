import React from "react";

const App = () => {
  return (
    <div className="relative mx-auto w-[1440px]">
      <div className="w-[1440px] h-[80px] bg-[#095F59] flex justify-between">
        <div className="font-[700] text-[35px] text-white ml-5 mt-2">SHEY</div>
        <div className="text-white w-[328px] mr-4">
          <ul className="flex justify-between mt-6 mr-6 font-[600] text-[20px] opacity-90">
            <li>Home</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="w-[554px] h-[531px] absolute left-[430px] top-[250px] flex flex-col justify-center items-center shadow-xl z-10 bg-[#FFFFFF] opacity-90">
        <div className="font-[600] text-[70px] text-[#095f59] self-start ml-14">
          LOGIN
        </div>
        <form className="flex flex-col gap-4 mb-7">
          <input
            type="text"
            id
            placeholder="Username"
            className="p-3 border w-[440px] h-[59px] rounded-xl"
            name
          ></input>
          <input
            type="text"
            id
            placeholder="Password"
            className="p-3 border w-[440px] h-[59px] rounded-xl"
            name
          ></input>
        </form>
        <button className="w-[222.8px] h-[54.3px] text-white rounded-xl bg-[#095F59] self-start ml-14">
          LOGIN
        </button>
        <div className="flex mt-10">
          <div className="w-[200.23px] h-[0px] border border-solid border-black mt-4 mr-2"></div>
          <div className="font-[600] text-[25px] ">OR</div>
          <div className="w-[200.23px] h-[0px] border border-solid border-black mt-4 ml-2"></div>
        </div>
        <div className="w-[141.51px] h-[26.3px] flex justify-between mt-5">
          <img
            src="./google.png"
            alt="google"
            style={{ width: "30.11px", height: "26px" }}
          />
          <img
            src="./fbook.png"
            alt="google"
            style={{ width: "30.11px", height: "26px" }}
          />
        </div>
        <div className="text-[#095F59] font-[600] text-[20px] opacity-75 mt-5">
          Not yet registered, Click here to sign up
        </div>
      </div>
      <div className="absolute top-[350px]">
        <img
          src="./Nameless.png"
          alt="trapezoid"
          style={{ height: "500px", width: "1440px" }}
        />
      </div>
      <div className="border-[25px] border-solid border-[#02B94B] w-[185px] h-[185px] bg-[#095F59] rounded-full opacity-10 absolute top-[400px] left-[110px]"></div>
      <div className="border-[25px] border-solid border-[#02B94B] w-[185px] h-[185px] bg-[#095F59] rounded-full opacity-10 absolute top-[700px] left-[1310px]"></div>
      <div className="w-[1480px] h-[95px] absolute top-[850px] bg-[white] z-1"></div>
      <div className="w-[240px] h-[770px] absolute bg-[white] z-1 left-[1440px]"></div>
    </div>
  );
};

export default App;
