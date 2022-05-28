import me from "../images/me.jpg";

const Info = () => {
  return (
    <div className="info">
      <div className="img-wrapper">
        <img src={me} alt="Rezak Ali" />
      </div>
      <div className="info-details">
        <h1>Rezak Ali</h1>
        <h4>Frontend Developer</h4>
        <p>Looking for a real life.</p>
        <div className="info-btn-wrapper d-flex align-items-center justify-content-around">
        <a href="mailto:rezakali93@gmail.com" className="info-btn">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email
        </a>
        <a href="https://www.linkedin.com/in/rezak-ali-9333661a7/" target="_blank" className="info-btn">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          LinkedIn
        </a>
      </div>
      </div>
    </div>
  );
};

export default Info;
