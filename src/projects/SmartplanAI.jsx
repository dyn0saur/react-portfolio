// src/projects/SmartplanAI.jsx
import React from "react";
import Template from "./Template";

export default function SmartplanAI(){
  return (
    <Template title="Smartplan AI" hero="/images/projects/smartplan/hero.jpg">
      <p>
        First of its kind fully automated web-based SaaS for office space planning built using Vue (Nuxt),
        Python, AWS S3 and DynamoDB. Built for the real estate leasing market, Smartplan can automatically and
        in real time generate office layouts for specific floor plans based on user input program requirements.
      </p>
      <img src="/images/projects/smartplan/shot-1.jpg" alt="Smartplan screenshot" style={{width:'100%', borderRadius:12, marginTop:16}}/>
    </Template>
  );
}
