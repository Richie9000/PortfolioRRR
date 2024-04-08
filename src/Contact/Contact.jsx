import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cyybd7e', 'template_etrnv2h', form.current, 'FmYy1ydMc0Kv_Vt5h')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;