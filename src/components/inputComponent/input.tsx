type inputProps = {
  city: string
  handleChange: (event : React.ChangeEvent<HTMLInputElement>) =>  void 
  Fetching: string
}

export default function InputComponent({handleChange, city, Fetching}: inputProps){
  // const { city , setCity  } = inputProps
  // will be a piece of state passed down from App
  // we take the city name from input and add to the state

  // handle onChange function
  // onChange text  = name of city
  // e.target.value to add the city name to the "state"
  // onClick to sumbit the change
  // form or input type="text"
  return (
    <form>
      <input type="text" onChange={handleChange} placeholder="City name" value={city}></input>
      <button onClick ={Fetching}> Submit</button>
    </form>
  )
}