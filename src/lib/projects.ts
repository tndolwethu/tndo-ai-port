/**
 * Planned projects. Nothing here is built yet — these are intentions and
 * learning goals only, so descriptions stay in future tense.
 */
export type PlannedProject = {
  slug: string;
  path: "/projects/ai-study-assistant" | "/projects/student-performance-analyzer" | "/projects/machine-learning-prediction-app";
  title: string;
  focus: string;
  summary: string;
  description: string;
  goals: string[];
  plan: string[];
  learning: string[];
};

export const plannedProjects: PlannedProject[] = [
  {
    slug: "ai-study-assistant",
    path: "/projects/ai-study-assistant",
    title: "AI Study Assistant",
    focus: "AI / Python",
    summary:
      "A study helper I plan to build to practise working with Python and AI tools.",
    description:
      "I plan to build a simple study assistant that helps me revise my Financial Management subjects. The idea is to give it my study notes and let it ask me questions, summarise sections and explain concepts in simpler words. I have not started building it yet — this page describes what I intend to create as my Python and AI skills grow.",
    goals: [
      "Practise writing Python code that reads and processes text",
      "Learn how to send prompts to an AI model and handle the response",
      "Turn my own study notes into practice questions",
      "Build something small that I actually use while studying",
    ],
    plan: [
      "Start with a command-line version that takes a block of notes as input",
      "Add a summarise option and a question-generation option",
      "Store notes and generated questions in simple files",
      "If it works well, add a basic web interface later",
    ],
    learning: [
      "Python basics: functions, files and error handling",
      "Working with an AI model through an API",
      "Structuring a small project so it stays readable",
    ],
  },
  {
    slug: "student-performance-analyzer",
    path: "/projects/student-performance-analyzer",
    title: "Student Performance Analyzer",
    focus: "Python / Data",
    summary:
      "A data project I plan to build to learn how to read, clean and visualise results data.",
    description:
      "I plan to build a tool that takes student marks and shows simple, clear insights: averages per subject, which subjects are strongest and weakest, and how results change over time. My aim is to learn the basics of working with data in Python. This project has not been started yet.",
    goals: [
      "Learn how to load and clean data in Python",
      "Calculate simple statistics such as averages and pass rates",
      "Present results in charts that are easy to read",
      "Understand how data can support better decisions",
    ],
    plan: [
      "Use a small sample marks file to work with while learning",
      "Write functions that calculate per-subject and per-term summaries",
      "Add charts to show trends and comparisons",
      "Document what I learned in the project README",
    ],
    learning: [
      "Reading spreadsheet and CSV data with Python",
      "Basic data cleaning and validation",
      "Creating simple charts and explaining what they show",
    ],
  },
  {
    slug: "machine-learning-prediction-app",
    path: "/projects/machine-learning-prediction-app",
    title: "Machine Learning Prediction App",
    focus: "Machine Learning / Python",
    summary:
      "My first planned machine learning project, built to understand how models learn from data.",
    description:
      "I plan to build a small app that makes a prediction from a trained machine learning model. The purpose is learning: I want to understand the full path from data, to training a simple model, to using it to make a prediction. I have not built or trained any model yet, so there are no results to show on this page.",
    goals: [
      "Understand the difference between training data and test data",
      "Train a basic model on a small, well-known dataset",
      "Learn how model accuracy is measured and what it means",
      "Wrap the model in a simple app that accepts input and returns a prediction",
    ],
    plan: [
      "Follow the fundamentals first: data preparation before modelling",
      "Train one simple model and record how it performs",
      "Compare it against a second simple model to see the difference",
      "Build a minimal interface where a prediction can be requested",
    ],
    learning: [
      "Core machine learning vocabulary and workflow",
      "Splitting data and evaluating a model honestly",
      "Knowing the limits of a model I have built",
    ],
  },
];
