import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Weather-Forecast",
    title: "Weather-Forecast",
    description:
      "A weather forecast application developed using Spring Boot, Java and JSP during my 2nd year. It provides current weather updates and a 5-day forecast with hourly details.",
    icon: "/skills/spring-boot.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/ForecastAPI",
    tags: ["Java", "Spring Boot", "Jsp"],
    screenshots: ["https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png"],
  },
  {
    id: "Deap-Appointment-App",
    title: "Deap Appointment App",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    tags: ["Dart", "Flutter", "Firebase", "Stripe"],
    screenshots: ["https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Video Calling App",
    description:
      "A video calling mobile application developed using Flutter and Agora SDK that allows users to call each other face to face.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/video-calling-app-flutter",
    url: "https://github.com/nixrajput/video-calling-app-flutter/releases",
    tags: ["Flutter", "Dart", "GetX", "Agora SDK"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "An RESTful API developed using Node.js, Express.js and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "Grocery List Maker App",
    description:
      "A grocery list maker mobile application developed using Flutter, BloC, Hive DB and PDF.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
    url:
      "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
    tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "An RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
