import { PersonProps } from "./Person.types"; // Import the types from the separated types file

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
