import "./Header.css";

const Header = () => {
  return (
    <header>
      <img className="logo" src="../../../public/Nutritionist_Logo.png" />
      <nav>
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#">About</a>
        </p>
        <p>
          <a href="#">Team</a>
        </p>
        <p>
          <a href="#">Process</a>
        </p>
        <p>
          <a href="#">Pricing</a>
        </p>
        <p>
          <a href="#">Blog</a>
        </p>

        <button id="contact_button">Contact Us</button>
        <img src="/public/Moon.svg" alt="darkmode icon" />
      </nav>
    </header>
  );
};

export default Header;
