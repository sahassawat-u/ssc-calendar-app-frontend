<template>
  <v-app >
  <v-container class='mt-15'>
    <v-layout row align-center justify-center class='' >
      <v-flex class='' height='200px'>
        <v-card rippled class='flexcard white lighten-3 mx-auto' elevation="3"
           rounded="xl">
          <v-row class='mx-0 my-0' style="overflow:hidden;">
            <v-col cols='5' align-self="center">
                <h2 class="grey--text text--darken-2 text-center">
            You already have an account ?
          </h2>
          <v-card-text class='grey--text text--darken-2'>
           To keep you connected with us please log in with your personal info
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn depressed x-large primary rounded to="/login"
                class='teal lighten-3 white--text'>
              Log in
            </v-btn>
          </v-card-actions>
            </v-col>
            <v-col cols='7 ' class='teal lighten-2' align-self="center">
              <v-flex class='ma-15 '>
                    <h2 class='white--text text-center font-weight-bold mt-5'>
                      Create account</h2>
                <v-text-field prepend-inner-icon="mdi-account" outlined :rules='Rules' dark
                class='mx-5 ' v-model='username'
                  label="Username">
                </v-text-field>
                <v-text-field prepend-inner-icon="mdi-email" dark
                class='mx-5' v-model='email' outlined :rules="emailRules"
                  label="Email">
                </v-text-field>
                <v-text-field prepend-inner-icon="mdi-lock" dark
                class='mx-5' v-model='password' outlined :rules='passwordRules'
                  label="Password"
                  type="password">
                </v-text-field>
                    <v-row justify="center">
                <v-btn depressed x-large primary @click="Register" rounded
                class='white mt-2 lighten-3 teal--text'>Register
                </v-btn>
                    </v-row>
              </v-flex>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const database = firebase.database();

export default {
  data() {
    return {
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