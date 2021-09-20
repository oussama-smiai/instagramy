<template>
  <v-navigation-drawer class="pa-4" app floating permanent v-model="drawer">
    <v-layout class="pa-1">
            <v-icon class="mr-3">mdi-instagram</v-icon>
            <v-img aspect-ratio="3" width="20px" src="../assets/instagram.png"></v-img>
    </v-layout>
    <v-layout class="mt-10">
      <v-flex>
        <v-layout>
          <v-flex text-center style="">
            <!--<v-card class="text-center" width="70" style="border-radius; 50%" outlined>
              --><v-layout>
              <v-avatar size="70"  color="grey">
                <v-img
                  src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9"
                />
              </v-avatar>
              </v-layout>
            <!--</v-card>-->
            <div class="mt-4 title">ali mohamed</div>
            <div class="mt-1 subtitle-2 grey--text">Tunis, Tunisia</div>
            <div class="mt-5">
              <v-layout>
                <v-flex>
                  <div class="subtitle-2">Post</div>
                  <div class="subtitle-2 grey--text">116</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Followers</div>
                  <div class="subtitle-2 grey--text">11m</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Following</div>
                  <div class="subtitle-2 grey--text">10k</div>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-list nav dense class="mt-10">
      <v-list-item-title>Foo</v-list-item-title>
      <v-list-item-group
        v-model="group"
        active-class="red--text text--accent-2"
      >
        <v-list-item >
          <v-list-item-icon>
            <v-icon >mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title  class="grey--text">Feed</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-compass-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Explore</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-pound</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trending</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-check-decagram</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Top Post</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>People</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bell-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Notification</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Direct</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chart-pie</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Status</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {};
</script>
<style>
</style>