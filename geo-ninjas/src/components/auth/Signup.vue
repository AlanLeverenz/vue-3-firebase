<template>
  <div class="signup container">
    <form @submit.prevent="signup" class="card-panel">
      <h2 class="center deep-purple-text">Signup</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias">
      </div>
      <p class="red-text center" v-if="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
// need to import the <PACKAGE> i.e., firebase/app
import firebase from 'firebase/app'
require('firebase/auth')
import functions from 'firebase/functions'

export default {
  name: 'Signup',
  data() {
    return {
      // binds with v-model in template
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup() {
      if(this.alias && this.email && this.password){
        console.log(this.email, this.password)
        // if(this.alias){
          this.slug = slugify(this.alias, {
            replacement: '-',
            remove: /[$*_+~.()'"!\:@]/g,
            lower: true
          })
          // get a reference to the users collection for a unique slug
          // let ref = db.collection('users').doc(this.slug)
          // using functions to do the same as above
          let checkAlias = firebase.functions().httpsCallable('checkAlias')
          checkAlias({ slug: this.slug }).then(result => {

          // ref.get().then(doc => {
            // if(doc.exists){
            
            // using callable function now
            console.log(result)
            if(!result.data.unique){
              this.feedback = 'This alias already exists'
              } else {
              firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                const user = cred.user
                console.log(cred.user)
                // ref.set({
                db.collection('users').doc(this.slug).set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: user.uid
                })
              }).then(() => {
                this.$router.push({ name: 'GMap'})
              })
                .catch(err => {
                console.log(err)
                this.feedback = err.message
              })
              this.feedback = 'This alias is free to use'
            }
            })
          } else {
            this.feedback = "You must enter all fields"
        } // else
      // } // if
    } // signup
  } // methods
} // export
</script>

<style>
  .signup {
    max-width: 400px;
    margin-top: 60px;
  }
  .signup h2 {
    font-size: 2.4em;
  }
  .signup .field {
    margin-bottom: 16px;
  }
</style>