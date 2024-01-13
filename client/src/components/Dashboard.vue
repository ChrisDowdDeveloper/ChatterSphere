<script>
  import { onMounted, reactive, watchEffect } from 'vue';
  import { fetchChatrooms } from '../services/api'

  export default {
  setup() {
    const dashboardData = reactive({
      chatrooms: []
    });

    onMounted(async () => {
      dashboardData.chatrooms = await fetchChatrooms();
    });

    return {
      dashboardData
    };
  }
};

</script>
<template>
    <div>
      <h1>Chatrooms</h1>
      <ul>
        <div> 
          <li v-for="chatroom in dashboardData.chatrooms" :key="chatroom.chatroomId">
            {{ chatroom.chatroomName }}
            <button @click="joinChatroom">join</button>
          </li>
        </div>
      </ul>
    </div>
</template>
  
<style>
  /* Add your component-specific styles here */
</style>
  