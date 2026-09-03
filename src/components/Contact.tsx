import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateField = (name: string, value: string) => {
    if (name === "name") {
      return value.trim() ? "" : "Name is required.";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) return "Email is required.";
      return emailRegex.test(value) ? "" : "Please enter a valid email address.";
    }
    if (name === "message") {
      return value.trim() ? "" : "Message cannot be empty.";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnpqvrwq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full">
      <div className="mx-auto max-w-6xl">
        
        <div className="glass-card grid grid-cols-1 gap-12 p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14 border-t border-white/5">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-400">
                Get in touch
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Let's Connect!
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-gray-400 md:text-lg">
                Have a question or want to work together? Drop me a message!
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/saisindusrig/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass-button flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://github.com/saisindusrig"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass-button flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

         
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            
            {/* NAME INPUT */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`glass-input peer !pb-2 !pt-6 placeholder-transparent focus:outline-none ${
                  errors.name ? "border-red-400/80" : ""
                }`}
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-white/50 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white/80"
              >
                Name
              </label>
              {errors.name && <span className="text-xs text-red-400 mt-1 block px-1">{errors.name}</span>}
            </div>

            {/* EMAIL INPUT */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`glass-input peer !pb-2 !pt-6 placeholder-transparent focus:outline-none ${
                  errors.email ? "border-red-400/80" : ""
                }`}
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-white/50 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-white/80"
              >
                Email
              </label>
              {errors.email && <span className="text-xs text-red-400 mt-1 block px-1">{errors.email}</span>}
            </div>

            {/* MESSAGE TEXTAREA */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className={`glass-input peer resize-none !pb-4 !pt-8 placeholder-transparent focus:outline-none ${
                  errors.message ? "border-red-400/80" : ""
                }`}
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-4 top-3 text-xs font-medium text-white/50 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs peer-focus:text-white/80"
              >
                Message
              </label>
              {errors.message && <span className="text-xs text-red-400 mt-1 block px-1">{errors.message}</span>}
            </div>

            <div className="flex items-center gap-4 mt-2 flex-wrap">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="glass-button w-fit px-8 py-3.5 font-medium tracking-wide text-sm disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400">Message sent successfully!</p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">Something went wrong. Try again.</p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;