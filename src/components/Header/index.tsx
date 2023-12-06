import { HeaderContainer } from "./styles";
import logoGitHubBlog from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoGitHubBlog} />
    </HeaderContainer>
  );
}
