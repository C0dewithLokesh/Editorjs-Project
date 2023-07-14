import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import { useEffect } from "react";
import { useRef } from "react";

const Home = () => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      // eslint-disable-next-line no-unused-vars
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: {
            class: List,
            inlineToolbar: true,
          },
          checklist: CheckList,
        },
      });
      ref.current = editor
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Editor</h1>
      <div id="editorjs" className="editor"></div>
    </div>
  );
};

export default Home;
