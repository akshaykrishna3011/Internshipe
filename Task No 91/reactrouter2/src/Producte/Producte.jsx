import { useParams } from "react-router-dom";

function Producte() {
  const { id , name } = useParams();  

  return (
    <div>
      <h2>Product Details Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default Producte;
