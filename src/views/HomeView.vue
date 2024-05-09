<template>
  <main>
    <div class="container-1">
      <NavBar/>
     
      <div class="main-content">
        <h1 class="main-header"> WE KNOW WHAT <br>YOU NEED</h1>
        <p class="main-details">
          Reaching new heights in this era means reaching out to the right tech partner. We make it easier for you to find the best freelancers who will help your business soar and increase its digital space and presence.
        </p>
        <div class="main-buttons">
        <button class="btn-freelancer">Look for a freelancer</button>
        <button class="btn-project">Find a project</button>
        </div>
      </div>
    </div>

    <div class="container-2">
      <div class="c2-left">
        <img src="../assets/images/container-2-img.png">
      </div>
      <div class="c2-right">
        <h3 class="c2-subhead">Who We Are</h3>
        <h1 class="c2-main-head">We are the first tech freelancer hub in PH</h1>
        <p class="c2-main-details">
          Our one-stop shop platform seamlessly connects business with the best IT talents and provides unparalleled marketing support for freelancers, all for the lowest service fee in the market.
        </p>
        <div class="c2-more-details">
          <div class="md-left"><img src="../assets/images/dti.png"></div>
          <div class="md-right"><img src="../assets/images/ssl.png"></div>
        </div>
        <div class="c2-main-buttons">
          <button class="btn-discover">Discover more</button>
        </div>
      </div>
    </div>

    <div class="container-3">
      <div class="c3-header">Hustle without <br> the hassle.</div>
      <div class="c3-icon1"><img src="../assets/images/create-icon.png" style="width:40%"><br>Sign up and create <br> your profile</div>
      <div class="c3-icon2"><img src="../assets/images/contact-icon.png" style="width:40%"><br>Get contacted, booked, <br> and paid by clients</div>
      <div class="c3-icon3"><img src="../assets/images/find-icon.png" style="width:40%"><br>Find projects and <br> send proposals</div>
    </div>

    <div class="container-4">
      <h1 class="c4-header"> Our Services</h1>
      <div class="services-card-container">
        <div class="services-card" v-for="(service, index) in services" :key="index">
          <img src="../assets/images/services-icon.png" style="width: 50px;">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
        <button class="btn-services">View All Services</button>
      </div>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </main>
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
  background-image: url(../assets//images/home-bg.png);
  background-size: cover;
  min-height: 90vh;
}

.main-content {
  width: 90%;
  margin: 0 auto;
}

.main-header {
  margin-top: 100px;
  color: #F0F028;
  font-size: 90px;
  font-weight: 600;
  line-height: 1.2;
}

.main-details {
  margin-top: 50px;
  font-size: 22px;
  color: #FFF;
  text-align: justify;
  width: 750px;
}

.main-buttons {
  margin-top: 100px;
  width: 750px;
}

.btn-freelancer {
    padding: 15px 40px;
    background-color: #C8C8F0;
    color: #000028;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    margin-right: 50px;
  }

.btn-project {
    padding: 15px 60px;
    background-color: transparent;
    color: #C8C8F0;
    border: 4px solid #C8C8F0;
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
}

.container-2 { 
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "c2-left c2-right";
}

.c2-left {
  grid-area: c2-left;
  padding: 50px;
}

.c2-left img{
 width: 100%;
}

.c2-right {
  grid-area: c2-right;
  padding: 50px;
}

.c2-subhead {
  color: #A0A0C8;
  font-size: 35px;
  font-weight: bold;
  margin-top: 60px;
}

.c2-main-head {
  color: #002850;
  font-size: 65px;
  font-weight: bold;
  line-height: 1.2;
  width: 90%;
  margin-bottom: 40px;
}

.c2-main-details {
  color: #002850;
  font-size: 22px;
  text-align: justify;
  width: 80%;
  margin-bottom: 40px;
}

.c2-more-details {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 30px;
  grid-auto-flow: row;
  grid-template-areas:
    "md-left md-right";
  font-size: 20px;
  margin-bottom: 80px;
}

.md-left {
  grid-area: md-left;
}

.md-left img{
  width: 80%;
}

.md-right { 
  grid-area: md-right;
}

.md-right img{
  width: 34%;
}

.btn-discover {
    padding: 12px 35px;
    background-color: #F0F028;
    color: #000028;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    margin-right: 50px;
    font-weight: bold;
  }

.container-3 {
  background-image: url(../assets//images/container-3-bg.png);
  background-size: cover;
  min-height: 30vh;
  display: grid;
  grid-template-columns: 1.8fr 0.8fr 0.7fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "c3-header c3-icon1 c3-icon2 c3-icon3";
  padding: 100px;
  color: #D9D9D9;
  font-size: 18px;
  text-align: center;
}

.c3-header {
  color: #F0F028;
  font-size: 50px;
  font-weight: bold;
  grid-area: c3-header;
  line-height: 1.2;
  text-align: start;
  margin-top: 5%;
}

.c3-icon1 {
  grid-area: c3-icon1;
}

.c3-icon2 {
  grid-area: c3-icon2;
}

.c3-icon3 {
  grid-area: c3-icon3;
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

.btn-services {
  padding: 12px 35px;
  background-color: #F0F028;
  color: #000028;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto; /* Center the button horizontally */
  display: block; /* Make the button a block element */
}

</style>