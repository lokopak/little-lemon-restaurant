import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschettas, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.
            Crafted by expert chefs with locally-sourced ingredients, our dishes
            not only delight the palate but nourish the soul. Whether you're
            seeking a romantic dinner, a family meal, or a relaxed atmosphere
            with friends, Little Lemon is your ideal culinary destination. Find
            us in the heart of Chicago for an unforgettable experience.
          </p>
        </div>

        <div className="about-images">
          <div className="about-image">
            <img src="/assets/Mario and Adrian A.jpg" alt="Mario and Adrian" />
          </div>
          <div className="about-image">
            <img src="/assets/Mario and Adrian b.jpg" alt="Mario and Adrian" />
          </div>
        </div>
      </div>
    </section>
  );
}
