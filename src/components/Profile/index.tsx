import { ArrowSquareUpRight } from "@phosphor-icons/react";
import { ProfileContainer, InfosProfileDate } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://i.pinimg.com/564x/dc/46/40/dc46403064ec076a128234ffdcd916c9.jpg"
        alt=""
      />

      <InfosProfileDate>
        <header>
          <h2>Nome</h2>

          <a href="#">
            GITHUB
            <ArrowSquareUpRight size={16} color="#3294f8" weight="bold"/>
          </a>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque beatae
          ad explicabo! Doloribus inventore nihil excepturi commodi maiores ea
          praesentium, amet temporibus. Accusantium veniam aspernatur rerum
          consequuntur temporibus assumenda voluptatem.
        </p>

        <footer>icons</footer>
      </InfosProfileDate>
    </ProfileContainer>
  );
}
