<template>
<div class="admin-page">
  <div class="nav">
      <VNavBar />
  </div>

  <div class="content">

    <div class="head">
        <span><h2>Hi, Freelancer!</h2></span>
        <div class="search-wrapper">
          <input type="text" class="search-bar" placeholder="Search..." v-model="searchQuery">
          <img src="../assets/images/search_icon.png" class="search-icon">
        </div>
    </div>

    <div class="main-content">
      <div class="cont-1">
        <h1>DASHBOARD</h1><br/>

        <div class="tabs">
          <div class="tab" @click="currentTab = 'pendingWorks'" :class="{ 'active': currentTab === 'pendingWorks' }">Pending Works</div>
          <div class="tab" @click="currentTab = 'finishedWorks'" :class="{ 'active': currentTab === 'finishedWorks' }">Finished Works</div>
          <div class="tab" @click="currentTab = 'pendingClients'" :class="{ 'active': currentTab === 'pendingClients' }">Client Requests</div>
        </div>

         <!-- Content for Pending Works Tab -->
         <div class="tab-content" :class="{ 'active': currentTab === 'pendingWorks' }"> <br/>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Task Name</th>
                    <th>Client Name</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Notes</th>
                    <th></th>
                  </tr>
                </thead>
                  <tbody>
                    <tr v-for="(work, index) in filteredPendingWorks" :key="index" :id="'pending-work-' + index">
                      <td width="15%">{{ work.taskName }}</td>
                      <td width="10%" >{{ work.clientName }}</td>
                      <td width="25%" style="text-align: justify;">{{ work.description }}</td>
                      <td width="10%" style="text-align: center;">{{ work.dueDate }}</td>
                      <td width="10%">{{ work.status }}</td>
                      <td width="15%" style="text-align: justify;">{{ work.notes }}</td>
                      <td width="2%">
                        <div class="kebab-menu">
                          <div class="dropdown">
                            <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                              <a @click="markAsDone(index)">Mark as done</a>
                              <a @click="withDraw(index)">Withdraw</a>
                              <a @click="contactClient(index)">Contact Client</a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Content for Finished Works Tab -->
            <div class="tab-content" :class="{ 'active': currentTab === 'finishedWorks' }"><br/>
              <div class="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Task Name</th>
                      <th>Client Name</th>
                      <th>Description</th>
                      <th>Completion Date</th>
                      <th>Notes</th>
                      <th></th>
                    </tr>
                  </thead>
                <tbody>
                  <tr v-for="(work, index) in filteredFinishedWorks" :key="index">
                    <td width="15%">{{ work.taskName }}</td>
                    <td width="12%">{{ work.clientName }}</td>
                    <td width="30%">{{ work.description }}</td>
                    <td width="13%" style="text-align: center;">{{ work.completionDate }}</td>
                    <td width="15%" style="text-align: justify;">{{ work.notes }}</td>
                    <td width="3%">
                      <div class="kebab-menu">
                        <div class="dropdown">
                          <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                              <a @click="contactFinishedClient(index)">Contact Client</a>
                            </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Content for Pending Clients Tab -->
          <div class="tab-content" :class="{ 'active': currentTab === 'pendingClients' }"><br/>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Project Name</th>
                    <th width="30%">Description</th>
                    <th>Due Date</th>
                    <th></th>
                  </tr>
                </thead>
              <tbody>
                <tr v-for="(client, index) in filteredPendingClients" :key="index" :id="'pending-client-' + index">
                    <td>{{ client.clientName }}</td>
                    <td>{{ client.projectName }}</td>
                    <td>{{ client.description }}</td>
                    <td style="text-align: center;">{{ client.dueDate }}</td>
                    <td>
                      <div class="kebab-menu">
                        <div class="dropdown">
                          <button class="dropbtn">⋮</button>
                            <div class="dropdown-content">
                              <a @click="acceptProject(index)">Accept</a>
                              <a @click="declineProject(index)">Decline</a>
                              <a @click="contactPendingClient(index)">Contact Client</a>
                            </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>  
        <!-- end of cont-1 -->

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
        <h2>Schedule</h2><br/>
        <div v-if="pendingWorks.length === 0">
          <p>No pending works</p>
        </div>
        <div class="card-container" v-else>
          <div class="card" v-for="(work, index) in earliestPendingWorks" :key="index" :class="{ 'first-card': index === 0 }">
            <div class="card-header" :style="{ color: index === 0 ? 'white' : 'black' }">{{ work.taskName }}</div>
            <div class="card-body" :style="{ color: index === 0 ? 'white' : 'black' }">
              <p><strong>Client:</strong> {{ work.clientName }}</p>
              <p><strong>Due Date:</strong> {{ work.dueDate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Swal from 'sweetalert2'
import VNavBar from '../components/VNavBar.vue';
import pendingWorksData from '../assets/data/pending-works.json';
import finishedWorksData from '../assets/data/finished-works.json';
import pendingClientsData from '../assets/data/pending-clients.json';
import usersData from '../assets/data/users.json';


const currentTab = ref('pendingWorks');
const pendingWorks = ref(pendingWorksData);
const finishedWorks = ref(finishedWorksData);
const pendingClients = ref(pendingClientsData);
const startDate = ref(new Date());
const endDate = ref(new Date());

const searchQuery = ref('');
const loggedInUser = ref(null);
const days = ref([]);
generateDays();

function acceptProject(index) {
    // Verify if the correct index is received
    console.log('Mark as accepted index:', index);
    // Find the table row corresponding to the completed work
    const tableRow = document.getElementById(`pending-client-${index}`);
    // Log the selected table row to verify
    console.log('Selected table row:', tableRow);
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to accept this project?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Accept',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        // If the table row exists, hide it
        if (tableRow) {
            tableRow.style.display = 'none';
            // Verify if the table row is hidden after attempting to hide it
            console.log('Table row display:', tableRow.style.display);
        }
        // Display "Project marked as done" message for 2 seconds
        Swal.fire({
            icon: 'success',
            title: 'Project accepted.',
            showConfirmButton: false,
            timer: 2000
        });
    });
}

function declineProject(index) {
    const tableRow = document.getElementById(`pending-client-${index}`);
    // Display SweetAlert confirmation dialog
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to decline this project?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
          if (tableRow) {
        tableRow.style.display = 'none';
        // Verify if the table row is hidden after attempting to hide it
        console.log('Table row display:', tableRow.style.display);
    }
    // Display "Project marked as done" message for 2 seconds
    Swal.fire({
        icon: 'success',
        title: 'That is okay, there are more opportunities for you',
        text: 'You have declined this project.',
        showConfirmButton: false,
        timer: 2000
    });
        } else {
            console.log('Project withdrawn.');
        }
    });
}

function markAsDone(index) {
    // Verify if the correct index is received
    console.log('Mark as done index:', index);
    // Find the table row corresponding to the completed work
    const tableRow = document.getElementById(`pending-work-${index}`);
    // Log the selected table row to verify
    console.log('Selected table row:', tableRow);
    // If the table row exists, hide it
    if (tableRow) {
        tableRow.style.display = 'none';
        // Verify if the table row is hidden after attempting to hide it
        console.log('Table row display:', tableRow.style.display);
    }
    // Display "Project marked as done" message for 2 seconds
    Swal.fire({
        icon: 'success',
        title: 'Project marked as done',
        showConfirmButton: false,
        timer: 2000
    });
}

function withDraw(index) {
    const tableRow = document.getElementById(`pending-work-${index}`);
    // Display SweetAlert confirmation dialog
    Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to withdraw from this project?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
          if (tableRow) {
        tableRow.style.display = 'none';
        // Verify if the table row is hidden after attempting to hide it
        console.log('Table row display:', tableRow.style.display);
    }
    // Display "Project marked as done" message for 2 seconds
    Swal.fire({
        icon: 'success',
        title: 'We hate to see you go',
        text: 'You have withdrawn from this project.',
        showConfirmButton: false,
        timer: 2000
    });
        } else {
            console.log('Project withdrawn.');
        }
    });
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

const earliestPendingWorks = computed(() => {
  const sortedWorks = pendingWorks.value.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  return sortedWorks.slice(0, 5);
});

const filteredPendingWorks = computed(() => {
  return pendingWorks.value.filter(work => {
    // Filter based on taskName, clientName, and description
    return (
      work.taskName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      work.clientName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const filteredFinishedWorks = computed(() => {
  return finishedWorks.value.filter(work => {
    // Filter based on taskName, clientName, and description
    return (
      work.taskName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      work.clientName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      work.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const filteredPendingClients = computed(() => {
  return pendingClients.value.filter(client => {
    // Filter based on clientName, projectName, and description
    return (
      client.clientName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      client.projectName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      client.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const contactClient = (index) => {
    const client = pendingWorks.value[index]; // Use the original array
    const clientEmail = client.clientEmailAddress;

    if (clientEmail) {
        const gmailComposeUrl = `mailto:${clientEmail}`;

        // Open Gmail compose window with the recipient's email pre-filled
        window.location.href = gmailComposeUrl;
    } else {
        // Handle cases where client email address is not available
        console.error('Client email address not found.');
    }
};

const contactPendingClient = (index) => {
    const client = pendingClients.value[index]; // Use the original array
    const clientEmail = client.clientEmailAddress;

    if (clientEmail) {
        const gmailComposeUrl = `mailto:${clientEmail}`;

        // Open Gmail compose window with the recipient's email pre-filled
        window.location.href = gmailComposeUrl;
    } else {
        // Handle cases where client email address is not available
        console.error('Client email address not found.');
    }
};

const contactFinishedClient = (index) => {
    const client = finishedWorks.value[index]; // Use the original array
    const clientEmail = client.clientEmailAddress;

    if (clientEmail) {
        const gmailComposeUrl = `mailto:${clientEmail}`;

        // Open Gmail compose window with the recipient's email pre-filled
        window.location.href = gmailComposeUrl;
    } else {
        // Handle cases where client email address is not available
        console.error('Client email address not found.');
    }
};
</script>

<style scoped>
.admin-page {
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
  justify-content: space-between; /* Distribute items evenly */
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
  position: relative; /* Make the parent relative for absolute positioning */
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 8px 35px 8px 20px; /* Adjust padding to make space for icon */
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
grid-template-columns: 1.5fr 0.5fr;
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
  /* background-color: #fff; */
  /* border-bottom: 1px solid #ccc; */
  padding: 10px;
}

.tab {
  cursor: pointer;
  padding: 10px 10px;
  margin-right: 1px;
  color: #9b9b9b;
  /* background-color: #C8C8F0; */
  /* border: 1px solid #A0A0C8; */
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}

.tab.active {
font-weight: bold;
color: #002850;
position: relative; /* Position relative to make the pseudo-element absolute */
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%; /* Adjust to center the underline */
  transform: translateX(-50%); /* Adjust to center the underline */
  width: 50px; 
  height: 2px; 
  background-color: #F0F028;
}

.tab-content {
  display: none;
  text-align: justify;
}

.tab-content.active {
  display: block;
}

.table-container {
overflow-x: auto;
/* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
}

table {
width: 100%;
border-collapse: collapse;
}

th, td {
padding: 10px;
border: 1px solid #ddd;
text-align: center;
}

th {
color: #002850;
background-color: #F0F0F0;
border: none;
font-size: 15px;
font-weight: bold;
}

td {
  text-align: start;
  border: none;
  font-size: 12px;
  background-color: #fff;
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
  top: 100%; /* Adjust the distance from the dropdown button */
  right: 0; /* Align with the left edge of the dropdown button */
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
display: block;
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
  border-left: 1px solid #9b9b9b;
  border-right: 1px solid #9b9b9b;
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

.footer {
  height: 40px;
}

.schedule {
  margin-top: 20px;
  margin-left: 20px;
}

.schedule h2{
  font-size: 20px;
  font-weight: bold;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 70px;
}

.card {
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

.card-header {
  font-size: 14px;
  margin-bottom: 5px;
  color: #002850;
  font-weight: bold;
}

.card-body {
  font-size: 12px;
  color: #495057; /* Dark gray color for body */
}

.card-body p {
  margin: 5px 0;
}

.first-card {
  width: 100%;
  border-left-color: #C8C8F0; /* Violet left border for the first card */
  background-color: #002850; 
}


.footer {
  padding: 50px;
  margin-bottom: 30px;
  background-color: none;
}
</style>
