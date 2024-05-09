<template>
  <div class="user-page">
    <div class="nav">
      <VNavBarUser />
    </div>
    <div class="content">
      <div class="head">
        <h2>Hi, Client!</h2>
        <div class="search-wrapper">
          <input type="text" class="search-bar" placeholder="Search..." v-model="searchQuery">
          <img src="../assets/images/search_icon.png" class="search-icon">
        </div>
      </div>
      <div class="main-content">
        <div class="cont-1">
          <h1>YOUR PROJECTS</h1><br/>
          <div class="schedule">
            <div v-if="clientProject.length === 0">
              <p>No pending works</p>
            </div>
            <div class="card-project-container" v-else>
              <div class="card-project" v-for="(work, index) in clientProject" :key="index">
                <div class="card-project-header">{{ work.taskName }}
                  <div class="kebab-menu">
                      <div class="dropdown">
                          <button class="dropbtn">⋮</button>
                          <div class="dropdown-content">
                              <a @click="confirmPayment(index)">Send Payment</a>
                              <a @click="contactFreelancer(index)">Contact Freelancer</a>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="card-project-body">
                  <p><strong>Freelancer:</strong> {{ work.freelancerName }}</p>
                  <p><strong>Email:</strong> {{ work.freelancerEmailAddress }}</p>
                  <p><strong>Status:</strong> {{ work.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont-2"></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VNavBarUser from '../components/VNavBarUser.vue';
import usersData from '../assets/data/users.json';
import clientProjectData from '../assets/data/client-project.json';
import Swal from 'sweetalert2';

// Define the payment form data
const paymentAmount = ref('');
const paymentMethod = ref('');

// Your existing data and methods
const users = ref(usersData);
const clientProject = ref(clientProjectData);
const currentPage = ref(1);
const itemsPerPage = 6;
const searchQuery = ref('');

const usersWithTitles = computed(() => users.value.filter(user => user.title !== undefined));

const filteredUsers = computed(() => {
  return usersWithTitles.value.filter(user =>
    user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    (user.title && user.title.toLowerCase().includes(searchQuery.value.toLowerCase())) 
  );
});


const showPaymentForm = () => {
  // Create the payment form dynamically
  const paymentForm = `
  <form id="paymentForm">
    <!-- Payment amount input -->
    <input type="text" id="paymentAmount" placeholder="Enter amount (in Php)" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 17px" required><br/><br/>
    
    <!-- Selected Payment Method -->
    <label for="paymentMethod">Select Payment Method:</label><br><br>
    <div style="display: flex; justify-content: center; flex-wrap: wrap;">
      <div style="flex: 0 0 50%; max-width: 50%;">
        <div style="margin-bottom: 10px;">
          <input type="radio" id="gcash" name="paymentMethod" value="gcash">
          <label for="gcash">
            <img src="/gcash_icon.png" style="width: 100px;">
          </label>
        </div>
        <div>
          <input type="radio" id="bdo" name="paymentMethod" value="bdo">
          <label for="bdo">
            <img src="/bdo_icon.png" style="width: 60px;">
          </label>
        </div>
      </div>
      <div style="flex: 0 0 50%; max-width: 50%;">
        <div>
          <input type="radio" id="paypal" name="paymentMethod" value="paypal">
          <label for="paypal">
            <img src="/paypal_icon.png" style="width: 60px;">
          </label>
        </div>
        <div>
          <input type="radio" id="bpi" name="paymentMethod" value="bpi">
          <label for="bpi">
            <img src="/bpi_icon.png" style="width: 60px;">
          </label>
        </div>
      </div>
    </div>
    <br>    <!-- Account number input -->
    <input type="text" id="accNumber" placeholder="Enter Account Number" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 17px" required><br/><br/>
  </form>
`;

Swal.fire({
    title: 'Payment Form',
    html: paymentForm,
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    preConfirm: () => {
      // Delay before handling form submission
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 2000); // Delay of 2000 milliseconds (2 seconds)
      }).then(() => {
        // Handle form submission
        submitPayment();
      });
    }
  });
};



// Method to confirm payment
const confirmPayment = (index) => {
  // Display a warning message for payment confirmation
  Swal.fire({
    icon: 'warning',
    title: 'Confirm Payment',
    text: `Do you want to send payment to ${clientProject.value[index].freelancerName}?`,
    showCancelButton: true,
    confirmButtonText: 'Okay',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // If user clicks "Okay", show the payment form
      showPaymentForm();
    }
  });
};

// Method to submit payment
const submitPayment = () => {
  // Perform payment submission logic here
  // For demo purposes, just show a success message
  Swal.fire({
    icon: 'success',
    title: 'Payment Sent!',
    text: 'Your payment has been sent.',
    showConfirmButton: false,
    timer: 2000
  });
  // Reset form fields after submission
  paymentAmount.value = '';
  paymentMethod.value = '';
};

const setPaymentMethod = (method) => {
  paymentMethod.value = method;
};


const contactFreelancer = (index) => {
    const freelancer = users.value[index];
    const freelancerEmail = freelancer.email_address; // Fixed typo here

    if (freelancerEmail) {
        const gmailComposeUrl = `mailto:${freelancerEmail}`;

        // Open Gmail compose window with the recipient's email pre-filled
        window.location.href = gmailComposeUrl;
    } else {
        // Handle cases where client email address is not available
        console.error('Freelancer email address not found.');
    }
};

</script>


    <style scoped>
.selected {
  background-color: blue; /* Change the background color to blue for the selected button */
}

button {
  border: none;
  background: none;
  outline: none; /* Remove default outline */
}


    .user-page {
      display: grid;
      grid-template-columns: 0.11fr 1.9fr;
      grid-template-rows: 1fr;
      grid-auto-columns: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas: "nav content";
      background-image: url(../assets/images/general-bg.png);
      background-size: cover;
      background-position: center;
      height: 100vh;
    }
    
    .nav { grid-area: nav; }
    
    .content {
      grid-area: content;
    }
    
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px;
      font-size: 25px;
      font-weight: bold;
    }
  
    .head h2 {
      font-size: 20px;
      font-weight: bold;
    }
    
    .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }
    
    .search-bar {
      padding: 8px 35px 8px 20px;
      border: 1px solid #e6e6e6;
      border-radius: 25px;
      width: 400px;
      height: 35px;
    }
    
    .search-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }
  
    .main-content {
    display: grid;
    grid-template-columns: 1.4fr 0.5fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 50px;
    grid-auto-flow: row;
    grid-template-areas:
      "cont-1 cont-2";
  }
  
  .cont-1 {
      grid-area: cont-1;
      margin-left: 50px;
  }
  
  .cont-1 h1 {
      font-size: 35px;
      font-weight: bold;
  }
  
  .cont-2 { grid-area: cont-2; }
  
  .kebab-menu {
    display: flex;
    justify-content: center;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropbtn {
    background-color: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 12px;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .footer {
      height: 40px;
  }
  
  .pagination {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
    }
  
    .pagination button {
      padding: 8px 16px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
      transition: background-color 0.3s ease;
    }
  
    .pagination button:hover {
      background-color: #e0e0e0;
    }
  
    .pagination button[disabled] {
      background-color: #ddd;
      cursor: not-allowed;
    }
  
  .card-project-container {
    display: flex;
    flex-wrap: wrap;
    margin-right: 70px;
  }
  
  .card-project {
    background-color: #f8f9fa; /* Light gray background */
    border-left: 5px solid #002850; /* Blue left border */
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow */
    width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  
  .card-project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  .card-project-body {
    font-size: 15px;
    color: #495057; /* Dark gray color for body */
  }
  
  .card-project-body p {
    margin: 5px 0;
  }

  .hidden {
  display: none;
}
  
    </style>
