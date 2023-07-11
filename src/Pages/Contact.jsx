import React from "react";

//components
import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/Contact/ContactForm";
import ContactContent from "../components/Contact/ContactContent";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid w-[100%] h-[90vh] grid-cols-1 md:grid-cols-4 py-40">
          <ContactContent />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
