import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  const projects = [
    {
      name: "AI-Powered-Knowledge-Base-Assistant",
      link: "#",
    },
    { name: " TimeSeriesAnalysis_LSTM_RNN", link: "#" },
    { name: "Bloom-Studios", link: "#" },
    { name: "TogertherWeCan", link: "#" },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <HeroText />
        </section>
        <section>
          <SectionOne />
        </section>
        <section>
          <SectionTwo projects={projects} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
