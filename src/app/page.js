import Image from "next/image";
// import Banana from "@/composants/ProductList";
import UserCardList from "@/composants/UserCard";

export default function NanoBanana() {

  return (
    <>
      <h1> Site du cours de SAE </h1>
      <p> Bienvenue sur le site du cours de SAE. </p>

      <UserCardList />

      {/* <Banana/> */}
    </>
  );
}
