const classes = [
  {
    trainer: null,
    name: "Hiit class - Basics",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/24"),
    duration: 120,
    classType: "Hiit",
    difficulty: "Easy",
    url: "",
    equipment: ["Elastic band"],
  },
  {
    trainer: null,
    name: "Hiit class - Advanced",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/23"),
    duration: 60,
    classType: "Hiit",
    difficulty: "Medium",
    url: "",
    equipment: ["Elastic band", "Dumbells"],
  },
  {
    trainer: null,
    name: "Hiit class - Expert",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/22"),
    duration: 60,
    classType: "Hiit",
    difficulty: "Hard",
    url: "",
    equipment: ["Elastic band", "Dumbells"],
  },
  {
    trainer: null,
    name: "Yoga class - Basic",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/25"),
    duration: 120,
    classType: "Stretch",
    difficulty: "Easy",
    url: "",
    equipment: ["Elastic band", "Dumbells"],
  },
  {
    trainer: null,
    name: "Yoga class - Medium",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/23"),
    duration: 120,
    classType: "Stretch",
    difficulty: "Medium",
    url: "",
    equipment: ["Yoga mat", "Elastic band"],
  },
  {
    trainer: null,
    name: "Yoga class - Advanced",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/25"),
    duration: 120,
    classType: "Stretch",
    difficulty: "Hard",
    url: "",
    equipment: ["Yoga mat", "Elastic band"],
  },
  {
    trainer: null,
    name: "Yoga class - Basic",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/26"),
    duration: 60,
    classType: "Stretch",
    difficulty: "Easy",
    url: "",
    equipment: ["Elastic band", "Dumbells"],
  },
  {
    trainer: null,
    name: "Yoga class - Medium",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/21"),
    duration: 120,
    classType: "Stretch",
    difficulty: "Medium",
    url: "",
    equipment: ["Yoga mat", "Elastic band"],
  },
  {
    trainer: null,
    name: "Yoga class - Advanced",
    description:
      "Incididunt commodo reprehenderit nisi dolore commodo tempor est nulla sint duis nostrud consequat culpa ea. Eiusmod quis excepteur anim duis laboris. Nisi dolor pariatur veniam et nulla excepteur consectetur ullamco dolor aute ipsum.",
    closureMessage:
      "Quis dolor do et magna reprehenderit. Tempor cillum voluptate sint proident laboris magna fugiat duis consectetur labore irure proident eu laborum. Esse irure commodo in magna ipsum eiusmod eu incididunt pariatur velit. Deserunt officia non dolore sit elit magna in exercitation enim.",
    scheduled: new Date("2020/11/22"),
    duration: 120,
    classType: "Stretch",
    difficulty: "Hard",
    url: "",
    equipment: ["Yoga mat", "Elastic band"],
  },
];

module.exports = classes;
