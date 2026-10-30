import type { Question } from "../questions";

const r = String.raw;

export const week4: Question[] = [
  {
    week: 4,
    source: "Workshop 4 T1",
    marks: 3,
    q: r`PCA is applied to a 10D dataset. The eigenvalues of its covariance matrix, in descending order, are
$$[1.85,\;1.20,\;0.95,\;0.70,\;0.55,\;0.40,\;0.20,\;0.10,\;0.03,\;0.02]$$
What is the minimum number of principal components needed to explain at least 92% of the total variance?`,
    a: r`**6** principal components.`,
    e: r`Total variance $=$ sum of eigenvalues $=6.00$. Target $=0.92\times6=5.52$.

Cumulative: 1.85, 3.05, 4.00, 4.70, **5.25** (87.5%, not enough), **5.65** (94.2% ✓).`,
    where: r`Lecture 4 · PCA: eigenvalues of the covariance matrix = variance along each principal component; fraction of variance explained.`,
  },
  {
    week: 4,
    source: "Workshop 4 T2",
    marks: 4,
    q: r`Alice has a standardised dataset $\mathbf X\in\mathbb R^{10000\times3}$. She eigendecomposes $\mathbf\Sigma=\frac1{10000}\mathbf X^\top\mathbf X$ and gets eigenvalues $2,0,1$ with eigenvectors $[0.71,0.71,0]^\top$, $[0.71,-0.71,0]^\top$, $[0,0,1]^\top$ respectively. She uses PCA to map to 2D.

Where does $\mathbf x^{(t)}=[1.14,\,1.14,\,-0.09]^\top$ get mapped?`,
    a: r`$$\approx[1.62,\;-0.09]^\top$$`,
    e: r`Keep the eigenvectors with the **two largest** eigenvalues: $\mathbf v_1=[0.71,0.71,0]^\top$ (eigenvalue 2) and $\mathbf v_3=[0,0,1]^\top$ (eigenvalue 1). The zero-eigenvalue direction carries no variance.

Project: $z_1=\mathbf v_1^\top\mathbf x=0.71(1.14)+0.71(1.14)=1.62$, $z_2=\mathbf v_3^\top\mathbf x=-0.09$.`,
    where: r`Lecture 4 · PCA: principal components as eigenvectors; projecting data onto the top-$d$ components.`,
  },
  {
    week: 4,
    source: "Workshop 4 T3",
    marks: 4,
    q: r`Explain how stochastic neighbour embedding (SNE) works.`,
    a: r`SNE finds a low-D map in which neighbourhood relationships match those in the original space: define neighbour probabilities $p_{j|i}$ (Gaussian of distance) in high-D and similar probabilities $q$ for the low-D points, then move the low-D points by **gradient descent** to minimise the **KL divergence** $D_{KL}(P\|Q)$.`,
    e: r`Close points get high neighbour probability. If two points are close in the original space but far apart in the map, the KL cost is large, so the optimiser pulls them together. t-SNE uses a heavy-tailed Student-t (Cauchy) distribution for $q$ in the map so that well-separated clusters spread out and are not crowded.`,
    where: r`Lecture 4 · t-SNE / stochastic neighbour embedding (slides ~49–53).`,
  },
  {
    week: 4,
    source: "Lecture 4 Q3",
    marks: 3,
    q: r`Caitlyn has 10-D features she wants to **visualise**. She applies PCA and plots the fraction of variance explained by the first $d$ components. What dimensional space should she project down to, and why?`,
    a: r`**2D** (or 3D at most), because the goal is visualisation. The plot just tells her how much variance is retained (and hence how faithful the picture is).`,
    e: r`Humans can only view 2–3 dimensions. If few components explain little variance, the 2D plot loses a lot of information and she should be cautious about conclusions (or consider t-SNE). If she wanted dimensionality reduction for a downstream model she'd instead choose $d$ by variance explained / validation performance.`,
    where: r`Lecture 4 · Dimensionality reduction with PCA: variance explained.`,
  },
  {
    week: 4,
    source: "Lecture 4 Q1",
    marks: 2,
    q: r`Name two things that can make a data visualisation misleading or poor.`,
    a: r`E.g. truncated or non-zero y-axis exaggerating differences; missing axis labels/units; 3D or distorting effects; pie charts with many slices; poor colour choice; too much clutter.`,
    e: r`A good visualisation shows the data honestly: labelled axes, appropriate scales, and a chart type matched to the data and message.`,
    where: r`Lecture 4 · Data visualisation principles (early slides).`,
  },
  {
    week: 4,
    source: "Practice",
    marks: 3,
    q: r`What is the first principal component, and why should data be standardised before PCA?`,
    a: r`The first PC is the **direction of maximum variance** in the data (the eigenvector of the covariance matrix with the largest eigenvalue). Standardise so features with large scales don't dominate the variance.`,
    e: r`PCA maximises variance, which depends on units. Without standardising, e.g. salary in pounds would dominate height in metres purely because of scale.`,
    where: r`Lecture 4 · PCA. Workshop 4 A1–A2, B2–B3.`,
  },
  {
    week: 4,
    source: "Practice",
    marks: 4,
    q: r`Outline the K-means algorithm and give two warnings about using it.`,
    a: r`1. Choose $K$; initialise $K$ centres at random.
2. **Assign** each (standardised) point to its nearest centre.
3. **Update** each centre to the mean of its assigned points.
4. Repeat until no assignments change.

Warnings: sensitive to initial centres; $K$ is user-defined; clusters may not be meaningful (it will cluster pure noise).`,
    e: r`K-means can converge to different results from different starts, so run several initialisations. Always sanity-check that clusters mean something.`,
    where: r`Lecture 4 · Clustering with K-means (slides 55–61).`,
  },
  {
    week: 4,
    source: "Practice",
    marks: 2,
    q: r`Compare PCA and t-SNE: which is linear, and which directly learns embeddings of points?`,
    a: r`**PCA** is a linear transformation (a projection onto top eigenvectors) that can be applied to new data. **t-SNE** is non-linear and directly learns the low-D embedding for the given points.`,
    e: r`This is why PCA gives a reusable mapping, whereas t-SNE gives a map just for the data it was run on (but often shows cluster structure better, e.g. MNIST digits).`,
    where: r`Lecture 4 · PCA and t-SNE on MNIST (slide 54) and Summary.`,
  },
];
