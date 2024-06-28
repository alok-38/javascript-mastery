"use client";

import styles from "./loginForm.module.css";
import { useForm } from "react-final-form"; // Assuming you're using react-final-form
import Link from "next/link";

const LoginForm = () => {
  const onSubmit = (values) => {
    // Handle form submission logic
    console.log(values);
  };

  const { handleSubmit } = useForm({
    onSubmit,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Login</button>
      {/* Assuming state.error is set elsewhere */}
      {/* Displaying error message */}
      {state?.error && <div>{state.error}</div>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
