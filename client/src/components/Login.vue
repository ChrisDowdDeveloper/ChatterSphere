<script setup>
    import { ref } from 'vue';
    import { login } from '../services/api';
    import { useRouter } from 'vue-router';

    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const submit = async() => {
        
        try {
            const response = await login(username.value, password.value);
            if(response) {
                router.push({ name: 'dashboard', params: { username: username.value } });
            } else {
                console.log('wrong')
            }
        } catch(e) {
            console.error("API Errror: " + e)
        }
        
    }

</script>
<template>
    <div class="logo">
        <img src="./icons/Chattersphere-logos_transparent.png" id="logo"/>
    </div>
    <div class="form">
        <h2>Please Log In</h2>
        <form v-on:submit.prevent="submit">
            <div class="username">
                <label>Username / Email</label>
                <input type="text" required v-model="username"/>
            </div>
            <div class="password">
                <label>Password</label>
                <input type="password" required v-model="password"/>
            </div>
            <div>
                <button type="submit">Submit</button>
                <a href="/createAccount">Create Account</a>
            </div>
        </form>
    </div>
</template>
<style>

img {
    width: 50%;
}

</style>