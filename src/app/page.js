"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, CircleDollarSign, Sparkles } from "lucide-react";

export default function Home() {
  const projects = [
    {
      name: "XYTHUM",
      category: "WEB3",
      route: "/projects/xythum", // 👈 link to the real site
    },
    {
      name: "weka_case-study",
      category: "FINANCE",
      route: "/projects/weka_case-study",
    },
    {
      name: "GOAT TRADER",
      category: "AI",
      route: "/projects/goat-trader",
    },
    {
      name: "DUDIES",
      category: "COMMERCE",
      route: "/projects/dudies",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="container-fluid bg-black text-white py-4">
      {/* Header Row */}
      <div
        className="d-flex justify-content-between align-items-center px-3"
        style={{ height: "8px" }}
      >
        {/* Left Icons */}
        <div className="d-flex gap-3 text-light">
          <Star size={30} />
          <CircleDollarSign size={30} />
          <Sparkles size={30} />
        </div>

        {/* Center Menu */}
        <div
          className="d-none d-md-flex flex-grow-1 justify-content-end"
          style={{ marginRight: "20px", fontSize: "0.65rem", lineHeight: "1" }}
        >
          <div className="scroll-text-wrapper" style={{ height: "14px" }}>
            <div className="scroll-text">
              <span>/ 01 Design Everything</span>
              <span>/ 02 Adopt New Realities</span>
              <span>/ 03 Use Your Headlights</span>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <button
          className="btn btn-outline-success fw-bold text-uppercase px-1 py-0"
          style={{ fontSize: "0.9rem", height: "25px", lineHeight: "1" }}
        >
          Contact
        </button>
      </div>

      <div
        className="d-flex align-items-center my-3"
        style={{ marginTop: "-80px" }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
        <hr
          className="flex-grow-1 mx-2 border-light"
          style={{ borderWidth: "2px" }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
      </div>

      <section
        className="text-center w-100 m-0"
        style={{
          padding: "0",
          overflow: "hidden",
          width: "100vw",
          height: "14vh",
        }}
      >
        <h1
          className="display-1 text-uppercase"
          style={{
            fontSize: "7rem",
            fontWeight: "600",
            transform: "scaleX(1.5)",
            margin: "0",
            lineHeight: "0.9",
            overflow: "hidden",
          }}
        >
          STUDIO FREIGHT
        </h1>
      </section>

      <div
        className="d-flex align-items-center my-3"
        style={{ marginTop: "-500px" }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
        <hr
          className="flex-grow-1 mx-2 border-light"
          style={{ borderWidth: "2px" }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
      </div>

      <section
        className="container-fluid text-light py-3"
        style={{ backgroundColor: "#000", marginTop: "-30px" }}
      >
        <div className="row">
          {/* About & Services */}
          <div className="col-md-3 px-4" style={{ height: "auto" }}>
            <h5 className="fw-bold mb-2">ABOUT</h5>
            <p style={{ fontSize: "13px", color: "#ddd" }}>
              Studio Freight is an independent creative studio building brands,
              digital experiences, and technology to move missions forward.
            </p>
            <p style={{ fontSize: "13px", color: "#ddd" }}>
              Our clients see us as trusted partners who care as much as they
              do, which is just a ruse because we actually care even more...
            </p>
            <h5 className="fw-bold mt-3">SERVICES</h5>
            <ul className="list-unstyled mt-2">
              <li>→ Brand Strategy</li>
              <li style={{ color: "#666" }}>→ Verbal Identity</li>
            </ul>
          </div>

          {/* Projects List */}
          <div
            className="col-md-3 border-start border-end px-4"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <h5
              className="fw-bold mb-2"
              style={{
                position: "sticky",
                top: "0",
                backgroundColor: "#000",
                padding: "6px 0",
                zIndex: 10,
              }}
            >
              PROJECTS
            </h5>

            <ul
              className="list-unstyled"
              style={{
                maxHeight: "280px",
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {projects.map((project, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="d-flex justify-content-between align-items-center py-1 px-1 border-bottom"
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    fontWeight:
                      selectedProject.name === project.name ? "bold" : "normal",
                    color:
                      selectedProject.name === project.name
                        ? "limegreen"
                        : "#fff",
                  }}
                >
                  <span>{project.name}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      color:
                        selectedProject.name === project.name
                          ? "limegreen"
                          : "#aaa",
                    }}
                  >
                    {project.category}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Detail */}
{/* Project Detail */}
  <div className="col-md-6 p-0 d-flex flex-column">
    <h5 className="fw-bold mb-2" style={{ margin: "0" }}>
      PROJECT DETAIL
    </h5>

   <div
  className="bg-dark project-scroll flex-grow-1"
  style={{
    borderRadius: "8px",
    overflowY: "scroll",     // force scroll inside container
    height: "250px",
    margin: "0",
    position: "relative",
  }}
>
<iframe
  src={selectedProject.route}
  style={{
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "6px",
    display: "block",
  }}
  scrolling="yes"
/>

</div>

  </div>


        </div>
      </section>

      <div
        className="d-flex align-items-center my-3 position-absolute w-100"
        style={{ bottom: "15px", left: "0" }}
      >
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
        <hr
          className="flex-grow-1 mx-2 border-light"
          style={{ borderWidth: "2px" }}
        />
        <span style={{ fontSize: "1.5rem", fontWeight: "100", color: "#FFF" }}>
          +
        </span>
      </div>
      <div
        className="container-fluid border-top py-3"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "monospace",
        }}
      >
        <div className="row align-items-start text-uppercase small">
          {/* Left Column */}
          <div className="col-md-2 mb-2 text-success fw-bold">
            CAPABILITIES DECK ↓
          </div>

          {/* Links Column 1 */}
          <div className="col-md-2 mb-2">
            <div style={{ marginBottom: "12px" }}>GITHUB</div>
            <div>LENIS</div>
          </div>

          {/* Links Column 2 */}
          <div className="col-md-2 mb-2">
            <div style={{ marginBottom: "12px" }}>AWWWARDS</div>
            <div>TWITTER</div>
          </div>

          {/* Links Column 3 */}
          <div className="col-md-2 mb-2">
            <div style={{ marginBottom: "12px" }}>INSTAGRAM</div>
            <div>VIMEO</div>
          </div>

          {/* Contact Column */}
          <div className="col-md-3 mb-2">
            <div style={{ marginBottom: "12px" }}>P: +1 380.238.9363</div>
            <div>E: HELLO@STUDIOFREIGHT.COM</div>
          </div>

          {/* Right Column (Copyright) */}
          <div className="col-md-1 mb-2 text-end">© 2025</div>
        </div>
      </div>
    </main>
  );
}
