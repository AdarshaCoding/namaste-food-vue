<template>
  <div class="restaurant-card">
    <img
      :src="
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
        restaurant.cloudinaryImageId
      "
      alt="restaurant-image"
    />
    <h5 class="res-name">{{ restaurant.name }}</h5>
    <div class="res-rating">
      <h6>Ratings : {{ restaurant.avgRating }}</h6>
      <h6 style="margin-bottom: 10px; font-size: 20px; padding: 0px 5px">.</h6>
      <h6>{{ restaurant?.sla?.slaString }}</h6>
    </div>
    <h6 class="res-cuisines">{{ restaurant.cuisines.join(", ") }}</h6>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: ["restaurant"],
  created() {
    console.log(this.restaurant);
  },
};
</script>

<style lang="scss">
.restaurant-card {
  width: 270px;
  height: 290px;
  border-radius: 10px;
  padding: 5px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 15px;
  }
  .res-name {
    font-size: 18px;
    font-family: cursive;
    font-weight: 500;
  }
  .res-rating,
  h6 {
    font-size: 16px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    display: flex;
    align-items: center;
  }
  .res-cuisines {
    font-size: 12px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  &:hover {
    cursor: pointer;
    padding: 10px !important;
  }
}
</style>
