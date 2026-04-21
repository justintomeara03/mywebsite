import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Sound from "./_components/Sound";
import WhatWeDo from "./_components/WhatWeDo";
import Collab from "./_components/Collab";
import Booking from "./_components/Booking";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sound />
        <WhatWeDo />
        <Collab />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
