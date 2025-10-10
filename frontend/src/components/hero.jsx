export default function Hero() {
  return (
    <>
      <section id="home" className="py-5 text-center d-flex flex-column align-items-center justify-content-center vh-100">
        {/* Profile Image */}
        <img
          src="/vite.svg"
          alt="Profile"
          className="rounded-circle mb-4 shadow-sm"
          width="150"
          height="150"
        />

        {/* Name */}
        <h1 className="fw-bold mb-2">Vikas Pattar</h1>

        {/* Tagline */}
        <p className="lead text-secondary mb-4">
          Full Stack Developer | ReactJS | Node.js | MongoDB
        </p>

        {/* CTA Button */}
        <a href="#projects" className="btn btn-primary px-4 py-2 rounded-pill">
          View My Work <i className="fa-solid fa-arrow-right"></i>
        </a>
      </section>
    </>
  )
}