import type { Question } from "../questions";

const r = String.raw;

export const week1: Question[] = [
  {
    week: 1,
    source: "Lecture 1 Q1",
    marks: 4,
    q: r`Which of these statements are true?

1. A person's age group (child 0–12, teenager 13–19, adult 20–64, elderly 65+) is an ordinal variable.
2. The manufacturer of a car (Ford, Toyota, Honda) is an ordinal variable.
3. Temperature in Celsius is an interval variable.
4. A person's number of siblings is a ratio variable.`,
    a: r`**1, 3 and 4 are true. 2 is false.**`,
    e: r`1. Age groups are categories with a natural order, but they don't sit on a number line → **ordinal**.
2. Car manufacturers have no order → **nominal**, not ordinal.
3. 0 °C is just a convention (relative to water freezing), so ratios aren't meaningful → **interval**.
4. Number of siblings is discrete and 0 means "none" (a true zero), so ratios are meaningful → **ratio**.`,
    where: r`Lecture 1 · Variable types: categorical (nominal/ordinal) and numerical (discrete, continuous → interval/ratio), slides 41–44.`,
  },
  {
    week: 1,
    source: "Lecture 1 Q2",
    marks: 3,
    q: r`Each data point is a 3D bag-of-words vector: [#"snap", #"crackle", #"pop"].

Compute the Euclidean distance between the vectors for **"snap crackle pop"** and **"pop crackle pop"**.`,
    a: r`$$\sqrt{2}\approx 1.41$$`,
    e: r`"snap crackle pop" $\rightarrow [1,1,1]^\top$ and "pop crackle pop" $\rightarrow [0,1,2]^\top$.

Difference $= [1,0,-1]^\top$, so distance $=\sqrt{1^2+0^2+(-1)^2}=\sqrt 2$.`,
    where: r`Lecture 1 · Representing other data as vectors: bag of words (slide 53), plus Euclidean distance between vectors.`,
  },
  {
    week: 1,
    source: "Lecture 1 Q3",
    marks: 4,
    q: r`Standardise the dataset matrix
$$\mathbf{X}=\begin{bmatrix}1&2\\3&4\\5&6\end{bmatrix}$$`,
    a: r`$$\mathbf{X}_{new}=\begin{bmatrix}-1.22&-1.22\\0&0\\1.22&1.22\end{bmatrix}$$ (entries are $\mp\sqrt{3/2}$ and 0)`,
    e: r`Standardise **each column**: subtract its mean, divide by its standard deviation.

Column 1: $\mu=3$, $\sigma^2=\tfrac{1}{3}(4+0+4)=\tfrac83$, so $\sigma\approx1.633$. Then $(1-3)/1.633=-1.22$, $0$, $+1.22$.
Column 2 is the same numbers shifted by 1, so it standardises identically.

Note the course uses the $1/N$ (population) variance.`,
    where: r`Lecture 1 · Preprocessing → Standardising your data (slides 54–55).`,
  },
  {
    week: 1,
    source: "Workshop 1 T1",
    marks: 2,
    q: r`$\mathbf{x}^{(3)}=[1,\,20]^\top$ and $\mathbf{x}^{(4)}=[2,\,10]^\top$.

Compute the Euclidean distance between $\mathbf{x}^{(3)}$ and $\mathbf{x}^{(4)}$.`,
    a: r`$$\sqrt{101}\approx 10.05$$`,
    e: r`Difference $=[1,-10]^\top$, so distance $=\sqrt{1+100}=\sqrt{101}$. The second feature dominates because it has a much larger scale — which motivates standardisation (next question).`,
    where: r`Lecture 1 · Representing data points as vectors / Standardising your data.`,
  },
  {
    week: 1,
    source: "Workshop 1 T2",
    marks: 4,
    q: r`Using the four data points
$$\mathbf{x}^{(1)}=\begin{bmatrix}0\\10\end{bmatrix},\;\mathbf{x}^{(2)}=\begin{bmatrix}1\\0\end{bmatrix},\;\mathbf{x}^{(3)}=\begin{bmatrix}1\\20\end{bmatrix},\;\mathbf{x}^{(4)}=\begin{bmatrix}2\\10\end{bmatrix}$$
construct the dataset matrix, standardise it, and compute the distance between the **standardised** $\mathbf{x}^{(3)}$ and $\mathbf{x}^{(4)}$.`,
    a: r`$$\mathbf{X}_{std}=\begin{bmatrix}-\sqrt2&0\\0&-\sqrt2\\0&\sqrt2\\\sqrt2&0\end{bmatrix},\quad \text{distance}=2$$`,
    e: r`Column 1 $=[0,1,1,2]$: $\mu=1$, $\sigma^2=0.5$, $\sigma=1/\sqrt2$.
Column 2 $=[10,0,20,10]$: $\mu=10$, $\sigma^2=50$, $\sigma=5\sqrt2$.

Standardised $\mathbf{x}^{(3)}=[0,\sqrt2]^\top$ and $\mathbf{x}^{(4)}=[\sqrt2,0]^\top$, so distance $=\sqrt{2+2}=2$.`,
    where: r`Lecture 1 · Standardising your data (slides 54–55). Workshop 1 theory question.`,
  },
  {
    week: 1,
    source: "Workshop 1 T3",
    marks: 2,
    q: r`Is BMI a ratio variable? Briefly explain your answer.`,
    a: r`**Yes.** It's continuous and has a true (meaningful) zero.`,
    e: r`A ratio variable has a zero that means "absence of the quantity", so ratios are meaningful: a BMI of 30 is twice a BMI of 15. (Contrast: Celsius temperature is only interval, since its zero is arbitrary.)`,
    where: r`Lecture 1 · Continuous variables: interval vs ratio (slide 44).`,
  },
  {
    week: 1,
    source: "Practice",
    marks: 3,
    q: r`A tabular dataset has a column "level of education" (primary / secondary / university) and a column "favourite colour" (red / green / blue). How should each be represented as numbers for a typical ML method?`,
    a: r`- **Education (ordinal):** map to ordered integers, e.g. 1, 2, 3.
- **Colour (nominal):** one binary feature per category (one-hot encoding).`,
    e: r`Ordinal categories can keep their order as numbers. Nominal categories have no order, so mapping to 1, 2, 3 would invent an order that isn't there — use a binary feature per category instead.`,
    where: r`Lecture 1 · Preprocessing → "What if we want to include categorical variables?" (slide 50).`,
  },
  {
    week: 1,
    source: "Practice",
    marks: 3,
    q: r`Why do we standardise features before applying many ML algorithms? What is the difference between *standardising* and *normalising* in this course?`,
    a: r`Features can have wildly different scales; standardising puts them on a comparable scale so large-valued features don't dominate.

**Standardising** = zero mean and unit variance per column. **Normalising** = any other scaling (e.g. divide by the max).`,
    e: r`Distance-based and gradient-based methods are sensitive to feature scale (e.g. house price in £ vs number of bedrooms). Binary variables can be left alone.`,
    where: r`Lecture 1 · Standardising your data / Normalising vs. standardising (slides 54–56).`,
  },
  {
    week: 1,
    source: "Practice",
    marks: 2,
    q: r`You have missing values for some features in a tabular dataset. Give two options for handling them.`,
    a: r`1. Remove the affected data point(s).
2. Impute the missing value, e.g. with the mean of that feature.`,
    e: r`Removing loses data; imputing keeps the data point but injects an assumption.`,
    where: r`Lecture 1 · Preprocessing → missing (or wrong) values (slide 49).`,
  },
];
