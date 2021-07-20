<template>
  <v-app >
  <v-container class='mt-16'>
    <v-layout row align-center justify-center class='' >
      <v-flex class='' height='200px'>
        <v-form ref="form"
    v-model="valid">
        <v-card rippled class='flexcard white lighten-3 mx-auto' elevation="3"
           rounded="xl">
          <v-row class='mx-0 my-0' style="overflow:hidden;">
              <v-col cols='7 ' class='teal lighten-2' align-self="center">
              <v-flex class='ma-15 '>
                    <h2 class='white--text text-center font-weight-bold mt-5'>
                      Sign in</h2>
                <v-text-field prepend-inner-icon="mdi-account" outlined :rules='Rules' dark
                class='mx-5 ' v-model='username'
                  label="Username">
                </v-text-field>
                <v-text-field prepend-inner-icon="mdi-lock" dark
                class='mx-5' v-model='password' outlined :rules='passwordRules'
                  label="Password"
                  type="password">
                </v-text-field>
                    <v-row justify="center">
                <v-btn depressed x-large primary  rounded @click="login"
                class='white mt-2 lighten-3 teal--text'>Login
                </v-btn>
                    </v-row>
              </v-flex>
            </v-col>
            <v-col cols='5' align-self="center">
                <h2 class="grey--text text--darken-2 text-center">
            You haven't an account yet?
          </h2>
          <v-card-text class='grey--text text--darken-2'>
            It's never too early or too late for<h3 class='teal--text'>Calendar</h3>
          </v-card-text>
          
          <v-card-actions class="justify-center">
            <v-btn depressed x-large primary rounded to="/register"
                class='teal lighten-3 white--text'>
              Register
            </v-btn>
          </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
import Vue from 'vue';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const database = firebase.database();

export default {
  data() {
    return {
      valid: true,
      username: '',
      email: '',
      password: '',
      role: '',
      emailRules: [
        (v) => /[a-zA-z0-9._]+@[a-zA-Z]+\.[a-zA-z]{2,4}/.test(v) || 'Invalid email',
      ],
      types: ['Customer', 'Pharmacy', 'Driver'],
      Rules: [
        (v) => v.length >= 3 || 'Minimum length is 3 characters',
      ],
      passwordRules: [
        (v) => v.length >= 5 || 'Password must be more than 5 characters',
      ],
    };
  },
  methods: {
    async login() {
      if(this.$refs.form.validate()){
        let formData = new FormData();
        formData.append("username",this.username);
        formData.append("password",this.password);
        Vue.axios.post("/api/login",formData);
        // console.log("hi bruh");
        let response = await Vue.axios.post("/api/login", formData);

        if (response.data.success  && response.data.message !== 'Bad credentials'){
          // console.log(response.data.message)
          this.$router.push({path:"/"})
        } else {
          // console.log('hi from unsuccesfull login');
          alert("Invalid username or password!")
        }
      }
      // console.log(this.username, this.password);
    },
    // register() {
    //   this.$router.push({path:"/register"});
    // }
    // async Register() {
    //   console.log(this.role);
    //   if (this.username !== '' && this.email !== '' && this.password !== '') {
    //     try {
    //       if (this.role === '') {
    //         this.role = 'Customer';
    //       }
    //       firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
    //         (cred) => {
    //           const { user } = cred;
    //           this.$store.dispatch('auth/setAuthenticatedUser', user);
    //           this.$store.dispatch('auth/setAuthenticatedUserRole', this.role);
    //           database.ref('/user').push({
    //             credentials: {
    //               username: this.username,
    //               role: this.role,
    //             },
    //           });
    //           this.$router.push({ name: 'home' });
    //         },
    //       );
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   }
    // },
  },
};
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
.input{
  margin-left: 5;
  margin-right: 5;
}
</style>