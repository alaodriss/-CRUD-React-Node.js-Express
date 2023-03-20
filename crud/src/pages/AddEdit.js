import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { toast } from "react-toastify";

import "./AddEdit.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = initialState;

  const navigate = useNavigate();

  const addContact = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    console.log(response)
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide value into each input field");
    } else {
      addContact(state);
      navigate("/");
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Entre Name ..."
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entre Email ..."
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact"> Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Entre Number ..."
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddEdit;
