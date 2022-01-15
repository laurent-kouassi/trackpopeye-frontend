import React, {useState, useEffect} from 'react'
import { Maps } from '../../components/Map'
import { List } from '../../components/List';
import './Homepage.css';
import { getRequest } from '../../api/Services';
// import 'leaflet/dist/leaflet.css';

const Homepage = () => {
    const [startRoute, setStartRoute] = useState({
            routeId: 'office'
       });
    const [routeCoords, setRouteCoords] = useState({
      coordinates: [[14.340945482254028,35.96093506939264]],
      routeId: 'office' // test
    });

    // if notthing found on the server
    const fallback = {
      coordinates: [[14.340945482254028,35.96093506939264]],
      routeId: startRoute.routeId
    };


    const dataReady = routeCoords && routeCoords.length > 0 ? true : false;  // temp


    useEffect(async () => {
      // api call
      await getRequest(startRoute.routeId)
                .then(res => setRouteCoords(res))
                .catch(error => alert('server erroroccured...' + error));

    }, [startRoute.routeId]);


    return(
            <main className = "main-wrapper">
              <List startRoute = { startRoute } setStartRoute = { setStartRoute }/>
             { 
                // dataReady ? 

                   <Maps 
                      coords = {routeCoords && routeCoords.coordinates ? routeCoords.coordinates : fallback.coordinates } 
                      routeId = { routeCoords && routeCoords.routeId ? routeCoords.routeId : fallback.routeId  } /> 

                  //  <div>Loading...</div>
              }
            </main>
          )
};

export default Homepage;
