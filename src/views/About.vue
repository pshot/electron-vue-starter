<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ formatted_data }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "About",
  data() {
    return {
      someData: "Loading...",
    };
  },
  async created() {
    await this.fetchData();
  },
  computed: {
    ...mapGetters(["allData"]),
    formatted_data() {
      console.log(this.allData);

      return this.allData.someData;
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>

<style></style>
