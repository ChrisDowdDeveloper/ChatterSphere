<script setup>
    function handleClick(event) {
        console.log(event);
    }
</script>
<template>
    <div class="logo">
        <img src="./icons/Chattersphere-logos_transparent.png" id="logo"/>
    </div>
    <div class="form">
        <h2>Please Log In</h2>
        <form>
            <div class="username">
                <label>Username / Email</label>
                <input type="text" required v-text="userEmail"/>
            </div>
            <div class="password">
                <label>Password</label>
                <input type="password" required v-text="password"/>
            </div>
            <div>
                <button>Submit</button>
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