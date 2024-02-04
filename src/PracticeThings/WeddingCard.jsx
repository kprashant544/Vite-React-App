import "../PracticeThings/weddingcard.css";

function WeddingCard(props) {
  const { children, title, descrip } = props;
  const ganesh = "./ganesh-logo.png";
  const shuva = "./shuva-biwaha.png";
  return (
    <>
      <div className="wed-card">
        <div className="wed">{title}</div>
        <div className="images">
          <div>
            <img src={ganesh} style={{ height: "250px", width: "250px" }} />
          </div>
          <div>
            <img src={shuva} style={{ height: "250px", width: "250px" }} />
          </div>
        </div>
        {children} <br></br>
        {descrip}
      </div>
    </>
  );
}

export default WeddingCard;
