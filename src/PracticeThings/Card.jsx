import "../PracticeThings/card.css";

function Card(props) {
  const { desc, title, img } = props;
  return (
    <div className="card">
      {title && <div className="title">{title}</div>}
      {img && <img src={img} />}
      {desc && <div className="spec">{desc}</div>}
    </div>
  );
}

export default Card;
