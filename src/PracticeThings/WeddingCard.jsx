import "../PracticeThings/weddingcard.css";

function WeddingCard(props) {
  const { children, title, descriptions, groom, bride, and } = props;
  const ganesh = "./ganesh-logo.png";
  const shuva = "./shuva-biwaha.png";
  const bridegroom = "./bride-groom.png";

  return (
    <>
      <div className="wed-card">
        <div className="wed">
          <h2>{title}</h2>
        </div>
        <div className="images">
          <div className="img-1">
            <img src={ganesh} style={{ height: "200px", width: "200px" }} />
          </div>
          <div className="img-2">
            <img src={shuva} style={{ height: "200px", width: "200px" }} />
          </div>
        </div>
        {children} <br></br>
        <h3>{}</h3>
        <h2>{groom}</h2>
        <h2>{and}</h2>
        <h2>{bride}</h2>
        <span className="dis1">
          <h3>{descriptions.desc1}</h3>
        </span>
        <h4>{descriptions.desc2}</h4>
        <span className="dis2">
          <h3>{descriptions.desc3}</h3>
        </span>
        <h4>{descriptions.desc4}</h4>
        <h4>{descriptions.desc5}</h4>
        <span className="dis3">
          <h3>{descriptions.desc6}</h3>
        </span>
        <h4>{descriptions.desc7}</h4>
        <span className="dis4">
          <h3>{descriptions.desc8}</h3>
        </span>
        <h4>{descriptions.desc9}</h4>
      </div>
    </>
  );
}

export default WeddingCard;
