import { useEffect, useState } from "react";
import { ListPublicationContainer } from "./styles";
import axios from "axios";

export function ListPublication() {
  const [listPublication, setListPublication] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/issues?q=repo:SamueLVitor1/Github-Blog"
      )
      .then((response) => setListPublication(response.data.items));
  }, []);

  console.log(listPublication);
  return (
    <ListPublicationContainer>
      {listPublication.map((publication, index) => {
        return (
          <li key={index}>
            <header>
              <h3>{publication.title}</h3>
              <p>Há 1 dia</p>
            </header>

            <section>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vitae, nobis molestias cumque sapiente vel, minus iure, eaque
                inventore est totam! Placeat atque quas ex dolorem quae totam
                nemo asperiores?
              </p>
            </section>
          </li>
        );
      })}
    </ListPublicationContainer>
  );
}
