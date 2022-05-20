
const iStyle = {
  width : "50px",
  marginRight : "10px"
}

function Footer() {
  return (
    <div>
      <footer>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>MLGProduction@gmail.com</p>
            <p>081233334808</p>
          </div>
          <div className="col-md">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md">
            <p>Connect with us</p>
            <i className="bi bi-whatsapp"  style={iStyle}></i>
            <i className="bi bi-instagram" style={iStyle}></i>
            <i className="bi bi-envelope"  style={iStyle}></i>
          </div>
          <div className="col-md">
            <p>Copyright MlgProduction 2022</p>
          </div>
        </div>
      </div>
      </footer>
    </div>

  );
}

export default Footer;
