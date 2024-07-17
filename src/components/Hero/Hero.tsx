import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_section">
      <div id="hero_image"></div>
      <div className="left_hero">
        <h3>Transform Your ❤️ Health with </h3>
        <h1>Personalized Nutrition Coaching</h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <div className="button_hero_div">
          <button>Get Starter Today</button>
          <button>Book a demo</button>
        </div>
        <div className="hero_customers">
          <img id="customers" src="/customers.svg"></img>
          <p>
            <span id="customer_span">430+</span> Happy Customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
