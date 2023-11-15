export const state = () => ({
  teams: null,
  departments: null,
  openings: null,
  openDepartments: null,
  loading: false,
});

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },

  setTeams(state, payload) {
    state.teams = payload;
  },

  setDepartments(state, payload) {
    state.departments = payload;
  },

  setOpenings(state, payload) {
    state.openings = payload;
  },

  setOpenDepartments(state, payload) {
    state.openDepartments = payload;
  },
};

export const actions = {
  async getTeams({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/our-people?_sort=SortOrder:DESC`)
      .then((res) => {
        commit("setTeams", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getDepartments({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/company-departments`)
      .then((res) => {
        commit("setDepartments", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getOpenings({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/job-opening-roles`)
      .then((res) => {
        commit("setOpenings", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },

  async getOpenDepartments({ commit }) {
    commit("setLoading", true);
    const response = await this.$axios
      .$get(`${process.env.baseUrl}/job-opening-departments`)
      .then((res) => {
        commit("setOpenDepartments", res);
        commit("setLoading", false);
        return res;
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
    return response;
  },
};
