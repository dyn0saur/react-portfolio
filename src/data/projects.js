// src/data/projects.js
const projects = [
    {
    "slug": "budget-or-hard-problem",
    "title": "[Insight] Budget Problem? Or... A Hard Problem?",
    "excerpt": "A reflection on architectural detailing challenges observed in the gridshell structures of Galleria Gwanggyo and Ttukseom Jabeolle, exploring how complex design problems are solved through creativity and engineering insight.",
    "hero": "/images/projects/budget_problem/hero.png",
    "heroSmall": "/images/projects/budget_problem/hero.png",
    "thumb": "/images/projects/budget_problem/hero.png",
    "content": [
      {
        "type": "paragraph",
        "text": "While walking near Ttukseom, I noticed that the window structure of the Jabeolle Pavilion had the same triangular gridshell curtain wall form as the Galleria Gwanggyo Department Store. Curious, I looked closer to see how the corners were treated."
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_1.png",
        "alt": "Galleria Gwanggyo (left) and Ttukseom Jabeolle (right)"
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_1_1.png",
        "alt": "Curtainwall Joints of Ttukseom Jabeolle"
      },
      {
        "type": "paragraph",
        "text": "As expected, the glass panels at the corners were misaligned. This was not surprising — handling these corner details is extremely difficult. There’s an excellent research paper that delves into this issue in detail and proposes solutions: J.-H. Ahn et al., 'Additive Manufacturing Oriented Parametric Design Automation of Adaptive Joint System for an Irregular Form Gridshell Structure,' Applied Sciences, vol. 14, no. 23, 11038, Nov. 2024."
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_2_1.png",
        "alt": "Figure 12."
      },
      {
        "type": "paragraph",
        "text": "In reality, glass is attached to aluminum frames, which are then fixed to steel frames for structural support. This means the glass surface inevitably has an inward thickness. When panels are evenly distributed, as in Figure 5-a, there’s no problem. But in irregular surfaces like Jabeolle or Galleria, panels meet at different angles (Figure 5-b), and the inward offset causes edge misalignments."
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_2_2.png",
        "alt": "Figure 5."
      },
      {
        "type": "paragraph",
        "text": "The second challenge is fabrication. Even if models fit perfectly in 3D space, how do you actually build them in the real world? Imagine having to precisely position heavy glass panels and steel frames in mid-air and trim all overlapping parts without error. That’s an incredibly difficult task."
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_2.png",
        "alt": "Examples of various joint systems found online"
      },
      {
        "type": "paragraph",
        "text": "I couldn’t see the interior joints of the Jabeolle Pavilion, but typical dome joints likely wouldn’t have worked well. Most examples online are made for smooth, evenly curved domes, whereas the Jabeolle and Galleria cases require joints that adapt to irregular geometries."
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_2_3.png",
        "alt": "DOF"
      },
      {
        "type": "paragraph",
        "text": "The research categorized these needs in terms of Degrees of Freedom (DOF). Typical joints only provide 2–3 DOFs, but more irregular cases may require up to 5 DOFs to properly accommodate complex geometry."
      },
      {
        "type": "paragraph",
        "text": "So how did Galleria Gwanggyo solve this problem?"
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_3.png",
        "alt": "Galleria Gwanggyo smart node with neatly aligned glass panels"
      },
      {
        "type": "image",
        "src": "/images/projects/budget_problem/project_3_1.png",
        "alt": "smart node diagram"
      },
      {
        "type": "paragraph",
        "text": "The solution was to create a single 3D node that precisely defined the positions and orientations where frames converge. It’s a simple yet brilliant idea — so effective that one wonders why it hadn’t been done earlier. (For clarity, this method was developed by WITHWORKS, and the aforementioned paper was written during the design of this node detail.)"
      },
      {
        "type": "paragraph",
        "text": "Many might say the obstacle was a ‘budget problem.’ But I think that’s only half true. Knowing my colleagues, I believe they wouldn’t have sacrificed design completeness due to budget alone. It was simply a ‘hard problem’ — one that couldn’t be solved using existing details without serious compromises."
      },
      {
        "type": "paragraph",
        "text": "What truly made this possible was the mindset that ‘nothing is fixed.’ By embracing this idea early, our team was able to create something completely new. Creativity and technical skill follow naturally from that mindset — and reinforce it, too. Thoughts like, ‘Can I try this differently?’, ‘Why was it done that way before?’, and ‘How could I overcome this?’ are what drive real growth and allow us to face the next ‘hard problem’ with confidence."
      }
    ]
  },
  {
    slug: "thesis",
    title: "[Student Project] Pimatgol, Walkable Again: Craft-Industry Regeneration in Jongno",
    excerpt: "Urban-regeneration strategy for Jongno’s historic Pimatgol that restores a human-scale, walkable alley and populates it with makers from the nearby Sewoon/Euljiro ecosystem—supported by a modular, parametric facade system that delivers shading and identity.",
    hero: "/images/projects/thesis/hero.png",
    heroSmall: "/images/projects/thesis/hero.png",
    thumb: "/images/projects/thesis/hero.png",
    content: [
      {
        type: "paragraph",
        text: `Tucked parallel to Seoul's bustling Jongno Avenue, Pimatgol alley has long been a hidden pedestrian passage with deep roots in the city's history. Originally created centuries ago to let commoners dodge noblemen on horseback along Jongno, this narrow lane grew into a lively corridor of shops, eateries, and everyday life. In recent decades, however, rapid redevelopment and neglect have left Pimatgol faded and largely forgotten—its once-vibrant alley culture at risk of disappearing.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_1.png",
        alt: "Pimatgol project image 1",
      },
      {
        type: "paragraph",
        text: `This graduation project reimagines Pimatgol as a pedestrian-first urban corridor that revives its spirit for the modern era. Rather than succumbing to large-scale redevelopment that wipes away the alley's character, the proposal takes a sensitive approach that preserves Pimatgol's human scale and social memory. The design introduces a network of small workshops, studios, and retail spaces run by local makers, breathing new life into the alley while celebrating the neighborhood's craft heritage.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_2.png",
        alt: "Pimatgol project image 2",
      },
      {
        type: "paragraph",
        text: `Key to the concept is the integration of the maker culture from the adjoining Sewoon and Euljiro districts—Seoul's historic manufacturing hub. Pimatgol's new workshops are operated by craftspeople, artists, and small manufacturers who utilize the neighborhood's existing industrial infrastructure. By turning the alley into an open-air extension of this maker community, the design not only revitalizes the street economy but also forges a symbiosis with the surrounding urban fabric. The once-forgotten backstreet is envisioned as a vibrant lane where pedestrians can observe, shop, and engage with craft and industry firsthand.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_3.png",
        alt: "Pimatgol project image 3",
      },
      {
        type: "paragraph",
        text: `In terms of urban design, the scheme transforms the physical layout of Pimatgol while respecting its intimate scale. The alley is pedestrianized and enhanced with better paving, lighting, and pocket plazas that invite people to linger. New infill structures line the route, carefully stepping up in height to remain context-sensitive. Ground floors are kept open and active—hosting maker workshops and tiny retail units that open directly onto the lane—ensuring continuous street life. Upper levels accommodate studios or living spaces for the makers, fostering a live-work community that animates the alley day and night.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_4.png",
        alt: "Pimatgol project image 4",
      },
      {
        type: "paragraph",
        text: `Architecturally, the project blends contemporary design with subtle references to craft. A unifying feature is the facade treatment: a modern curtain wall system wrapped by vertical twisted aluminum panels that act as both solar screens and decorative elements. These panels—three per floor—are parametrically designed, casting patterned shadows into the alley and evoking the texture of woven metal. This dynamic facade not only provides environmental control but also nods to the local metalworking and manufacturing heritage. The modular system was developed using computational design tools, allowing complex patterns to be optimized and fabricated with precision.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_5.png",
        alt: "Pimatgol project image 5",
      },
      {
        type: "paragraph",
        text: `Ultimately, the project strives to make Pimatgol walkable again in every sense. By revitalizing the alley's social and economic life and weaving new architecture into the historic fabric, it creates a vibrant public realm where old and new coexist. Pimatgol becomes a lively pedestrian passage once more—a catalyst for street life that serves as a model for alleyway regeneration in Seoul. This design proves that honoring local heritage and embracing innovation can go hand in hand, breathing new life into a treasured urban space.`,
      },
      {
        type: "image",
        src: "/images/projects/thesis/thesis_6.png",
        alt: "Pimatgol project image 6",
      },
    ],
  },
  {
    slug: "jungle",
    title: "[Student Project] Raising the Alley: A Vertical Public Realm over Donui-dong",
    excerpt: "Urban-regeneration proposal for Donui-dong’s jjokbangchon that preserves the ground-level alley texture as exhibition/retail, caps it with a structural pedestrian deck as shared open space, and adds compliant one-person housing above—supplemented by lifestyle lodging to make participation economically viable.",
    hero: "/images/projects/jungle/hero.png",
    heroSmall: "/images/projects/jungle/hero.png",
    thumb: "/images/projects/jungle/hero.png",
    content: [
      {
        type: "paragraph",
        text: `Donui-dong in central Seoul is home to one of the city's last remaining jjokbangchon—an informal settlement of tiny one-room dwellings. Here, about 576 residents live in cramped units as small as 1.25 pyeong (4 square meters) across a maze of 88 aging buildings. These alleys are a world of their own: narrow, densely packed, and largely hidden amidst the surrounding city. The living conditions are severe, with many inhabitants being elderly or formerly homeless individuals barely scraping by. Yet the neighborhood's labyrinthine character and tightly-knit social fabric carry a certain intrigue and sense of community.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_1.png",
        alt: "Raising the Alley project image 1",
      },
      {
        type: "paragraph",
        text: `This studio project confronts the social challenges of Donui-dong's jjokbangchon with a bold, layered design approach. Visiting the site, the designers observed that from within the alleys, the sky was barely visible above the tightly-packed shacks. This observation inspired the concept of raising the alley—literally elevating the communal ground to give residents space, light, and a new vantage point. The design seeks to create an opportunity for upward movement (both physical and social) for the jjokbangchon's residents, without erasing the area's identity.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_2.png",
        alt: "Raising the Alley project image 2",
      },
      {
        type: "paragraph",
        text: `Instead of wholesale demolition, the proposal preserves portions of the existing alley fabric at ground level, maintaining the authentic maze-like atmosphere. These retained structures and narrow passages are repurposed into a sort of living museum—housing small exhibits, workshops, and retail that showcase the history and stories of the jjokbangchon. The familiar gritty alleyway environment thus remains accessible, now inviting visitors to explore and learn, while providing former residents an anchor to their past. By keeping the ground plane alive and recognizable, the design ensures the spirit of Donui-dong is not lost in redevelopment.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_3.png",
        alt: "Raising the Alley project image 3",
      },
      {
        type: "paragraph",
        text: `Above this preserved ground, a new elevated pedestrian network is introduced—essentially raising the alley into the air. A bold structural platform weaves over the site, creating an open public realm one level up. This elevated promenade becomes the new heart of the community: an outdoor hallway and terrace where residents can stroll, gather, and enjoy sunlight and fresh air, all within their own neighborhood. By covering the old alleys with this structural walk, the design also adds a dramatic spatial layer that sparks curiosity and draws outsiders to venture in.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_4.png",
        alt: "Raising the Alley project image 4",
      },
      {
        type: "paragraph",
        text: `On top of the pedestrian deck, the project then introduces new housing and other programs. Clusters of code-compliant micro-unit apartments are built above, providing safe and decent homes for the jjokbangchon's residents. These units are compact but thoughtfully designed to meet modern standards, offering dignity and stability in place of the former 1.25-pyeong rooms. In addition, one portion of the site is dedicated to a lifestyle lodging tower—essentially a small hotel or serviced residence—that generates revenue. This mix of programs establishes a sustainable financial model: the lodging draws visitors and income that help support the subsidized housing and persuade landowners to invest in the renewal.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_5.png",
        alt: "Raising the Alley project image 5",
      },
      {
        type: "paragraph",
        text: `The result is a layered village that uplifts its residents while inviting the city in. By strategically combining social housing with commercial uses, the scheme achieves both community benefit and economic viability. Most importantly, it retains the soul of Donui-dong—the intimate alleyways and their stories—rather than replacing them with anonymous towers. Raising the Alley demonstrates a compassionate approach to urban regeneration: one that builds upward toward hope while keeping the roots of the place firmly intact.`,
      },
      {
        type: "image",
        src: "/images/projects/jungle/jungle_6.png",
        alt: "Raising the Alley project image 6",
      },
    ],
  },
];

export default projects;
