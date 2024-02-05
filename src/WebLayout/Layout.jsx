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
      img: "https://picsum.photos/200?grayscale&blur=1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Card no.5",
      img: "https://picsum.photos/200?grayscale",
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

  const descriptions = {
    desc1: "Cocktail & Dinner",
    desc2: "Sunday, 25th Feb 2024",
    desc3: "Reception & Wedding",
    desc4: "Monday, 26th Feb 2024",
    desc5: "7 o'clock in the evening",
    desc6: "Venue:",
    desc7: "Marriott Hotel , Kathmandu",
    desc8: "Regards",
    desc9: "Beck Smith & Smith Family",
  };

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

      <WeddingCard
        title={"Wedding Card"}
        descrip={"Wedding Of"}
        groom={"Helen"}
        bride={"Mary"}
        and={"&"}
        descriptions={descriptions}
      >
        <h3>You are cordially invited to the</h3>
      </WeddingCard>

      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
