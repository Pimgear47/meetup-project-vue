<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn dark large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn dark large router to="/meetups/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl">
            <div class="title">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm-6 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    meetups: [
      {
        imageUrl:
          "http://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg",
        id: "asdfff1ssd",
        title: "Meetup in New York"
      },
      {
        imageUrl:
          "https://www.sbb.ch/content/dam/internet/sharedimages/ff-uebersichtsseiten/Lyria.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
        id: "asdsadsadff1ssd",
        title: "Meetup in Paris"
      },
      {
        imageUrl:
          "https://ramboll.com/-/media/images/environ/countries/singapore-merlion-getty-1360x765.jpg?h=765&la=en&w=1360",
        id: "asdffdaff1ssd",
        title: "Meetup in Singapore"
      }
    ]
  })
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
  left: 50%;
  transform: translate(-50%, 0); 
}
</style>