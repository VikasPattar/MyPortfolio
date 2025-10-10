const Footer = () => {

  return (
    <footer className={`py-4 bg-dark`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-white">© 2025 Vikas Pattar. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end">
              <a href="https://github.com/VikasPattar" target="_blank" className="text-white">
                <i className="fa-brands fa-github fs-5"></i>
              </a>
              <a href="https://www.linkedin.com/in/vikas-9005bb32a" target="_blank" className="text-white">
                <i className="fa-brands fa-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-twitter fs-5"></i>
              </a>
              <a href="vpdinni@gmail.com" target="_blank" className="text-white">
                <i className="fa-solid fa-envelope fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;