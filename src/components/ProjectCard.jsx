import '../styles/ProjectCard.css'

function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank')
    }
  }

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: project.link ? 'pointer' : 'default' }}>
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
      {project.link && <div className="project-link">View Project →</div>}
    </div>
  )
}

export default ProjectCard
