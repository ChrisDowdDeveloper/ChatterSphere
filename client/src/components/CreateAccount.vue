<script setup>
    import { ref } from 'vue';
    import { login } from '@/services/api';

    const username = ref('');
    const email = ref('');
    const password = ref('');

    async function submit() {
        const credentials = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        try {
            const response = await createUser(credentials);
            if(response) {
                console.log("Success");
            }
        } catch(err) {
            console.error("API Error: ", err);
        }
        
    }
</script>
<template>
    <div class="logo">
        <img src="./icons/Chattersphere-logos_transparent.png" id="logo"/>
    </div>
    <div class="form">
        <h2>Please Enter Account Info</h2>
        <form v-on:submit.prevent="submit">
            <div>
                <label>Username</label>
                <input type="text" required v-model="username"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" required v-model="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" required v-model="password"/>
            </div>
            <button type="submit">Submit</button>
            <a href="/">Cancel</a>
        </form>
    </div>
</template>
<style>

img {
    width: 50%;
}

</style>