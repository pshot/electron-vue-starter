import axios from "axios";

const url =
  process.env.NODE_ENV === "production" ? "http://localhost:3420" : "";

const state = {
  data: [],
};

const getters = {
  allData: (state) => state.data,
};

const actions = {
  async fetchData({ commit }) {
    const response = await axios.get(url + "/api/express_example");
    console.log("Response from Request: " + url + "/api/express_example", response);
    const data = response.data;

    commit("setData", data);
  },
};

const mutations = {
  setData: (state, data) => (state.data = data),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
