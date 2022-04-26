import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";
import "./styles/repositories.scss";

export function App() {
  // throw new Error("ai minha vuaida, jesuais")

  return (
    <>
      <RepositoryList />
      {/* <Counter /> */}
    </>
  );
}
