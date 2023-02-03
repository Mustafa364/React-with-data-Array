import logo from './logo.svg';
import './App.css';

function App() {

  let mobile =[
    {
      name: "a30",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 2000,
      brand: "samsung",
    },
    {
      name: "note10",
      ram: "6gb",
      rom: "128gb",
      camera: "50px",
      price: 4000,
      brand: "samsung",
    },
    {
      name: "s10",
      ram: "3gb",
      rom: "128gb",
      camera: "10px",
      price: 5000,
      brand: "samsung",
    },
    {
      name: "iphone4",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "iphone",
    },
    {
      name: "iphone4s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 20000,
      brand: "iphone",
    },
    {
      name: "iphone5",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone",
    },
    {
      name: "iphone6",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 30000,
      brand: "iphone",
    },
    {
      name: "redminote10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redminote11",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redmi10",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "redmi10pro",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "xiaomi",
    },
    {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "oppo",
    },
    {
      name: "a3s",
      ram: "4gb",
      rom: "64gb",
      camera: "50px",
      price: 10000,
      brand: "Realmi",
    },
  ]


  return (
    <div className="App">
      <header className="App-header">
      <h1> Hello React</h1>
      <h1>MOBILES</h1>
      {mobile.map((x) => {
        return (
          <div className="card">
            <h3>{x.brand}</h3>
            <p>Model : {x.name}</p>
            <p>Ram : {x.ram}</p>
            <p>Rom : {x.rom}</p>
            <p>Camera : {x.camera}</p>
            <p>Rs : {x.price}</p>
            <p>Brand : {x.brand}</p>
          </div>
        )
      })}
      </header>
      </div>
  );
}

export default App;
