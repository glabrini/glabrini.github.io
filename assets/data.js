// =====================================================================
//  EDIT THIS FILE ONLY: everything shown on the page comes from here.
//  Entries marked "TODO" are placeholders: replace them with your own.
// =====================================================================

window.SITE = {
  name: "Giovanni Labrini",
  photo: "assets/photo.jpg",   // square image; shown in a round frame. "" to hide
  title: "PhD Candidate in Turbomachinery CFD",
  affiliation: "Politecnico di Torino · TEP group (Turbomachinery for Energy and Propulsion)",
  tagline:
    "High-fidelity CFD of turbine blades and stator-rotor stages, with a focus on film cooling and aerothermal losses in high-pressure turbines.",

  about: [
    "I am a PhD candidate at Politecnico di Torino, in the TEP group. My work centres on high-fidelity numerical simulation of turbine blades and stator-rotor stages, with particular attention to film cooling effectiveness, aerothermal loss and unsteady flow in high-pressure turbine (HPT) stages.",
    "My research combines experimental data validation with advanced CFD modelling: conjugate heat transfer (CHT), sliding-mesh URANS, LES, and the effect of rotating detonation engine (RDE) inlet perturbations on turbine performance. I build my simulation pipeline in Python, from geometry parametrization to post-processing."
  ],

  // Short list shown as chips under "Research interests"
  interests: [
    "Film cooling effectiveness",
    "Aerothermal loss in HPT stages",
    "Unsteady flow in turbomachinery",
    "RDE inlet perturbation",
    "Conjugate heat transfer (CHT)",
    "LES of turbine blades",
    "Cooling system optimization",
    "Turbulence model calibration",
    "Machine-learning-based shape optimization",
    "Pressure gain combustion",
    "H2/natural gas combustion and NOx emissions"
  ],

  // Contact / profile links. Leave a value as "" to hide the link.
  links: {
    email: "",          // TODO: your public e-mail
    github: "https://github.com/glabrini",
    scholar: "https://scholar.google.com/citations?user=VHlQSqIAAAAJ&hl=en",
    orcid: "",          // TODO: https://orcid.org/0000-0000-0000-0000
    researchgate: "https://www.researchgate.net/profile/Giovanni-Labrini",
    linkedin: "https://www.linkedin.com/in/giovanni-labrini-652421150/",
    cv: ""              // TODO: e.g. "assets/cv.pdf" (put the file in /assets)
  },

  // ---------------------------------------------------------------
  // Publications.  type: "journal" | "conference" | "preprint" | "thesis"
  // Optional fields: doi, pdf, url, code, abstract, note
  // Authors: write your own name exactly as in `me` below to get it bolded.
  // ---------------------------------------------------------------
  me: "Labrini, G.",
  publications: [
    {
      year: 2026,
      type: "journal",
      title: "Optimization of an high-pressure turbine vane for pressure gain combustion cycles through convolutional neural network",
      authors: ["Labrini, G.", "Nastasi, R.", "Salvadori, S.", "Misul, D.A."],
      venue: "Energy and AI",
      volume: "100729",
      doi: "", pdf: "", code: ""
    },
    {
      year: 2026,
      type: "conference",
      title: "AI-Based Optimization of Internal Cooling Passages of a High-Pressure Vane",
      authors: ["Labrini, G.", "Salvadori, S.", "Misul, D.A."],
      venue: "ASME Turbo Expo",
      volume: "Paper no. 89756, V005T15A004",
      doi: "", pdf: "", code: ""
    },
    {
      year: 2024,
      type: "journal",
      title: "Shape optimization of a diffusive high-pressure turbine vane using machine learning tools",
      authors: ["Nastasi, R.", "Labrini, G.", "Salvadori, S.", "Misul, D.A."],
      venue: "Energies",
      volume: "vol. 17, no. 22, 5642",
      doi: "", pdf: "", code: ""
    },
    {
      year: 2023,
      type: "journal",
      title: "Evaluation of NOx Emissions Associated to Non-Premixed Combustion of H2/Natural Gas Blends in a 40 MW Heavy-Duty Gas Turbine",
      authors: ["Carusotto, S.", "Labrini, G.", "Salvadori, S.", "Baratta, M.", "Cardile, F.", "Toppino, M.", "et al."],
      venue: "Journal of Engineering for Gas Turbines and Power",
      volume: "vol. 145, no. 12, 121020",
      doi: "", pdf: "", code: ""
    },
    {
      year: "",
      type: "thesis",
      title: "Numerical simulation of the combustion process of blends of hydrogen and natural gas for power generation",
      authors: ["Labrini, G."],
      venue: "Politecnico di Torino",
      volume: "",
      doi: "", pdf: "", code: ""
    }
  ],

  // ---------------------------------------------------------------
  // Skills, grouped.  level (optional): 1–5, shown as a small bar.
  // Remove `level` from every item if you prefer no self-rating.
  // ---------------------------------------------------------------
  skills: [
    {
      group: "CFD & Turbomachinery",
      items: [
        { name: "Film cooling & aerothermal analysis", level: 5 },
        { name: "URANS / LES of turbine stages", level: 5 },
        { name: "Conjugate heat transfer (CHT)", level: 4 },
        { name: "Sliding-mesh stator-rotor simulations", level: 5 },
        { name: "Turbulence & transition modelling (SST, GEKO)", level: 4 }
      ]
    },
    {
      group: "Solvers & Meshing",
      items: [
        { name: "Ansys Fluent / CFX", level: 5 },
        { name: "AVBP (LES)", level: 4 },
        { name: "Fluent Meshing", level: 4 },
        { name: "gmsh (structured meshing)", level: 4 }
      ]
    },
    {
      group: "Python Workflow",
      items: [
        { name: "PyFluent automation & DOE campaigns", level: 5 },
        { name: "Geometry: build123d, CadQuery, PyAnsys Geometry", level: 4 },
        { name: "Post-processing: ANTARES, PyVista/VTK", level: 5 },
        { name: "GUI development: PyQt5", level: 4 }
      ]
    },
    {
      group: "Machine Learning",
      items: [
        { name: "Convolutional encoder-decoder surrogates (EnDeNN)", level: 4 },
        { name: "ML-driven shape optimization of turbine vanes", level: 4 }
      ]
    },
    {
      group: "HPC",
      items: [
        { name: "SLURM cluster workflows", level: 4 },
        { name: "Large-scale parallel CFD runs", level: 4 }
      ]
    },
    {
      group: "Languages",
      items: [
        { name: "Italian" },
        { name: "English" }
      ]
    }
  ],

  // Optional: talks, teaching, awards. Delete the array contents to hide the section.
  news: [
    { date: "2026", text: "TODO: Short news item (paper accepted, talk, award…)." }
  ]
};
