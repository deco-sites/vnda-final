import { useEffect } from "preact/hooks";

const Console = ({ content }: { content: any }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return <h2>console aqui</h2>;
};

export default Console;
