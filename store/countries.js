export const state = () => ({
  countries: null,
});

export const mutations = {
  setCountries(state, payload) {
    state.countries = payload;
  },
};

export const actions = {
  async getCountries({ commit }) {
    const response = await this.$axios
      .$get(`${process.env.userServiceApiBaseUrl}/v1/countries`)
      .then((res) => {
        commit("setCountries", res.data);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
