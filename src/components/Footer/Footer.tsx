import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src="/Nutritionist_Logo.png"></img>
      <div className="home_bar">
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>About</p>
        </a>
        <a href="#">
          <p>Team</p>
        </a>
        <a href="#">
          <p>Process</p>
        </a>
        <a href="#">
          <p>Pricing</p>
        </a>
        <a href="#">
          <p>Blog</p>
        </a>
        <a href="#">
          <p>Contact</p>
        </a>
      </div>
      <div className="go_back_up">
        <p>Go To Top</p>
        <a href="#">
          <img className="arrow" src="/Arrow_Up.svg" alt="Arrow_Up" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
