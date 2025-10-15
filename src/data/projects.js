// src/data/projects.js
const projects = [
    {
    "slug": "budget-or-hard-problem",
    "title": "[Insight] Budget Problem? Or... A Hard Problem?",
    "excerpt": "A reflection on architectural detailing challenges observed in the gridshell structures of Galleria Gwanggyo and Ttukseom Jabeolle, exploring how complex design problems are solved through creativity and engineering insight.",
    "hero": "/images/projects/budget_problem/hero.png",
    "content": [
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/budget_problem/1-1.jpg",
            "alt": "Galleria Gwanggyo (Left)"
          },
          {
            "src": "/images/projects/budget_problem/1-2.jpg",
            "alt": "Ttukseom Jabeolle (right)"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "While walking near Ttukseom, I noticed that the window structure of the Jabeolle Pavilion had the same triangular gridshell curtain wall form as the Galleria Gwanggyo Department Store. Curious, I looked closer to see how the corners were treated."
      },
      {
        "type": "imageRow",
        "columns": 3,
        "images": [
          {
            "src": "/images/projects/budget_problem/2-1.jpg",
            "alt": "jabeolle img 1"
          },
          {
            "src": "/images/projects/budget_problem/2-3.jpg",
            "alt": "jabeolle img 2"
          },
          {
            "src": "/images/projects/budget_problem/2-3.jpg",
            "alt": "jabeolle img 3"
          },
        ]
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
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/budget_problem/3-1.jpg",
            "alt": "joint examples found on internet"
          },
          {
            "src": "/images/projects/budget_problem/3-2.jpg",
            "alt": "joint examples found on internet"
          },
        ]
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
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/budget_problem/4-1.jpg",
            "alt": "Gwangyo smart node 1"
          },
          {
            "src": "/images/projects/budget_problem/4-2.jpg",
            "alt": "Gwangyo smart node 1"
          },
        ]
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
    "slug": "implementing-design-intent-in-baseboard",
    "title": "[Article] Implementing Design Intent... Through a Baseboard",
    "excerpt": "An engineer’s reflection on how even small construction details—like a baseboard—require thoughtful design to faithfully realize the original intent in real-world fabrication and installation.",
    "hero": "/images/projects/design_intent/hero.png",
    "heroSmall": "/images/projects/design_intent/hero.png",
    "thumb": "/images/projects/design_intent/hero.png",
    "content": [
      {
        "type": "image",
        "src": "/images/projects/design_intent/1.jpg",
        "alt": "Typical baseboard example"
      },
      {
        "type": "paragraph",
        "text": "For the past week, my task has been to design and engineer baseboards. Normally, this would be handled according to standard construction details, but since we’re working on a non-orthogonal system, the baseboard also had to be custom-designed."
      },
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/design_intent/2-1.png",
            "alt": "rhino baseboard modeling 1"
          },
          {
            "src": "/images/projects/design_intent/2-2.png",
            "alt": "rhino baseboard modeling 1"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "I spent the entire week using Grasshopper to automate the modeling of every section, eventually creating a system that could control nearly 5,000 components through parameters. It almost felt like performing a magic trick. Later, this model will be automatically converted into drawings and manufactured using CNC cutting."
      },
      {
        "type": "paragraph",
        "text": "Of course, modeling wasn’t the only part of the process. Even a baseboard—seemingly minor—still involves genuine design decisions. Along the way, I encountered several moments of consideration, and in this post, I’d like to share one of them."
      },
      {
        "type": "image",
        "src": "/images/projects/design_intent/3.png",
        "alt": "to mdel a Finished edge"
      },
      {
        "type": "paragraph",
        "text": "There was a suggestion to create a finished edge at the end of the baseboard to make installation easier for other contractors (such as the interior team). So I had to design that finishing detail."
      },
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/design_intent/4-1.png",
            "alt": "quiz 1"
          },
          {
            "src": "/images/projects/design_intent/4-2.png",
            "alt": "quiz 2"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Quiz: Which design detail do you think is better? Option 1 uses a slide-in method, where the end cap is inserted from top to bottom like sliding a card. Option 2 covers it from front to back like fitting a lid. Initially, I proceeded with Option 1. But as soon as my team lead saw it, he said, 'That’s not going to work.' The reason was clear."
      },
      {
        "type": "image",
        "src": "/images/projects/design_intent/5.png",
        "alt": "quiz 1 problem"
      },
      {
        "type": "paragraph",
        "text": "If Option 1 were built, there would be several issues. First, there’s no structural guarantee that the end cap would always align perfectly at the edge—it could easily slip inward, and there’d be no way to stop it. Second, the horizontal member shown in the drawing wouldn’t be fixed well, leading to sagging or construction difficulties. In short, this design was inherently unstable. Since multiple teams would be working on different sections, it would be impossible to ensure that the design intent was realized consistently across the entire project."
      },
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          {
            "src": "/images/projects/design_intent/6-1.png",
            "alt": "quiz 2 solution 1"
          },
          {
            "src": "/images/projects/design_intent/6-2.png",
            "alt": "quiz 2 solution 2"
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "So, I redesigned it. I introduced a mortise-and-tenon structure at the connection points, so each part would interlock physically. With this approach, no matter who installs it or how many times, the end plate will always fit perfectly at the end of the baseboard. We concluded that this was a solid detail and finalized the design, updating the script and the model accordingly."
      },
      {
        "type": "paragraph",
        "text": "To summarize, the original design intent was simply to create a clean closure at the end of the baseboard. But to realize that intent, we had to overcome challenges in both fabrication and construction. A well-thought-out detail design reflects an awareness of possible errors in form and actively seeks shapes that eliminate them."
      },
      {
        "type": "paragraph",
        "text": "Even in a tiny element like a baseboard, this mindset—striving to ensure design intent is faithfully implemented—will ultimately determine the overall quality of the building. I’ll keep moving forward with that mindset."
      }
    ]
  },
    {
    "slug": "design-tool-implementation",
    "title": "[Article] Design Tool Implementation",
    "excerpt": "An engineer’s log exploring how Grasshopper, beyond parametric modeling, can be used as a powerful design tool to visualize constraints, optimize geometry, and streamline architectural detailing.",
    "hero": "/images/projects/design_tool/hero.png",
    "heroSmall": "/images/projects/design_tool/hero.png",
    "thumb": "/images/projects/design_tool/hero.png",
    "content": [
      {
        "type": "paragraph",
        "text": "Grasshopper is primarily a tool for parametric modeling, but depending on how it is used, it can go far beyond simple modeling and become an effective design tool. What does 'design tool' mean in this context?"
      },
      {
        "type": "paragraph",
        "text": "When designing a part of a building, an engineer must first identify various constraints. These can generally be categorized into three types: structural, functional, and aesthetic. The structural aspect concerns whether the element can be installed and remain stable. Technically, this means checking whether the calculated structural values fall within acceptable limits. In a broader sense, it also includes materials, construction methods, fabrication, and installation techniques that influence structural performance."
      },
      {
        "type": "paragraph",
        "text": "Function refers to the role that the element must perform within the building—for example, waterproofing, air-tightness, insulation, and soundproofing in the case of a facade. Lastly, aesthetics simply means that the element should not look unattractive."
      },
      {
        "type": "paragraph",
        "text": "An engineer must prioritize these constraints and determine the optimal result. The challenge is that constraints are interdependent and constantly changing, making it difficult to grasp their relationships in real time. In architectural design, this is further complicated by the three-dimensional nature of components, which makes numerical representation difficult."
      },
      {
        "type": "paragraph",
        "text": "This is where a design tool becomes useful—it helps visualize these constraints in 3D space, allowing engineers to interact with the model and make intuitive decisions at every step. Note that 'design tool' here is not an officially defined term."
      },
      {
        "type": "paragraph",
        "text": "This week, I created a design tool that turned out to be surprisingly effective and powerful."
      },
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          { "src": "/images/projects/design_tool/1-1.png", "alt": "Structure connection visualization 1" },
          { "src": "/images/projects/design_tool/1-2.png", "alt": "Structure connection visualization 2" }
        ]
      },
      {
        "type": "paragraph",
        "text": "The goal was to connect a light-blue elliptical structure to secondary members highlighted in yellow, anchored at points named P00 through P25."
      },
      {
        "type": "paragraph",
        "text": "Constraints included: points should be located near the lower support members of the ellipse; connection directions should be perpendicular to the ellipse surface; distances between points should range from 2000mm to 4000mm; and connection lengths should not exceed 1350mm."
      },
      {
        "type": "paragraph",
        "text": "Because all points are interconnected, adjusting one point to satisfy a condition can cause others to fail. This demonstrates how interdependent constraints can be. Visualizing them helps solve such problems."
      },
      {
        "type": "image",
        "src": "/images/projects/design_tool/2.png",
        "alt": "Constraint visualization in Grasshopper"
      },
      {
        "type": "paragraph",
        "text": "In this visualization, yellow lines represent connecting members, green numbers indicate distances between points, red numbers highlight connections exceeding 1350mm, and yellow numbers mark those within the limit. Once set up, the engineer only needs to move the points to find the optimal arrangement."
      },
      {
        "type": "imageRow",
        "columns": 2,
        "images": [
          { "src": "/images/projects/design_tool/3-1.png", "alt": "Interactive modeling constraint 1" },
          { "src": "/images/projects/design_tool/3-2.png", "alt": "Interactive modeling constraint 2" }
        ]
      },
      {
        "type": "paragraph",
        "text": "Through this visualization, most of the 26 points could be arranged using typical details, leaving only special cases for further resolution."
      },
      {
        "type": "image",
        "src": "/images/projects/design_tool/5.jpg",
        "alt": "Detail sketches"
      },
      {
        "type": "paragraph",
        "text": "These sketches, mostly drawn by my team leader(very briefly), were reinterpreted by me to understand each connection detail. After discussing and deciding how to handle each point, modeling was done in Grasshopper to ensure flexibility if point positions later needed adjustments."
      },
      {
        "type": "image",
        "src": "/images/projects/design_tool/6.png",
        "alt": "Overall Grasshopper script for detail modeling"
      },
      {
        "type": "paragraph",
        "text": "Although the script looks complex, it was actually neatly organized into about five detail types. Once completed, the engineer can simply modify point positions to reflect design changes."
      },
      {
        "type": "image",
        "src": "/images/projects/design_tool/7.png",
        "alt": "Modeled connection members in Grasshopper"
      },
      {
        "type": "paragraph",
        "text": "After completing the script, modifying point positions instantly updates the entire model. This enables checking detailed issues like interference at joints or weld lengths directly in 3D."
      },
      {
        "type": "image",
        "src": "/images/projects/design_tool/8.gif",
        "alt": "Animated visualization of Grasshopper design tool"
      },
      {
        "type": "paragraph",
        "text": "While this process can easily become more work than it’s worth, assessing the necessity beforehand is important. Of course, for those who are quick, doing all design steps this way would be ideal. Through this project, I was able to confirm the strength of Grasshopper as a design tool and plan to actively utilize it in future work."
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
