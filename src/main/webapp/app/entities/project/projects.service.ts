import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from './project.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private resourceUrl = 'api/projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.resourceUrl);
  }
}
