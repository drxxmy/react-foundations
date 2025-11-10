import IncrementButton from "./components/increment-button";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const users = ['User1', 'User2', 'User3'];

  return <div>
    <Header title="Example" />
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
    <IncrementButton />
  </div>;
}
