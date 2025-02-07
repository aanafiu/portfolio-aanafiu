import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Loader from "../Loader/Loader";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_e2j1nts",
        "template_umf9d7e",
        form,
        "Uc8Sh0KEZnCLQu9do"
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
        console.log(error)
      
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10">&lt; Contact Me &gt;</h2>

      {/* Direct Contact Options */}
      <div className="flex justify-center gap-10 text-lg mb-10">
      <a href="tel:+8801636748351" className="flex items-center gap-2 text-green-500">
          <FaPhone size={24} /> Phone
        </a>
        <a href="mailto:abdullahall.nafiu@gmail.com" className="flex items-center gap-2 text-blue-500">
          <FaEnvelope size={24} /> Email
        </a>
   
        <a href="https://wa.me/01636748351" className="flex items-center gap-2 text-green-600">
          <FaWhatsapp size={24} /> WhatsApp
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-3">Send Direct Mail</h1>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-700 rounded bg-gray-800 text-white h-32"
        ></textarea>
        <button
          type="submit"
          className=" text-white flex justify-center items-center py-3 px-6 rounded w-full transition"
          disabled={loading}
        >
          {loading ? <Loader></Loader>: <h1 className="w-full text-cyan-400 hover:bg-navtext py-4 border-2 ">Send Message</h1>}
        </button>
      </form>
    </div>
  );
};

export default Contact;
