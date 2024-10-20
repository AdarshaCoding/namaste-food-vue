<template>
  <div class="search-container">
    <input type="text" placeholder="Search for restaurants and food" />
    <div class="search-image-containter">
      <img class="search-image" src="../assets/search.png" alt="search-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
};
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
}

input {
  padding: 15px;
  width: 70%;
  font-size: 1.15rem;
  font-weight: 500;
  outline-style: none;
  border: 1px solid black;
  color: inherit;
}

.search-image {
  width: 30px;
  height: 30px;
  position: relative;
  right: 50px;
  top: 12px;
}
</style>
