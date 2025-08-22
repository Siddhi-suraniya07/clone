"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowsFullscreen, ArrowsAngleContract } from "react-bootstrap-icons";
import { Star, CircleDollarSign, Sparkles } from "lucide-react";

export default function Home() {
  const projects = [
    {
      name: "XYTHUM",
      category: "WEB3",
      images: [
        "/images/p11.png",
        "/images/p12.png",
        "/images/p13.png",
        "/images/p14.png",
        "/images/p15.png",
        "/images/p16.png",
        "/images/p17.png",
        "/images/p18.png",
        "/images/p19.png",
        "/images/p20.png",
        "/images/p21.png",
      ],
    },
    {
      name: "VEKE",
      category: "FINANCE",
      images: [
        "/images/s11.png",
        "/images/s12.png",
        "/images/s13.png",
        "/images/s14.png",
        "/images/s15.png",
        "/images/s16.png",
        "/images/s17.png",
        "/images/s18.png",
        "/images/s19.png",
        "/images/s20.png",
        "/images/s21.png",
        "/images/s22.png",
        "/images/s23.png",
        "/images/s24.png",
        "/images/s25.png",
      ],
    },
    {
      name: "GOAT TRADER",
      category: "AI",
      images: [
        "/images/b11.png",
        "/images/b12.png",
        "/images/b13.png",
        "/images/b14.png",
        "/images/b15.png",
        "/images/b16.png",
      ],
    },
    {
      name: "DUDIES",
      category: "COMMERCE",
      images: [
        "/images/t11.png",
        "/images/t12.png",
        "/images/t15.png",
        "/images/t16.png",
        "/images/t18.png",
        "/images/t19.png",
        "/images/t211.png",
        "/images/t22.png",
        "/images/t41.png",
        "/images/t42.png",
        "/images/t43.png",
        "/images/t51.png",
        "/images/t7.png",
      ],
    },
    {
      name: "XYTHUM",
      category: "WEB3",
      images: [
        "/images/p11.png",
        "/images/p12.png",
        "/images/p13.png",
        "/images/p14.png",
        "/images/p15.png",
        "/images/p16.png",
        "/images/p17.png",
        "/images/p18.png",
        "/images/p19.png",
        "/images/p20.png",
        "/images/p21.png",
      ],
    },
    {
      name: "VEKE",
      category: "FINANCE",
      images: [
        "/images/s11.png",
        "/images/s12.png",
        "/images/s13.png",
        "/images/s14.png",
        "/images/s15.png",
        "/images/s16.png",
        "/images/s17.png",
        "/images/s18.png",
        "/images/s19.png",
        "/images/s20.png",
        "/images/s21.png",
        "/images/s22.png",
        "/images/s23.png",
        "/images/s24.png",
        "/images/s25.png",
      ],
    },
    {
      name: "GOAT TRADER",
      category: "AI",
      images: [
        "/images/b11.png",
        "/images/b12.png",
        "/images/b13.png",
        "/images/b14.png",
        "/images/b15.png",
        "/images/b16.png",
      ],
    },
    {
      name: "GOAT TRADER",
      category: "AI",
      images: [
        "/images/b11.png",
        "/images/b12.png",
        "/images/b13.png",
        "/images/b14.png",
        "/images/b15.png",
        "/images/b16.png",
      ],
    },
    {
      name: "GOAT TRADER",
      category: "AI",
      images: [
        "/images/b11.png",
        "/images/b12.png",
        "/images/b13.png",
        "/images/b14.png",
        "/images/b15.png",
        "/images/b16.png",
      ],
    },
    {
      name: "RRE VENTURES",
      category: "VENTURE",
      images: ["/projects/rre1.png", "/projects/rre2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
    },
    {
      name: "BREX AI",
      category: "FINANCE",
      images: ["/projects/brexai1.png", "/projects/brexai2.png"],
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
              <span>// 01 Design Everything</span>
              <span>// 02 Adopt New Realities</span>
              <span>// 03 Use Your Headlights</span>
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
      overflow: "hidden", // make sure text itself never triggers scroll
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
          <div className="col-md-6 px-4">
            <h5 className="fw-bold mb-2">PROJECT DETAIL</h5>
            <div
              className="bg-dark p-2"
              style={{
                borderRadius: "8px",
                height: "280px", 
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {selectedProject.images.map((img, idx) => (
                <div
                  key={idx}
                  className="mb-2"
                  style={{ width: "100%", height: "220px" }} 
                >
                  <Image
                    src={img}
                    alt={`${selectedProject.name} page ${idx + 1}`}
                    layout="responsive"
                    width={500}
                    height={220}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div
        className="d-flex align-items-center my-3 position-absolute w-100"
        style={{ bottom: "75px", left: "0" }}
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
