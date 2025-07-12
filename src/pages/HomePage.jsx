import Header from "../components/Header";
import Hero from "../components/Hero";
import Banners from "../components/Banners";

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
      <p>fazer o footer component aqui</p>
    </>
  );
};

export default HomePage;
