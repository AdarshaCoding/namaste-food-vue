<template>
  <div class="restaurant-menu">
    <div v-if="resInfo === null">
      <Shimmer />
    </div>
    <div v-else>
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
        <h5>
          Restaurant Name: {{ resInfo?.cards[2]?.card?.card?.info?.name }}
        </h5>
        <h6>
          Cusines:
          {{ resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ") }}
        </h6>
        <hr style="width: 80%; margin: 10px 0px" />
      </div>
      <div class="restaurant-menu">
        <h3>Menu List</h3>
        <hr style="width: 30%; margin: 10px 0px" />
        <div>
          <div
            class="menu-items"
            v-for="(item, index) in this.resInfo?.cards[4]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards"
            :key="index"
          >
            <div class="item-header">
              <div>
                {{ item?.card?.info?.name }} - Rs.
                {{
                  item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100
                }}
              </div>
              <div class="add-delete-btn">
                <span>+</span>
                <span>-</span>
              </div>
            </div>
            <div class="item-detail">
              {{ item?.card?.info?.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shimmer from "@/views/Shimmer.vue";

export default {
  name: "RestaurantMenu",
  components: {
    Shimmer,
  },
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
  .menu-items {
    border: 1px solid black;
    margin: 10px 0px;
    padding: 10px;
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .add-delete-btn {
        span {
          border: 1px solid black;
          padding: 2px 15px;
          margin: 0 5px;
          cursor: pointer;
        }
      }
    }
    .item-detail {
      font-size: 12px;
      width: 80%;
    }
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
