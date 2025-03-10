declare global {
    interface Window {
        axios: typeof axios;
    }
}

import axios from "axios";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
