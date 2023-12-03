import Banner from "./Banner";
import Content from "./Content";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <OurTeam></OurTeam>
      <Content></Content>
    </div>
  );
};

export default Home;
