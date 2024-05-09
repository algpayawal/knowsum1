<template>
  <div class="container">
    <div class="login-container">
      <div class="logo-container">
        <img src="../assets/images/logo-dark.png" style="width: 200px; height: 45px;">
      </div>
      <h1 class="login-header">REGISTER</h1>
      <form>
        <div class="form-group">
          <select id="type" required>
            <option value="" disabled selected>Register as:</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" id="name" placeholder="Name" required/>
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Email address" required/>
        </div>
        <div class="form-group">
          <input type="password" id="password" placeholder="Password" required/>
        </div>
        <button type="button" class="login-submit-button" @click="registerUser">Register</button>
        <br>
        <div style="text-align: center;">
          Already have an account? <router-link to="/login" class="nav-item-link"> <span class="nav-item-text" style="font-weight: 700;">Login here</span> </router-link><br>
          or <router-link to="/" class="nav-item-link"> <span class="nav-item-text" style="font-weight: 700;">Go to Homepage</span></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

const router = useRouter();

function registerUser() {
    // Display "Project marked as done" message for 2 seconds
  Swal.fire({
    icon: 'success',
    title: 'Welcome to KnowSum1!',
    text: "Registered successfully, please login your account.",
    showConfirmButton: false,
    timer: 2000
  }).then(() => {
    console.log('Redirecting to login page...');
    // Redirect to the login page after the success message is closed
    router.push('/login');
  });
}
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(../assets/images/register-bg.png);
    background-size: cover;
    background-position: center;
    padding: 0 100px;
  }
  
  .login-container {
    max-width: 700px;
    width: 100%;
    border-radius: 15px;
    background-color: none;
    padding: 50px;
    margin-right: auto;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo-container img {
    max-width: 60%;
    height: auto;
    width: auto;
    max-height: 200px;
  }
  
  .login-header {
    color: #F0F028;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  
  .form-group {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
     height: 60px;
  }
  
  input[type="email"],
  input[type="password"],
  input[type="text"]{
    font-size: 15px;
    width: 70%;
    padding: 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #f3f3f3;
  }
  
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: #007bff;
  }
  
  .login-submit-button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #F0F028;
    color: #212121;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    padding: 12px 30px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .login-submit-button:hover {
    background-color: #c7c726;
    color: #212121;
  }
  
  .modal-overlay {
      display: block;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
  
  .forgot-password-modal {
    background-color: #fefefe;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px 30px;
    width: 500px;
    max-width: 80%;
    margin: 0;
    }
    

  

    .forgot-password-modal input {
    font-size: 15px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px; 
  }
  
  .nav-item-link {
  text-decoration: none;
  font-size: 14px;
  color: #F0F028;
  font-weight: bold;
  }
  
  .nav-item-link:hover {
  text-decoration: underline;
  color: #bfbf1f;
  font-weight: bold;
  }
  
  @media (max-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/images/login-bg.png");
    background-size: cover;
    background-position: center;
    padding: 0 50px;
  }
  
  .login-container {
    width: 100%;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 50px 10px;
  }
  
  .logo-container img {
    max-width: 50%;
    height: auto;
    width: auto;
    max-height: 200px;
  }
  
  h1 {
    font-size: 25px;
  }
  
  .login-submit-button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #6B152F;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 15px;
    padding: 10px 25px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .form-group {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 13px;
     height: 45px;
     font-size: 12px;
  }
  
  
  input[type="email"],
  input[type="password"] {
    font-size: 12px;
    width: 70%;
    padding: 15px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #f3f3f3;
  }
  
  
  .nav-item-link {
  text-decoration: none;
  font-size: 12px;
  color: #434343;
  font-weight: bold;
  }
  
  h2 {
    font-size: 18px;
  }
  }
  
  label {
    font-size: 12px;
  }

  /* Style for the select element */
select {
    font-size: 14px;
    width: 70%;
    padding: 20px 15px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #F3F3F3;
  }

/* Style for the option elements */
option {
  background-color: #F3F3F3;
  font-size: 16px;
}
  </style>