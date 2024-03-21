import youtube from "../assets/svg/projects/Youtube.svg";
import ecommerce from "../assets/svg/projects/ecommerce.svg";
import devconnector from "../assets/svg/projects/devconnector.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Youtube-twitter",
    projectDesc: "This project contains youtube as well as twitter features.",
    tags: ["React", "Node", "Talwind"],
    code: "https://github.com/iamomsingh/Youtube-Twitter-Frontend",
    demo: "https://youtube-twitter.netlify.app/",
    image: youtube,
  },
  {
    id: 2,
    projectName: "Ecommerce store",
    projectDesc:
      "This project is a Ecommerce store, where you can purchase product & make payment through paypal payment gateway.",
    tags: ["React", "Express", "paypal"],
    code: "https://github.com/iamomsingh/ecommerce-v2",
    demo: "https://ecommerce-app-iuo8.onrender.com/",
    image: ecommerce,
  },
  {
    id: 2,
    projectName: "Devconnector",
    projectDesc:
      "This project is a social Networking app for developer community, where all developer can interacts.",
    tags: ["React", "Express", "Bootstrap"],
    code: "https://github.com/iamomsingh/Devconnector",
    // demo: "",
    image: devconnector,
  },
];
