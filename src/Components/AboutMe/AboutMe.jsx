import myPic from "../../assets/mypic3.png";
import SocialLinks from "../SocialLinks/SocialLinks";
const AboutMe = () => {
  return (
    <>
      <div  className="text-center text-5xl font-bold w-full my-5">
      <h1>
        &lt; About Me &gt;
      </h1>
      </div>
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className=" w-[20%] px-10 justify-center items-center flex">
        <SocialLinks />
      </div>
      <div className="w-[80%] text-amber-300 text-xl  place-self-center px-10 py-5 bg-gradient-to-r from-green-400/40 to-blue-500/50 rounded-2xl">
        <p className="">
          My name is <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Nafiu</strong>, and I am
          currently studying
          <strong className="text-navtext decoration-cyan-50 underline mx-2 ">
            Computer Science & Engineering
          </strong>{" "}
          at the
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">
            National University of Bangladesh
          </strong>
          . My programming journey began in{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">2018</strong> with
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Google AdMob</strong> and{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Google AdSense</strong>. I used to
          develop Android applications using
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Makeroid (now Kodular)</strong> and
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">AppyBuilder</strong>, both of which
          utilize block-based coding.
        </p>

        <p>
        <strong className="text-navtext decoration-cyan-50 text-2xl mx-2">&gt;</strong>One of my notable projects was an earning app called
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">HandCash</strong>, which had over
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">
            1,000 downloads on the Play Store
          </strong>{" "}
          and
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">200 active users</strong> working
          regularly. The app was well-maintained with{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Firebase Realtime Database</strong>.
        </p>

        <p>
          I've been passionate about computers since{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">2011</strong>, and from that time, I
          aspired to become a{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Computer Engineer</strong>. An
          interesting experience I want to share is that in{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">2016</strong>, out of curiosity and
          for prank purposes, I experimented with{" "}
          <strong className="text-navtext decoration-cyan-50 underline  mx-2 ">Kali Linux</strong>
          to create phishing clone sites and tested them with my friends
          (without causing any harm).
        </p>

        <p>
        <strong className="text-navtext decoration-cyan-50 text-2xl mx-2">&gt;</strong>Beyond programming, I have explored various online fields, including
          <strong className="text-navtext decoration-cyan-50 underline mx-2">YouTube content creation</strong>,
          <strong className="text-navtext decoration-cyan-50 underline mx-2">social media marketing</strong>,
          <strong className="text-navtext decoration-cyan-50 underline mx-2">
            basic Adobe Illustrator & Photoshop skills
          </strong>
          , and
          <strong className="text-navtext decoration-cyan-50 underline mx-2">WordPress (Elementor Pro)</strong>.
        </p>

        <p>
        <strong className="text-navtext decoration-cyan-50 text-2xl mx-2">&gt;</strong>Travelling, Capturing Photos With my camera and eyes, Photo Editing Using Lightroom or Snapseed, Video Editing about recent tour views, Football, Movies, Dramas, Series, Cooking at late nigts - These are my 
          <strong className="text-navtext decoration-cyan-50 underline mx-2">Hoobbies</strong>.
        </p>

        <p>
        <strong className="text-navtext decoration-cyan-50 text-2xl mx-2">&gt;</strong> In my family, I am often called an{" "}
          <strong className="text-navtext decoration-cyan-50 underline mx-2">"All-Rounder"</strong> because I take
          on any task—whether I know it beforehand or need to learn it—and
          ensure it gets done
          <strong className="text-navtext decoration-cyan-50 underline mx-2">perfectly</strong>.
        </p>
      </div>
    </div>
    
    </>
  );
};

export default AboutMe;
