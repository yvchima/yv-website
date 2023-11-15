export const state = () => ({
  countries: null,
  regions: null,
  singleCountry: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setCountryLegislations(state, payload) {
    state.countries = payload;
  },
  setAvailableRegions(state, payload) {
    state.regions = payload;
  },
  setSingleCountry(state, payload) {
    state.singleCountry = payload;
  },
};

export const actions = {
  async getCountryLegislations({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/legislations`)
      .then((res) => {
        commit("setCountryLegislations", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
  async getAvailableRegions({ state, commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/legislation-categories`)
      .then((res) => {
        commit("setAvailableRegions", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
  async getSingleCountry({ commit }, slug) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/legislations/?slug=${slug}`)
      .then((res) => {
        commit("setSingleCountry", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
