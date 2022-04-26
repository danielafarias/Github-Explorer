import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
// https://api.github.com/users/danielafarias/repos

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    fetch('https://api.github.com/users/danielafarias/repos')
    .then(response => response.json())
    .then(data => setRepositories(data));
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem repository={repository} key={repository.name} />
          } 
        )}
      </ul>
    </section>
  );
}
