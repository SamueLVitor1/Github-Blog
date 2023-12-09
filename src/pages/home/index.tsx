import { ListPublication } from "../../components/ListPublication";
import { Profile } from "../../components/Profile";
import { SearchPublications } from "../../components/SearchPublication";

export function Home() {
  return (
    <>
      <Profile />
      <SearchPublications />
      <ListPublication/>
    </>
  );
}
