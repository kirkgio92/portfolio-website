import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
import { useState } from "react";

const FooterContact = () => {
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
    <div className={styles.FooterContact}>
      <div className={styles.container}>
        <div className={styles.mainWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.heroImage}
              src="/KirkGio92.jpeg"
              alt="kirkgio92"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.textWrapper}>
            <h1>Hi there, it's</h1>
            <h1>
              <span className={styles.spanColor}>GIOVANNI SCIVOLI</span>
            </h1>
            <h2>Former Amazon Senior Finance Analyst</h2>
            <p>
              I consider myself curious and analytical. I truly believe that
              there is no problem without a solution and I am fascinated by the
              idea of working on projects aiming to create the best customer
              experience, whether it is an internal or external customer.
            </p>
          </div>
          <div className={styles.socialWrapper}>
            <div className={styles.item}>
              <Image
                className={styles.heroImage}
                src="/email.png"
                alt="email"
                width={30}
                height={30}
              />
              <p>scivoligiovanni@gmail.com</p>
            </div>
            <div className={styles.item}>
              <Image
                className={styles.heroImage}
                src="/linkedin.png"
                alt="email"
                width={30}
                height={30}
              />
              <Link href="https://www.linkedin.com/in/giovanni-scivoli-26570b14a">
                Linkedin
              </Link>
            </div>
            <div className={styles.item}>
              <Image
                className={styles.heroImage}
                src="/github-mark.svg"
                alt="email"
                width={30}
                height={30}
              />
              <Link href="https://github.com/kirkgio92">kirkgio92</Link>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h2>Reach out</h2>
          <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
