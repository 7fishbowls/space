import { useState } from "react";
import "../styles/about.css";
import Box from "./Box";
import Header from "./Header";

function About() {
  const [active, setActive] = useState(false);
  const handleImageLoad = () => {
    setActive(true);
  };
  const about_data = [
    {
      title: "Knowledge Sharing",
      body: "Our platform allows users to share their research and findings, promoting the exchange of knowledge among space enthusiasts. This can lead to new insights and discoveries.",
    },
    {
      title: "Networking Opportunities",
      body: "By connecting with other explorers, users can build relationships with like-minded individuals, potentially leading to collaborations on research projects or discussions.",
    },
    {
      title: "Community Support",
      body: "Our website can serve as a support system for users who may be working on projects, providing a space for feedback and encouragement from peers.",
    },
    {
      title: "Inspiration for Projects",
      body: "Viewing the work of others can inspire users to start their own research projects or delve deeper into areas of interest.",
    },
  ];
  return (
    <>
      <Header />
      <section className={`boxes ${active ? "active" : ""}`}>
        <section className="about">
          <header>
            <h2>Astronaut's Guide</h2>
            <p className="speical-characrer">Explore, Research and Share.</p>
          </header>
          <section className="flex_">
            <div className="image_box">
              <img src="astronaut.png" alt="" onLoad={handleImageLoad} />
            </div>
            <p>
              Hey, astronauts! I created this website for those who are
              passionate about space or want to share their research with fellow
              explorers. You can share your researches, explore other's
              researches and feel the stunning images. I’ll be adding more
              features soon. Let me know if you have any ideas. Let's explore
              together!
            </p>
          </section>
        </section>
        <div className="inside_box">
          {about_data.map((elem, index) => (
            <Box title={elem.title} body={elem.body} key={index} />
          ))}
        </div>
      </section>
      <p className="short_footer">すべてシャイク・アリによる</p>
    </>
  );
}

export default About;
