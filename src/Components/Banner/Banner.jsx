import { Typewriter } from "react-simple-typewriter";
import myPic from "../../assets/mypic4.png";

const Banner = () => {
  return (
    <div className="text-white container min-h-screen flex flex-col-reverse md:flex-row justify-around items-center">
      <div className="w-full flex flex-col space-y-3 ">
        <h1 className="text-3xl mx-4 sm:text-5xl md:text-5xl lg:text-6xl bg-cyan-300/30 w-fit px-6 rounded-t-[500px] rounded-l-[500px]">
          Hello, <span className="text-navtext">MySelf</span>{" "}
        </h1>
        <h1 className="w-full whitespace-nowrap text-4xl mx-4 text-center md:text-left md:text-5xl lg:text-7xl text-navtext">Abdullah Al Nafiu</h1>
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl flex items-center" >
          <span className="text-navtext text-7xl font-bold ">&lt;</span>Everyone Calls Me 
            <span className="text-navtext text-7xl font-bold ">&gt;</span>
          </h1>
          <span className="flex whitespace-nowrap justify-end items-center text-3xl md:text-4xl lg:text-5xl mr-10 text-navtext font-extrabold">
            <Typewriter
              delaySpeed={1000}
              loop={Infinity}
              cursor
              cursorStyle="<>"
              words={[
                "Web Developer",
                "Competitive Programmer",
                "Jack Of All Trade",
              ]}
            ></Typewriter>
          </span>{" "}
        </div>
        <div className={`w-full my-5`}>
        <button className="text-navtext font-bold border-2 py-4 px-8 hover:bg-cyan-300/30">Download Resume</button>
      </div>
      </div>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <div className="rounded-full w-fit border-4 border-emerald-500 ">
          <img
            src={myPic}
            alt=""
            className="p-4 hover:scale-105 hover:p-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] object-fill rounded-full shadow-lg shadow-amber-50 backdrop-blur-md  border-2 brightness-110 hover:shadow-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
