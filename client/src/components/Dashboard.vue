<script>
    import { fetchUser } from '@/services/api';
    const fetchDashboard = async(username) => {
        try {
            
        } catch (error) {
            
        }
    }
</script>
<template>
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
</template>
  
<style>
  /* Add your component-specific styles here */
</style>
  