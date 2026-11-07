export const navigation = [
  { id: "about-me", label: "About Me" },
  { id: "philosophy", label: "Philosophy" },
  { id: "resume", label: "Resume" },
  { id: "recommendations", label: "Recommendations" },
  { id: "lesson-plans", label: "Lesson Plans" },
  { id: "contact", label: "Contact" },
] as const;
export type SectionId = (typeof navigation)[number]["id"];
export const skills: readonly string[] = [
  "Elementary Education",
  "Psychology Background",
  "Inclusive Teaching",
  "Student Engagement",
  "Curriculum Development",
  "Classroom Management",
  "Educational Technology",
  "Student Assessment",
];
export const biography: readonly string[] = [
  "I am proud to be on this journey as an educator with deep roots in the Snoqualmie Valley.",
  "I was born and raised in the beautiful Snoqualmie Valley, attending Fall City Elementary and later graduating from Mount Si High School in 2009.",
  "My passion for understanding people led me to Central Washington University, where I earned my bachelor's degree in Psychology.",
  "My love for teaching led me to pursue my Master's in Elementary Education from Western Governors University.",
  "As part of my journey, I completed my student teaching in the Lake Washington School District, where I gained invaluable hands-on experience working with students and fostering a positive learning environment.",
  "That experience reinforced my belief in creating engaging, supportive, and inclusive classrooms where every student can thrive.",
  "I'm so excited to continue growing as an educator and making a meaningful impact in the lives of my students!",
];
