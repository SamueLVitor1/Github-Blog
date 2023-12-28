import React, { useContext, useState } from "react";
import { SearchPublicationsContainer } from "./styles";
import { GitHContext } from "../../context/GitHubContext";

export function SearchPublications() {
  const [searchValue, setSearchValue] = useState("");

  const {handleSetNamePublication, namePublication} = useContext(GitHContext)

  function handleSearch(textSearch: string) {
    setSearchValue(textSearch);
    handleSetNamePublication(textSearch)
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSetNamePublication(searchValue)
      setSearchValue("");
    }
  }

  console.log(namePublication)

  return (
    <SearchPublicationsContainer>
      <header>
        <h3>Publicações</h3>

        <div>
          <span>6</span>
          <p>publicações</p>
        </div>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </SearchPublicationsContainer>
  );
}
