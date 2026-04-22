import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tracks from "./_components/Sound";
import Booking from "./_components/Booking";
import Collab from "./_components/Collab";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Booking />
        <Collab />
      </main>
      <Footer />
    </>
  );
}
