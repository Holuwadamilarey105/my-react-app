import '../styles/Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Graphics Designer',
      company: 'Planet Computer Institute',
      period: '2017 - Present',
      description: 'Lead branding and design projects for multiple clients, delivering high-impact visuals and campaigns.'
    },
    {
      id: 2,
      title: ' Web Developer',
      company: 'Freelance',
      period: '2020 - Present',
      description: 'Built responsive websites and web apps for small businesses using Django, React, and WordPress.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Darey Digital Design',
      period: '2022 - Present',
      description: 'Designed user interfaces and conducted usability testing for mobile and web applications.'
    },
    {
      id: 4,
      title: 'Computer Engineer',
      company: 'China Civil Engineering Construction Company (CCECC)',
      period: '2023 - Present',
      description: 'Provided technical support and maintenance for computer systems and networks.'
    }
  ]

  return (
    <section className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
