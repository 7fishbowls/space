import "../styles/home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="hm image_box">
        {/* <img src="https://cdn.esahubble.org/archives/images/large/heic1323a.jpg" alt="" /> */}
        <img
          src="https://cdn.esahubble.org/archives/images/large/heic0702a.jpg"
          alt=""
        />
      </div>
      <section className="home">
        <div className="main_text">
          <h2>Space reveals its true beauty when we dare to explore.</h2>
          <div className="buttons">
            <button>Explore</button>
            <button>Learn more</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
