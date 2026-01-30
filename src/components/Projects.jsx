import ProjectCard from './ProjectCard'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Car seasons Greetings Flier',
      description: 'A simple Designs to greetcustomers during festive seasons',
      tech: ['Photoshop', 'Illustrator', 'Canva'],
      image: '/assets/February.png'
    },
     {
      id: 1,
      title: 'Car seasons Greetings Flier',
      description: 'A simple Designs to greetcustomers during festive seasons',
      tech: ['Photoshop', 'Illustrator', 'Canva'],
      image: '/assets/New year copy.png'
    },
    {
      id: 2,
      title: 'UI/UX',
      description: 'Mobile app design for Music streaming service',
      tech: ['Figma', 'Adobe XD'],
      image: '/assets/uiux2.jpg'
    },
    {
      id: 2,
      title: 'UI/UX',
      description: 'Mobile app design for Daily Progress service',
      tech: ['Figma', 'Adobe XD'],
      image: '/assets/uiux1.jpg'
    },
    {
      id: 3,
      title: 'Grading System',
      description: 'Online Grading System for University students to check results and CGPA',
      tech: ['HTML', 'CSS', 'JavaScript','Python', 'Django'],
      image: '/assets/web1.png'
    },
    {
      id: 3,
      title: 'Grading System',
      description: 'Online Grading System for University students to check results and CGPA',
      tech: ['HTML', 'CSS', 'JavaScript','Python', 'Django'],
      image: '/assets/web2.png'
    },
    {
      id: 4,
      title: 'Nigeria Tax Calculator 2026',
      description: 'Interactive tax calculator for Nigerian personal income tax using 2026 tax reform brackets. Calculate federal, state, and total tax liability with support for monthly and yearly periods.',
      tech: ['React', 'Vite', 'jsPDF', 'JavaScript'],
      link: 'https://nigeriantaxcalc.netlify.app',
      image: '/assets/tax.png'
    },

    {
      id: 5,
      title: 'Expense Tracker with Authentication',
      description: 'Expense tracker app with user authentication, allowing users to securely log in and manage their personal expenses. Features include adding, editing, and deleting expenses, as well as viewing summaries by category and month.',
      tech: ['React', 'Vite', 'JavaScript'],
      link: 'https://theexpensestracker.netlify.app',
      image: '/assets/tracker.png'
    }
  ]

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
