// src/data/projects/entries/implementing-design-intent-in-baseboard.js
const project = {
  slug: "implementing-design-intent-in-baseboard",
  title: "Implementing Design Intent... Through a Baseboard",
  category: "Article",
  date: "2025/03/26",
  excerpt: "An engineer’s reflection on how even small construction details—like a baseboard—require thoughtful design to faithfully realize the original intent in real-world fabrication and installation.",
  hero: "/images/projects/design_intent/hero.png",
  heroSmall: "/images/projects/design_intent/hero.png",
  thumb: "/images/projects/design_intent/thumbnail.png",
  content: [
    {
      type: "image",
      src: "/images/projects/design_intent/1.jpg",
      alt: "Typical baseboard example",
    },
    {
      type: "paragraph",
      text: "For the past week, my task has been to design and engineer baseboards. Normally, this would be handled according to standard construction details, but since we’re working on a non-orthogonal system, the baseboard also had to be custom-designed.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/design_intent/2-1.png",
          alt: "rhino baseboard modeling 1",
        },
        {
          src: "/images/projects/design_intent/2-2.png",
          alt: "rhino baseboard modeling 1",
        },
      ],
    },
    {
      type: "paragraph",
      text: "I spent the entire week using Grasshopper to automate the modeling of every section, eventually creating a system that could control nearly 5,000 components through parameters. It almost felt like performing a magic trick. Later, this model will be automatically converted into drawings and manufactured using CNC cutting.",
    },
    {
      type: "paragraph",
      text: "Of course, modeling wasn’t the only part of the process. Even a baseboard—seemingly minor—still involves genuine design decisions. Along the way, I encountered several moments of consideration, and in this post, I’d like to share one of them.",
    },
    {
      type: "image",
      src: "/images/projects/design_intent/3.png",
      alt: "to mdel a Finished edge",
    },
    {
      type: "paragraph",
      text: "There was a suggestion to create a finished edge at the end of the baseboard to make installation easier for other contractors (such as the interior team). So I had to design that finishing detail.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/design_intent/4-1.png",
          alt: "quiz 1",
        },
        {
          src: "/images/projects/design_intent/4-2.png",
          alt: "quiz 2",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Quiz: Which design detail do you think is better? Option 1 uses a slide-in method, where the end cap is inserted from top to bottom like sliding a card. Option 2 covers it from front to back like fitting a lid. Initially, I proceeded with Option 1. But as soon as my team lead saw it, he said, 'That’s not going to work.' The reason was clear.",
    },
    {
      type: "image",
      src: "/images/projects/design_intent/5.png",
      alt: "quiz 1 problem",
    },
    {
      type: "paragraph",
      text: "If Option 1 were built, there would be several issues. First, there’s no structural guarantee that the end cap would always align perfectly at the edge—it could easily slip inward, and there’d be no way to stop it. Second, the horizontal member shown in the drawing wouldn’t be fixed well, leading to sagging or construction difficulties. In short, this design was inherently unstable. Since multiple teams would be working on different sections, it would be impossible to ensure that the design intent was realized consistently across the entire project.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/design_intent/6-1.png",
          alt: "quiz 2 solution 1",
        },
        {
          src: "/images/projects/design_intent/6-2.png",
          alt: "quiz 2 solution 2",
        },
      ],
    },
    {
      type: "paragraph",
      text: "So, I redesigned it. I introduced a mortise-and-tenon structure at the connection points, so each part would interlock physically. With this approach, no matter who installs it or how many times, the end plate will always fit perfectly at the end of the baseboard. We concluded that this was a solid detail and finalized the design, updating the script and the model accordingly.",
    },
    {
      type: "paragraph",
      text: "To summarize, the original design intent was simply to create a clean closure at the end of the baseboard. But to realize that intent, we had to overcome challenges in both fabrication and construction. A well-thought-out detail design reflects an awareness of possible errors in form and actively seeks shapes that eliminate them.",
    },
    {
      type: "paragraph",
      text: "Even in a tiny element like a baseboard, this mindset—striving to ensure design intent is faithfully implemented—will ultimately determine the overall quality of the building. I’ll keep moving forward with that mindset.",
    },
  ],
};

export default project;
