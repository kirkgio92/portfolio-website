import styles from "./index.module.scss";
import { useState } from "react";

const FooterContact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.FooterContact} id={id}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Want to reach out? Send a message!</h2>
          <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <div className={styles.labelText}>
              <label htmlFor="name">
                Name{" "}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label htmlFor="email">
                Email{" "}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className={styles.labelTextMessage}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
          <p>{status}</p>
        </div>
      </div>
      <footer className={styles.copyright}>
        <p>Copyright © 2024 | GIOVANNI SCIVOLI | All right reserved</p>
      </footer>
    </div>
  );
};

export default FooterContact;
