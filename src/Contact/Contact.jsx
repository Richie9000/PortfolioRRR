import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"

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
    <div className='form' >
    <h2>Contact me</h2>
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <div className='forms'>

      <label>Name</label>
      <input type="text" name="user_name" required />
        </div>
      </div>
      <div className="form-group">
      <label>Email</label>
      <input type="email" name="user_email" required />
      </div>
      <div className="form-group">
      <label>Message</label>
      <textarea name="message" required />
      </div>
      <input type="submit" value="Send" />
    </form>
  </div>
  );
};

export default Contact;