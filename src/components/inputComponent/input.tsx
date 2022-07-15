type inputProps = {
  city: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fetching: () => void;
};


export default function InputComponent({
  handleChange,
  city,
  fetching,
}: inputProps) {
  // const { city , setCity  } = inputProps
  // will be a piece of state passed down from App
  // we take the city name from input and add to the state

  // handle onChange function
  // onChange text  = name of city
  // e.target.value to add the city name to the "state"
  // onClick to sumbit the change
  // form or input type="text"
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="City name"
        value={city}
      ></input>
      <button onClick={fetching}> Submit</button>
    </div>
  );
}
