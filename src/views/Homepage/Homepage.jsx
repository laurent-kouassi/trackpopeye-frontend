import React, {useState, useEffect} from 'react'
import { Maps } from '../../components/Map'
import { List } from '../../components/List';
import './Homepage.css';
import { getRequest } from '../../api/Services';
// import 'leaflet/dist/leaflet.css';

const Homepage = () => {
    const [startRoute, setStartRoute] = useState({
            routeId: ''
       });
    const [routeCoords, setRouteCoords] = useState([]);

    // const longitude = routeCoords[0];
    // const latitude = routeCoords[1];
    const dataReady = routeCoords.length > 0 ? true : true;  // temp


    useEffect(async () => {
      // api call
      await getRequest(startRoute.routeId)
                .then(res => setRouteCoords(res))
                .catch(error => alert('server error occured...'));

    }, [startRoute.routeId]);


    useEffect(() => {
      if(dataReady) console.log(dataReady);
    }, [dataReady]);

    return  dataReady ?
          (
            <main className = "main-wrapper">
              <List setStartRoute = { setStartRoute }/>
              <Maps coords = { routeCoords.coordinates } routeId = { routeCoords.routeId } />
            </main>
          ) : 
          (
            <main className = "main-wrapper">
              "Loading..."
            </main>
          )
};

export default Homepage;
