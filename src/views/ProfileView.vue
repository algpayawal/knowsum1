<template>
    <div class="user-profile">
      <div class="nav">
        <VNavBarUser />
      </div>
      <div class="content">
        <div class="head">
          
        </div>
        <div class="main-content">
            <div class="cont-1">
                <h1>USER PROFILE</h1><br/>
            </div>
            <div class="cont-2">
                hi
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
  
  const currentTab = ref('all');
  const users = ref(usersData);

  // Pagination variables
    const currentPage = ref(1);
    const itemsPerPage = 5;
  
  // Filter users with 'title' property
  const usersWithTitles = computed(() => users.value.filter(user => user.title !== undefined));
  const webDevelopers = computed(() => users.value.filter(user => user.title === 'Web Developer'));
  const appDevelopers = computed(() => users.value.filter(user => user.title === 'App Developer'));
  const techConsultants = computed(() => users.value.filter(user => user.title === 'Tech Consultant'));

  // Paginate function
function paginate(data) {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
}

// Navigation functions
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  const totalPages = Math.ceil(usersWithTitles.value.length / itemsPerPage);
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
}

  </script>
  
  <style scoped>
  .user-profile {
    display: grid;
    grid-template-columns: 0.11fr 1.9fr;
    grid-template-rows: 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "nav content";
  }
  
  .nav { grid-area: nav; }
  
  .content {
    grid-area: content;
  }

  .main-content {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "cont-1 cont-2";
}

.cont-1 {
    grid-area: cont-1;
    margin-top: 140px;
    margin-left: 50px;
}

.cont-1 h1 {
    font-size: 35px;
    font-weight: bold;
}

.cont-2 { grid-area: cont-2; }

.footer {
    height: 40px;
}
  </style>
  