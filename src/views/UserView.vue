<template>
  <div class="user-page">
    <div class="nav">
      <VNavBarUser />
    </div>
    <div class="content">
      <div class="head">
        <span><h2>Hi, Client!</h2></span>
        <div class="search-wrapper">
          <input type="text" class="search-bar" placeholder="Search..." v-model="searchQuery">
          <img src="../assets/images/search_icon.png" class="search-icon">
        </div>
      </div>
      <div class="main-content">
        <div class="cont-1">
          <h1>DASHBOARD</h1><br/>
          <div class="tabs">
            <div class="tab" @click="currentTab = 'all'" :class="{ 'active': currentTab === 'all' }">All</div>
            <div class="tab" @click="currentTab = 'webDev'" :class="{ 'active': currentTab === 'webDev' }">Web Developers</div>
            <div class="tab" @click="currentTab = 'appDev'" :class="{ 'active': currentTab === 'appDev' }">App Developers</div>
            <div class="tab" @click="currentTab = 'techCon'" :class="{ 'active': currentTab === 'techCon' }">Tech Consultants</div>
          </div>

          <!-- Content for All Tab -->
          <div class="tab-content" :class="{ 'active': currentTab === 'all' }">
            <br/> 
            <div class="card-container">
              <div class="card" v-for="(user, index) in paginatedFilteredUsers" :key="index">
                <div class="card-header">
                  {{ user.firstName }} {{ user.lastName }}
                   <!-- Kebab menu -->
                    <div class="kebab-menu">
                        <div class="dropdown">
                            <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                                <a @click="sendRequest(index)">Send Request</a>
                                <a @click="contactFreelancer(index)">Contact Freelancer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                  <p>{{ user.title }}</p>
                  <p>{{ user.email_address }}</p>
                  <p>{{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.zip }}, {{ user.address.country }}</p>
                  <p>Rate: {{ displayStars(user.priceRate) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="{ 'active': currentTab === 'webDev' }">
            <br/>
            <div class="card-container">
              <div class="card" v-for="(user, index) in paginatedWebDevelopers" :key="index">
                <div class="card-header">{{ user.firstName }} {{ user.lastName }}
                 <!-- Kebab menu -->
                 <div class="kebab-menu">
                        <div class="dropdown">
                            <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                                <a @click="sendRequest(index)">Send Request</a>
                                <a @click="contactFreelancer(index)">Contact Freelancer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                  <p>{{ user.title }}</p>
                  <p>{{ user.email_address }}</p>
                  <p>{{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.zip }}, {{ user.address.country }}</p>
                  <p>Rate: {{ displayStars(user.priceRate) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="{ 'active': currentTab === 'appDev' }">
            <br/>
            <div class="card-container">
              <div class="card" v-for="(user, index) in paginatedAppDevelopers" :key="index">
                <div class="card-header">{{ user.firstName }} {{ user.lastName }}
                 <!-- Kebab menu -->
                 <div class="kebab-menu">
                        <div class="dropdown">
                            <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                                <a @click="sendRequest(index)">Send Request</a>
                                <a @click="contactFreelancer(index)">Contact Freelancer</a>
                            </div>
                        </div>
                    </div>
                  </div>
                <div class="card-body">
                  <p>{{ user.title }}</p>
                  <p>{{ user.email_address }}</p>
                  <p>{{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.zip }}, {{ user.address.country }}</p>
                  <p>Rate: {{ displayStars(user.priceRate) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="{ 'active': currentTab === 'techCon' }">
            <br/>
            <div class="card-container">
              <div class="card" v-for="(user, index) in paginatedTechConsultants" :key="index">
                <div class="card-header">{{ user.firstName }} {{ user.lastName }}
                 <!-- Kebab menu -->
                 <div class="kebab-menu">
                        <div class="dropdown">
                            <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                                <a @click="sendRequest(index)">Send Request</a>
                                <a @click="contactFreelancer(index)">Contact Freelancer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                  <p>{{ user.title }}</p>
                  <p>{{ user.email_address }}</p>
                  <p>{{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.zip }}, {{ user.address.country }}</p>
                  <p>Rate: {{ displayStars(user.priceRate) }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pagination">
            <button @click="prevPage">Previous</button>
            <button @click="nextPage">Next</button>
          </div>
        </div>

        <div class="cont-2">
          <div class="calendar">
              <div class="header">
                <h2>{{ monthAndYear }}</h2>
                <button @click="previousWeek">&lt;</button>
                <button @click="nextWeek">&gt;</button>
              </div>
              <div class="days">
                <div v-for="(day, index) in days" :key="index" class="day" :class="{ 'current': isCurrentDate(day) }" :style="{ 
                  backgroundColor: isCurrentDate(day) ? '#002850' : 'inherit', 
                  boxShadow: isCurrentDate(day) ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' : 'none', 
                  borderLeft: !isCurrentDate(day) ? '1px solid #ccc' : 'none', 
                  borderRight: !isCurrentDate(day) ? '1px solid #ccc' : 'none', 
                  borderRadius: isCurrentDate(day) ? '5px' : 'inherit'
                }">
                <p v-html="formatDate(day)"></p>
              </div>
            </div>
          </div>

          <div class="schedule">
            <h2 style="font-weight: bold;">Your Projects</h2><br/>
            <div v-if="clientProject.length === 0">
              <p>No pending works</p>
            </div>
            <div class="card-project-container" v-else>
              <div class="card-project" v-for="(work, index) in clientProject" :key="index" :class="{ 'first-project-card': index === 0 }">
                <div class="card-project-header" :style="{ color: index === 0 ? 'white' : 'black' }">{{ work.taskName }}</div>
                <div class="card-project-body" :style="{ color: index === 0 ? 'white' : 'black' }">
                  <p><strong>Freelancer:</strong> {{ work.freelancerName }}</p>
                  <p><strong></strong> {{ work.freelancerEmailAddress }}</p>
                  <p><strong>Status:</strong> {{ work.status }}</p>
                </div>
              </div>
            </div>
          </div>
          </div>

      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VNavBarUser from '../components/VNavBarUser.vue';
import usersData from '../assets/data/users.json';
import clientProjectData from '../assets/data/client-project.json'
import Swal from 'sweetalert2';


const currentTab = ref('all');
const users = ref(usersData);
const clientProject = ref(clientProjectData);
const currentPage = ref(1);
const itemsPerPage = 6;
const searchQuery = ref('');
const startDate = ref(new Date());
const endDate = ref(new Date());
const days = ref([]);
generateDays();


const usersWithTitles = computed(() => users.value.filter(user => user.title !== undefined));
const paginatedUsers = computed(() => paginate(usersWithTitles.value));
const webDevelopers = computed(() => usersWithTitles.value.filter(user => user.title === 'Web Developer'));
const paginatedWebDevelopers = computed(() => paginate(webDevelopers.value));
const appDevelopers = computed(() => usersWithTitles.value.filter(user => user.title === 'App Developer'));
const paginatedAppDevelopers = computed(() => paginate(appDevelopers.value));
const techConsultants = computed(() => usersWithTitles.value.filter(user => user.title === 'Tech Consultant'));
const paginatedTechConsultants = computed(() => paginate(techConsultants.value));

const filteredUsers = computed(() => {
  return usersWithTitles.value.filter(user =>
    user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    (user.title && user.title.toLowerCase().includes(searchQuery.value.toLowerCase())) 
  );
});

const paginatedFilteredUsers = computed(() => paginate(filteredUsers.value));

function paginate(data) {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredUsers.value.length / itemsPerPage);
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
}

function generateDays() {
  const start = new Date(startDate.value);
  const end = new Date(startDate.value);
  end.setDate(endDate.value.getDate() + 6);

  const result = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    result.push(day);
  }
  days.value = result;
}

function previousWeek() {
  startDate.value.setDate(startDate.value.getDate() - 7);
  endDate.value.setDate(endDate.value.getDate() - 7);
  generateDays();
}

function nextWeek() {
  startDate.value.setDate(startDate.value.getDate() + 7);
  endDate.value.setDate(endDate.value.getDate() + 7);
  generateDays();
}

const monthAndYear = computed(() => {
  const month = startDate.value.toLocaleString('default', { month: 'long' });
  const year = startDate.value.getFullYear();
  return `${month} ${year}`;
});

const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' });
  return formatter.format(date);
};

const isCurrentDate = (date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const displayStars = (priceRate) => {
  return '₱ '.repeat(priceRate);
};

function sendRequest(index) {
  // Show the modal for sending a request
  showRequestModal();
}
function showRequestModal() {
  // Display the modal here
  Swal.fire({
    title: 'Send Job Request',
    html:
      '<label for="swal-input1">Project Name:</label>' +
      '<input id="swal-input1" class="swal2-input" placeholder="">' +
      '<label for="swal-input2">Description: </label> ' +
      '<input id="swal-input2" class="swal2-input" placeholder="">' +
      '<label for="swal-input3">Budget (Php):</label>' +
      '<input id="swal-input3" class="swal2-input" placeholder="">' +
      '<label for="swal-input4">Due Date:</label>' +
      '<input id="swal-input4" class="swal2-input" type="date" placeholder="">',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Send',
    preConfirm: () => {
      // Get values from the inputs
      const projectName = document.getElementById('swal-input1').value;
      const description = document.getElementById('swal-input2').value;
      const budget = document.getElementById('swal-input3').value;
      const dueDate = document.getElementById('swal-input4').value;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Request Sent',
        text: 'Your request has been sent. You may contact the freelancer for more information.',
        showConfirmButton: false,
        timer: 2000
      });
    }
  });
}

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

.tabs {
    display: flex;
    padding: 10px;
  }
  
  .tab {
    cursor: pointer;
    padding: 10px 10px;
    margin-right: 1px;
    color: #9b9b9b;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
  
  .tab.active {
    font-weight: bold;
    color: #002850;
    position: relative;
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px; 
    height: 2px; 
    background-color: #F0F028;
}

  .tab-content {
    display: none;
    text-align: justify;
    height: 57vh;
  }
  
  .tab-content.active {
    display: block;
  }

  .table-container {
  overflow-x: auto;
}


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

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); /* Adjust the min and max width as needed */
  gap: 20px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  padding: 15px;
  width: 100%; /* Each card takes full width */
  background-color: #fff;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 5px;
}

  .card-body {
    color: #666;
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


.calendar {
  /* background-color: #F0F0F0; */
  border-radius: 25px;
  padding: 20px;
  margin-right: 50px;
}

.calendar h2{
  font-size: 20px;
  font-weight: bold;
  margin-right: 175px;
}

.header {
  display: flex;
  /* justify-content: space-between;
  align-items: center;*/
  margin-bottom: 10px;
}

.header button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}

.header button:hover {
  color: #002850;
}

.days {
  display: flex;
}

.day {
  flex: 1;
  color: #9b9b9b;
  padding: 10px;
  text-align: center;
}

.day.current p{
  color: #C8C8F0;
  font-weight: bold;
}

.day p {
  margin: 0;
}

.day p {
  margin: 0;
  line-height: 1.2; /* Adjust line height for better spacing */
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
  width: 93%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.card-project-header {
  font-size: 14px;
  margin-bottom: 5px;
  color: #002850;
  font-weight: bold;
}

.card-project-body {
  font-size: 12px;
  color: #495057; /* Dark gray color for body */
}

.card-project-body p {
  margin: 5px 0;
}

.first-project-card {
  width: 100%;
  border-left-color: #C8C8F0; /* Violet left border for the first card */
  background-color: #002850; 
}

  </style>
  