export default function About() {
  return (
    <>
      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">            

            {/* About Content */}
            <div className="col-md-12">
              <h2 className="display-4 fw-bold text-center mb-5">About Me</h2>
              <p className="mb-4 fs-5">
                Hello! I'm <strong>Vikas Pattar</strong>, a passionate{" "}
                <strong>Full Stack Developer</strong> who loves building modern,
                responsive, and user-friendly web applications. I specialize in{" "}
                <strong>ReactJS</strong>, <strong>Node.js</strong>, and{" "}
                <strong>MongoDB</strong>, and I enjoy crafting elegant solutions
                that make technology accessible and efficient.
              </p>

              <p className="mb-4 fs-5">
                My focus is on writing clean, maintainable code and designing
                intuitive user experiences. I’m always excited to explore new
                technologies and contribute to meaningful projects.
              </p>

              {/* Skills / Tech Stack */}
              <div className="mt-4">
                <h4 className="fw-semibold mb-3">Tech Stack</h4>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">ReactJS</span>
                  <span className="badge bg-success">Node.js</span>
                  <span className="badge bg-info text-dark">ExpressJS</span>
                  <span className="badge bg-warning text-dark">MongoDB</span>
                  <span className="badge bg-danger">JavaScript</span>
                  <span className="badge bg-secondary">HTML5</span>
                  <span className="badge bg-dark">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
