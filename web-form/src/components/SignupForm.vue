<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input type="email" required v-model="email">

            <label>Password:</label>
            <input type="password" required v-model="password">
            <div v-if="passwordError" class="error">{{ passwordError }}</div>

            <label>Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>

            <label>Skills:</label>
            <input type="text" v-model="tempSkill" @keyup="addSkill">
            <div v-for="skill in skills" :key="skill" class="pill">
                <span @click="deleteSkill(skill,skills)">{{ skill }}</span>
            </div>

            <div class="terms">
                <input v-model="terms" type="checkbox" required>
                <label>Accept terms and conditions</label>
            </div>

            <div class="submit">
                <button>Create an Account</button>
            </div>

        </form>

        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms accepted: {{ terms }}</p>

    </div>
</template>

<script>

export default {
    // two-way data binding in v-form
    // input -> data(), data() -> input
    // data object values tracking form input
    // v-model with select fields, use common value to group
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        // to capture skill text
        addSkill(e) {
            if (e.key === ',' && this.tempSkill.slice(0,-1)) {
                if (!this.skills.includes(this.tempSkill)) {
                this.skills.push(this.tempSkill.slice(0,-1))
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            // skills is available from data store
            console.log(this.skills)
            // rewrites the array by filtering out what matches
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            // validate password
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'

            if(!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms: ', this.terms)
            }

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
    /* relative position to it can be set away from the top */
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px
    }
    .submit {
        text-align: center;
    }
</style>