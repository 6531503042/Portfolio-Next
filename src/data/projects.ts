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
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png"
    ],
  },
  {
    id: "Deap-Appointment-App",
    title: "Deap Appointment App",
    description:
      "Deap App is an appointment mobile application developed using Flutter and Firebase.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Deap-Mobile-Application",
    url: "https://github.com/6531503042/Deap-Mobile-Application/releases",
    playStore: "https://play.google.com/store/apps/details?id=com.mobileapp.deap",
    tags: ["Dart", "Flutter", "Firebase"],
    screenshots: [
      "https://raw.githubusercontent.com/6531503042/Portfolio-BenGi/main/img/project2.png",
    ]
  },
  {
    id: "Gigantic-Mall",
    title: "Gigantic-Mall",
    description:
      "Is a Shopping Mall for both Management & Buyer for web application developed using Spring Boot and React. And Used Microservices Architecture",
    icon: "/skills/spring-boot.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Gigantic-Mall",
    tags: ["Java", "Spring Boot", "React, MySQL, Heroku"],
    screenshots: [
      "/public/screenshots/gigantic.png",
    ]
  },
  {
    id: "Core-Banking",
    title: "Core-Banking",
    description:
      "This is my personal backend services built using Spring boot used Microservices.",
    icon: "/skills/spring-boot.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/6531503042/Core-Banking",
    tags: ["Spring Boot", "TypeScript", "Next", "GraphQL"],
  }
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
