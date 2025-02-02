import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Travel & Tour",
    imgSrc: "project-imgs/traveltour.e6e92b38.png",
    code: "https://www.github.com",
    projectLink: "https://amritgagra.github.io/Travel-Tour/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "A responsive travel and tour website with a modern design. Features include a booking form, destination cards, and testimonials section.",
    modalContent: (
      <>
        <p>
          Travel & Tour is a responsive travel website showcasing various
          destinations and tour packages. The site features a modern,
          user-friendly design built with HTML, CSS, Bootstrap and JavaScript.
        </p>
        <p>
          Key features include an interactive booking form where users can
          select their travel dates and preferences, destination cards
          highlighting popular locations with images and details, and a
          testimonials section sharing customer reviews.
        </p>
        <p>
          The site is fully responsive and optimized for all screen sizes.
          Bootstrap was used for the layout grid system and components, while
          custom CSS adds unique styling touches. JavaScript handles form
          validation and interactive elements.
        </p>
        <p>
          This project helped me gain hands-on experience with Bootstrap's
          component library and responsive design principles. I also focused on
          creating an engaging user experience through thoughtful UI/UX design.
        </p>
        <p>
          The clean, modern aesthetic combined with smooth animations and
          transitions creates an appealing showcase for travel destinations
          while maintaining excellent performance and accessibility.
        </p>
      </>
    ),
  },
  {
    title: "Fresh Food",
    imgSrc: "project-imgs/freshfood.6796052c.png",
    code: "https://www.github.com",
    projectLink: "https://amritgagra.github.io/freshfood/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description:
      "A responsive food delivery website with a modern design. Features include a menu section, food categories, and a contact form for orders.",
    modalContent: (
      <>
        <p>
          Fresh Food is a modern food delivery website designed to provide a
          seamless ordering experience for customers craving quality meals.
        </p>
        <p>
          The website features an extensive menu section organized by food
          categories, making it easy for users to browse and find their desired
          items. Each dish is presented with appetizing images, detailed
          descriptions, and pricing.
        </p>
        <p>
          A key feature is the interactive contact form that allows customers to
          place orders directly through the website. The form includes fields
          for delivery details and special instructions.
        </p>
        <p>
          The site is built with a responsive design using Bootstrap's grid
          system, ensuring a consistent experience across all devices. Custom
          CSS adds unique styling elements while JavaScript powers the
          interactive features.
        </p>
        <p>
          Special attention was paid to the user interface, with smooth
          animations and transitions creating an engaging browsing experience.
          The clean layout and intuitive navigation help users quickly find and
          order their favorite foods.
        </p>
        <p>
          This project demonstrates my ability to create visually appealing,
          functional websites that provide real value to users while maintaining
          high standards of performance and accessibility.
        </p>
      </>
    ),
  },
  {
    title: "BrushWire",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
