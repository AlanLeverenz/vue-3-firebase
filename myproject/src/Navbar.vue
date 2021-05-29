<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Contacts</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
    nav {
        text-align: center;
    }
    nav ul {
        padding: 0;
    }
    nav li {
        display: inline-block;
        list-style-type: none;
        margin: 0;
    }
</style>