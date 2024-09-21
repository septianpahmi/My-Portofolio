// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = "";
  const [email, setEmail] = "";
  const [message, setMessage] = "";

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    if (name && email && message) {
      // Proses form (misalnya kirim data ke API atau menampilkan alert)
      console.log("Form Data:", { name, email, message });
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Reset form setelah submit
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill out all fields.");
    }
  };
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let&apos;s Talk
            </h3>
            <p>
              I&apos;m open to discussing web development projects or
              partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                sptnfahmi@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+62 897-7004-671</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Cimacan, Cipanas, Cianjur, Jawa Barat, Indonesia</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Name"
                  value={name} // Menghubungkan state dengan input
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Email"
                  value={email} // Menghubungkan state dengan input
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                  value={message} // Menghubungkan state dengan input
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
