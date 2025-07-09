import osImage from "@/assets/cool-bg/cool1.png";
import mlImage from "@/assets/cool-bg/cool2.png";
import dlImage from "@/assets/cool-bg/cool3.png";
import ethicsImage from "@/assets/cool-bg/cool4.png";

export const courses = [
  {
    id: "os",
    code: "CS701",
    name: "Operating Systems",
    semester: "Even Sem 2024-25",
    faculty: {
      id: "f01",
      name: "Mr. Swapnil Pawar",
      email: "swapnil.pawar@somaiya.edu",
    },
    credits: 4,
    image: osImage,

    progress: {
      courseCompletion: 75,
      lectureAttendance: 90,
    },

    announcements: [
      "OST 1 scheduled for 20/06/2025",
      "ISE marks released",
      "All notes uploaded",
      "Chapters completed for ESE",
    ],

    assignments: [
      {
        id: "a1",
        title: "Exp 1 Process Scheduling",
        dueDate: "2025-06-20",
        status: "Pending",
      },
      {
        id: "a2",
        title: "Exp 2 Disk Scheduling",
        dueDate: "2025-06-25",
        status: "Submitted",
      },
      {
        id: "a3",
        title: "Exp 3 Fragmentation",
        dueDate: "2025-06-30",
        status: "Graded",
        grade: "A",
      }
    ],

    modules: [
      {
        id: "m1",
        title: "Module 1: Process Management",
        order: 1,
        resources: [
          { type: "notes", title: "Module 1 Notes", url: "#" },
          { type: "video", title: "Intro to OS", url: "#" },
        ],
      },
      {
        id: "m2",
        title: "Module 2: CPU Scheduling",
        order: 2,
        resources: [
          { type: "notes", title: "Scheduling Notes", url: "#" },
          { type: "video", title: "Scheduling Algorithms", url: "#" },
        ],
      },
    ],
  },

  {
    id: "ml",
    code: "CS702",
    name: "Machine Learning",
    semester: "Even Sem 2024-25",
    faculty: {
      id: "f02",
      name: "Dr. Gaurav Shah",
      email: "gaurav.shah@somaiya.edu",
    },
    credits: 3,
    image: mlImage,

    progress: {
      courseCompletion: 60,
      lectureAttendance: 85,
    },

    announcements: [
      "ML Lab 3 due next week",
      "Project topic finalization by 25/06/2025",
    ],

    assignments: [
      {
        id: "a1",
        title: "ML Project Proposal",
        dueDate: "2025-06-22",
        status: "Pending",
      },
      {
        id: "a2",
        title: "Lab 2: Decision Trees",
        dueDate: "2025-06-18",
        status: "Graded",
        grade: "B+",
      },
    ],

    modules: [
      {
        id: "m1",
        title: "Module 1: Introduction to ML",
        order: 1,
        resources: [
          { type: "notes", title: "Intro Slides", url: "#" },
          { type: "video", title: "ML Basics", url: "#" },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Supervised Learning",
        order: 2,
        resources: [
          { type: "notes", title: "SVM & KNN", url: "#" },
          { type: "video", title: "Regression Overview", url: "#" },
        ],
      },
    ],
  },

  {
    id: "dl",
    code: "CS703",
    name: "Deep Learning",
    semester: "Even Sem 2024-25",
    faculty: {
      id: "f03",
      name: "Prof. Neha Sharma",
      email: "neha.sharma@somaiya.edu",
    },
    credits: 3,
    image: dlImage,

    progress: {
      courseCompletion: 80,
      lectureAttendance: 92,
    },

    announcements: [
      "Assignment on CNN due 28/06/2025",
      "TensorFlow workshop on 24/06",
    ],

    assignments: [
      {
        id: "a1",
        title: "Lab 1: Tensor Basics",
        dueDate: "2025-06-15",
        status: "Submitted",
      },
      {
        id: "a2",
        title: "Lab 2: CNN Implementation",
        dueDate: "2025-06-28",
        status: "Pending",
      },
    ],

    modules: [
      {
        id: "m1",
        title: "Module 1: Neural Networks",
        order: 1,
        resources: [
          { type: "notes", title: "Backpropagation", url: "#" },
          { type: "video", title: "NN Overview", url: "#" },
        ],
      },
      {
        id: "m2",
        title: "Module 2: CNNs",
        order: 2,
        resources: [
          { type: "notes", title: "CNN Notes", url: "#" },
          { type: "video", title: "Image Classification", url: "#" },
        ],
      },
    ],
  },

  {
    id: "ethics",
    code: "CS704",
    name: "AI & Society",
    semester: "Even Sem 2024-25",
    faculty: {
      id: "f04",
      name: "Prof. G. S. Subramaniam",
      email: "gss@somaiya.edu",
    },
    credits: 2,
    image: ethicsImage,

    progress: {
      courseCompletion: 65,
      lectureAttendance: 80,
    },

    announcements: [
      "Essay submission extended to 05/07/2025",
      "Panel Discussion on AI Ethics this Friday",
    ],

    assignments: [
      {
        id: "a1",
        title: "AI Ethics Essay",
        dueDate: "2025-07-05",
        status: "Pending",
      },
    ],

    modules: [
      {
        id: "m1",
        title: "Module 1: Foundations of Ethics",
        order: 1,
        resources: [
          { type: "notes", title: "Ethical Frameworks", url: "#" },
          { type: "video", title: "Ethics in Tech", url: "#" },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Bias & Fairness",
        order: 2,
        resources: [
          { type: "notes", title: "Fair ML Readings", url: "#" },
        ],
      },
    ],
  },
];
