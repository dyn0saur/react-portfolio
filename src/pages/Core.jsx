import React from "react";
import Capabilities from "../components/Capabilities";
import PageLinksNav from "../components/PageLinksNav";

export default function Core(){
  return (
    <div className="App core-page">
      <div className="core-page__content">
        <Capabilities />
        <div className="container core-page__nav">
          <PageLinksNav active="core" ariaLabel="Navigate to other sections" />
        </div>
      </div>
    </div>
  );
}
