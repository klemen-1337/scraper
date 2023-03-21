import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchApartments = async () => {

    try{
        const response = await axios.get(API_URL);
        return response.data;
    } catch(err){
        console.log(err);
    }
};