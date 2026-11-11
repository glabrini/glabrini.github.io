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
    "Turbulence model calibration"
  ],

  // Contact / profile links. Leave a value as "" to hide the link.
  links: {
    email: "",          // TODO: your public e-mail
    github: "https://github.com/glabrini",
    scholar: "",        // TODO: Google Scholar profile URL
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
      title: "TODO: Title of your journal article",
      authors: ["Labrini, G.", "Co-author, A.", "Co-author, B."],
      venue: "Journal Name",
      volume: "vol. XX, no. X, pp. 1–15",
      doi: "",
      pdf: "",
      code: "",
      abstract: "TODO: One or two sentences summarising the paper."
    },
    {
      year: 2025,
      type: "conference",
      title: "TODO: Title of your conference paper",
      authors: ["Labrini, G.", "Co-author, A."],
      venue: "Conference name (e.g. ASME Turbo Expo / ETC), City",
      volume: "Paper no. XXXX",
      doi: "",
      pdf: "",
      code: "",
      abstract: ""
    },
    {
      year: 2025,
      type: "preprint",
      title: "TODO: Title of your preprint",
      authors: ["Labrini, G."],
      venue: "arXiv / ResearchSquare preprint",
      volume: "",
      url: "",
      abstract: ""
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
        { name: "Convolutional encoder-decoder surrogates (EnDeNN)", level: 4 }
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
