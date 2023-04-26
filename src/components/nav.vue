<template>
    <div>
        <nav class="row ai-c js-b">
            <div class="logo">
                <routerLink to="/">Aems Studios</routerLink>
            </div>
            <div class="findMovie">
                <input type="text" placeholder="search movie">
                <button class="icon">🔎</button>
            </div>
            <div class="menu">
                <div class="title">Menu</div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    
</script>

<style scoped>

nav {
    padding: 20px 0;
    width: 100%;
}

.logo a{
    color: #fff;
    font-size: 20px;
    font-weight: 600;
}

.findMovie {
    width: 50%;
    position: relative;
}

.icon{
    position: absolute;
    right: 12%;
    top: 50%;
    transform: translate(0%,-50%);
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
}

.findMovie input {
    width: 90%;
    padding: 10px 20px;
    border-radius: 10px;
    background: rgb(80 80 80 / 25%);
    color: #dfdfdf;
    outline: 2.5px solid transparent;
    border: none;
    transition: .6s ease all;
}

.findMovie input:hover {
    outline-color: rgb(80 80 80 / 65%);
}

.findMovie input:focus {
    outline-offset: 2px;
    outline-color: rgb(80 80 80 / 65%);
}

.menu{
    cursor: pointer;
}

.sidebar.active{
    left: 100%;
}
</style>