function Loader({ loaded }) {
  return (
    <section className={`loading_screen ${loaded ? "active" : ""}`}>
      <div className="loader"></div>
    </section>
  );
}

export default Loader;
