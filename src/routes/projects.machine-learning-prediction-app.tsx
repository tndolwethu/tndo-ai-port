import { createFileRoute } from "@tanstack/react-router";

import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { plannedProjects } from "@/lib/projects";

const project = plannedProjects[2]!;

const TITLE = "Machine Learning Prediction App (Planned) — Thandolwethu Tshabalala";
const DESCRIPTION =
  "A planned first machine learning project in Python: goals, build plan and learning outcomes. Not started yet.";

export const Route = createFileRoute("/projects/machine-learning-prediction-app")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectDetail project={project} />,
});
