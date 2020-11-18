import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL: "http://foodtruck-tracker-bw.herokuapp.com/api",
        headers: {
            authorization: token,
        }
    });
};