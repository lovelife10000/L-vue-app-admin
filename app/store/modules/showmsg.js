import {HIDE_MSG, SHOW_MSG,} from 'config/types';

const state = {
    message: {
        type: '',
        content: '',
        title: '',
    },
};

const mutations = {
    [SHOW_MSG](state, action) {
        state.message = {...action};
    },
    [HIDE_MSG](state, action) {
        state.message = {
            type: '',
            content: '',
            title: '',
        };
    },
};

export default {
    state,
    mutations,
};
