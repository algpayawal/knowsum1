<template>
    <div class="about">
      <div class="container-1">
        <NavBar/>
       <div class="about-us-header">
        CONTACT US
       </div>
      </div>
      <div class="container-2">
        <div class="c2-left">
            <h3 class="c2-subhead">Connect</h3>
            <h1 class="c2-main-head">Get In Touch</h1>
            <p class="c2-main-details">
                Our one-stop shop platform seamlessly connects business with the best IT talents and provides unparalleled marketing support for freelancers, all for the lowest service fee in the market.
            </p>
            <div class="social-media">
              <div class="socials">
                  <a href="https://facebook.com/knowsum1">
                      <img src="../assets/images/fb-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;">
                      <span>facebook.com/knowsum1</span>
                  </a>
              </div><br>
              <div class="socials">
                  <a href="https://instagram.com/knowsum1">
                      <img src="../assets/images/ig-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;">
                      <span>instagram.com/knowsum1</span>
                  </a>
              </div><br>
              <div class="socials">
                  <a>
                      <img src="../assets/images/phone-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;">
                      <span>+639-158-456-981</span>
                  </a>
              </div><br>
              <div class="socials">
                  <a>
                      <img src="../assets/images/location-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;">
                      <span>Block 9 Lot 10 Purok Prince Ville Santa Monica, <br> &nbsp; &nbsp; &nbsp; &nbsp; Puerto Princesa City, Palawan, South Luzon, 5300</span>
                  </a>
              </div><br>
            </div>
        </div>

        <div class="c2-right">
            <div class="contact-form">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
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
    background-image: url(../assets/images/contact-bg.png);
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    width: 80%;
    margin: 0 auto;
    grid-auto-flow: row;
    grid-template-areas:
        "c2-left c2-right";
  }

  .c2-left {
    grid-area: c2-left;
  }

  .c2-subhead {
    color: #A0A0C8;
    font-size: 35px;
    font-weight: bold;
    margin-top: 60px;
  }

  .c2-main-head {
    color: #002850;
    font-size: 70px;
    font-weight: bold;
    line-height: 1.2;
    width: 90%;
  }

  .c2-main-details {
    color: #002850;
    font-size: 17px;
    text-align: justify;
    width: 90%;
    padding-bottom: 40px;
    position: relative; 
  }

  .c2-main-details::after {
    content: ""; 
    position: absolute;
    bottom: 0;
    left: 23%;
    transform: translateX(-50%);
    width: 300px;
    height: 5px;
    background-color: #F0F028;
  }

  .social-media {
    margin-top: 50px;
  }

  .socials {
    display: inline-block;
    color: #A0A0C8;
    line-height: 30px;
    font-size: 20px;
    padding: 15px;
}

.socials a {
    text-decoration: none;
    color: #A0A0C8; /* Change color if needed */
}

.socials img {
    vertical-align: middle;
}

.socials span {
    margin-left: 5px; /* Adjust spacing between icon and text */
}

  .c2-right {
    grid-area: c2-right;
    margin-top: 60px;
    margin-bottom: 100px;
  }

  .contact-form {
    background-color: #fff;
    padding: 50px;
    color: #032900;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted shadow size and color */
    border-radius: 15px;
  }  
   
    .contact-form form {
      max-width: 100%;
    }
    
    .contact-form label {
      display: block;
      margin-bottom: 5px;
      color: #002850;
      font-size: 17px;
      font-weight: bold;
    }
    
    .contact-form input[type="text"],
    .contact-form input[type="email"],
    .contact-form textarea {
      width: 100%;
      font-size: 15px;
      padding: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      background-color: #F4F4FD;
    }
    
    .contact-form textarea {
      height: 250px;
      font-size: 17px;
      margin-bottom: 20px;
    }
    
    .contact-form button {
        padding: 12px 35px;
        background-color: #F0F028;
        color: #000028;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
    }
    
    .contact-form button:hover {
      background-color: #555;
    }

  </style>