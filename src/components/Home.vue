<template>
  <div>
    <div v-if="restaurants?.length === 0">
      <Shimmer />
    </div>
    <div v-else class="home">
      <div class="restaurant-list">
        <router-link
          v-for="restaurant in restaurants"
          :key="restaurant?.info?.id"
          class="res-list"
          :to="'/restaurant/' + restaurant?.info?.id"
        >
          <RestaurantCard :restaurant="restaurant?.info" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Shimmer from "@/views/Shimmer.vue";
import RestaurantCard from "./RestaurantCard.vue";

export default {
  name: "Home",
  components: {
    RestaurantCard,
    Shimmer,
  },
  data() {
    return {
      restaurants: [],
    };
  },

  created() {
    console.log("Home: Created");
    const fetchRestaurants = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9418968&lng=77.5239628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(
      //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      this.restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(this.restaurants);
    };
    fetchRestaurants();
  },
};
</script>

<style scoped lang="scss">
.home {
  margin: auto;
  width: 80%;
  .restaurant-list,
  .res-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    text-decoration: none;
    color: #282c3f;
  }
}
</style>
