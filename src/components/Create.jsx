import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import "../styles/create.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

function Create() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirm_password: false,
  });

  const handleBackwardStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleForwardStep = () => {
    if (step < 5) setStep((prev) => prev + 1);
  };

  const handleName = () => {
    if (!formData.name) {
      setErrors((prev) => ({ ...prev, name: true }));
    } else {
      setErrors((prev) => ({ ...prev, name: false }));
      handleForwardStep();
    }
  };

  const handleEmail = () => {
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: true }));
    } else {
      setErrors((prev) => ({ ...prev, email: false }));
      handleForwardStep();
    }
  };

  const handlePasswordCheck = () => {
    if (!formData.password || formData.password.length < 8) {
      setErrors((prev) => ({ ...prev, password: true }));
    } else {
      setErrors((prev) => ({ ...prev, password: false }));
      handleForwardStep();
    }
  };

  const handleConfirmPassword = () => {
    if (formData.confirm_password !== formData.password) {
      setErrors((prev) => ({ ...prev, confirm_password: true }));
    } else {
      setErrors((prev) => ({ ...prev, confirm_password: false }));
      handleForwardStep();
    }
  };

  return (
    <>
      <section className="create">
        {step === 1 && (
          <section className="create_">
            <header>
              <h2>Let's start with your name!</h2>
            </header>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <p className="casual_text">
              Your name can be anything you like. We just need something to call
              you by.
            </p>
            {errors.name && (
              <p className="error_empty active">Don't leave it empty!</p>
            )}
            <div className="buttons first">
              <button onClick={handleName}>
                <FaArrowRight />
              </button>
            </div>
          </section>
        )}
        {step === 2 && (
          <section className="create_">
            <header>
              <h2>Your email, please!</h2>
            </header>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <p className="casual_text">
              We'll use this to keep you updated on your account and send you
              the latest space news. Don’t worry, we’ll keep it safe and never
              spam you!
            </p>
            {errors.email && (
              <p className="error_empty active">Don't leave it empty!</p>
            )}
            <div className="buttons">
              <button onClick={handleBackwardStep}>
                <FaArrowLeft />
              </button>
              <button onClick={handleEmail}>
                <FaArrowRight />
              </button>
            </div>
          </section>
        )}
        {step === 3 && (
          <section className="create_">
            <header>
              <h2>Choose a password.</h2>
            </header>
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <p className="casual_text">
              Make it a mix of letters, numbers, or even a special symbol or
              two. This helps keep your account secure.
            </p>
            {errors.password && (
              <p className="error_empty active">
                Your password must contain at least 8 characters!
              </p>
            )}
            <div className="buttons">
              <button onClick={handleBackwardStep}>
                <FaArrowLeft />
              </button>
              <button onClick={handlePasswordCheck}>
                <FaArrowRight />
              </button>
            </div>
          </section>
        )}
        {step === 4 && (
          <section className="create_">
            <header>
              <h2>Lastly, type it again to confirm.</h2>
            </header>
            <input
              type="password"
              name="confirm_password"
              placeholder="**********"
              value={formData.confirm_password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirm_password: e.target.value,
                }))
              }
            />
            <p className="casual_text">
              Just to make sure there are no typos. We want you to have smooth
              access to the galaxy every time!
            </p>
            {errors.confirm_password && (
              <p className="error_empty active">Passwords aren't the same!</p>
            )}
            <div className="buttons">
              <button onClick={handleBackwardStep}>
                <FaArrowLeft />
              </button>
              <button onClick={handleConfirmPassword}>
                <FaArrowRightToBracket />
              </button>
            </div>
          </section>
        )}

        {step === 5 && (
          <>
            <section className="create_">
              <section className="childrens">
                <h1>
                  <span className="secondary_text">Name</span> : {formData.name}
                  <FaCheck className="check_icon" />
                </h1>
              </section>{" "}
              <section className="childrens">
                <h1>
                  <span className="secondary_text">Email</span> :{" "}
                  {formData.email}
                  <FaCheck className="check_icon" />
                </h1>
              </section>
              <div className="buttons">
                <button onClick={handleBackwardStep}>
                  <FaArrowLeft />
                </button>
                <button style={{ paddingTop: "10px" }}>submit</button>
              </div>
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default Create;
