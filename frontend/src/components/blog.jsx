import { useState } from "react";


const Blogs = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for building large-scale React applications with clean architecture and maintainable code.',
      date: '2025-09-15',
      tags: ['React', 'Architecture']
    },
    {
      id: 2,
      title: 'Mastering Node.js Performance',
      excerpt: 'Optimization techniques and tools to make your Node.js applications lightning fast and efficient.',
      date: '2025-09-10',
      tags: ['Node.js', 'Performance']
    },
    {
      id: 3,
      title: 'MongoDB Best Practices',
      excerpt: 'Essential tips for database design, indexing, and query optimization in MongoDB for production apps.',
      date: '2025-09-05',
      tags: ['MongoDB', 'Database']
    }
  ]);

  return (
    <section id="blog" className={`py-5`}>
      <div className="container py-5">
        <h2 className="display-4 fw-bold text-center mb-5">Latest Blog Posts</h2>
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div className={`card h-100 shadow `}>
                <div className="card-body">
                  <p className="text-muted small">{blog.date}</p>
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.excerpt}</p>
                  <div className="mb-3">
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-info me-2">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="text-primary text-decoration-none fw-semibold">Read more →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;