type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { // event: React.ChangeEvent<HTMLInputElement> is the type of the event
    console.log(event);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default Input;
