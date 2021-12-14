import React, { useEffect } from "react";
import mapboxGl from "mapbox-gl";
import tw from "tailwind-styled-components/dist/tailwind";

mapboxGl.accessToken =
  "pk.eyJ1IjoidmlqYXlyYWh1bCIsImEiOiJja3gwc3F1ZjQxN3g1MndramM5czF4bWhpIn0.cMgNRG1nIu2uI24PVYb1Wg";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxGl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [78.871, 21.76],
      zoom: 1,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }

    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }

    if (props.pickUpCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.dropOffCoordinates, props.pickUpCoordinates], {
        padding: 50,
      });
    }
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxGl.Marker({ color: "#0f0300" }).setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1 rounded-3xl
`;
