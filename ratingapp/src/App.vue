<template>
  <div class="container">
    <div class="card card-body text-center p-5 mt-5 border-primary">
      <div>
        <i class="fa fa-star text-warning fa-6x" @click="setRatings(1)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRatings(2)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRatings(3)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRatings(4)"></i>
        <i class="fa fa-star text-warning fa-6x" @click="setRatings(5)"></i>
      </div>
      <h1 class="text-success mt-4" v-if= "rating == 1">
        Sorry to hear that rating.
      </h1>
      <h1 class="text-success mt-4" v-if= "rating == 2">
        We Got Two Stars, We'll Improve!
      </h1>
      <h1 class="text-success mt-4" v-if= "rating == 3">
        So, you like it!
      </h1>
      <h1 class="text-success mt-4" v-if= "rating == 4">
        Wow! Greteful to hear this.
      </h1>
      <h1 class="text-success mt-4" v-if= "rating == 5">
        That's Amazing! Thanks a ton.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      rating: null,
      noOfRatings:5
    };
  },
  methods: {
    setRatings(rating) {
      this.rating = rating;
    },
  },
};
</script>

<style>
body {
  background-color: #333;
}
</style>