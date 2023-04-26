<script setup>
</script>

<template>
    <nav class="sidebar">
        <ul>
            <li>
                <div class="close-side">Menu</div>
            </li>
            <li class="underline">
                <routerLink to="/">bosh sahifa</routerLink>
            </li>
            <li>
                <routerLink :images = 'images' :to="{ name: 'lists', params: { type: 'film' } }">filmlar</routerLink>
            </li>
            <li>
                <routerLink :to="{ name: 'lists', params: { type: 'serial' } }">serial</routerLink>
            </li>
            <li>
                <routerLink :to="{ name: 'lists', params: { type: 'cartoon' } }">multfilm</routerLink>
            </li>
            <li class="underline">
                <routerLink :to="{ name: 'lists', params: { type: 'anime' } }">anime</routerLink>
            </li>
            <li>
                <routerLink :to="{ name: 'lists', params: { type: '1' } }">multiqidiruv</routerLink>
            </li>
        </ul>
    </nav>
</template>



<style>
.close-side {
    color: #cecece;
    margin-bottom: 30px;
    text-align: center;
    margin-top: 30px;
}

.sidebar {
    position: fixed;
    width: 155px;
    background: rgba(0, 0, 0, 0.527);
    backdrop-filter: blur(10px);
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: 1;
}
</style>

<style scoped>
ul {
    display: flex;
    gap: 13px;
    flex-direction: column;
}

ul li a {
    color: rgb(206 206 206 / 65%);
    font-size: 15px;
    padding: 6px 10px;
    line-height: 1;
    font-weight: 400;
    transition: .6s ease all;
    border-radius: 10px;
}

ul li a:hover {
    background: #000
}

.underline {
    margin-bottom: 10px;
}

.underline a {
    position: relative;
}

.underline a::before {
    position: absolute;
    content: "";
    bottom: -3px;
    right: 0px;
    height: 2px;
    width: 90%;
    background: rgb(80 80 80 / 20%);
}
</style>