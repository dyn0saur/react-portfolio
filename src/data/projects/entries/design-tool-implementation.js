// src/data/projects/entries/design-tool-implementation.js
const project = {
  slug: "design-tool-implementation",
  title: "Design Tool Implementation",
  category: "Article",
  date: "2025/01/18",
  excerpt: "An engineer’s log exploring how Grasshopper, beyond parametric modeling, can be used as a powerful design tool to visualize constraints, optimize geometry, and streamline architectural detailing.",
  hero: "/images/projects/design_tool/hero.png",
  heroSmall: "/images/projects/design_tool/hero.png",
  thumb: "/images/projects/design_tool/hero.png",
  content: [
    {
      type: "paragraph",
      text: "Grasshopper is primarily a tool for parametric modeling, but depending on how it is used, it can go far beyond simple modeling and become an effective design tool. What does 'design tool' mean in this context?",
    },
    {
      type: "paragraph",
      text: "When designing a part of a building, an engineer must first identify various constraints. These can generally be categorized into three types: structural, functional, and aesthetic. The structural aspect concerns whether the element can be installed and remain stable. Technically, this means checking whether the calculated structural values fall within acceptable limits. In a broader sense, it also includes materials, construction methods, fabrication, and installation techniques that influence structural performance.",
    },
    {
      type: "paragraph",
      text: "Function refers to the role that the element must perform within the building—for example, waterproofing, air-tightness, insulation, and soundproofing in the case of a facade. Lastly, aesthetics simply means that the element should not look unattractive.",
    },
    {
      type: "paragraph",
      text: "An engineer must prioritize these constraints and determine the optimal result. The challenge is that constraints are interdependent and constantly changing, making it difficult to grasp their relationships in real time. In architectural design, this is further complicated by the three-dimensional nature of components, which makes numerical representation difficult.",
    },
    {
      type: "paragraph",
      text: "This is where a design tool becomes useful—it helps visualize these constraints in 3D space, allowing engineers to interact with the model and make intuitive decisions at every step. Note that 'design tool' here is not an officially defined term.",
    },
    {
      type: "paragraph",
      text: "This week, I created a design tool that turned out to be surprisingly effective and powerful.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "/images/projects/design_tool/1-1.png", alt: "Structure connection visualization 1" },
        { src: "/images/projects/design_tool/1-2.png", alt: "Structure connection visualization 2" },
      ],
    },
    {
      type: "paragraph",
      text: "The goal was to connect a light-blue elliptical structure to secondary members highlighted in yellow, anchored at points named P00 through P25.",
    },
    {
      type: "paragraph",
      text: "Constraints included: points should be located near the lower support members of the ellipse; connection directions should be perpendicular to the ellipse surface; distances between points should range from 2000mm to 4000mm; and connection lengths should not exceed 1350mm.",
    },
    {
      type: "paragraph",
      text: "Because all points are interconnected, adjusting one point to satisfy a condition can cause others to fail. This demonstrates how interdependent constraints can be. Visualizing them helps solve such problems.",
    },
    {
      type: "image",
      src: "/images/projects/design_tool/2.png",
      alt: "Constraint visualization in Grasshopper",
    },
    {
      type: "paragraph",
      text: "In this visualization, yellow lines represent connecting members, green numbers indicate distances between points, red numbers highlight connections exceeding 1350mm, and yellow numbers mark those within the limit. Once set up, the engineer only needs to move the points to find the optimal arrangement.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        { src: "/images/projects/design_tool/3-1.png", alt: "Interactive modeling constraint 1" },
        { src: "/images/projects/design_tool/3-2.png", alt: "Interactive modeling constraint 2" },
      ],
    },
    {
      type: "paragraph",
      text: "Through this visualization, most of the 26 points could be arranged using typical details, leaving only special cases for further resolution.",
    },
    {
      type: "image",
      src: "/images/projects/design_tool/5.jpg",
      alt: "Detail sketches",
    },
    {
      type: "paragraph",
      text: "These sketches, mostly drawn by my team leader(very briefly), were reinterpreted by me to understand each connection detail. After discussing and deciding how to handle each point, modeling was done in Grasshopper to ensure flexibility if point positions later needed adjustments.",
    },
    {
      type: "image",
      src: "/images/projects/design_tool/6.jpg",
      alt: "Parametric connection modeling",
    },
    {
      type: "paragraph",
      text: "Additionally, the support points had to avoid certain boundaries. To make sure of this, I mapped the structure onto a tangent plane, checked the convex hull area, and then used colored blocks to identify connection points that fell inside or outside the allowed region. (Visualization beyond the boundary required a separate process.)",
    },
    {
      type: "image",
      src: "/images/projects/design_tool/7.jpg",
      alt: "Constraint boundary visualization",
    },
    {
      type: "paragraph",
      text: "This visualization allowed us to finalize key locations for connections without resorting to brute force. Once we had investigated most cases using this tool, we could quickly categorize the remaining ones that still needed to be resolved in detail.",
    },
    {
      type: "image",
      src: "/images/projects/design_tool/8.gif",
      alt: "Animated visualization of Grasshopper design tool",
    },
    {
      type: "paragraph",
      text: "While this process can easily become more work than it’s worth, assessing the necessity beforehand is important. Of course, for those who are quick, doing all design steps this way would be ideal. Through this project, I was able to confirm the strength of Grasshopper as a design tool and plan to actively utilize it in future work.",
    },
  ],
};

export default project;
