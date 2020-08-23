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

export default {
  getLinks() {
    return links;
  }
};
