import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Map from "./components/map";
import { useRouter } from "next/router";

const confirm = () => {
  const router = useRouter();
  const { pickUp, dropOff } = router.query;

  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  const getCoordinates = (location1, location2) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location1}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidmlqYXlyYWh1bCIsImEiOiJja3gwc3F1ZjQxN3g1MndramM5czF4bWhpIn0.cMgNRG1nIu2uI24PVYb1Wg",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      });

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location2}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoidmlqYXlyYWh1bCIsImEiOiJja3gwc3F1ZjQxN3g1MndramM5czF4bWhpIn0.cMgNRG1nIu2uI24PVYb1Wg",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getCoordinates(pickUp, dropOff);
  }, [pickUp, dropOff]);

  return (
    <Wrapper>
      <Map pickUpCoordinates={pickUpCoordinates} dropOffCoordinates={dropOffCoordinates}></Map>
      <RideContainer></RideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;

const RideContainer = tw.div`
    flex-1
`;
