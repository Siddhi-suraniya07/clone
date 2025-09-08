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
        <div className=" top-0 start-0 w-100 h-100">
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
          <h2 className="fw-bold mb-4">Project Description</h2>
          <p
            className="lead mb-5"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            Xythum is a cross-chain DeFi protocol that facilitates seamless
            asset transfers between multiple blockchain networks, including
            Bitcoin, Ethereum, Solana, and Layer 2 solutions.
          </p>

          <div className="row justify-content-center">
            {/* Objective Card */}
            <div className="col-md-5 mb-4">
              <div
                className="p-4 h-100 text-start rounded-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                }}
              >
                <h4 className="fw-bold">Objective</h4>
                <p>
                  Design a captivating and user-friendly landing page for the
                  Xythum DeFi Swap platform that highlights its seamless
                  cross-chain transaction features.
                </p>
              </div>
            </div>

            {/* Overview Card */}
            <div className="col-md-5 mb-4">
              <div
                className="p-4 h-100 text-start rounded-4"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  boxShadow: "0 0 20px rgba(255,255,255,0.1)",
                }}
              >
                <h4 className="fw-bold">Overview</h4>
                <p>
                  The DeFi Swap (Xythum) platform leverages blockchain
                  technology to allow users to transfer digital assets across
                  multiple blockchains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
