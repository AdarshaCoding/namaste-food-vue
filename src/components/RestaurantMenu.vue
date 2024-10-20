<template>
  <div class="restaurant-menu">
    <div class="restaurant-info">
      <img
        :src="
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId
        "
        alt="restaurantImage"
        class="res-image"
      />
      <!-- <h5>Restaurant Id: {{ $route.params.resId }}</h5> -->
      <h5>Restaurant Name: {{ resInfo?.cards[2]?.card?.card?.info?.name }}</h5>
      <h6>
        Cusines: {{ resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ") }}
      </h6>
      <hr style="width: 80%; margin: 10px 0px" />
    </div>
    <div class="restaurant-menu">
      <h3>Menu List</h3>
      <hr style="width: 30%; margin-bottom: 10px" />
      <ul>
        <!-- <li>
        {{
          this.resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
            ?.card?.card?.itemCards[0]?.card?.info?.name
        }}
      </li> -->
        <li
          v-for="(item, index) in this.resInfo?.cards[4]?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards"
          :key="index"
        >
          {{ item?.card?.info?.name }} - Rs.
          {{ item?.card?.info?.price / 100 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantMenu",
  data() {
    return {
      resInfo: null,
    };
  },
  created() {
    const fetchMenu = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9418968&lng=77.5239628&restaurantId=" +
          this.$route.params.resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      this.resInfo = json?.data;
    };
    fetchMenu();
  },
};
</script>

<style lang="scss">
.restaurant-info {
  width: 80%;
}

.restaurant-menu {
  width: 80%;
  margin: 20px 0px;
  li {
    list-style-type: none;
    line-height: 30px;
  }
}

.restaurant-info {
  img {
    width: 250px;
    height: 200px;
    margin: 10px 0px;
    border-radius: 10px;
  }
}
</style>
