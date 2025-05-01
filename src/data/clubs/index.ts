import { Venue } from "@/interfaces/Venue";
import { affordableClubs } from "./affordable";
import { afterWorkClubs } from "./afterWork";
import { studentClubs } from "./studentClubs";

export const clubsCategoryData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string[];
    clubs: Venue[];
  }
> = {
  "student-clubs": {
    title: "Student Clubs",
    subtitle: "Banner Copy For Student Clubs",
    description: [
      "Find the best hangout places for students that suit every mood and vibe.",
      "Affordable, chill, and energetic spots to make your student life memorable.",
    ],
    clubs: studentClubs,
  },
  "affordable-clubs": {
    title: "Affordable Clubs",
    subtitle: "Banner Copy For Affordable Clubs",
    description: [
      "Top picks for a great night out without breaking the bank.",
      "Budget-friendly, fun-packed, and always buzzing with energy.",
    ],
    clubs: affordableClubs,
  },
  "afterwork-clubs": {
    title: "After Work Clubs",
    subtitle: "Banner Copy For After Work Clubs",
    description: [
      "Relax and unwind after work with good music, drinks, and great company.",
      "Perfect destinations to destress and recharge your evening.",
    ],
    clubs: afterWorkClubs,
  },
};
