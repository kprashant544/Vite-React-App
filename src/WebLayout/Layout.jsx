import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import ArrayWithObj from "../PracticeThings/ArrayWithObj.jsx";
import Card from "../PracticeThings/Card.jsx";
import Button from "../PracticeThings/Button.jsx";
import WeddingCard from "../PracticeThings/WeddingCard.jsx";

function Layout() {
  const meet = {
    home_name: "Home",
    about_name: "About",
    contact_name: "Contact",
  };

  const cards = [
    {
      title: "Card no.1",
      img: "https://picsum.photos/seed/picsum/200",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.2",
      img: "https://picsum.photos/200",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.3",
      img: "https://picsum.photos/200?grayscale",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.4",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.5",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.6",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.7",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.8",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.9",
      img: "https://picsum.photos/id/870/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div>
      <Nav meet={meet} />
      <ArrayWithObj />
      <div className="card-section">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            img={card.img}
            desc={card.desc}
          />
        ))}
      </div>
      <Button />
      <WeddingCard title={"Wedding Card"} descrip={"Wedding Of"}>
        You are cordially invited to the
      </WeddingCard>

      <Footer />
    </div>
  );
}

export default Layout;
