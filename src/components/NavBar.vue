<template>
  <nav class="navbar">
    <div class="navbar-left">
      <router-link to="/"><img src="../assets/images/knowsum1-logo.png" style="width: 120px; height: 30px;"></router-link>
    </div>
    <div class="navbar-center">
      <!-- Navigation Links -->
      <router-link to="/about" class="nav-link">About Us</router-link>
      <router-link to="/services" class="nav-link">Our Services</router-link>
      <router-link to="/contact" class="nav-link">Contact Us</router-link>
    </div>
    <div class="navbar-right">
      <!-- Register and Login Buttons -->
      <router-link to="/register" class="btn-register">Register</router-link>
      <router-link to="/login" class="btn-login">Login</router-link>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: transparent;
  color: white;
}

.navbar-left {
  margin-right: 150px;
}
.navbar-left img {
  height: 50px; /* Adjust height as needed */
}

.navbar-center .nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin-right: 50px;
}

.btn-login {
  padding: 8px 20px;
  background-color: #F0F028;
  color: #000028;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

}

.btn-register {
  padding: 8px 20px;
  background-color: transparent;
  color: #F0F028;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
}

.btn-login:hover {
  background-color: rgb(247, 247, 38);
}

</style>
