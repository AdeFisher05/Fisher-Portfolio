import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  activeFilter = 'All';

  projects = [
    {
      title: 'Togohub',
      category: 'Web',
      description: '',
      image: 'assets/projects/togohub.jpg',
      technologies: ['PHP', 'MySQL', 'PDO', 'PHPMailer']
    },
    {
      title: 'CampusVoice',
      category: 'API, Web',
      description: 'A blog for students to detail school activities and campus life',
      image: 'assets/projects/campusvoice.jpg',
      technologies: ['HTML', 'CSS', 'Javascript', 'Firebase']
    },
    {
      title: 'CitizenReport',
      category: 'Mobile',
      description: 'Different categories of incidents can be reported.',
      image: 'assets/projects/citizenreport.jpg',
      technologies: ['Cordova', 'Wordpress REST API', 'JWT']
    }
  ];

  filters = ['All', 'Web', 'API', 'DB', 'Mobile'];

  skills = [
    {
      name: 'Frontend',
      technologies: 'HTML, CSS, Javascript, React',
      percentage: 92
    },
    {
      name: 'Backend',
      technologies: 'Node, Express',
      percentage: 85
    },
    {
      name: 'Databases',
      technologies: 'SQL, MongoDB',
      percentage: 80
    },
    {
      name: 'Tooling',
      technologies: 'Git, Docker, CI/CD',
      percentage: 74
    }
  ];

  timeline = [
    {
      year: '2026 · FUNAAB',
      title: 'Computer Science, 300 Level',
      description: 'Growing across frontend, backend, and database engineering.'
    },
    {
      year: 'Current · Development',
      title: 'Full-stack web projects',
      description: 'Building responsive interfaces and connected web applications.'
    },
    {
      year: 'Next · Opportunity',
      title: 'Open to meaningful work',
      description: 'Available for internships, collaborations, and practical projects.'
    }
  ];

  get filteredProjects() {
    if (this.activeFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.category === this.activeFilter
    );
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
