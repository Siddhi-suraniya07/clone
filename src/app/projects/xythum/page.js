"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

export default function XythumPage() {
  return (
    <>
      {/* ===== Section 1: Hero Image ===== */}
      <section
        className="position-relative  d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%" }}
      >
        {/* Fullscreen Background Image */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <Image
            src="/images/x1.png"
            alt="Xythum Project Screenshot"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Hero Content (on top of background) */}
        
      </section>
      
      



      {/* ===== Section 2: Project Description ===== */}
      <section
        className="bg-black text-white py-5"
        style={{ minHeight: "100vh" }}
      >      
        <div className="container text-center">
          <h2 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>Project Description</h2>
          <p
            className="mb-4"
            style={{ maxWidth: "900px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.5 }}
          >
            Xythum is a cross-chain DeFi protocol that facilitates seamless
            asset transfers between multiple blockchain networks, including
            Bitcoin, Ethereum, Solana, and Layer 2 solutions.
          </p>

          <div className="d-flex justify-content-center">
            <Image
              src="/images/b2.png"
              alt="Xythum cards visual"
              width={1600}
              height={900}
              priority
              style={{ maxWidth: "100%", height: "auto", borderRadius: "16px" }}
            />
          </div>
        </div>
      </section>



      {/* ===== Section 3: Style Guide ===== */}
      <section className="bg-black text-white py-5" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ fontSize: "1.4rem" }}>Style Guide</h2>
            <p className="m-0" style={{ fontSize: "0.8rem", lineHeight: 1.6, opacity: 0.8, maxWidth: "900px", margin: "0 auto" }}>
            A UI Style Guide is a comprehensive document or resource that defines the visual and <br /> elements of a user interface (UI) to ensure design consistency across a digital product. <br /> as a reference for designers, developers, and other stakeholders to maintain a cohesive<br /> and branded look and feel throughout a project or suite of applications.
            </p>
          </div>

          <div className="row g-4 align-items-start flex-nowrap">
            {/* Typography / Fonts Used */}
            <div className="col-6">
              <div className="p-4 rounded-4 position-relative" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="position-absolute top-0 start-0 p-3 text-uppercase" style={{ letterSpacing: "2px", fontSize: "0.9rem", opacity: 0.4, writingMode: "vertical-rl", textOrientation: "mixed" }}>Fonts Used</div>
                <div className="mb-3" style={{ fontFamily: "'Mazius Display', serif", fontSize: "1.8rem", marginLeft: "60px" }}>Mazius Display</div>
                <div className="d-flex gap-2 flex-wrap mb-4" style={{ marginLeft: "60px" }}>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Regular</span>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Bold</span>
                </div>

                <div className="mb-3" style={{ fontFamily: "'Albert Sans', sans-serif", fontWeight: 700, fontSize: "1.4rem", marginLeft: "60px" }}>Albert Sans</div>
                <div className="d-flex gap-2 flex-wrap" style={{ marginLeft: "60px" }}>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Thin</span>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Regular</span>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Medium</span>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>SemiBold</span>
                  <span className="badge bg-dark border" style={{ borderColor: "rgba(255,255,255,0.15)" }}>Bold</span>
                </div>
              </div>
            </div>

            {/* Colors Used */}
            <div className="col-6">
              <div className="p-4 rounded-4 position-relative" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", minHeight: "280px" }}>
                <div className="position-absolute top-0 start-0 p-3 text-uppercase" style={{ letterSpacing: "2px", fontSize: "0.9rem", opacity: 0.4, writingMode: "vertical-rl", textOrientation: "mixed" }}>Colors Used</div>
                <div className="row g-3" style={{ marginLeft: "60px" }}>
                  {/* Replace these images with your provided color swatches */}
                  <div className="col-6">
                    <Image src="/images/c1.png" alt="color 1" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-6">
                    <Image src="/images/c2.png" alt="color 2" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-6">
                    <Image src="/images/c3.png" alt="color 3" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-6">
                    <Image src="/images/c4.png" alt="color 4" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-6">
                    <Image src="/images/c5.png" alt="color 5" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-6">
                    <Image src="/images/c6.png" alt="color 6" width={200} height={200} style={{ width: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Illustrations Design ===== */}
      <section className="bg-black text-white py-5" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold" style={{ fontSize: "2.5rem", color: "#00ff66", marginBottom: "3rem" }}>
              Illustrations Design
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Image 1 - Full width, increased height */}
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <Image
                  src="/images/i1.png"
                  alt="Illustration 1 - Security & Key Flow"
                  width={600}
                  height={450}
                  style={{ 
                    width: "100%", 
                    maxWidth: "600px",
                    height: "auto", 
                    objectFit: "contain",
                    borderRadius: "12px"
                  }}
                />
              </div>
            </div>

            {/* Images 2, 3, 4 - Horizontal line below i1 */}
            <div className="col-12" style={{ marginTop: "-200px", position: "relative", zIndex: 10 }}>
              <div className="d-flex justify-content-center align-items-center gap-4">
                {/* Image 2 - Left */}
                <Image
                  src="/images/i2.png"
                  alt="Illustration 2 - Data Processing Arc"
                  width={180}
                  height={140}
                  style={{ 
                    width: "180px",
                    height: "140px", 
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />

                {/* Image 3 - Center */}
                <Image
                  src="/images/i3.png"
                  alt="Illustration 3 - Processor/Security Chip"
                  width={180}
                  height={140}
                  style={{ 
                    width: "180px",
                    height: "140px", 
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />

                {/* Image 4 - Right */}
                <Image
                  src="/images/i4.png"
                  alt="Illustration 4 - Network/Connection Hub"
                  width={180}
                  height={140}
                  style={{ 
                    width: "180px",
                    height: "140px", 
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Responsive Design Showcase ===== */}
      <section className="bg-black text-white py-5" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-light" style={{ fontSize: "2.5rem", color: "#00ff66", marginBottom: "3rem", opacity: 0.4 }}>
              RESPONSIVE DESIGNS
            </h2>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-4">
            {/* r1 Image - Left */}
            <Image
              src="/images/r1.png"
              alt="Responsive Design 1"
              width={300}
              height={400}
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
            />

            {/* r2 Image - Right */}
            <Image
              src="/images/r2.png"
              alt="Responsive Design 2"
              width={300}
              height={400}
              style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px"
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== Section 6: Snap Shots Preview ===== */}
      <section className="py-5" style={{ minHeight: "100vh", position: "relative" }}>
        <div className="position-relative">
          {/* Background Image */}
          <Image
            src="/images/s4.png"
            alt="Snap Shots Preview Background"
            width={1200}
            height={800}
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1
            }}
          />
          
          {/* Text Overlay */}
          <div 
            className="position-relative d-flex align-items-center justify-content-center"
            style={{ 
              height: "100vh", 
              zIndex: 2,
              background: "rgba(0, 0, 0, 0.3)"
            }}
          >
            <h2 className="fw-bold text-center" style={{ fontSize: "3.25rem", color: "#fff", letterSpacing: "1px", opacity: 0.95, whiteSpace: "nowrap", marginTop: "-90px", fontWeight: 900 }}>
              SNAP SHOTS PREVIEW
            </h2>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Full-Page Image ===== */}
      <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
        <Image
          src="/images/s5.png"
          alt="Full Page Visual"
          width={1920}
          height={1080}
          priority
          style={{
            width: "120%",
            height: "120vh",
            objectFit: "contain",
            display: "block"
          }}
        />
      </section>

        {/* ===== Section 8: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/s8.png"
            alt="Section 8 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "120vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>
        {/* ===== Section 9: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/s9.png"
            alt="Section 8 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "280vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>
        
        {/* ===== Section 10: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/t1.png"
            alt="Section 8 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "280vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>

        {/* ===== Section 11: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/t2.png"
            alt="Section 8 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "280vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>

        {/* ===== Section 10: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/t1.png"
            alt="Section 10 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "280vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>

        {/* ===== Section 11: Full-Page Image ===== */}
        <section className="p-0 m-0 d-flex align-items-start justify-content-center" style={{ minHeight: "120vh", position: "relative", backgroundColor: "#000" }}>
          <Image
            src="/images/t2.png"
            alt="Section 11 Full Page Visual"
            width={1920}
            height={1080}
            priority
            style={{
              width: "120%",
              height: "280vh",
              objectFit: "contain",
              display: "block"
            }}
          />
        </section>

        {/* ===== Section 12: Thank You - Final Section ===== */}
        <section className="bg-black text-white d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh", position: "relative" }}>
          {/* Top Text */}
          <div className="text-center mb-5" style={{ marginTop: "-100px" }}>
            <p className="mb-0" style={{ fontSize: "1rem", color: "#fff" }}>
              and many other screens...
            </p>
          </div>

          {/* Three Images Stacked Vertically */}
          <div className="d-flex flex-column align-items-center" style={{ gap: "0px" }}>
            <Image
              src="/images/t3.png"
              alt="Final Image 1"
              width={400}
              height={100}
              style={{
                width: "400px",
                height: "100px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "-20px"
              }}
            />
            <Image
              src="/images/t4.png"
              alt="Final Image 2"
              width={400}
              height={100}
              style={{
                width: "400px",
                height: "100px",
                objectFit: "contain",
                borderRadius: "8px",
                marginBottom: "-20px"
              }}
            />
            <Image
              src="/images/t5.png"
              alt="Final Image 3"
              width={400}
              height={100}
              style={{
                width: "400px",
                height: "100px",
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>


        </section>
      </>
    );
  }
