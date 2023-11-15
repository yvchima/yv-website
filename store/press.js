export const state = () => ({
  pressReleases: null,
  featuredMedias: null,
  awards: null,
  reviews: null,
  loading: false,
  error: null,
});

export const getters = {
  loading: (state) => state.loading,
  error: (state) => state.error,
};

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },

  setPressReleases(state, payload) {
    state.pressReleases = payload;
  },

  setFeaturedMedias(state, payload) {
    state.featuredMedias = payload;
  },

  setAwards(state, payload) {
    state.awards = payload;
  },
  setReviews(state, payload) {
    state.reviews = payload;
  },
};

export const actions = {
  async getPressReleases({ commit }, payload) {
    commit("setLoading", true);
    let params = {
      _start: payload.start,
      _limit: payload.limit,
      category: payload.category,
      category2: payload.category2,
    };
    const response = await this.$axios
      .$get(
        `${process.env.baseUrl}/blogs?blog_categories.slug=${params.category}&blog_categories.slug=${params.category2}&_start=${params._start}&_limit=${params._limit}&_sort=createdAt:DESC`
      )
      .then((res) => {
        commit("setPressReleases", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit("setError", error.data);
      });
    return response;
  },
  async getFeaturedMedias({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/featured-medias?_sort=createdAt:DESC`)
      .then((res) => {
        commit("setFeaturedMedias", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit("setError", error.data);
      });
    return response;
  },
  async getAwards({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/awards`)
      .then((res) => {
        commit("setAwards", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit("setError", error.data);
      });
    return response;
  },
  async getReviews({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/reviews`)
      .then((res) => {
        commit("setReviews", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => {
        commit("setError", error.data);
      });
    return response;
  },
};
