import { SearchPublicationsContainer } from "./styles";

export function SearchPublications() {
  return (
    <SearchPublicationsContainer>
      <header>
        <h3>Publicações</h3>

        <div>
          <span>6</span>
          <p>publicações</p>
        </div>
      </header>

      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchPublicationsContainer>
  );
}
