import { useContext, useEffect, useState } from "react";
import { ListPublicationContainer } from "./styles";
import axios from "axios";
import { GitHContext } from "../../context/GitHubContext";

interface PublicationInterface {
  title: string;
  body: string;
}

export function ListPublication() {
  const [listPublications, setListPublication] = useState<
    PublicationInterface[]
  >([]);

  const [publicationsSearched, setPublicationsSearched] = useState<
    PublicationInterface[]
  >([]);

  const { namePublication } = useContext(GitHContext);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/issues?q=repo:SamueLVitor1/Github-Blog"
      )
      .then((response) => {
        setListPublication(response.data.items);
      });
  }, []);

  useEffect(() => {
    if (listPublications.length === 0) {
      return;
    }

    setPublicationsSearched([]);

    listPublications.map((item) => {
      if (item.title.includes(namePublication)) {
        setPublicationsSearched([item]);
      }
    });
  }, [namePublication]);

  console.log(publicationsSearched);

  if (namePublication === "") {
    return (
      <>
        <ListPublicationContainer>
          {listPublications
            ? listPublications.map((publication, index) => {
                return (
                  <li key={index}>
                    <header>
                      <h3>{publication.title}</h3>
                      <p>Há 1 dia</p>
                    </header>

                    <section>
                      <p>{publication.body}</p>
                    </section>
                  </li>
                );
              })
            : "null"}
        </ListPublicationContainer>
      </>
    );
  }

  if(namePublication != ""){
    return(
      <ListPublicationContainer>
          {publicationsSearched.length > 0
            ? publicationsSearched.map((publication, index) => {
                return (
                  <li key={index}>
                    <header>
                      <h3>{publication.title}</h3>
                      <p>Há 1 dia</p>
                    </header>

                    <section>
                      <p>{publication.body}</p>
                    </section>
                  </li>
                );
              })
            : <h3>Conteúdo não encontrado 😕</h3>}
        </ListPublicationContainer>
    )
  }
}
