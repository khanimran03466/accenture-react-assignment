import contactImg from "/images/pexels-photo-2.jpeg";

const ContactUs = () => {
  return (
    <div className="home">
        <div className="img-wraper">
            <img src={contactImg} alt="pexels-photo-2.jpeg" />
            <div className="abl">Contact Us</div>
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

export default ContactUs;
