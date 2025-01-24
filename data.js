// Course categories grouped by duration
export const courseCategories = {
  Long: ["3D Animation", "VFX", "Game Design", "Game Development", "Interior/Exterior"],
  Mid: ["Graphic Design", "2D Animation", "3D Animation", "VFX", "Graphic Web Design and Development", "Motion Graphic Design", "UI/UX", "Video/Audio"],
  Short: ["Graphic Design", "3D Animation", "VFX", "Graphic Web Design and Development", "Motion Graphic Design", "UI/UX", "Game Design", "Game Development", "Interior/Exterior", "Video/Audio"]
};

// Course class definition
class Course {
  constructor(courseCode, name, duration, months, categories, totalFees, lumpSum, terms, degree = false) {
    this.courseCode = courseCode;
    this.name = name;
    this.duration = duration;
    this.months = months;
    this.categories = categories; // Changed to accept multiple categories
    this.totalFees = totalFees;
    this.registrationFees = 5900; // Fixed registration fee
    this.downPayment = degree ? 80000 : 30000;     // Fixed down payment
    this.lumpSum = lumpSum;
    this.terms = terms;
    this.degree = degree;
  }

  get totalSubmission() {
    return this.totalFees - this.downPayment;
  }

  get totalNoOfQuarterlyInstallments() {
    if (this.degree) {
      return (this.months / 6) - 1;
    } else {
      return Math.floor((this.months - 1) / 3);
    }
  }


  get installments() {
    if (this.degree) {
      return this.totalSubmission / 5;
    } else {
      return this.totalSubmission / Math.floor((this.months -1) / 3);
    }
  }

  get monthlyInstallments_1() {
    return Math.round(this.totalSubmission / (this.months - 1));
  }

  get monthlyInstallments_2() {
    return Math.round(this.totalSubmission / (this.months - 2));
  }

  get monthlyInstallments_3() {
    return Math.round(this.totalSubmission / (this.months - 3));
  }

  get monthlyInstallments_4() {
    return Math.round(this.totalSubmission / (this.months - 4));
  }
}

// Course details
export const courses = [
  new Course(
    "OV-3156-ACVP-VE",
    "ACVP-Visual Effects",
    "Long",
    26,
    ["VFX"],
    356596,
    289336,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk Maya", "ZBrush", "3D Equalizer", "Golem Crowd", "Adobe After Effects"],
      ["Foundry Nuke", "Sillhouette", "Mocha"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3105-ANIVFGAM",
    "Trinity 3d Game",
    "Long",
    32,
    ["Game Design", "3D Animation", "VFX"],
    547520,
    448754,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC"],
      ["Autodesk Maya/ Blender", "ZBrush", "Game Engine (Unreal or Unity)", "Substance Painter"],
      ["Adobe After Effects", "3D Equalizer", "Nuke", "Sillhouette", "Mocha", "Houdini"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3108 Bvoc FM",
    "B. Voc (VFA)",
    "Long",
    36,
    ["VFX", "3D Animation"],
    455000,
    undefined,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Coral Draw", "Adobe Indesign"],
      ["Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects"],
      ["Web Theory", "Animate CC"],
      ["Autodesk 3Ds Max"],
      ["Maya", "Foundry Nuke (Intro)"],
      ["Foundry Nuke"]
    ],
    true
  ),
  new Course(
    "OV-3161-GWDD",
    "Graphics, Web Design and Development",
    "Mid",
    15,
    ["Graphic Web Design and Development", "Graphic Design"],
    161896,
    141246,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC", "Adpbe XD"],
      ["HTML5", "CSS3", "Javascript ES7", "AngularJS 1.8", "Bootstrap 5", "PHP", "Drupal 9"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-606-GD",
    "Graphic Designing",
    "Short",
    4,
    ["Graphic Design"],
    51448,
    50740,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Coral Draw", "Adobe Indesign"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-654-URC",
    "Unreal Cinematics",
    "Short",
    2,
    ["Game Design"],
    47908,
    0,
    [
      ["Unreal Engine (Designing)"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3108 Bvoc GDD",
    "B. Voc (GDD)",
    "Long",
    36,
    ["Game Design", "Game Development"], // Multiple categories
    455000,
    undefined,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC"],
      ["Adobe Photoshop CC", "Unreal", "Blender"],
      ["Blender", "Substance Painter & Unreal Engine"],
      ["Adobe Photoshop CC"],
      ["Unreal Engine"],
      ["Unreal Engine"]
    ],
    true
  ),
  new Course(
    "OV-3159-ACP-VFX COMP",
    "Arena Certified Professional in Animation and VFX",
    "Long",
    28,
    ["VFX"],
    346212,
    283318,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk Maya", "ZBrush", "Adobe After Effects"],
      ["Foundry Nuke", "Sillhouette", "Mocha"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3159-ACP-3DA",
    "Arena Certified Professional in 3D Animation (Term 1 + 2)",
    "Long",
    20,
    ["3D Animation"],
    295000,
    244850,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk Maya, ZBrush", "Adobe After Effects"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3155-ACAP-3DA",
    "ACAP-3D Animation (Term 1 + 2)",
    "Long",
    16,
    ["3D Animation"],
    299956,
    257948,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk 3Ds Max", "Adobe After Effects"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3155-ACAP-A3DA",
    "ACAP-Advanced 3D Animation",
    "Long",
    27,
    ["3D Animation"],
    348808,
    282138,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk 3Ds Max", "Adobe After Effects"],
      ["Autodesk Maya, 3D Equalizer, ZBrush"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3156-ACVP-A3DA",
    "ACVP-Advanced 3D Animation",
    "Long",
    20,
    ["3D Animation"],
    338424,
    281076,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Animate CC"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3142-ACP-AVFXG",
    "Arena Certified Professional in Animation VFX and Gaming",
    "Long",
    33,
    ["Game Design", "3D Animation", "VFX"],
    391524,
    332406,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe Animate CC"],
      ["Autodesk Maya", "ZBrush", "Adobe After Effects", "XGen", "Photogrametary (Agisoft, Metashape/ 3DF Zephyr)"],
      ["Unreal Engine (Designing and Development)"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3146-GARVRP",
    "AR-VR PRIME",
    "Long",
    40,
    ["Game Design", "Game Development"],
    541620,
    408162,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC"],
      ["Adobe Photoshop CC", "Unity", "Blender"],
      ["Adobe Photoshop", "Autodesk Maya", "Zbursh", "Substance Painter", "Quixel & Unreal Engine"],
      ["Adobe Photoshop CC", "Unity", "Autdesk Maya / Blender"],
      ["Adobe Photoshop CC", "Unreal", "Autodesk Maya / Blender/Unity"],
      []
    ]
  ),
  new Course(
    "OV-3147-ADVPRGGD",
    "Advanced Program in Game Design",
    "Long",
    30,
    ["Game Design"],
    418900,
    333350,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC"],
      ["Blender", "Unity3d"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3148-VDP",
    "Video Games Professional",
    "Long",
    22,
    ["Game Design", "Game Development"],
    297832,
    251930,
    [
      ["Adobe Photoshop"],
      ["Autodesk Maya", "Zbursh", "Substance Painter", "Quixel & Unreal Engine"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3164-APAVID",
    "Advanced Program in Architectural Visualization and Interior Design",
    "Long",
    27,
    ["Interior/Exterior"],
    380550,
    326388,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe After Effects CC"],
      ["Autodesk 3Ds Max (Vray)", "Adobe Subdstance Painter"],
      ["Blender"], 
      ["ZBrush", "Unreal Engine (Designing)"], [], []
    ]
  ),
  new Course(
    "OV-3164-3DRT-VE",
    "3d real Time3DRT - Visual effects",
    "Long",
    31,
    ["VFX"],
    381494,
    277500,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects ,CC"],
      ["Autodesk Maya", "Substance Painter", "Generative AI"],
      ["Foundry Nuke", "Sillhouette", "Mocha"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3164-3DRT-R3D",
    "3d real Time",
    "Long",
    31,
    ["Game Design"],
    381494,
    277500,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects CC"],
      ["Autodesk Maya", "Substance Painter", "Generative AI"],
      ["Autodesk Maya", "ZBrush", "XGen", "Photogrametary (Agisoft, Metashape / 3DF Zephyr)"],
      [], [], []
    ]
  ),
  new Course(
    "OV-655-3dMGDPr",
    "3D Motion Graphic Design Prime",
    "Mid",
    11,
    ["Graphic Design", "2D Animation", "Motion Graphic Design"],
    163312,
    142308,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Indesign", "Adobe Premier Pro CC", "Photography", "Blender"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3095-UIUXAP",
    "UI-UX Advanced Program",
    "Mid",
    13,
    ["UI/UX"],
    171100,
    149506,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "HTML5", "CSS3", "Javascript", "AngularJS 1.8", "Bootstrap 5", "JQuery", "Visual Code", "Material Design"],
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma"],
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma"],
      [], [], []
    ]
  ),
  new Course(
    "OV-3160-VFXCE",
    "Arena Certified Professional in VFX Compositing and Editing",
    "Mid",
    13,
    ["VFX", "Video/Audio"],
    149506,
    133930,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects", "Foundry Nuke", "Sillhouette", "Mocha", "iClone"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3153-CFM",
    "Creative Film Making",
    "Mid",
    10,
    ["Video/Audio", "3D Animation"],
    94754,
    91096,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Autodesk 3Ds Max (Vray)"], [], [], [], [], []
    ]
  ),
  new Course(
    "OV-646-MGD",
    "Motion Graphics Design",
    "Mid",
    10,
    ["Motion Graphic Design", "Graphic Design", "2D Animation"],
    128620,
    112454,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects CC"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3106-WDD",
    "Web design and development",
    "Mid",
    10,
    ["Graphic Web Design and Development"],
    87320,
    78470,
    [
      ["HTML5", "CSS3", "Javascript ES7", "AngularJS 1.8", "Bootstrap 5", "PHP", "Drupal 9"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3167-ADGA",
    "Advanced Digital Graphics and Animation",
    "Mid",
    14,
    ["3D Animation", "Graphic Design"],
    149860,
    141600,
    [
      ["Adobe Photoshop CC", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects CC"],
      ["Autodesk Maya", "Generative AI"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3165-DCC",
    "Digital Content Creation",
    "Mid",
    19,
    ["Motion Graphic Design", "Graphic Design"],
    207326,
    191632,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Indesign"],
      ["2d Animate", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects CC"],
       ["Bootstrap", "Figma", "AngularJS 1.8", "HTML", "CSS", "JavaScript", "PHP", "Material Design", "JQuery", "VisualCode"], [], [], []
    ]
  ),
  new Course(
    "OV-3165-DCC-MD",
    "Digital Content Creation - Motion Design",
    "Mid",
    13,
    ["Motion Graphic Design", "Graphic Design", "2D Animation"],
    144432,
    137116,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Indesign"],
      ["2d Animate", "Adobe Audition CC", "Adobe Premier Pro CC", "Adobe After Effects CC"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-3165-DCC-UID",
    "Digital Content Creation - UI Design",
    "Mid",
    13,
    ["UI/UX", "Graphic Design"],
    154698,
    146084,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Indesign"],  ["Bootstrap", "Figma", "AngularJS 1.8", "HTML", "CSS", "JavaScript", "PHP", "Material Design", "JQuery", "VisualCode"],
      [], [], [], []
    ]
  ),
  new Course(
    "OV-638-DAID",
    "Digital Architecture and Interior Design",
    "Short",
    9,
    ["Interior/Exterior"],
    85668,
    75166,
    [
      ["Autodesk Auto Cad", "Autodesk 3Ds Max (Vray)"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3135-GDP",
    "Graphic Design Prime",
    "Short",
    7,
    ["Graphic Design"],
    78116,
    69148,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3161-GDW",
    "Graphics Design for Web",
    "Short",
    7,
    ["Graphic Design"],
    74340,
    68086,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC", "Adobe XD"], [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3161-WD",
    "Web Design",
    "Short",
    7,
    ["Graphic Web Design and Development", "Graphic Design"],
    86612,
    77172,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Animate CC", "HTML5", "CSS3", "JavaScript"], [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3095-UIPP",
    "UI-Professional Program",
    "Short",
    5,
    ["UI/UX"],
    58056,
    52274,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "HTML5", "CSS3", "Javascript", "AngularJS 1.8", "Bootstrap 5", "JQuery", "Visual Code", "Material Design"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3095-UXPP",
    "UX-Professional Program",
    "Short",
    9,
    ["UI/UX"],
    116820,
    103368,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3095-APUIUX",
    "Advanced Program in UI UX",
    "Short",
    7,
    ["UI/UX"],
    85196,
    83308,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Figma", "WordPress", "FigJam", "XAMPP"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3156-ACVP-DV",
    "ACAP-Design and Visualisation",
    "Short",
    9,
    ["Video/Audio", "Graphic Design"],
    112336,
    101126,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe Animate CC"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-596-Adv 3DA",
    "Advance 3D Animation",
    "Short",
    6,
    ["3D Animation"],
    77408,
    68676,
    [
      ["Autodesk Maya"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-634-B3DA",
    "Basics of 3D Animation",
    "Short",
    6,
    ["3D Animation"],
    84016,
    75284,
    [
      ["Autodesk 3Ds Max"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-659-PBRTW",
    "PBR Texturing Workflow with Substance Painter",
    "Short",
    2,
    ["3D Animation"],
    22066,
    0,
    [
      ["Substance Painter"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-658-GAI",
    "Graphic Art and Illustrations (Illustrator)",
    "Short",
    2,
    ["Graphic Design"],
    22066,
    0,
    [
      ["Adobe Illustrator"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-588-Ph",
    "Photoshop",
    "Short",
    2,
    ["Graphic Design"],
    27376,
    0,
    [
      ["Adobe Photshop "],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-592-VE",
    "Video Editing",
    "Short",
    2,
    ["Video/Audio"],
    29618,
    0,
    [
      ["Adobe Premier Pro"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-593-AVE",
    "Audio-Video Editing",
    "Short",
    2,
    ["Video/Audio"],
    26550,
    0,
    [
      ["Adobe Audition CC, Aadobe Premier Pro CC"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-599-VFX-AE",
    "Visual Effect - After Effects",
    "Short",
    2,
    ["VFX", "Motion Graphic Design"],
    22066,
    0,
    [
      ["Adobe After Effects"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-626-MP",
    "Media Publishing",
    "Short",
    1,
    ["Graphic Design"],
    12626,
    0,
    [
      ["Adobe Indesign"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-600-Vfx-Nuke",
    "Visual Effect - Nuke",
    "Short",
    3,
    ["VFX"],
    27848,
    0,
    [
      ["Foundry Nuke"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3128-UGD",
    "Unreal Game Development",
    "Short",
    9,
    ["Game Design", "Game Development"],
    152692,
    0,
    [
      ["Unreal Engine (Designing and Development)"],
      [], [], [], [], []
    ]
  ),
  new Course(
    "OV-3164-APAVID",
    "Advanced Program in Architectural Visualization and Interior Design (Without Blender)",
    "Long",
    22,
    ["Interior/Exterior"],
    348100,
    299366,
    [
      ["Adobe Illustrator CC", "Adobe Photoshop CC", "Adobe Audition CC", "Aadobe Premier Pro CC", "Adobe After Effects CC"],
      ["Autodesk 3Ds Max (Vray)", "Adobe Subdstance Painter"], 
      ["ZBrush", "Unreal Engine (Designing)"], 
      [], [], []
    ]
  )
];
