import React from "react";
import "../styles/Login.scss";

function Login() {
  return (
    <div class="Login">
      <div class="Login-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="Login-logo" />

        <form action="/" class="form">
          <label for="email" class="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
            class="input input-email"
          />

          <label for="password" class="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            class="input input-password"
          />

          <input
            type="submit"
            value="Log in"
            class="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>

        <button class="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
