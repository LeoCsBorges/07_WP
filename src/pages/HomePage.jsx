import Header from "../components/Header";
import Hero from "../components/Hero";
import Banners from "../components/Banners";
import Footer from "../components/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banners />
        {/* 
        <Web />
        <Motion />
        <Clientes /> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
