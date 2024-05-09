<template>
    <div class="services">
      <div class="container-1">
        <NavBar/>
       <div class="about-us-header">
        OUR SERVICES
       </div>
      </div>
      <div class="container-4">
        <div class="services-card-container">
            <div class="services-card" v-for="(service, index) in services" :key="index">
            <img src="../assets/images/services-icon.png" style="width: 50px;">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            </div>
        </div>
      </div>
    <Footer />
    </div>
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue'
  import Footer from '../components/Footer.vue'
  import { ref, onMounted } from 'vue';
  import servicesData from '../assets/data/services.json'
  
  // Use ref to make the services array reactive
  const services = ref([]);
  
  onMounted(async () => {
    try {
      // Set the value of services with the fetched data
      services.value = servicesData;
  
      // Log the services array to the console
      console.log('Services:', services.value);
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
  });
  </script>
  
  
  <style scoped>
  .container-1 {
    background-image: url(../assets/images/about-us-bg.png);
    background-size: cover;
    min-height: 40vh;
  }
  
  .about-us-header {
    color: #F0F028;
    font-size: 90px;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
  }

  .container-4 {
  margin-top: 100px;
}

.c4-header {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  position: relative; /* Add position relative to create space for absolute positioning */
}

.c4-header::after {
  content: ""; /* Add content for the pseudo-element */
  position: absolute; /* Position the pseudo-element absolutely */
  bottom: 0; /* Align the pseudo-element to the bottom of the header */
  left: 50%; /* Align the pseudo-element to the center */
  transform: translateX(-50%); /* Center the pseudo-element horizontally */
  width: 300px; /* Adjust the width of the line */
  height: 5px; /* Adjust the height of the line */
  background-color: #F0F028; /* Set the color of the line */
}

.services-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%; /* Adjust the maximum width as needed */
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
}

.services-card {
  width: 23%; /* Adjust the width of each card */
  margin-bottom: 50px; /* Add some bottom margin for spacing */
  padding: 25px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.services-card h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.services-card p {
  font-size: 15px;
  color: #666;
  text-align: justify;
}
  </style>