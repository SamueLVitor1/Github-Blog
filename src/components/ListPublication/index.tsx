import { useEffect, useState } from "react";
import { ListPublicationContainer } from "./styles";
import axios from "axios";

interface PublicationInterface {
  title: string;
  body: string;
}

export function ListPublication() {
  const [listPublications, setListPublication] = useState<
    PublicationInterface[]
  >([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/issues?q=repo:SamueLVitor1/Github-Blog"
      )
      .then((response) => {
        console.log(response.data);
        setListPublication(response.data.items);
      });
  }, []);

  return (
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
  );
}
