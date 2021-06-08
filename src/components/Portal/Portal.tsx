import React from "react";
import ReactDOM from "react-dom";

export const Portal: React.FC = ({ children }) => {
  const [container] = React.useState(document.createElement("div"));

  container.classList.add("modal-root");

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};
