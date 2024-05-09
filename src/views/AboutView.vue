<template>
  <div class="about">
    <div class="container-1">
      <NavBar/>
     <div class="about-us-header">
      ABOUT US
     </div>
    </div>

    <div class="container-2">
      <div class="c2-title"><h3><span style="color: #A0A0C8; font-weight: bold;">Introducing</span> the first <br> tech freelancer hub <br> in the Philippines</h3></div>
      <div class="c2-content-1">
        KnowSum1 is the only tech freelancer hub in the Philippines. Our online platform aims to connect entrepreneurs, small businesses, and corporations with the Filipino IT community by providing them with a vast and verified set of talents, all for the best fees in the market.    </div>
      <div class="c2-content-2">
        Embracing the vibrant spirit of Filipino ingenuity, KnowSum1 celebrates the rich tapestry of skills and expertise within the local IT community. By championing collaboration and empowerment, we pave the way for groundbreaking solutions that propel businesses towards success.
      </div>
      <div class="c2-feature1">
        <div class="features-card">
          <div class="feature-icon"><img src="../assets/images/diverse-icon.png" style="width: 90px;"></div>
          <div class="feature-title"> Diverse Skillsets</div>
          <div class="feature-details">KnowSum1 boasts an extensive pool of Filipino IT talents, ranging from developers and designers to project managers and digital marketers.</div>
        </div>
      </div>
      <div class="c2-feature2">
        <div class="features-card">
          <div class="feature-icon"><img src="../assets/images/direct-icon.png" style="width: 90px;"></div>
          <div class="feature-title">Communication Channels</div>
          <div class="feature-details">KnowSum1 facilitates direct communication channels between clients and freelancers, fostering transparent and effective collaboration.</div>
        </div>
      </div>
      <div class="c2-feature3">
        <div class="features-card">
          <div class="feature-icon"><img src="../assets/images/verified-icon.png" style="width: 90px;"></div>
          <div class="feature-title">Verified Professionals</div>
          <div class="feature-details">Verified credentials and expertise of each freelancer, ensuring that clients have access to highly skilled and reliable professionals.</div>
        </div>   
      </div>
    </div>

    <div class="container-3">
      <img src="../assets/images/about-pic.png" style="width: 100%;">
    </div>

    <div class="container-4">
      <h1 class="c4-header"> Our Team</h1>
      <div class="team-details">
        Discover the heart of KnowSum1 through our dedicated team. United by a shared vision, we blend diverse talents and expertise to drive innovation and excellence in different industries. Get to know the individuals who bring our vision to life, and join us on our journey towards meaningful impact and growth. Together, we're shaping the future with passion and innovation.</div>
      <div class="team-card-container">
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Czarina Laine B. Lucena</h2>
          <p>Chief Executive Officer</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Ivan Allen S. Torres</h2>
          <p>Vice President of Marketing</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Leane Marie Septhanie E. Guira</h2>
          <p>Chief Financial Officer</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Kesha C. Delos Santos</h2>
          <p>Web Manager</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Amica Fiona DV. Nambatac</h2>
          <p>Operations Manager</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Algadir L. Wahid</h2>
          <p>Officer Manager</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Kzander I. Narrazid</h2>
          <p>Customer Service Manager</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Kurt Laurence C. Abia</h2>
          <p>Marketing Manager</p>
        </div>
        <div class="team-card">
          <img src="../assets/images/services-icon.png" style="width: 40px;">
          <h2>Charleen Luh A. Fresnillo</h2>
          <p>Creative Director</p>
        </div>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

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

.container-2 {
  display: grid;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "c2-title c2-content-1 c2-content-2"
    "c2-feature1 c2-feature2 c2-feature3";
}

.c2-title h3{
  grid-area: c2-title;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
}

.c2-content-1 {
  grid-area: c2-content-1;
  color: #737373;
  font-size: 20px;
  text-align: justify;
  margin-right: 30px;
}

.c2-content-2 {
  grid-area: c2-content-2;
  color: #737373;
  font-size: 20px;
  text-align: justify;
  margin-bottom: 50px;
}

.c2-feature1 {
  margin-right: 30px;
}

.c2-feature2 {
  margin-right: 30px;
}

.c2-feature3{
  width: 97%;
  margin-right: 30px;
}

.features-card { 
  display: grid;
  grid-template-columns: 0.4fr 1.6fr;
  grid-template-rows: 0.2fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  width: 100%;
  margin-bottom: 80px;
  padding: 25px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  grid-template-areas:
    "feature-icon feature-title"
    "feature-icon feature-details";
}

.feature-icon { 
  grid-area: feature-icon;
  margin: 0 auto;
  margin-right: 20px;
}

.feature-title {
  grid-area: feature-title;
  font-size: 20px;
  font-weight: bold;
}

.feature-details {
  grid-area: feature-details;
  font-size: 13px;
  text-align: justify;
}

.container-3 {
  display: grid;
  width: 80%;
  margin: 0 auto;
  /* grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 30px;
  grid-auto-flow: row;
  grid-template-areas:
    "c3-left c3-right"; */
justify-content: center;
align-items: center;
  }

.c3-left {
  grid-area: c3-left;
}

.c3-right {
  grid-area: c3-right;
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

.team-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80%; /* Adjust the maximum width as needed */
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
}

.team-card {
  width: 30%; /* Adjust the width of each card */
  margin-bottom: 50px; /* Add some bottom margin for spacing */
  padding: 25px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.team-card h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.team-card p {
  font-size: 18px;
  color: #666;
  text-align: justify;
}

.team-details {
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  line-height: 2.0;
  font-size: 20px;
}
</style>