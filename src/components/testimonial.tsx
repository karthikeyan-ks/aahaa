import "./Testimonial.css"; // Importing the CSS file

const Testimonial = () => {
  return (
    <div className="testimonial-box">
      {/* Quote Icon */}
      <div className="quote-icon">“”</div>

      {/* Name & Designation */}
      <h2 className="testimonier-name">NAME OF TESTIMONIER</h2>
      <h3 className="designation">DESIGNATION</h3>

      {/* Testimonial Text */}
      <p className="testimonial-text">
        Lorem ipsum dolor sit amet consectetur. Velit lorem eu ut sit ridiculus neque. 
        Nam fringilla ornare pulvinar tortor. Sem sapien quis vel placerat eget tortor egestas nisi ac.
      </p>

      {/* Star Ratings */}
      <div className="stars">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star inactive">&#9733;</span>
      </div>

      {/* Profile Image */}
      <div className="profile-image">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Testimonial" />
      </div>
    </div>
  );
};

export default Testimonial;
