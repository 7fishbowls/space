import { FcCheckmark } from "react-icons/fc";
function Box({ title, body }) {
  return (
    <section className="about_box">
      <header>
        <h2>
          <FcCheckmark className="about_icons" />
          {title}
        </h2>
      </header>
      <section className="content">
        <p>{body}</p>
      </section>
    </section>
  );
}

export default Box;
