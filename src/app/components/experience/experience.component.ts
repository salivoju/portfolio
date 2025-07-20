import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Experience {
  jobNumber: string;
  title: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy, AfterViewInit {
  
  experiences: Experience[] = [
    {
      jobNumber: '03',
      title: 'Software Engineer',
      company: 'Global Logic India Private Limited',
      period: 'July 2022 - November 2023',
      description: 'Full-Stack Developer with proven experience migrating legacy monolithic systems to scalable microservices architecture, implementing end-to-end solutions from responsive React frontends to secure Spring Boot APIs deployed on cloud platforms.',
      techStack: ['Java', 'Spring Boot', 'Nodejs', 'Docker', 'MongoDB', 'Microservices Architecture']
    },
    {
      jobNumber: '02',
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      period: 'March 2021 - July 2022',
      description: 'Java Developer experienced in building enterprise-grade web applications using Spring Boot and J2EE, with expertise in RESTful API design, application server management, and database optimization for high-performance systems.',
      techStack: ['Java', 'Spring Boot', 'RESTful APIs', 'SQL Server', 'J2EE Frameworks', 'Enterprise Application Server']
    },
    {
      jobNumber: '01',
      title: 'Programmer Analyst Trainee',
      company: 'Avon Technologies India Private Limited',
      period: 'January 2020 - February 2021',
      description: 'Spring Boot Developer experienced in designing robust backend services with Java and Hibernate, implementing secure MySQL-based authentication systems, and managing complete software development lifecycles from design to deployment.',
      techStack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'HTML', 'CSS', 'SDLC']
    }
  ];

  private scrollListener!: () => void;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    // Only initialize scroll effects in browser environment
    if (this.isBrowser) {
      this.initializeScrollEffects();
    }
  }

  ngOnDestroy() {
    // Clean up scroll listener only in browser environment
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initializeScrollEffects() {
    // Double-check we're in browser environment
    if (!this.isBrowser) return;
    
    this.scrollListener = () => {
      this.handleScroll();
    };
    
    window.addEventListener('scroll', this.scrollListener, { passive: true });
    
    // Initial call to set initial states
    setTimeout(() => {
      this.handleScroll();
    }, 100);
  }

  private handleScroll() {
    // Ensure we're in browser environment before accessing DOM
    if (!this.isBrowser) return;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemTop = rect.top;
      const itemHeight = rect.height;
      
      // Calculate progress based on scroll position
      const triggerPoint = windowHeight * 0.8;
      const progress = Math.max(0, Math.min(1, (triggerPoint - itemTop) / (itemHeight * 0.5)));
      
      // Apply stacking effect
      if (progress > 0) {
        const scale = 0.95 + (progress * 0.05);
        const translateY = Math.max(0, (1 - progress) * 50);
        const opacity = 0.7 + (progress * 0.3);
        
        (item as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (item as HTMLElement).style.opacity = opacity.toString();
        
        // Add active class for additional styling
        if (progress > 0.5) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });
  }
}