import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = { name, email, message };
  //   try {
  //     const response = await fetch("/scripts/contact", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     setResponseMessage(data.message);

  //     if (response.ok) {
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     setResponseMessage("Error sending email");
  //   }
  // };

  return (
    // <form onSubmit={handleSubmit}>
    <form action="/api/contact" method="post">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit">Send</button>

      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

export default ContactForm;
