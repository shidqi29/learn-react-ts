import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // we dont need to specify the type of the state variable, typescript will infer it from the initial value
  // we are informing typescript that the user can be null or AuthUser
  // the initial value is null but in the future it can be AuthUser
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "John", email: "johndoe@mail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>User name is {user?.name}</p>
        <p>User email is {user?.email}</p>
      </div>
    </div>
  );
};

export default User;
