import Head from "next/head";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mb-5 contact-box shadow">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact Quad Pizzeria for any inquiries or feedback."
        />
      </Head>
      <div className="align-items-center py-5">
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            className="display-5 fw-bold text-body-emphasis mb-3"
          >
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              placeholder="Enter your name"
              className="mb-3"
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              placeholder="Enter your email"
              className="mb-3"
              required
            />
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={6}
              placeholder="Enter your message"
              className="mb-3"
              required
            />
            <Button
              type="submit"
              variant="contained"
              className="bg-green btn-lg px-4"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
