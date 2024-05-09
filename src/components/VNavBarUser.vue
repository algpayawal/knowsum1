<template>
    <nav class="navbar">
      <div class="navbar-left">
        <img src="../assets/images/logo_small.png" style="width: 50px; height: 50px;">
      </div>
      <div class="navbar-links">
        <!-- Navigation Links -->
        <router-link to="/user" class="nav-link"><img src="../assets/images/dashboard_icon.png" style="width: 30px; height: 30px;"></router-link>
        <router-link to="/projects" class="nav-link"><img src="../assets/images/work_icon.png" style="width: 30px; height: 30px;"></router-link>
        <router-link to="/login" class="nav-link logout"><img src="../assets/images/logout_icon.png" style="width: 20px; height: 20px;"></router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column; /* Set navbar to vertical */
    align-items: center; /* Center items horizontally */
    padding: 20px;
    background-color: #002850;
    color: white;
  }
  
  .navbar-left {
    margin-top: 10px;
    margin-bottom: 150px; /* Adjust spacing */
  }
  
  .navbar-left img {
    height: 50px; /* Adjust height as needed */
  }
  
  .logout {
    margin-top: 55vh;
  }
  .navbar-links {
    display: flex;
    flex-direction: column; /* Set links to vertical */
    align-items: center; /* Center links horizontally */
  }
  
  .navbar-links .nav-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 25px; /* Adjust spacing */
  }
  
  .btn-login,
  .btn-register {
    padding: 8px 20px;
    background-color: #F0F028;
    color: #000028;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 10px; /* Adjust spacing */
  }
  
  .btn-register {
    background-color: transparent;
    color: #F0F028;
  }
  
  .btn-login:hover {
    background-color: rgb(247, 247, 38);
  }
  
  </style>
  