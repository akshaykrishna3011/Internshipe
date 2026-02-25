import Card from "./Card";
import './App.css'

const App = () => {
  return (
    <div>
      <Card title="User Info">
        <p>Name: Akku</p>
        <p>Email: akku@gmail.com</p>
      </Card>

      <Card title="Product Info">
        <p>Product: Phone</p>
        <p>Price: ₹20000</p>
      </Card>
    </div>
  );
};

export default App;