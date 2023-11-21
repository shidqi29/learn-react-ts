import Container from "./components/Container";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Container styles={{ border: "1px solid red", padding: "1rem" }} />
    </div>
  );
}

export default App;
