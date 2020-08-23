const links = [
  {
    id: 1,
    title: "Todos",
    caption: "Display all todos",
    icon: "list",
    link: "/"
  },
  {
    id: 2,
    title: "Setting",
    caption: "Change app settings",
    icon: "settings",
    link: "/settings"
  },
  {
    id: 3,
    title: "Help",
    caption: "Frequently asked question",
    icon: "help",
    link: "/help"
  }
];

const tasks = [
  {
    id: 1,
    title: "Go to shop",
    dueDate: "2020/08/25",
    dueTime: "15:30",
    priority: "low",
    status: false
  },
  {
    id: 2,
    title: "Get Bananas",
    dueDate: "2020/08/25",
    dueTime: "15:30",
    priority: "normal",
    status: false
  },
  {
    id: 3,
    title: "Get More Apples",
    dueDate: "2020/08/26",
    dueTime: "18:30",
    priority: "high",
    status: false
  }
];

export default {
  getLinks() {
    return links;
  },
  getTasks() {
    return tasks;
  },
  getTodos() {
    return tasks;
  }
};
