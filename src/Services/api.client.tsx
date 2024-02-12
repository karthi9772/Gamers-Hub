import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"19a678e022e24fd18407e1d9cfdc88f2"
    }
})