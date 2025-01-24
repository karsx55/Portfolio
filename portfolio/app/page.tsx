import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <HeroText />
        </section>
        <section></section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
