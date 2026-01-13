import '../styles/ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
