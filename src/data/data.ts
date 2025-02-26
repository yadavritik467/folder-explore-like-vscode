import { Explorer } from "./interface";

const explorer: Explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  isOpen: false,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      isOpen: false,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          isOpen: false,
          items: [
            {
              id: "4",
              name: "index.html",
              isOpen: false,
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isOpen: false,
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isOpen: false,
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      isOpen: false,
      items: [
        {
          id: "8",
          name: "App.js",
          isOpen: false,
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          isOpen: false,
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          isOpen: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      isOpen: false,
      items: [],
    },
  ],
};

export default explorer;
