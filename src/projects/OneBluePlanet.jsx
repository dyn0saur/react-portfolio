// src/projects/OneBluePlanet.jsx
import React from "react";
import Template from "./Template";

export default function OneBluePlanet(){
  return (
    <Template title="One Blue Planet" hero="/images/projects/obp/hero.jpg">
      <p>
        A Progressive Web App (PWA) built using React (Next.js), AWS (Cognito, EC2, DynamoDB), and Stripe.
        One Blue Planet helps users monitor their environmental impact and incentivizes better choices.
      </p>
    </Template>
  );
}
