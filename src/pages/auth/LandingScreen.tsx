import AboutUsScreen from "./AboutUsScreen";
import Blog from "./Blog";
import CompanyScreen from "./CompanyScreen";
import Hero from "./Hero";
import ServicesScreen from "./ServicesScreen";

const LandingScreen = () => {
  return (
    <>
    <Hero/>
    <br/>
    <ServicesScreen/>
    <br/>
    <CompanyScreen/>
    <br/>
    <AboutUsScreen/>
    <br/>
    <Blog/>
    </>
  );
};

export default LandingScreen;
