import axios from "axios";

import { redirectToHome } from "../utils/redirect";

const client = axios.create({
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken"
});

// Default error handler
client.interceptors.response.use(
  response => response,
  error => {
    switch (error.response.status) {
      case 401: redirectToHome();
    }
    return Promise.reject(error);
});

export default client;
