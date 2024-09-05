import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      id="contactComponent"
      name="contact"
      className="w-full min-h-screen bg-white flex justify-center items-center p-4"
    >
      <div className="max-w-[600px] w-full">
        <div className="pb-8" data-aos="fade-down">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#36d2f5]">
            Contact
          </h2>
          <p className="py-4">
            Submit the form below or shoot me an email - bhumik97@gmail.com
          </p>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/aroljnlb"
          className="flex flex-col"
        >
          <input
            className="p-2 bg-[#f0f0f0] mb-4"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="p-2 bg-[#f0f0f0] mb-4"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2 bg-[#f0f0f0] mb-4"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white bg-[#36d2f5] font-bold py-3 px-6 rounded-lg hover:bg-[#2bb5d8] transition-colors duration-300 self-start"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
