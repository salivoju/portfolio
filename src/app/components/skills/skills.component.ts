import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillCategories: SkillCategory[] = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg' }
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' },
        { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg' },
        { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true },
        { name: 'RESTful APIs', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/swagger/swagger-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg' },
        { name: 'Apache Kafka', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/apachekafka/apachekafka-original.svg', isInvertLogo: true },
        { name: 'Spring Security', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' }
      ]
    },
    {
      title: 'DATABASES & CLOUD',
      skills: [
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg' },
        { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' }
      ]
    },
    {
      title: 'TOOLS',
      skills: [
        { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg' },
        { name: 'JUnit', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/junit/junit-original.svg' },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg' },
        { name: 'Jasmine', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jasmine/jasmine-original.svg' }
      ]
    },
    {
      title: 'CORE CS CONCEPTS',
      skills: [
        { name: 'Microservice Architecture', logo: '🏗️' },
        { name: 'Agile (Scrum)', logo: '🔄' },
        { name: 'Test-Driven Development (TDD)', logo: '🧪' },
        { name: 'Model-View-Controller (MVC)', logo: '📋' },
        { name: 'Event-Driven Architecture', logo: '⚡' },
        { name: 'Database Design', logo: '💾' },
        
      ]
    }
  ];
}