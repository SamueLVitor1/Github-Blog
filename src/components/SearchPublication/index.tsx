import React, { useContext, useEffect, useState } from "react";
import { SearchPublicationsContainer } from "./styles";
import { GitHContext } from "../../context/GitHubContext";
import axios from "axios";

export function SearchPublications() {
  const [searchValue, setSearchValue] = useState("");
  const [listNumberPublication,setListNumberPublication] = useState()
  const {handleSetNamePublication, namePublication} = useContext(GitHContext)

  function handleSearch(textSearch: string) {
    setSearchValue(textSearch);
    handleSetNamePublication(textSearch)
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSetNamePublication("")
      setSearchValue("");
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/issues?q=repo:SamueLVitor1/Github-Blog"
      )
      .then((response) => {
        setListNumberPublication(response.data.items.length);
      });
  }, []);

  console.log(namePublication)

  return (
    <SearchPublicationsContainer>
      <header>
        <h3>Publicações</h3>

        <div>
          <span>{listNumberPublication}</span>
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
