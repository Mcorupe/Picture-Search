import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID ce294c5e24d99fe5a54e44aff6d6a107ab9c6d7e312fecfca4717ed61bfb2a65"
      }
});
