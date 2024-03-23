import logo from './logo.svg';
import './App.css';

function App() {

  
    return <div>
      <h1>Users:</h1>


        <section className="container">
      <User name="raj" job="UI-Engneering"  hometown="vijayawada" address="benz-circle" />
         <User name="ramesh"  job="Businees" hometown="Hyderabad" address="sainikpuri"/>
      <User name="raju" job="react-Developer" address="L.Rcolony" hometown="Benguluru" />
          </section>
    </div>
    
    
}
function User(props) {
  return <div className= "user">
    <h1>{props.name}</h1>
      <p>job: {props.job}</p>
      <p>address: {props.address}</p>
    <p>hometown: {props.hometown }</p>
  </div>

}


export default App;
