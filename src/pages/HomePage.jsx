import Header from "../components/Header";
import Hero from "../components/Hero";
import Banners from "../components/Banners";
import Motion from "../components/Motion";
import Web from "../components/Web";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banners />
        <Web />
        <Motion />
        <Clients />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
