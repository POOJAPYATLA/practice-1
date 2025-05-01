
import { Venue } from "@/interfaces/Venue";
import { studentBars } from "./studentBars";
import { affordableBars } from "./affordable";
import { afterWorkBars } from "./afterWork";

export const barsCategoryData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string[];
    bars: Venue[];
  }
> = {
  "student-bars": {
    title: " Student Bars",
    subtitle: "Banner Copy For Student Bars",
    description: [
        "Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
        "Perfect for after-class chill vibes.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
      ],
    bars: studentBars,
  },
  "affordable-bars": {
    title: "Affordable Bars",
    subtitle: "Banner Copy For Affordable Bars",
    description: [
        "Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
        "Perfect for after-class chill vibes.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
      ],
    bars: affordableBars,
  },
  "afterwork-bars": {
    title: "After Work Bars",
    subtitle: "Banner Copy For After Work Bars",
    description: [
        "Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
        "Perfect for after-class chill vibes.Find the best budget-friendly spots for students.Find the best budget-friendly spots for students.",
      ],
    bars: afterWorkBars,
  },
 
};

