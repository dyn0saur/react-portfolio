import React from "react";
import PageLinksNav from "../components/PageLinksNav";

export default function Philosophy(){
  return (
    <div className="App philosophy-page">
      <section className="container section philosophy-content">
        <h1>Philosophy</h1>
        <div className="philosophy-copy">
          <p>
            In the past, when constructing a building, the parts that Construction Drawings could not fully describe were often resolved on-site by skilled subcontractors.
            They interpreted the drawings through their own craftsmanship and experience, filling in the gaps that design documents left behind.
          </p>
          <p>
            However, as the tools and technologies used by designers have evolved, architectural forms have become increasingly complex.
            This has made it much harder for builders on-site to maintain a consistent design logic throughout the entire construction process.
          </p>
          <p>
            At the same time, a highly fragmented system and complicated contractual structures have widened this gap — a gray area where neither architects nor builders can take full responsibility.
            As a result, many “beautifully designed” buildings have ended up suffering from poor construction quality.
          </p>
          <p>
            I believe that architects can overcome this problem — if they learn to use computational tools not just actively, but with true craftsmanship and precision.
          </p>
          <p>
            We are already familiar with the term Computational Design.
            Yet it is often associated only with intricate geometries or visually striking forms.
          </p>
          <p>
            While this field has expanded the boundaries of design, it has not always been welcomed by those who actually build.
            Their question remains simple: <br></br>
            <b>“Alright — but how are you going to actually build that?”</b>
          </p>
          <p>
            As an architect, I believe that Build — the knowledge, experience, and intuition of how a building actually comes together in the real world — is essential.
            Without that sense, especially during the stage of detailed design, drawings often diverge from reality, leading to inconsistencies and a loss of quality.
          </p>
          <p>
            An architect must therefore remain grounded in how a building is actually made.
          </p>
          <p>
            At the same time, I believe in the power of the computational approach — a parametric way of thinking that allows complex forms to emerge from consistent and solid rules.
            After all, we can say that every architectural form is a product of logic responding to parameters.
          </p>
          <p>
            Complex buildings are no different — only the parameters and constraints become more intricate.
            By embracing this methodology, architects gain the ability to handle even the most complex forms with clarity and control.
          </p>
          <p>
            The pursuit of building constantly drives me to ask, “How will this actually be built?”
            Computational thinking, on the other hand, provides the tools to transform that question into reality.
            I stand at the intersection of these two approaches — and that is why I call myself a <b>Computational Builder</b>.
          </p>
          <p>
            As a Computational Builder, my role is to bridge and unify the gap between design and construction — <b>combining computational techniques with the pursuit of building beyond design</b>.
          </p>
          <p>
            Grounded in architectural intent, I use digital modeling, simulation, and parametric tools to anticipate real-world constraints and to construct the most rational solutions for realization.
            In essence, I build the building virtually — before it is built in reality.
          </p>
          <p>
            That is my method, and the way I define my architectural practice.
          </p>
          <h3>“I build before it’s built.”</h3>
        </div>
      </section>
      <div className="container philosophy-page__nav">
        <PageLinksNav active="philosophy" ariaLabel="Navigate to other sections" />
      </div>
    </div>
  );
}
