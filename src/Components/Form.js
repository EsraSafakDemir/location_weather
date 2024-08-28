

const Form = (props) => {
const { weather } = props;
  console.log(props.weather,"2")

  if(!weather){
    return <p>Loading...</p>
  }
return <div>
  <h3> {weather.name}</h3>
  <h4> {weather.weather.map( x=> x.description).join(", ")}</h4>
  <p>{weather.main.temp} ℃</p>
  <p>{new Date(weather.dt*1000).toLocaleDateString}</p>
</div>
}


export default Form;