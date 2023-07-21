import "./Card.css";

export default function Card(props) {
  
  const item = props.item;
  
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <h3>{item.status}</h3>
      <img src={item.image} />
    </div>
  );
}

