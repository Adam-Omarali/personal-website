import React from "react";

function Bio() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Genomics & Immunotherapy</h1>
      <h1>
        I spent ~5 months exploring genomics learning about DNA, gene editing
        tools, disease prediction, and more.
      </h1>
      <p className="mt-4">
        A lot of my time was devoted to reading papers and backtracking through
        all the terms I didn't understand (allele, phenotype, etc). I believe a
        lot of the problems left to be solved in the world are biological
        problems, largely because of biology's distance from physical laws we
        can easily verify.
      </p>
      <h1 className="text-2xl mt-4">Content I Made</h1>
      <p className="mt-4">
        <a
          href="https://drive.google.com/file/d/14qGlAH5sMOwISGVrxrQEi9KwuN21bPre/view?usp=sharing"
          className="text-blue-500"
        >
          An Alzheimer's Hypothesis
        </a>
        : Microglia are the immune cells of the brain. Clear phenotype changes
        in microglia such as phagocytosis (consuming surronding cells) are seen
        in Alzheimer's patients. We propose a genetic engineering method to
        prevent destructive microglia behaviour.
      </p>
      <p className="mt-4">
        <a
          href="https://adamomarali.medium.com/putting-a-magnifying-glass-under-genomics-37bc81f10b95"
          className="text-blue-500"
        >
          DNA 101 and gel electrophoresis
        </a>
        : A breakdown of DNA, how protiens are produced, the power of PCR to
        replicate DNA and how gel electrophoresis distinguises between two DNA
        strands.
      </p>
      <p className="mt-4">
        <a
          href="https://adamomarali.medium.com/crispr-101-ecf7cea0b8da"
          className="text-blue-500"
        >
          CRISPR 101
        </a>
        : A description of the CRISPR system, and how we've applied it after
        discovering it in bacteria decades ago.
      </p>
      <p className="my-4">
        CAS-13: A gene editing tool that is able to locate a specific sequence
        of RNA, and begins the cleave any RNA that binds to it if the given
        sequence is found. This allows us to make a conditional check for the
        presence of a gene (an if statement for the human body).
      </p>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/WgJOfsLGZ2M?si=e6VyKCphDtH9Ktbs"
        title="YouTube video player"
      ></iframe>
      <p className="my-4">
        <a
          href="https://adamomarali.medium.com/car-t-cells-the-key-thats-unlocking-cancer-12a8d97aaab2"
          className="text-blue-500"
        >
          CAR-T cells
        </a>
        : Why you're immune system loses to cancer, how T-Cells can be enhanced
        to attack cancer cells with a specific receptor, and the use of CRISPR
        and viral vectors to genetically engineer T-Cells.
      </p>
      <p className="my-4">
        Polygenic risk scores: A genetic test that predicts your risk for
        getting a disease.
      </p>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/0VZ-pWJdB_E?si=AYRv5aN0zl7xk5xK"
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default Bio;
