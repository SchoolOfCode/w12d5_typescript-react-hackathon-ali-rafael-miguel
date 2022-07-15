type inputProps = {
  city: string
  setCity: => void
}

export default function InputComponent(inputProps){
  const { city , setCity  } = inputProps
  // will be a piece of state passed down from App
  // we take the city name from input and add to the state

  // handle onChange function
  // onChange text  = name of city
  // e.target.value to add the city name to the "state"
  // onClick to sumbit the change
  // form or input type="text"
  return (
    <form>
      <input type="text" onChange={} placeholder="City name"></input>
      <button onClick={}>Submit</button>
    </form>
  )
}