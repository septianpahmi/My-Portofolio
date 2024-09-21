import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = "";
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    if (email) {
      // Logika ketika form di-submit, misalnya mengirim email ke API atau menampilkan alert
      console.log("Email submitted:", email);
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(""); // Reset input setelah submit
    } else {
      alert("Please enter a valid email address.");
    }
  };
  return (
    <footer className="bg-black text-white py-8" onSubmit={handleSubmit}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Septian</h3>
            <p className="text-gray-400">
              Web developer based in Indonesia, specializing in web and graphic
              design.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                value={email}
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400 text-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Septian. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.facebook.com/people/Septian-Pahmi/100005524157864/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sptnpahmi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/septianpahmi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/septianpahmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
