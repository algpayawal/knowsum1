<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <img src="../assets/images/knowsum1-logo.png" style="width: 120px; height: 30px;"><br><br>
          <p>ABOUT US</p>
          KnowSum1 is the only tech freelancer hub in the Philippines. Our online platform aims to connect entrepreneurs, small businesses, and corporations with the Filipino IT community by providing them with a vast and verified set of talents, all for the best fees in the market.

          <br><br>
          <img src="../assets/images/fb-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;"> &nbsp;
          <img src="../assets/images/ig-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;"> &nbsp;
          <img src="../assets/images/phone-icon.png" alt="Facebook Icon" style="width: 30px; height: 30px; margin-right: 5px;"> &nbsp;
          <!-- add phone icon -->
        </div>
        <div class="footer-section">
          <br><br>
          <p>MAILING LIST</p>
          Subscribe to our newsletter and never miss out on the latest updates, exclusive offers, and industry insights. Join our community today!<br><br>
          <div class="search-wrapper">
            <input type="text" class="search-bar" placeholder="Email...">
            <!-- <img src="../assets/images/search_icon.png" class="search-icon"> -->
          </div>
        </div>
        <div class="footer-section">
          <br><br>
          <p>ADDRESS</p>
          Block 9 Lot 10 Purok Prince Ville <br>
          Santa Monica, Puerto Princesa City, Palawan, South Luzon, 5300
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #002850;
    color: #fff;
    padding: 50px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    padding: 0px 60px;
  }
  
  .footer-section {
    flex: 1;
    text-align: justify;
    margin-right: 100px;
  }
  
  .footer-section h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .footer-section p {
    font-size: 17px;
    font-weight: bold;
    color: #C8C8F0;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
  
  .footer-bottom p {
    margin: 0;
  }

  .search-wrapper {
  position: relative; 
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 8px 35px 8px 20px; /* Adjust padding to make space for icon */
  border: 1px solid #e6e6e6;
  border-radius: 25px;
  width: 420px;
  height: 35px;
}
/* 
.search-icon {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
} */
  </style>
  