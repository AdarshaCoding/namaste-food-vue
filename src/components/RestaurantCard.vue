<template>
  <div class="restaurant-card">
    <img :src="restaurant.imageUrl" alt="restaurant-image" />
    <h5>{{ restaurant.name }}</h5>
    <h6>Ratings {{ restaurant.ratings }} ⭐</h6>
    <h6>{{ restaurant.cuisines }}</h6>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: ["restaurant"],
};
</script>

<style lang="scss">
.restaurant-card {
  // border: 1px solid black;
  width: 270px;
  height: 290px;
  border-radius: 10px;
  line-height: 20px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 10px;
  }
  h1 {
    font-size: 15px;
  }
  &:hover {
    padding: 5px;
    cursor: pointer;
  }
}
</style>
