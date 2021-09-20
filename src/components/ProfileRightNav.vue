<template>
  <v-navigation-drawer class="pa-4 mt-6" app clipped floating permanent right v-model="drawer">
    <v-layout > 
        <v-card height="300" width="100%">
            <v-img height="300"
             width="100%"   
             src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c">
            </v-img>
        </v-card>
    </v-layout>
    <v-layout class="mt-6">
        <div class="title">
            Oussama Smiai
        </div>
    </v-layout>
    <v-row>
        <v-flex>
            <v-layout>
                <div class="subtitle-2">882</div>
                <div class="subtitle-2 mt-2 grey--text">Photos</div>
            </v-layout>
        </v-flex>
        <v-flex>
            <v-layout>
                <div class="subtitle-2">52k</div>
                <div class="subtitle-2 mt-2 grey--text">Followers</div>                
            </v-layout>
        </v-flex>
    </v-row>
    <v-layout class="mt-4 subtitle-2 grey-text">
        Oussama smiai is a frontend developer
        <br /> based in Tunisia
        <br /> I like language learning
    </v-layout>-    
    <v-layout class="mt-5">
        <v-flex>
            <div class="subtitle-2">
                Locations
            </div>
            <div class="subtitle-2">
                Based in Tunis, Tunisia
            </div>
        </v-flex>
    </v-layout>
        <v-layout class="mt-5">
        <v-flex>
            <div class="subtitle-2">
                Profession
            </div>
            <div class="subtitle-2">
                Developer
            </div>
        </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
export default {};
</script>
<style>
</style>