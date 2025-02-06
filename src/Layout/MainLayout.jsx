import Banner from "../Components/Banner/Banner";
import Nav from "../Components/Nav";
import ParticlesBackground from "../Particles/ParticlesBackground";

const MainLayout = () => {
  return (
    <ParticlesBackground>
      <div className="sticky top-5 container mx-auto ">
        <Nav></Nav>
      </div>
      <div className="container mx-auto ">
        <Banner></Banner>
      </div>
    </ParticlesBackground>
  );
};

export default MainLayout;
