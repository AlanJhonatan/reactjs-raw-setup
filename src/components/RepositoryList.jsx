import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repositories</h1>
      <ul>
        <RepositoryItem repository="First" />
        <RepositoryItem repository="Second" />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}