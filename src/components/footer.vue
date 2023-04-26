<template>
    <footer class="row ai-c js-b">
        <h6 class="title">
            Aems studios ©
        </h6>
        <ul class="link row">
            <li>
                <routerLink to="/">hammasi huquq asosida </routerLink>
            </li>
            <li>
                <routerLink to="/">bizlarga yozish</routerLink>
            </li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    background: rgb(60 60 60 / 45%);
    padding: 20px 30px;
    border-radius: 10px;
}

.row {
    gap: 20px;
}

ul li a {
    color: #707070;
    border-bottom: 2px solid rgb(0 0 0 / 50%);
    text-transform: capitalize;
}

ul li a:hover {
    border-bottom: transparent;
}



.title {
    font-size: 20px;
}
</style>