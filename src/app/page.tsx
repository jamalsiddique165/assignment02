export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 bg-[#252B42] overflow-hidden">

      {/* Navigation bar */}
      <nav className="p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <div className="text-white text-[24px] font-bold mt-2 font-[#Montserrat]">
            <span>BrandName</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 gap-10 text-white text-[14px] leading-[24px] font-[#Montserrat]">
            <span className="hover:text-[#cccccc]">Home</span>
            <span className="hover:text-[#cccccc]">Product</span>
            <span className="hover:text-[#cccccc]">Pricing</span>
            <span className="hover:text-[#cccccc]">Contact</span>
          </div>

          {/* Login and Join Us Buttons */}
          <div className="flex space-x-4">
            <span className="text-[#ffffff] text-[14px] hover:text-[#cccccc] font-[#Montserrat] mt-2">Login</span>
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded text-[14px] font-[#Montserrat] ">
              JOIN US
            </button>
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center gap-10 mt-8 sm:mt-16">
        <div className="text-center">
          <div className="text-[#35A6F0] text-[16px] font-bold">Welcome</div>
          <p className="text-[32px] sm:text-[42px] lg:text-[58px] font-bold text-[#ffffff] leading-[40px] sm:leading-[56px] mt-4 font-[#Montserrat]">
            Selling on the <br /> internet like a pro
          </p>
          <p className="text-[#ffffff] mt-4 max-w-[90%] sm:max-w-[542px] mx-auto leading-[30px] font-[#Montserrat]">
            We know how large objects will act, but things on a <br /> small scale just do not act that way.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mt-10 justify-center items-center">
            <button className="bg-[#23A6F0] text-[#FFFFFF] hover:text-[#cccccc] px-6 py-2 rounded font-[#Montserrat]">Get Quote Now</button>
            <button className="border border-[#23A6F0] text-[#23A6F0] hover:text-[#cccccc] px-6 py-2 rounded font-[#Montserrat]">Learn More</button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center mt-9 gap-5 mb-9 mr-10 ml-10">
          {/* First Card */}
          <div className="bg-[#ffffff] text-black p-6 rounded-lg shadow-md w-full sm:w-[328px]">
            <div className="w-20 h-20 rounded-xl bg-[#FfDCD1] mx-auto mb-4 ml-2"></div>
            <h2 className="font-bold mt-4 font-[#Montserrat]">Training Courses</h2>
            <div className="h-[2px] bg-[#E74040] w-[50px] my-2"></div>
            <p className="font-[#Montserrat]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          {/* Second Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full sm:w-[328px]">
            <div className="w-20 h-20 rounded-xl bg-[#B9EAAB] mx-auto mb-4 ml-2"></div>
            <h2 className="font-bold mt-4 font-[#Montserrat]">2,769 Online Courses</h2>
            <div className="h-[2px] bg-[#E74040] w-[50px] my-2"></div>
            <p className="font-[#Montserrat]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          {/* Third Card */}
          <div className="bg-[#35A6F0] text-white p-6 rounded-lg shadow-md w-full sm:w-[328px]">
            <div className="w-20 h-20 rounded-xl bg-[#ffffff] mx-auto mb-4 ml-2"></div>
            <h2 className="font-bold mt-4 font-[#Montserrat]">Special Feature</h2>
            <div className="h-[2px] bg-[#ffffff] w-[50px] my-2"></div>
            <p className="font-[#Montserrat]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
        </div>
      </div>
    </div>
  );
}