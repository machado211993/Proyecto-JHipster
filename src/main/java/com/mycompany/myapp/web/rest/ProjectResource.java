package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Project;
import com.mycompany.myapp.repository.ProjectRepository;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProjectResource {

    private final ProjectRepository repo;

    public ProjectResource(ProjectRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return repo.findAll();
    }
    // Opcional: endpoints POST/PUT/DELETE para gestionar desde admin.

}
