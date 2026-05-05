import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {projects.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </div>
  );
}
