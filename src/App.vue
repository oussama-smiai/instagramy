<template>
  <v-app>
    <v-app-bar flat clipped-right app color="white" clipped>
      <div class="d-flex align-center">
        <v-card outlined width="300px" class="pa-2">
          <v-layout>
            <v-flex>
              <v-icon color="grey">mdi-magnify</v-icon>
              <span class="ml-2 grey--text">Search</span>
            </v-flex>  
            <v-flex class="text-right">
              <v-icon color="grey">mdi-microphone-outline</v-icon>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
      <v-spacer></v-spacer>
      <v-btn dark elevation="10" depressed color="red lighten-2" class="text-none mr-5">
        <span>
          <v-icon class="mr-2">mdi-plus</v-icon> Create New Post
        </span>
      </v-btn>
      <v-btn icon class="mr-5">
        <v-icon>mdi-email-outline</v-icon>
      </v-btn>

      <v-btn icon class="mr-5">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-avatar size="30">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg"
        lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"/>
      </v-avatar>
  
    </v-app-bar> 
    <main-nav />
    <profile-right-nav />
    <v-main>
      <ProfilePage />
    </v-main>  
  </v-app>
</template>

<script>
import ProfileRightNav from './components/ProfileRightNav'
import MainNav from './components/MainNav'
import ProfilePage from './Pages/ProfilePage'
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    MainNav,
    ProfilePage,
    ProfileRightNav
  },

  data: () => ({
    
    ProfileRightNavdrawer:true,
    group:null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
