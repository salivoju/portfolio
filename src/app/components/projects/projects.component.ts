import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectTech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string[];
  techStack: ProjectTech[];
  image: string;
  aosImage: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: [
        'Built a comprehensive e-commerce platform featuring dedicated microservices for user authentication, product, cart, and inventory management.',
        'This platform utilizes enterprise patterns like circuit breakers and is powered by a secure Spring Boot backend for scalable operations.'
      ],
      techStack: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg' },
        { name: 'Spring Cloud Gateway', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' }
      ],
      image: '/assets/E-commerce.jpg',
      aosImage: 'fade-right',
      githubUrl: 'https://github.com/salivoju/E-commerce-Project',
      // liveUrl: 'https://www.amazon.com/', 
      category: 'Full-Stack'
    },
    {
      title: 'Banking Application System',
      description: [
        'Architected a scalable banking system using Java, Spring Boot, and gRPC microservices that streamlines customer interactions.',
        'Features secure authentication, appointment booking, and reduces physical bank visits through digital banking solutions.'
      ],
      techStack: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg' },
        { name: 'gRPC', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/grpc/grpc-original.svg' },
        { name: 'GCP', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/kubernetes/kubernetes-plain.svg' }
      ],
      image: '/assets/Banking Application.jpg',
      aosImage: 'fade-left',
      githubUrl: 'https://github.com/salivoju',
      category: 'Backend'
    },
    
  ];
}