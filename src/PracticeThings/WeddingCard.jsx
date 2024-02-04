import "../PracticeThings/weddingcard.css";

function WeddingCard(props) {
  const { children, title1, descrip } = props;
  return (
    <>
      <div className="wed-card">
        <div className="wed">{children}</div>
      </div>
    </>
  );
}

export default WeddingCard;
