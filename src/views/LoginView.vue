<template>
  <div class="container">
    <div class="login-container">
      <div class="logo-container">
        <img src="../assets/images/logo-dark.png" style="width: 200px; height: 45px;">
      </div>
      <h1 class="login-header">LOGIN</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <input v-model="email" type="email" id="email" placeholder="Email address" required/>
        </div>
        
        <div class="form-group">
          <input v-model="password" type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit" class="login-submit-button">Login</button>
        <br>
        <div style="text-align: center;">
          Don't have an account? <router-link to="/register" class="nav-item-link"> <span class="nav-item-text" style="font-weight: 700;">Register here</span> </router-link><br>
           or  <router-link to="/" class="nav-item-link"> <span class="nav-item-text" style="font-weight: 700;">Go to Homepage</span></router-link>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import usersData from '../assets/data/users.json';
import router from '../router/index.js'; // Update the path accordingly

const users = ref(usersData);
const email = ref('');
const password = ref('');

const login = async () => {
  const user = users.value.find(u => u.email_address === email.value);
  if (!user) {
    alert('User not found!');
    return;
  }

  if (user.role === 1) {
    await router.push({ name: 'admin' });
  } else if (user.role === 2) {
    await router.push({ name: 'user' });
  } else {
    alert('Invalid role!');
  }
};
</script>

  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(../assets/images/login-bg.png);
    background-size: cover;
    background-position: center;
    padding: 0 100px;
    color: #fff;
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
  input[type="password"] {
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
    
    .forgot-password-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 5px; 
      margin: 15px 0px 7px 0px; 
  }
  
    .reset-password-button{
    background-color: #850000;
    color: #ffff;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    }
  
    .close-modal-button{
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      background-color: transparent;
      border: none;
      color: #75062F;
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
  color: #002850;
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
  </style>