import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <main className="bg-black flex flex-col min-h-screen">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
};

export default Home;
