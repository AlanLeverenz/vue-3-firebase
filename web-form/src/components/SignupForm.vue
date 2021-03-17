<template>
    <div>
        <form>
            <label>Email:</label>
            <input type="email" required v-model="email">

            <label>Email:</label>
            <input type="password" required v-model="password">

            <label>Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>
        </form>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
    </div>
</template>

<script>

export default {
    // two-way data binding in v-form
    // input -> data(), data() -> input
    // data object values tracking form input
    // v-model with select fields
    data() {
        return {
            email: '',
            password: '',
            role: 'designer'
        }
    }
}
</script>

<style scoped>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555
    }
</style>