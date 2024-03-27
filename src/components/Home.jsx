import homeImg from "/images/pexels-photo-3.jpeg";

const Home = () => {
  return (
    <div className="home">
        <div className="img-wraper">
            <img src={homeImg} alt="pexels-photo-3.jpeg" />
            <div className="abl">Home</div>
        </div>
      <div className="container">
        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          magni odio sint nulla atque quae debitis qui. Ad dolores pariatur odio
          non possimus explicabo facilis atque. Ea molestiae laboriosam a iste,
          distinctio quam atque harum! Dolore, autem! Consectetur ea molestiae
          totam eius fugit architecto consequatur maiores, dolorum natus vero
          quis?{" "}
        </p>
      </div>

      
    </div>
  );
};

export default Home;
