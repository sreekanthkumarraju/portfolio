import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsSnapchat } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { AiFillBank } from "react-icons/ai";

const Contact = () => {
  const Expire = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, props.delay);
      return () => clearTimeout(timer);
    }, [props.delay]);

    return visible ? <div>{props.children}</div> : <div />;
  };

  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azymqng",
        "template_jo2cvj7",
        form.current,
        "KiorzUSNq5lRmavZ9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setStatus("Some thing went wrong. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="sub-heading">Say, Hello!</h5>
      <h2 className="contact-section">Contact Me</h2>

      <div className="container contact_container" >
        <div className="contact_options" style={{"marginTop":"10px"}}>
          <article className="contact_option">
            <HiOutlineMail className="contact_icons" />
   
            <h5>rvsreekanthkumar90@gmail.com</h5>
           
          </article>

          <article className="contact_option">
            <IoIosCall className="contact_icons" />
           
            <h5>8978558690</h5>
          </article>

          <article className="contact_option">
            <AiFillBank className="contact_icons" />
            <h4>Address</h4>
            <h5 className="fs-6 text-white">4-57,Chendraju gari palli,T.sundupalli,Annamayya District,Andhra pradesh,516129</h5>
            
            
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} style={{"marginTop":"15px"}}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="?"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn highlighted-btn submit">
            👋 Say Hello
          </button>
          <div className="status">
            <Expire delay="5000">{status}</Expire>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;