import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section className="blogs">
        <div className="blog_description">
          <h1>
            <a href="#">Our Blogs</a>
          </h1>
          <p>
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here's what you can expect from our blog.
          </p>
        </div>

        <div className="blog_entries">
          <div className="entry left">
            <img className="blog_image" src="/public/blog_image_left.png"></img>
            <div className="blog_wrapper">
              <p>Weight Loss</p>
              <h4>The Benefits of Hydration for Weight Loss</h4>
              <p>
                Discover how staying hydrated can support your weight loss goals
                and improve overall health.
              </p>

              <div className="lower_blog">
                <div className="blog_author">
                  <img src="/public/author_left.png"></img>
                  <div className="author_date">
                    <h5>Emily Johnson</h5>
                    <p>23 May 2023 - 5 min read</p>
                  </div>
                </div>
                <div className="blog_icon_div">
                  <img
                    className="blog_icon"
                    src="/public/Rectangle_Icon.svg"
                  ></img>
                  <img className="blog_icon" src="/public/Heart_Icon.svg"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="entry right">
            <img
              className="blog_image"
              src="/public/blog_image_right.png"
            ></img>
            <div className="blog_wrapper">
              <p>Mindful Eating</p>
              <h4>Cultivating a Healthy Relationship with Food</h4>
              <p>
                Learn how practicing mindful eating can help you develop a
                healthier relationship with food and improve your overall
                well-being.
              </p>
              <div className="lower_blog">
                <div className="blog_author">
                  <img src="/public/Author_right.png"></img>
                  <div className="author_date">
                    <h5>Sarah Thompson</h5>
                    <p>23 May 2023 - 5 min read</p>
                  </div>
                </div>
                <div className="blog_icon_div">
                  <img
                    className="blog_icon"
                    src="/public/Rectangle_Icon.svg"
                  ></img>
                  <img className="blog_icon" src="/public/Heart_Icon.svg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
