<template>
  <div class="home">
    <div class="restaurant-list">
      <RestaurantCard :restaurant="restaurant" />
    </div>
  </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";

export default {
  name: "Home",
  components: {
    RestaurantCard,
  },
  data() {
    return {
      restaurant: {
        name: "Burger King",
        ratings: "3.5",
        cuisines: "North Indian, South Indian",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg",
      },
    };
  },
  // created: {
  //   restaurant: {
  //     name: "Burger King",
  //     ratings: "3.5",
  //     cuisines: "North Indian, South Indian",
  //     imageUrl:
  //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg",
  //   },
  // },
};
</script>

<style scoped lang="scss">
.home {
  margin: 15px 0px;
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
}
</style>
