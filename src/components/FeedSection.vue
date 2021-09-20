<template>
  <div>
    <v-layout>
      <v-flex>
        <div class="title">Latest Feed</div>
      </v-flex>
      <v-flex text-right>
        <v-btn icon>
          <v-icon> mdi-menu </v-icon>
        </v-btn>
        <v-btn icon color="red">
          <v-icon> mdi-view-grid-outline </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-row class="mt-5">
      <v-col v-for="(image,i) in feedImages" :key="i">
        <v-card
          elevation="12"
          height="230"
          width="210"
          color="blue"
          class="mr-4"
        >
          <v-img
            height="230"
            :src="image"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      feedImages: [
        "https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__480.jpg",
        "https://cdn.pixabay.com/photo/2016/08/09/21/54/lake-1581879_960_720.jpg",
        "https://images.unsplash.com/photo-1523156774078-3c6207a9e292",
        "https://cdn.pixabay.com/photo/2017/08/07/23/11/iceland-2608985__340.jpg",
        "https://images.unsplash.com/photo-1603531827692-18c17df61f0f",
        "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6"
      ],
    };
  },
};
</script>
<style>
</style>
