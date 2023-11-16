/* 
Difference between interface and type is that interface can be extended but type cannot be extended.
use types when you building application and use interface when you building library
*/

type GreetProps = {
  name: string;
};

const Greet = ({ name }: GreetProps) => {
  return (
    <div>
      <h2>Welcome {name}! You have 10 unread messages</h2>
    </div>
  );
};

export default Greet;
