import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[]; // array of objects that have the same structure as the Name type
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, idx) => {
        return (
          <h2 key={idx}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
