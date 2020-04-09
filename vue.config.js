module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3420"
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/import.scss";`
      }
    }
  }
};
