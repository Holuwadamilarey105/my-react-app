import '../styles/Skills.css'

function Skills() {
  const skillsCategories = [
    {
      category: 'Design',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'Adobe XD', 'Canva']
    },
    {
      category: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Python', 'Django', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Webpack']
    }
  ]

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillsCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
