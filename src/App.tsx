import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

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
      <Greet name="Shidqi" isLoggedIn />
      <Heading>Placeholder Text</Heading>
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
