import { Component, OnInit } from '@angular/core';
import { IProject } from './project.model';
import { ProjectsService } from './projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  activeProject?: IProject;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getAll().subscribe(data => (this.projects = data));
  }

  openModal(project: IProject) {
    this.activeProject = project;
    // Usaremos el modal de Bootstrap vía data-bs-toggle o manualmente
    const modalEl = document.getElementById('projectModal');
    if (modalEl) {
      // usar bootstrap JS para abrir si está disponible
      // @ts-ignore
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }
}
