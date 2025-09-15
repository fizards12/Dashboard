import { createStore } from "vuex";

import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

// Modules
import alerts from "./modules/alerts";

export default createStore({
    state,
    actions,
    getters,
    mutations,
    modules: {
        alerts,
    },
});