import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlqYXlyYWh1bCIsImEiOiJja3gwc3F1ZjQxN3g1MndramM5czF4bWhpIn0.cMgNRG1nIu2uI24PVYb1Wg";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-66.646332, 45.964993],
      zoom: 3,
    });
  }, []);

  return (
    <Wrapper className={styles.container}>
      <Map id="map">Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const Map = tw.div`
  bg-red-500 flex-1 rounded-2xl
`;

const ActionItems = tw.div`
  bg-red-300 flex-1
`;
