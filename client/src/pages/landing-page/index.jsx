import LandingPageNavBar from "../../components/organisms/landing-page-nav-bar";
import Hero from "../../components/organisms/Hero";
import HeroTwo from "../../components/organisms/HeroTwo";
import "./LandingPageStyle.scss";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <LandingPageNavBar />
      <div className="flex-1 overflow-auto">
        <Hero />
        <HeroTwo />
      </div>
    </div>
  );
};

export default LandingPage;
