import { BASE_URL } from "./Env";


export const getRequest = async (routeId) => {
           await axios.get(BASE_URL + routeId)
                      .then(result => {
                        return JSON.stringify(result);
                       })
                      .catch(error => {
                         console.log(error);
                      })
   };
