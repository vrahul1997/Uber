import React, { useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components/dist/tailwind";

const search = () => {
  const [pickUpText, setPickUpText] = useState("");
  const [dropOffText, setDropOffText] = useState("");

  return (
    <Wrapper>
      {/* Button Container */}
      <Link href="/">
        <ButtonContainer>
          <BackButton src="/images/backButton.svg"></BackButton>
        </ButtonContainer>
      </Link>
      {/* input container */}
      <InputContainer>
        <FromToContainer>
          <input type="radio" readOnly checked="defaultChecked"></input>
          <Dot>.</Dot>
          <Dot>.</Dot>
          <DestinationImage src="/images/destination.png"></DestinationImage>
        </FromToContainer>
        <InputBoxes>
          <Input
            type="text"
            id="pickUpTextBox"
            value={pickUpText}
            onChange={(e) => setPickUpText(e.target.value)}
            placeholder="Enter pickup location"
          ></Input>
          <Input
            type="text"
            id="dropOffTextBox"
            value={dropOffText}
            onChange={(e) => setDropOffText(e.target.value)}
            placeholder="Where to?"
          ></Input>
          <Link
            href={{
              pathname: "/confirm",
              query: {
                pickUp: pickUpText,
                dropOff: dropOffText,
              },
            }}
          >
            <ConfirmButton type="button">Submit</ConfirmButton>
          </Link>
        </InputBoxes>
        <PlusContainer>
          <PlusImage src="/images/plus.svg"></PlusImage>
        </PlusContainer>
      </InputContainer>
      {/* Saved places */}
      <SavedPlacesContainer>
        <SavedPlacesImage src="/images/star.svg"></SavedPlacesImage>
        Saved Places
      </SavedPlacesContainer>

      {/* Confirmed locations */}
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`

`;

const ButtonContainer = tw.div`
    bg-gray-200 w-12 m-3 flex justify-center rounded-2xl cursor-pointer
`;

const BackButton = tw.img`
    m-3 h-8 
`;

const InputContainer = tw.div`
    flex m-4 mt-8 h-56 border-t-2 justify-between border-b-2
`;

const FromToContainer = tw.div`
    mt-6
`;

const Dot = tw.p`
    ml-1
`;

const DestinationImage = tw.img`
 h-4 mt-3
`;

const InputBoxes = tw.div`
  flex flex-col mt-3 items-center
`;

const Input = tw.input`
  border-black 
  border-2
  rounded-lg
  text-black
  placeholder-gray-500
  p-3
  h-12
  m-2 w-72
`;

const ConfirmButton = tw.button`
  bg-black text-white h-10 w-24 rounded-xl mt-3 hover:bg-gray-800
`;

const PlusContainer = tw.div`
  flex justify-center items-center mb-10
`;

const PlusImage = tw.img`
  h-12
`;

const SavedPlacesContainer = tw.div`
  flex items-center bg-gray-200 w-44 m-3 rounded-3xl
`;

const SavedPlacesImage = tw.img`
  h-8 m-3 
`;
