export const state = () => ({
  testimonials: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setTestimonials(state, payload) {
    state.testimonials = payload;
  },
};

export const actions = {
  async getTestimonials({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/testimonials?_sort=createdAt:DESC`)
      .then((res) => {
        commit("setTestimonials", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
