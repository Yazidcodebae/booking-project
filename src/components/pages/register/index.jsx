import { Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Input from "./input";
import "./register.css";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [authMode, setAuthMode] = useState("signin");
  function handleSubmitForm(values) {
    // send post request
    console.log(values);
  }
  const inputFields = [
    {
      label: "First Name",
      name: "first_name",
      placeholder: "Enter your first name",
      register: register,
      validation: {
        required: {
          value: true,
          message: "First Name is required!",
        },
        minLength: {
          value: 3,
          message: "Min 3 characters",
        },
      },
      errors: errors,
    },
    {
      label: "Last Name",
      name: "last_name",
      placeholder: "Enter your last name",
      register: register,
      errors: errors,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Enter your Address",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Address is required!",
        },
        minLength: {
          value: 3,
          message: "Min 3 characters",
        },
        maxLength: {
          value: 50,
          message: "Max 50 characters",
        },
      },
      errors: errors,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      register: register,
      validation: {
        required: {
          value: true,
          message: "Password is required!",
        },
        minLength: {
          value: 3,
          message: "Min 3 characters",
        },
      },
      errors: errors,
    },
  ];
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {inputFields.map((item, i) => (
              <Input key={i} {...item} />
            ))}
            <div class="d-grid gap-2 p-3">
              <button type="submit" className="btn btn-primary rounded-0">
                Register
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
export default Register;
