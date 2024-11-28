"use client";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Access environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Great!",
            text: `Thank you for subscribing, we'll get back to you soon.`,
            footer: '<a href="#">Go back</a>',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-light">
      {/* Header Section */}
      <header className="w-full py-8 px-6 md:px-12">
        <div className="text-2xl font-bold tracking-wide text-center">
          Tamazing Events
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-black mb-6">
          Coming Soon
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Bringing your dream events to life with elegance and creativity.
        </p>

        {/* Notify Me Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-400 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 sm:mb-0"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-gray-800 transition"
          >
            Notify Me
          </button>
        </form>
        <p className="text-sm italic mt-4">
          We'll let you know when we launch!
        </p>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="flex justify-between items-center px-6 sm:px-12">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Tamazing Events. All rights
            reserved.
          </p>
          <a
            href="https://www.instagram.com/tamazingevents/"
            className="text-gray-500 hover:text-black transition"
            aria-label="Instagram"
          >
            <FaInstagram className="w-8 h-8 text-gray-600 hover:text-black transition" />
          </a>
        </div>
      </footer>
    </div>
  );
}
