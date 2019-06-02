<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h2 style="color:#E65100;">{{meetup.title}}</h2>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{meetup.date}} - where it takes place</div>
            <div>I met you when I was 18. is a collection of songs, a story. about making a big move, falling in love for the first time, and figuring out your own identity while being with someone else. Sometimes YouTube makes a heavenly recommendation, for which i am incredibly grateful.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

