
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="w-full "
    >
      <div className="mx-auto max-w-6xl">

        {/* GLASS CONTACT CARD */}
        <div className="glass-card grid grid-cols-1 gap-12 p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">

          {/* LEFT */}
          <div className="flex flex-col justify-between">

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] opacity-50">
                Get in touch
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Let's Connect!
              </h2>

              <p className="mt-8 max-w-md text-base leading-8 opacity-65 md:text-lg">
                If you ever want to grab a coffee/bubble tea{" "}
                <span className="font-medium opacity-100">(virtually)</span>{" "}
                or just want a quick chat — you can find me on social media
                or send me a message here.
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12 flex items-center gap-4">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass-icon"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="glass-icon"
              >
                <FaTwitter />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass-icon"
              >
                <FaGithub />
              </a>

            </div>
          </div>

          {/* RIGHT - FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              required
              className="glass-input"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
              className="glass-input"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              required
              rows={7}
              className="glass-input resize-none py-4"
            />

            <button
              type="submit"
              className="glass-button mt-1 w-fit px-7 py-3.5"
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

