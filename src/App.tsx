import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Shidqi",
    last: "Amirul Haq",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Greet name="Shidqi" isLoggedIn={true} messageCount={10} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
