import { Header } from "@editorjs/header";

const Configuration = () => {
  return {
    holder: "editorjs",
    autofocus: true,
    tools: {
      header: {
        class: Header,
        shortcut: "CMD+SHIFT+H",
      },
    },
    data: {},
  };
};

export default Configuration;
