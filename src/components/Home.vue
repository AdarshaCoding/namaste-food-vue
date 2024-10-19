<template>
  <div class="home">
    <div class="restaurant-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/31/fa2b070a-7908-4ac7-b66f-f63633284c0d_951058.jpg"
        alt="restaurant-image"
      />
      <h5>Burger King</h5>
      <h6>Ratings: 3.5 ⭐</h6>
      <h6>Cuisines: North Indian, South Indian</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
