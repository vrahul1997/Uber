import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components/dist/tailwind";
import Map from "./components/map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper className={styles.container}>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="/images/Uber-Logo.wine.svg" />
          <Profile>
            <Name>Vj Rahul</Name>
            <UserImage src="/images/userIcon.png" />
          </Profile>
        </Header>
        <ActionButtons>
          {/* {Action Button} */}
          <Link href="/search">
            <ActionButton>
              <ActionButtonImg src="/images/sedan-car-front.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src="/images/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src="/images/calender.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>
          {/* Input Button */}
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center mt-2
`;

const UberLogo = tw.img`
`;

const Profile = tw.div`
  flex items-center
  m-2
  mr-4
`;

const Name = tw.div`
  mr-5 text- text-center
`;

const UserImage = tw.img`
  h-20 rounded-full border border-red-200 p-1
`;

const ActionButtons = tw.div`
  flex m-4 mt-4
`;

const ActionButton = tw.div`
  flex flex-col flex-1
  bg-gray-200
  m-2 h-36 
  items-center 
  justify-center 
  rounded-xl 
  transform hover:scale-105
  cursor-pointer
`;

const ActionButtonImg = tw.img`
  h-24 rounded-3xl p-2
`;

const InputButton = tw.div`
  h-20 bg-gray-200 m-6 rounded-xl text-2xl pl-4 flex items-center mt-8
`;
