import { useState } from "react";

const Projects = () => {
//   const { theme } = useTheme();
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart, payments, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: '#',
      demoLink: '#',
      imageURL: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features.',
      techStack: ['React', 'Firebase', 'Bootstrap'],
      githubLink: '#',
      demoLink: '#',
      imageURL: '📋'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across platforms.',
      techStack: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      githubLink: '#',
      demoLink: '#',
      imageURL: '📊'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across platforms.',
      techStack: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      githubLink: '#',
      demoLink: '#',
      imageURL: '📊'
    }
  ]);

  return (
    <section id="projects" className={`py-5 `}>
      <div className="container py-5">
        <h2 className="display-4 fw-bold text-center mb-5">Featured Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className={`card h-100 shadow project-card `}>
                <div className="card-body text-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '80px' }}>{project.imageURL}</span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <div className="mb-3">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="badge bg-primary me-2 mb-2">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-3">
                    <a href={project.githubLink} className="text-decoration-none">
                       Code
                    </a>
                    <a href={project.demoLink} className="text-decoration-none">
                       Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;