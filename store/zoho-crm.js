export const state = () => ({
    accessToken: '',
    refreshToken: '',
});

export const mutations = {
    setAccessToken(state, payload) {
        state.accessToken = payload;
    },
    setRefreshToken(state, payload) {
        state.refreshToken = payload;
    },
};

export const actions = {
    async getAuthCode() {
        return this.$axios.$get(`${process.env.zohoCRMAuthService}`)
    },
    async getToken({ commit }, { payload }) {
        const res = await this.$axios
            .$get(`${process.env.zohoCRMAuthService}/auth/token`, { params: { code: payload } })
        commit("setAccessToken", res.data.access_token);
        commit("setRefreshToken", res.data.refresh_token);
        return res;
    },
    async refreshToken({ commit }) {
        const res = await this.$axios
            .$get(`${process.env.zohoCRMAuthService}/auth/refresh-token`)
        commit("setAccessToken", res.data.access_token);
        return res;
    },
    async createLeads({ state, dispatch }, payload) {
        // const createLead = () => this.$axios
        //     .$post(`${process.env.zohoCRMRecordsAPI}/Leads`, payload, {
        //         headers: {
        //             Authorization: state.accessToken
        //         }
        //     })
        const createLead = () => this.$axios
            .$post(`${process.env.zohoCRMAuthService}/records/leads`, { ...payload, token: state.accessToken })
        const response = await createLead()

        if (response.data.data[0].code === 'INVALID_TOKEN') {
            await dispatch('getToken', state.accessToken)
            await createLead()
        }
        return response;
    },
};
