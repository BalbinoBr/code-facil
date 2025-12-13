import React from "react";
import Chat from "./components/Chat";
import Workspace from "./components/Workspace";

function Main() {
  return (
    <div className="main-layout">
      <Chat />
      <Workspace />
    </div>
  );
}

export default Main;
