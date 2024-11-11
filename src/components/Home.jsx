import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState(false);
  const handleImageLoad = () => {
    setActive(true);
  };
  return (
    <>
      <Header />
      <div className={`home_container ${active ? "active" : ""}`}>
        <div className="hm image_box">
          {/* <img src="https://cdn.esahubble.org/archives/images/large/heic1323a.jpg" alt="" /> */}
          <img
            src="https://cdn.esahubble.org/archives/images/large/heic0702a.jpg"
            alt=""
            onLoad={handleImageLoad}
          />
        </div>
        <section className="home">
          <div className="main_text">
            <h2>Space reveals its true beauty when we dare to explore.</h2>
            <div className="buttons">
              <Link to={"/explore"}>Explore</Link>
              <Link to={"/about"}>Learn more</Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
