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

  const section3TopImage = "/images/t3.png"; // top circle/question graphic
  const section3SideImage = "/images/t4.png"; // right-side decoration

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
            <div className="flex-shrink-0" style={{ width: "38%" }}>
              <div className="rounded-4 overflow-hidden w-100 h-100" style={{ border: "1px solid #e7e9f0" }}>
                <Image src={section2LeftBottomImage} alt="Image m3" width={640} height={420} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            {/* Text right */}
            <div className="flex-fill" style={{ minWidth: 0 }}>
              <div className="p-4 rounded-4 h-100" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h5 className="fw-bold mb-2">In an increasingly digital world...</h5>
                <p className="mb-0" style={{ opacity: 0.85 }}>
                  Contactless technology like NFC makes it easy, more powerful for friction‑less
                  experiences in communication, payments, and data sharing. However, many users still
                  face challenges in understanding and interacting with NFC‑based solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Text left + Image right (m4) */}
          <div className="row g-4 align-items-center mt-1">
            <div className="col-lg-7 order-lg-1 order-2">
              <div className="p-4 rounded-4 h-100" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h5 className="fw-bold mb-2">Guided, seamless NFC interactions</h5>
                <p className="mb-0" style={{ opacity: 0.85 }}>
                  Our approach focuses on clarity and the right nudges at the right moments, from
                  onboarding to tapping and sharing, reducing friction and helping users complete
                  real‑world connections quickly and confidently.
                </p>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-1 d-flex justify-content-lg-end justify-content-center">
              <div className="rounded-4 overflow-hidden" style={{ border: "1px solid #e7e9f0", width: 420, maxWidth: "100%" }}>
                <Image src={section2RightBottomImage} alt="Context image right" width={640} height={420} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Problem & Solution with two decorative images */}
      <section className="bg-white text-dark py-5" style={{ minHeight: "100vh" }}>
        <div className="container position-relative">
          {/* Decorative images */}
          <div className="position-absolute top-0 start-50 translate-middle-x" style={{ zIndex: 0, marginTop: "-30px" }}>
            <Image src={section3TopImage} alt="Question bubble" width={180} height={120} />
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y d-none d-md-block" style={{ zIndex: 0 }}>
            <Image src={section3SideImage} alt="Side decoration" width={140} height={320} />
          </div>

          <div className="row g-5 position-relative" style={{ zIndex: 1 }}>
            <div className="col-lg-6">
              <div className="p-4 rounded-4" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h3 className="fw-bold mb-3">Problem</h3>
                <p className="mb-0" style={{ opacity: 0.85 }}>
                  Inefficiency and waste in traditional paper business cards: easily lost, outdated quickly,
                  and environmentally wasteful. Static card information limits showcasing full professional
                  profiles. Manual entry of contact details is tedious and error‑prone. Paper cards offer
                  a one‑dimensional interaction, missing the opportunity to create a lasting impression or
                  foster deeper connections.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 rounded-4" style={{ background: "#f6f7fb", border: "1px solid #e7e9f0" }}>
                <h3 className="fw-bold mb-3">Solution</h3>
                <ul className="mb-0" style={{ opacity: 0.9 }}>
                  <li>Tap & Share: effortless info exchange via NFC; share dynamic profiles.</li>
                  <li>Profiles Evolved: showcase more than contact details; a digital portfolio.</li>
                  <li>Seamless Data Transfer: eliminate typos; transfer info with a tap.</li>
                  <li>Engage & Connect: go beyond static cards with interactive features.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


