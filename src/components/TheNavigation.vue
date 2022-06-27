<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawai">Hawai</router-link>
    <router-link to="/jamaica">Jamaica</router-link> -->

    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
// for clean up code
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
#nav .vue-school-active-link {
  color: cyan;
  border-bottom: 2px solid red;
}
</style>
