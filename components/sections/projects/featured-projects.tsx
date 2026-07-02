import { projects } from "@/content/projects";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProjectShowcase } from "@/content/sections/projects/project-showcase";



export function FeaturedProjects() {
  return (
    <Section id="work">

      <Container>

        {projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              index={index}
            />
          ))}

      </Container>

    </Section>
  );
}