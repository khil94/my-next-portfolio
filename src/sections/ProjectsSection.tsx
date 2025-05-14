"use client";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/constants/projects";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-main-light-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">프로젝트</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="modern-card group h-full flex flex-col cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
              onClick={() => openModal(project)}
            >
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-accent-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-accent-primary/10 text-accent-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-neutral-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex gap-3 mt-auto">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-200 hover:bg-accent-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-200 hover:bg-accent-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    데모
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-800 text-neutral-200 hover:bg-accent-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    웹사이트
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default ProjectsSection;
