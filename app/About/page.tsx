"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";

const cardData = [
  {
    number: "01",
    title: "Card One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, quam officiis dolorum est reiciendis.",
    link: "#",
    previewColor: "black",
  },
  {
    number: "02",
    title: "Card Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, quam officiis dolorum est reiciendis.",
    link: "#",
    previewColor: "black",
  },
  {
    number: "03",
    title: "Card Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, quam officiis dolorum est reiciendis.",
    link: "#",
    previewColor: "black",
  },
  {
    number: "03",
    title: "Card Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, quam officiis dolorum est reiciendis.",
    link: "#",
    previewColor: "black",
  },
  {
    number: "03",
    title: "Card Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur, quam officiis dolorum est reiciendis.",
    link: "#",
    previewColor: "black",
  },
];

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <div className="flex flex-col items-center h-screen gap-8 mt-[10%] ">
            <div className="flex">
              <div className="w-40 h-40 rounded-full overflow-hidden border-2">
                <img
                  src="/profile.jpeg"
                  alt="Kartik Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[300%]">I am the one who knocks</h1>
            </div>
            <div className="flex flex-col ml-4 item-center w-[70%]">
              <h1 className="text-[150%] text-center text-gray-500">
                Curious and creative, I’m Kartik—a builder of cool and engaging
                experiences. I dive into new fields, master the craft, and move
                on to the next challenge. With a passion for solving problems, I
                craft realistic, innovative solutions that fit the context and
                turn intriguing ideas into reality.
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center gap-8 mt-10">
            <AboutCards cards={cardData} />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
