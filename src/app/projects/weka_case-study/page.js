"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WekaCaseStudyPage() {
  // NOTE: Replace the image sources below with your provided assets when ready
  const heroLeftImage = "/next.svg"; // small image above PRODUCT DESIGN text
  const heroBackground = "/images/m1.png"; // replace with your single composed hero background

  const section2RightImage = "/images/m2.png"; // right corner image beside overview
  const section2LeftBottomImage = "/images/m3.png"; // image left, text right
  const section2RightBottomImage = "/images/m4.png"; // image right, text left

  const section3TopImage = "/images/q1.png"; // top circle/question graphic
  const section3SideImage = "/images/q2.png"; // right-side decoration
  const section3SolutionImage = "/images/q3.png"; // image beside Solution

  return (
    <>
      {/* Section 1: Single background image + left-aligned text */}
      <section className="position-relative text-white" style={{ minHeight: "100vh", overflow: "hidden", backgroundColor: "#000" }}>
        {/* Background image */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <Image
            src={heroBackground}
            alt="Veke Digital hero"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "center", backgroundColor: "#000" }}
          />
        </div>

        {/* Overlay disabled to show full background image */}
        <div
          className="position-absolute top-0 start-0 h-100"
          style={{ width: "0" }}
        />

        {/* Text block */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-lg-6">
              <div className="mb-3 d-inline-block">
                <Image src={heroLeftImage} alt="Hero decoration" width={140} height={100} style={{ width: "140px", height: "auto", objectFit: "contain" }} />
              </div>
              <div>
                <small className="text-uppercase" style={{ opacity: 0.7, fontSize: "0.75rem" }}>(PRODUCT DESIGN)</small>
                <h1 className="mt-1" style={{ fontWeight: 800, fontSize: "1.5rem", lineHeight: 1.15 }}>Veke Digital</h1>
                <p className="mb-0" style={{ maxWidth: 480, opacity: 0.9, fontSize: "0.85rem", lineHeight: 1.45 }}>
                  NFC Digital Business Card App — A choice for a crypto wallet for non‑crypto
                  savvy people by providing better guidance throughout the wallet creation &
                  connecting experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
     

      {/* Section 2: Please Note + Project Overview with images on corners */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <div className="container position-relative" style={{ overflow: "hidden" }}>
          <div className="text-center mb-5">
            <h6 className="text-uppercase fw-bold" style={{ letterSpacing: 1 }}>Please <span className="text-primary">Note</span></h6>
            <p className="m-auto" style={{ maxWidth: 760, opacity: 0.8 }}>
              The following case study is based on a real‑client project, but the names of the
              individuals and organizations involved have been changed to protect their
              confidentiality as per the non‑disclosure agreement that has been signed.
            </p>
          </div>

          <div className="d-flex align-items-stretch gap-4 flex-nowrap">
            {/* Project Overview (flex-grow) */}
            <div className="flex-fill" style={{ flexBasis: "58%", minWidth: 0 }}>
              <div className="p-4 rounded-4 h-100" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h4 className="fw-bold mb-2">Project Overview</h4>
                <p className="mb-2" style={{ opacity: 0.85, fontSize: "0.92rem", lineHeight: 1.45 }}>
                  Veke embraces a futuristic vision that revolves around leveraging the power of NFC technology
                  to seamlessly connect individuals to user‑centric verifiable card technology. With a dynamic
                  interface that is efficiently created & updated by users, we aim to harness the potential of
                  NFC to create a dynamic & interactive experience.
                </p>
                <p className="mb-0" style={{ opacity: 0.85, fontSize: "0.92rem", lineHeight: 1.45 }}>
                  NFC technology empowers contactless interactions while our solution makes information sharing
                  more intuitive and convenient.
                </p>
              </div>
            </div>
            {/* Image m2 */}
            <div className="flex-shrink-0" style={{ width: "38%" }}>
              <div className="rounded-4 overflow-hidden w-100 h-100" style={{ border: "1px solid #e7e9f0", background: "#fff" }}>
                <Image src={section2RightImage} alt="Overview side image m2" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>

          {/* New Row: Image m3 left + text right on one horizontal line */}
          <div className="d-flex align-items-stretch gap-4 flex-nowrap mt-3">
            {/* Image m3 */}
            <div className="flex-shrink-0" style={{ width: "50%" }}>
              <div className="rounded-4 overflow-hidden w-100 h-100" style={{ border: "1px solid #e7e9f0" }}>
                <Image src={section2LeftBottomImage} alt="Image m3" width={640} height={420} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            {/* Text right */}
            <div className="flex-fill" style={{ minWidth: 0 }}>
              <div className="p-4 rounded-4" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h5 className="fw-bold mb-2" style={{ fontSize: "1rem" }}>In an increasingly digital world...</h5>
                <p className="mb-0" style={{ opacity: 0.85, fontSize: "0.9rem", lineHeight: 1.45 }}>
                  Contactless technology like NFC makes it easy, more powerful for friction‑less
                  experiences in communication, payments, and data sharing. However, many users still
                  face challenges in understanding and interacting with NFC‑based solutions.
                </p>
              </div>
              {/* Image m4 placed directly below the text on the right of m3 */}
              <div className="rounded-4 overflow-hidden mt-2" style={{ border: "1px solid #e7e9f0", width: "100%" }}>
                <Image src={section2RightBottomImage} alt="Context image right" width={640} height={180} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Centered question with q1 image above, then Problem & Solution */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "100vh" }}>
        <div className="container position-relative">
          {/* Centered q1 image + leading question and paragraph */}
          <div className="text-center mb-3" style={{ zIndex: 1 }}>
            <Image src={section3TopImage} alt="Question bubble" width={90} height={60} />
            {/* <h5 className="fw-bold mt-3 mb-2">In an increasingly digital world...</h5>
            <p className="m-auto" style={{ maxWidth: 760, opacity: 0.85 }}>
              Contactless technology like NFC makes it easy, more powerful for friction‑less
              experiences in communication, payments, and data sharing. However, many users still
              face challenges in understanding and interacting with NFC‑based solutions.
            </p> */}
          </div>

          <div className="row g-5 position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-6">
              <div className="p-4 rounded-4 text-center" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h3 className="fw-bold mb-3">Problem</h3>
                <p className="mb-0" style={{ opacity: 0.85 }}>
                  Inefficiency and waste in traditional paper business cards: easily lost, outdated quickly,
                  and environmentally wasteful. Static card information limits showcasing full professional
                  profiles. Manual entry of contact details is tedious and error‑prone. Paper cards offer
                  a one‑dimensional interaction, missing the opportunity to create a lasting impression or
                  foster deeper connections.
                </p>
                <div className="mt-3">
                  <Image src={section3SideImage} alt="Related illustration q2" width={140} height={100} />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Section 4: Solution left + large q3 image and brand on right (matches provided mock) */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "50vh" }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-4 flex-nowrap">
            {/* Left: Solution copy */}
            <div style={{ flexBasis: "55%", minWidth: 0 }}>
                    <h3 className="fw-bold mb-3">Solution</h3>
              <div style={{ opacity: 0.9, fontSize: "0.78rem", lineHeight: 1.5, maxWidth: 380 }}>
                <p className="mb-2"><strong>Tap & Share:</strong> Effortless info exchange via NFC. Ditch the paper; share dynamic profiles with a tap.</p>
                <p className="mb-2"><strong>Profiles Evolved:</strong> Showcase more than just contact details. Update & share a comprehensive digital portfolio.</p>
                <p className="mb-2"><strong>Seamless Data Transfer:</strong> Eliminate typos, transfer info directly with a tap.</p>
                <p className="mb-0"><strong>Engage & Connect:</strong> Go beyond static cards, foster deeper connections through interactive features.</p>
              </div>
            </div>
            {/* Right: q3 image + brand lockup */}
            <div style={{ flexBasis: "45%", minWidth: 0 }}>
              <div className="text-center">
                <Image src={section3SolutionImage} alt="Solution illustration q3 large" width={320} height={224} style={{ height: "auto", width: "auto", maxWidth: "100%" }} />
                <div className="mt-2 text-start" style={{ transform: "translate(-14px, -22px)" }}>
                  <div style={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    background: "linear-gradient(90deg, #8A5CF6 0%, #FF2DA1 60%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent"
                  }}>
                    Veke Digital
                  </div>
                  <div style={{ color: "#cbbbe6", fontWeight: 700, marginTop: 2 }}>
                    Veke Digital
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Section 6: Goals panel with phone image */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "60vh" }}>
        <div className="container position-relative">
          {/* Goals circular label + connector moved upwards */}
          <div className="position-absolute" style={{ top: -68, left: 8 }}>
            <div
              className="d-inline-flex align-items-center justify-content-center fw-bold text-white"
              style={{
                width: 64,
                height: 64,
                borderRadius: 9999,
                background: "linear-gradient(180deg,#8A5CF6 0%, #5B62F6 100%)",
                fontSize: "0.8rem"
              }}
            >
              Goals
            </div>
            <div style={{ height: 60, width: 2, background: "#b89fe9", marginLeft: 31, borderBottomLeftRadius: 8 }} />
          </div>

          <div className="mt-4 p-1" style={{
            background: "linear-gradient(90deg,#5030FF 0%, #7D2DF1 60%, #6D36F8 100%)",
            borderRadius: 28,
            border: "1px solid #e7e9f0",
            color: "#fff",
            marginLeft: -32,
            marginRight: -32,
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
          }}>
            <div className="d-flex align-items-stretch gap-2 flex-nowrap">
              {/* Left: bullets */}
              <div className="flex-fill" style={{ minWidth: 0 }}>
                <ul className="mb-0" style={{ listStyle: "none", paddingLeft: 0, margin: 0, fontSize: "0.76rem", lineHeight: 1.35 }}>
                  {[
                    "Simplify the process of interacting with NFC cards.",
                    "Create a seamless and intuitive user journey from the moment they tap the NFC card.",
                    "Ensure the NFC card interaction is accessible to all users, including those with disabilities.",
                    "Provide clear and immediate feedback when an NFC card is tapped or used.",
                    "Design the UI/UX to reflect secure interaction, building user trust in using NFC technology.",
                    "Ensure interactions work consistently across different devices and platforms (iOS, Android, etc.).",
                    "Go beyond functionality and create a delightful experience that engages users."
                  ].map((text, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2 mb-1" style={{ opacity: 0.95 }}>
                      <span className="mt-1" style={{ display: "inline-block", width: 10, height: 10, borderRadius: 9999, background: "#B0A5FF" }} />
                      <span style={{ display: "inline-block", flex: 1 }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: phone */}
              <div className="flex-shrink-0" style={{ width: 175, marginTop: -40 }}>
                <div className="rounded-4 overflow-hidden position-relative" style={{ background: "#1b1238" }}>
                  <Image src="/images/d6.png" alt="Phone preview" width={175} height={262} style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
                  {/* Overlay d7 image centered vertically near right edge */}
                  <div className="position-absolute" style={{ right: -32, top: "50%", transform: "translateY(-50%)" }}>
                    <Image src="/images/d7.png" alt="Overlay icon d7" width={88} height={88} style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: User Needs cards */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "50vh" }}>
        <div className="container position-relative">
          {/* Centered label pill */}
          <div className="d-flex justify-content-center" style={{ position: "relative", height: 0 }}>
            <div
              className="d-inline-flex align-items-center justify-content-center px-7 py-3 rounded-pill fw-bold text-white"
              style={{
                background: "linear-gradient(90deg,#8A5CF6 0%, #FF2DA1 60%)",
                fontSize: "1.35rem",
                transform: "translateY(-18px)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                minWidth: 240,
                textAlign: "center",
                whiteSpace: "nowrap"
              }}
            >
              User Needs
            </div>
          </div>

          {/* Card strip */}
          <div className="p-3 rounded-4 mt-2" style={{ border: "1px solid #eceef5", boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
            <div className="d-flex gap-3 flex-nowrap">
              {/* Card 1 */}
              <div style={{ width: "calc((100% - 2rem) / 4)" }}>
                <div className="h-100 rounded-4 p-3 d-flex flex-column align-items-center text-center" style={{ border: "1px solid #e6e8f2", background: "#fff", minHeight: 180, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="text-center mb-2"><Image src="/images/s11.png" alt="s11" width={40} height={40} style={{ objectFit: "contain" }} /></div>
                  <div className="text-center fw-bold mb-1" style={{ color: "#5726e8" }}>Effortless Sharing</div>
                  <div className="text-center" style={{ opacity: 0.8, fontSize: "0.78rem" }}>
                    Analyze and optimize how users interact with NFC cards across scenarios like payments,
                    access control, or data sharing.
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div style={{ width: "calc((100% - 2rem) / 4)" }}>
                <div className="h-100 rounded-4 p-3 d-flex flex-column align-items-center text-center" style={{ border: "1px solid #e6e8f2", background: "#fff", minHeight: 180, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="text-center mb-2"><Image src="/images/s12.png" alt="s12" width={40} height={40} style={{ objectFit: "contain" }} /></div>
                  <div className="text-center fw-bold mb-1" style={{ color: "#5726e8" }}>Profile Flexibility</div>
                  <div className="text-center" style={{ opacity: 0.8, fontSize: "0.78rem" }}>
                    Create dynamic digital profiles that showcase a full range of skills and experience.
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div style={{ width: "calc((100% - 2rem) / 4)" }}>
                <div className="h-100 rounded-4 p-3 d-flex flex-column align-items-center text-center" style={{ border: "1px solid #e6e8f2", background: "#fff", minHeight: 180, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="text-center mb-2"><Image src="/images/s13.png" alt="s13" width={40} height={40} style={{ objectFit: "contain" }} /></div>
                  <div className="text-center fw-bold mb-1" style={{ color: "#5726e8" }}>Easy Updates</div>
                  <div className="text-center" style={{ opacity: 0.8, fontSize: "0.78rem" }}>
                    Provide an effortless way to update profiles to ensure the most current information.
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div style={{ width: "calc((100% - 2rem) / 4)" }}>
                <div className="h-100 rounded-4 p-3 d-flex flex-column align-items-center text-center" style={{ border: "1px solid #e6e8f2", background: "#fff", minHeight: 180, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="text-center mb-2"><Image src="/images/s14.png" alt="s14" width={40} height={40} style={{ objectFit: "contain" }} /></div>
                  <div className="text-center fw-bold mb-1" style={{ color: "#5726e8" }}>Clear Information</div>
                  <div className="text-center" style={{ opacity: 0.8, fontSize: "0.78rem" }}>
                    Give users access to clear and comprehensive information about the cardholder.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Project Timeline */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "60vh" }}>
        <div className="container">
          {/* Title */}
          <div className="text-center mb-5">
            <h3 className="fw-bold" style={{ color: "#2d3748", fontSize: "1.8rem" }}>Project Timeline</h3>
          </div>

          {/* Timeline Container */}
          <div className="position-relative" style={{ paddingTop: 40, paddingBottom: 60 }}>
            {/* Week Labels */}
            <div className="d-flex justify-content-between position-absolute" style={{ bottom: 0, left: 0, right: 0, zIndex: 1 }}>
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="text-center" style={{ fontSize: "0.75rem", color: "#718096", fontWeight: 500 }}>
                  <div>{i + 1}st Week</div>
                  <div style={{ width: 1, height: 20, background: "#e2e8f0", margin: "4px auto 0" }}></div>
                </div>
              ))}
            </div>

            {/* Phase Bars */}
            <div className="position-relative" style={{ height: 80, marginBottom: 20 }}>
              {/* UX Design Phase */}
              <div 
                className="position-absolute rounded-pill d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                  left: 0,
                  top: 0,
                  width: "66.67%",
                  height: 40,
                  background: "linear-gradient(90deg, #8A5CF6 0%, #7C3AED 100%)",
                  fontSize: "0.9rem"
                }}
              >
                UX Design
              </div>
              
              {/* UI Design Phase */}
              <div 
                className="position-absolute rounded-pill d-flex align-items-center justify-content-center fw-bold text-white"
                style={{
                  right: 0,
                  top: 0,
                  width: "33.33%",
                  height: 40,
                  background: "linear-gradient(90deg, #FF2DA1 0%, #E91E63 100%)",
                  fontSize: "0.9rem"
                }}
              >
                UI Design
              </div>
            </div>

            {/* Task Boxes */}
            <div className="position-relative" style={{ height: 120 }}>
              {/* Week 1 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "0%",
                  top: 0,
                  width: "8.33%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Strategy (Research)
              </div>

              {/* Week 2-3 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "8.33%",
                  top: 0,
                  width: "16.67%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Interviews, Empathy Map, User Persona
              </div>

              {/* Week 4-5 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "25%",
                  top: 0,
                  width: "16.67%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Problem Statement, RCA & Goal Statement
              </div>

              {/* Week 6-8 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "41.67%",
                  top: 0,
                  width: "25%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Competitive Analysis, User, Task Flows & Information Architecture
              </div>

              {/* Week 9-10 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "66.67%",
                  top: 0,
                  width: "16.67%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Moodboard & Lofi Wireframes
              </div>

              {/* Week 10-11 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "75%",
                  top: 40,
                  width: "16.67%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Visual Design & Prototyping
              </div>

              {/* Week 11-12 Task */}
              <div 
                className="position-absolute rounded-3 d-flex align-items-center justify-content-center text-center"
                style={{
                  left: "83.33%",
                  top: 40,
                  width: "16.67%",
                  height: 32,
                  background: "#f7fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.7rem",
                  color: "#4a5568",
                  fontWeight: 500
                }}
              >
                Usability Testing Phase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Design Thinking Process */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "60vh" }}>
        <div className="container">
          <div className="text-center mb-3">
            <h3 className="fw-bold" style={{ color: "#2d3748" }}>
              Design Thinking <span style={{ background: "linear-gradient(90deg,#8A5CF6 0%, #FF2DA1 60%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>Process</span>
            </h3>
            <p className="m-auto" style={{ maxWidth: 820, opacity: 0.85, fontSize: "0.9rem" }}>
              Goal is to improve the user experience and provide added value to users by designing the UI/UX of the
              Veke Digital Application. I will follow the Design Thinking process to create a user‑centric solution
              that meets the needs and wants of our users.
            </p>
          </div>

          <div className="rounded-4 p-4" style={{ border: "1px solid #eceef5", boxShadow: "0 8px 20px rgba(0,0,0,0.05)" }}>
            {/* Steps row with arrows between */}
            <div className="d-flex align-items-center justify-content-between flex-nowrap" style={{ gap: 12 }}>
              {/* Step 1 */}
              <div className="text-center px-2" style={{ width: "20%" }}>
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: 64, height: 64, background: "#faf7ff", border: "1px solid #efe9ff" }}>
                  <Image src="/images/e1.png" alt="Empathize" width={36} height={36} style={{ objectFit: "contain" }} />
                </div>
                <div className="fw-bold" style={{ color: "#2d3748" }}>Empathize</div>
                <div style={{ opacity: 0.8, fontSize: "0.78rem" }}>
                  User Research<br/>User Interview<br/>Survey
                </div>
              </div>
              {/* Arrow */}
              <div className="flex-shrink-0 px-2" style={{ transform: "translateY(-20px)" }}><Image src="/images/e.png" alt="arrow" width={32} height={16} style={{ objectFit: "contain" }} /></div>

              {/* Step 2 */}
              <div className="text-center px-2" style={{ width: "20%" }}>
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: 64, height: 64, background: "#faf7ff", border: "1px solid #efe9ff" }}>
                  <Image src="/images/e2.png" alt="Define" width={36} height={36} style={{ objectFit: "contain" }} />
                </div>
                <div className="fw-bold" style={{ color: "#2d3748", minHeight: 24 }}>Define</div>
                <div style={{ opacity: 0.8, fontSize: "0.78rem", minHeight: 84 }}>
                  Competitive Analysis<br/>User Persona<br/>Empathy Map<br/>User Needs<br/>Improvements<br/>RCA
                </div>
              </div>
              {/* Arrow */}
              <div className="flex-shrink-0 px-2" style={{ transform: "translateY(-20px)" }}><Image src="/images/e.png" alt="arrow" width={32} height={16} style={{ objectFit: "contain" }} /></div>

              {/* Step 3 */}
              <div className="text-center px-2" style={{ width: "20%" }}>
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: 64, height: 64, background: "#faf7ff", border: "1px solid #efe9ff" }}>
                  <Image src="/images/e3.png" alt="Ideate" width={36} height={36} style={{ objectFit: "contain" }} />
                </div>
                <div className="fw-bold" style={{ color: "#2d3748", minHeight: 24 }}>Ideate</div>
                <div style={{ opacity: 0.8, fontSize: "0.78rem", minHeight: 84 }}>
                  User Flows<br/>Task Flows<br/>Information‑Architecture
                </div>
              </div>
              {/* Arrow */}
              <div className="flex-shrink-0 px-2" style={{ transform: "translateY(-20px)" }}><Image src="/images/e.png" alt="arrow" width={32} height={16} style={{ objectFit: "contain" }} /></div>

              {/* Step 4 */}
              <div className="text-center px-2" style={{ width: "20%" }}>
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: 64, height: 64, background: "#faf7ff", border: "1px solid #efe9ff" }}>
                  <Image src="/images/e4.png" alt="Design" width={36} height={36} style={{ objectFit: "contain" }} />
                </div>
                <div className="fw-bold" style={{ color: "#2d3748", minHeight: 24 }}>Design</div>
                <div style={{ opacity: 0.8, fontSize: "0.78rem", minHeight: 84 }}>
                  Moodboard<br/>Wireframing<br/>Visual Design<br/>Prototype
                </div>
              </div>
              {/* Arrow */}
              <div className="flex-shrink-0 px-2" style={{ transform: "translateY(-20px)" }}><Image src="/images/e.png" alt="arrow" width={32} height={16} style={{ objectFit: "contain" }} /></div>

              {/* Step 5 */}
              <div className="text-center px-2" style={{ width: "20%" }}>
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" style={{ width: 64, height: 64, background: "#faf7ff", border: "1px solid #efe9ff" }}>
                  <Image src="/images/e5.png" alt="Test" width={36} height={36} style={{ objectFit: "contain" }} />
                </div>
                <div className="fw-bold" style={{ color: "#2d3748", minHeight: 24 }}>Test</div>
                <div style={{ opacity: 0.8, fontSize: "0.78rem", minHeight: 84 }}>
                  Check Usability<br/>Survey Insight<br/>Improvements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}


