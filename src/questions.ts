import { more1, more2, more3, more4, more5, more6, more7, more8, more9, more10 } from "./data/more";
import { week1 } from "./data/week1";
import { week2 } from "./data/week2";
import { week3 } from "./data/week3";
import { week4 } from "./data/week4";
import { week5 } from "./data/week5";
import { week6 } from "./data/week6";
import { week7 } from "./data/week7";
import { week8 } from "./data/week8";
import { week9 } from "./data/week9";
import { week10 } from "./data/week10";

export interface Question {
  week: number;
  /** Where the question came from, e.g. "Lecture 2 Q3", "Workshop 5 T1", "Mock A1a" */
  source: string;
  marks?: number;
  /** Markdown + LaTeX ($...$, $$...$$) */
  q: string;
  a: string;
  e: string;
  /** Which part of the course this is from (shown when explaining) */
  where: string;
}

export const WEEKS = [
  { week: 1, title: "Introduction, representing data" },
  { week: 2, title: "Linear models for regression" },
  { week: 3, title: "Linear models for classification" },
  { week: 4, title: "Data visualisation" },
  { week: 5, title: "Model selection and evaluation" },
  { week: 6, title: "Machine learning in society" },
  { week: 7, title: "Decision trees and ensemble methods" },
  { week: 8, title: "Gaussian processes" },
  { week: 9, title: "Deep neural networks" },
  { week: 10, title: "Modern architectures and transfer learning" },
];

export const QUESTIONS: Question[] = [
  ...week1,
  ...week2,
  ...week3,
  ...week4,
  ...week5,
  ...week6,
  ...week7,
  ...week8,
  ...week9,
  ...week10,
  ...more1,
  ...more2,
  ...more3,
  ...more4,
  ...more5,
  ...more6,
  ...more7,
  ...more8,
  ...more9,
  ...more10,
];
