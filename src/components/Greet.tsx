/* 
Difference between interface and type is that interface can be extended but type cannot be extended.
use types when you building application and use interface when you building library
*/

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean; // optional props
};

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}, you have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
