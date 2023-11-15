export const state = () => ({
  caseStudies: [],
  loading: false,
  error: null,
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
  caseStudies: (state) => state.caseStudies,
};

export const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setCaseStudies(state, payload) {
    state.caseStudies = payload;
  },
};

export const actions = {
  async getCaseStudies({ state, commit }) {
    console.log("active");
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/case-study-categories`)
      .then((res) => {
        commit("setCaseStudies", res);
        commit("setLoading", false);
        console.log(res);
        return res;
      })
      .catch((error) => {
        commit("setError", error);
        commit("setLoading", false);
      });
    return response;
  },
};
