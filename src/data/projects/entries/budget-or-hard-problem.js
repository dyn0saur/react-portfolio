// src/data/projects/entries/budget-or-hard-problem.js
const project = {
  slug: "budget-or-hard-problem",
  title: "Budget Problem? Or... A Hard Problem?",
  category: "Insight",
  date: "2025/09/22",
  excerpt: "A reflection on architectural detailing challenges observed in the gridshell structures of Galleria Gwanggyo and Ttukseom Jabeolle, exploring how complex design problems are solved through creativity and engineering insight.",
  hero: "/images/projects/budget_problem/hero.png",
  content: [
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/budget_problem/1-1.jpg",
          alt: "Galleria Gwanggyo (Left)",
        },
        {
          src: "/images/projects/budget_problem/1-2.jpg",
          alt: "Ttukseom Jabeolle (right)",
        },
      ],
    },
    {
      type: "paragraph",
      text: "While walking near Ttukseom, I noticed that the window structure of the Jabeolle Pavilion had the same triangular gridshell curtain wall form as the Galleria Gwanggyo Department Store. Curious, I looked closer to see how the corners were treated.",
    },
    {
      type: "imageRow",
      columns: 3,
      images: [
        {
          src: "/images/projects/budget_problem/2-1.jpg",
          alt: "jabeolle img 1",
        },
        {
          src: "/images/projects/budget_problem/2-3.jpg",
          alt: "jabeolle img 2",
        },
        {
          src: "/images/projects/budget_problem/2-3.jpg",
          alt: "jabeolle img 3",
        },
      ],
    },
    {
      type: "paragraph",
      text: "As expected, the glass panels at the corners were misaligned. This was not surprising — handling these corner details is extremely difficult. There’s an excellent research paper that delves into this issue in detail and proposes solutions: J.-H. Ahn et al., 'Additive Manufacturing Oriented Parametric Design Automation of Adaptive Joint System for an Irregular Form Gridshell Structure,' Applied Sciences, vol. 14, no. 23, 11038, Nov. 2024.",
    },
    {
      type: "image",
      src: "/images/projects/budget_problem/project_2_1.png",
      alt: "Figure 12.",
    },
    {
      type: "paragraph",
      text: "In reality, glass is attached to aluminum frames, which are then fixed to steel frames for structural support. This means the glass surface inevitably has an inward thickness. When panels are evenly distributed, as in Figure 5-a, there’s no problem. But in irregular surfaces like Jabeolle or Galleria, panels meet at different angles (Figure 5-b), and the inward offset causes edge misalignments.",
    },
    {
      type: "image",
      src: "/images/projects/budget_problem/project_2_2.png",
      alt: "Figure 5.",
    },
    {
      type: "paragraph",
      text: "The second challenge is fabrication. Even if models fit perfectly in 3D space, how do you actually build them in the real world? Imagine having to precisely position heavy glass panels and steel frames in mid-air and trim all overlapping parts without error. That’s an incredibly difficult task.",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/budget_problem/3-1.jpg",
          alt: "joint examples found on internet",
        },
        {
          src: "/images/projects/budget_problem/3-2.jpg",
          alt: "joint examples found on internet",
        },
      ],
    },
    {
      type: "paragraph",
      text: "I couldn’t see the interior joints of the Jabeolle Pavilion, but typical dome joints likely wouldn’t have worked well. Most examples online are made for smooth, evenly curved domes, whereas the Jabeolle and Galleria cases require joints that adapt to irregular geometries.",
    },
    {
      type: "image",
      src: "/images/projects/budget_problem/project_2_3.png",
      alt: "DOF",
    },
    {
      type: "paragraph",
      text: "The research categorized these needs in terms of Degrees of Freedom (DOF). Typical joints only provide 2–3 DOFs, but more irregular cases may require up to 5 DOFs to properly accommodate complex geometry.",
    },
    {
      type: "paragraph",
      text: "So how did Galleria Gwanggyo solve this problem?",
    },
    {
      type: "imageRow",
      columns: 2,
      images: [
        {
          src: "/images/projects/budget_problem/4-1.jpg",
          alt: "Gwangyo smart node 1",
        },
        {
          src: "/images/projects/budget_problem/4-2.jpg",
          alt: "Gwangyo smart node 1",
        },
      ],
    },
    {
      type: "image",
      src: "/images/projects/budget_problem/project_3_1.png",
      alt: "smart node diagram",
    },
    {
      type: "paragraph",
      text: "The solution was to create a single 3D node that precisely defined the positions and orientations where frames converge. It’s a simple yet brilliant idea — so effective that one wonders why it hadn’t been done earlier. (For clarity, this method was developed by WITHWORKS, and the aforementioned paper was written during the design of this node detail.)",
    },
    {
      type: "paragraph",
      text: "Many might say the obstacle was a ‘budget problem.’ But I think that’s only half true. Knowing my colleagues, I believe they wouldn’t have sacrificed design completeness due to budget alone. It was simply a ‘hard problem’ — one that couldn’t be solved using existing details without serious compromises.",
    },
    {
      type: "paragraph",
      text: "What truly made this possible was the mindset that ‘nothing is fixed.’ By embracing this idea early, our team was able to create something completely new. Creativity and technical skill follow naturally from that mindset — and reinforce it, too. Thoughts like, ‘Can I try this differently?’, ‘Why was it done that way before?’, and ‘How could I overcome this?’ are what drive real growth and allow us to face the next ‘hard problem’ with confidence.",
    },
  ],
};

export default project;
