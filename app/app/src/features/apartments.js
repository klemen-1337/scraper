import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchApartments = async (page) => {

    try{
        const response = await axios.get(API_URL+"/apartments", {params: {page: page}});
        return response.data;
    } catch(err){
        console.log(err);
    }
};