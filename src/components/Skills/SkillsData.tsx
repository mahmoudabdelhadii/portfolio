export interface SkillsData {
  name: string;
  group: string;
  logo: string;
  rating: number;
}

const SkillsDataUnsorted: SkillsData[] = [
  {
    name: "Go",
    group: "Languages",
    logo: "/assets/GO_logo.png",
    rating: 65,
  },
  {
    name: "Python",
    group: "Languages",
    logo: "/assets/Pythonlogo.png",
    rating: 100,
  },
  {
    name: "NuxtJs",
    group: "Frameworks",
    logo: "/assets/nuxticon.png",
    rating: 100,
  },
  { name: "Vue", group: "Frontend", logo: "/assets/VueLogo.png", rating: 100 },
  {
    name: "React",
    group: "Frontend",
    logo: "/assets/Reacticon.png",
    rating: 95,
  },

  {
    name: "OCP",
    group: "Cloud",
    logo: "/assets/OpenShift-LogoType.svg.png",
    rating: 80,
  },
  { name: "SQL", group: "Languages", logo: "/assets/sqllogo.svg", rating: 100 },

  {
    name: "NodeJS",
    group: "Backend",
    logo: "/assets/nodejslogo.png",
    rating: 100,
  },
  {
    name: "TensorFlow",
    group: "Frameworks",
    logo: "/assets/Tensorflowlogo.png",
    rating: 60,
  },
  {
    name: "Docker",
    group: "Cloud",
    logo: "/assets/dockerlogo.png",
    rating: 95,
  },
  {
    name: "TypeScript/JavaScript",
    group: "Languages",
    logo: "/assets/Typescriptlogo.png",
    rating: 100,
  },
  {
    name: "Azure Kubernetes Service",
    group: "Cloud",
    logo: "/assets/akslogo-removebg-preview.png",
    rating: 80,
  },
  { name: "AWS", group: "Cloud", logo: "/assets/awslogo.png", rating: 90 },
  {
    name: "Java",
    group: "Languages",
    logo: "/assets/Javalogo.png",
    rating: 50,
  },
  {
    name: "C#",
    group: "Languages",
    logo: "/assets/csharplogo-removebg-preview.png",
    rating: 60,
  },
  {
    name: "TailwindCSS",
    group: "Frontend",
    logo: "/assets/tailwindcss.png",
    rating: 90,
  },
  {
    name: "Next.js",
    group: "Frameworks",
    logo: "/assets/nextjs.png",
    rating: 97,
  },
  {
    name: "Hasura GraphQL",
    group: "Backend",
    logo: "/assets/hasuralogo.png",
    rating: 80,
  },
  //   { name: "HTML", group: "Languages", logo: "/assets/html.webp", rating: 45 },
  {
    name: "C++",
    group: "Languages",
    logo: "/assets/cpplogo-removebg-preview.png",
    rating: 75,
  },
  {
    name: "PyTorch",
    group: "Frameworks",
    logo: "/assets/PyTorchlogo.png",
    rating: 70,
  },
];

const SkillsData = SkillsDataUnsorted.sort((a, b) => b.rating - a.rating);
export default SkillsData;
