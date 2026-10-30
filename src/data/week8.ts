import type { Question } from "../questions";

const r = String.raw;

export const week8: Question[] = [
  {
    week: 8,
    source: "Mock A1d",
    marks: 4,
    q: r`1D regression data: $X=[0.5,1.0,1.5]^\top$, $\mathbf y=[3.2,1.6,2.0]^\top$. A GP prior has zero mean and a kernel that is a sum of an RBF-type term and a periodic term. Training targets are noise-free.

What are the mean and variance of the GP posterior $p(f_*\mid\mathbf y,X,x_*)$ at $x_*=1.0$? (No matrix inversion required.)`,
    a: r`**Mean $=1.6$, variance $=0$.**`,
    e: r`$x_*=1.0$ is a **training input** and there is no noise, so the posterior must pass exactly through the observation: mean $=y^{(2)}=1.6$ with zero uncertainty. The kernel details are irrelevant.`,
    where: r`Lecture 8 · Conditioning a GP on training data (noise-free case interpolates).`,
  },
  {
    week: 8,
    source: "Workshop 8 T1",
    marks: 5,
    q: r`Prior: $f\sim GP\big(0,\exp(-\tfrac{(x-x')^2}{2})\big)$. Noise-free data: $X=[0,1]^\top$, $\mathbf y=[0,1]^\top$.

Compute the mean of $p(f_*\mid x_*,X,\mathbf y)$ for $x_*=0.5$.`,
    a: r`$$\mu_*=\frac{e^{-0.125}}{1+e^{-0.5}}\approx0.549$$`,
    e: r`$\mu_*=\mathbf k_*^\top K^{-1}\mathbf y$ with $\mathbf k_*=[a,a]^\top$, $a=e^{-0.125}=0.8825$, and $K=\begin{bmatrix}1&c\\c&1\end{bmatrix}$, $c=e^{-0.5}=0.6065$.

Solve $K\mathbf v=\mathbf y$: $v_2=\frac1{1-c^2}$, $v_1=-\frac c{1-c^2}$. Then $\mu_*=a(v_1+v_2)=a\frac{1-c}{1-c^2}=\frac{a}{1+c}=\frac{0.8825}{1.6065}\approx0.549$.`,
    where: r`Lecture 8 · GP posterior: $\mu_*=\mathbf k_*^\top K^{-1}\mathbf y$ (conditioning on training data).`,
  },
  {
    week: 8,
    source: "Workshop 8 T2",
    marks: 2,
    q: r`Without further calculation, what are the mean and variance of $p(f_*\mid x_*,X,\mathbf y)$ for $x_*=1$ in the setup above?`,
    a: r`**Mean $=1$, variance $=0$.**`,
    e: r`$x_*=1$ is a training point with noise-free observation $y=1$: the GP posterior interpolates it with no uncertainty.`,
    where: r`Lecture 8 · GP posterior with noise-free data.`,
  },
  {
    week: 8,
    source: "Workshop 8 T3",
    marks: 4,
    q: r`Briefly describe the assumptions made by (i) the RBF kernel and (ii) the ExpSineSquared kernel about correlations between function values at different inputs.`,
    a: r`(i) **RBF:** correlation depends only on distance and **decays smoothly** with it: nearby inputs have similar values; the function is smooth (length scale $\ell$ sets how fast).
(ii) **ExpSineSquared (periodic):** correlation depends on distance modulo the **period**: inputs a whole period apart are highly correlated, so the function repeats.`,
    e: r`Kernels encode prior assumptions. They can be added or multiplied (e.g. RBF + periodic + white noise for the Mauna Loa CO$_2$ data: trend + seasonal + noise).`,
    where: r`Lecture 8 · Kernels and their hyperparameters; GP example on CO$_2$ data (slides 37–40).`,
  },
  {
    week: 8,
    source: "Lecture 8 Q1",
    marks: 4,
    q: r`Frank models an unknown function with $f(x)\sim GP\big(0,\,4\exp(-\tfrac{(x-x')^2}{2})\big)$.

State the distributions of $f(5)$ and $f(4)$. What is the Pearson correlation between them?`,
    a: r`$f(5)\sim\mathcal N(0,4)$, $f(4)\sim\mathcal N(0,4)$. Correlation $=e^{-1/2}\approx0.607$.`,
    e: r`Variances are $k(x,x)=4$. Covariance $=k(5,4)=4e^{-1/2}$. Correlation $=\frac{\text{cov}}{\sqrt{4\cdot4}}=e^{-0.5}$.`,
    where: r`Lecture 8 · A GP defines a multivariate Gaussian over function values with covariance given by the kernel.`,
  },
  {
    week: 8,
    source: "Lecture 8 Q3 (adapted)",
    marks: 2,
    q: r`In **noise-free** GP regression, what must be true of every posterior sample function at the training inputs?`,
    a: r`Every sample must pass **exactly through the training data points** (zero posterior variance there). Any sample that misses a training point can't be a valid posterior sample.`,
    e: r`With noise, samples need only pass near the data; the posterior variance at training points is then non-zero.`,
    where: r`Lecture 8 · GP posterior samples.`,
  },
  {
    week: 8,
    source: "Practice",
    marks: 4,
    q: r`Give two pros and two cons of Gaussian processes.`,
    a: r`**Pros:** give confidence intervals (uncertainty); work well with little data; kernels let you bake in assumptions.
**Cons:** fitting needs a matrix inversion, expensive for lots of data ($O(N^3)$); assume Gaussian noise; choosing the right kernel can be tricky.`,
    e: r`Hyperparameters are typically optimised by maximising the **marginal likelihood**.`,
    where: r`Lecture 8 · The pros and cons of Gaussian processes (slide 41).`,
  },
  {
    week: 8,
    source: "Practice",
    marks: 2,
    q: r`In a GP regression example, why add a white noise kernel $k_{noise}(x,x')=\sigma_n^2\mathbb 1(x=x')$?`,
    a: r`To model **measurement noise**, so the GP needn't interpolate the data exactly, avoiding an overfitted, wiggly fit; $\sigma_n$ can be fit as a hyperparameter.`,
    e: r`In the CO$_2$ example, assuming almost no noise gave a broken fit; adding a noise kernel improved it, then a periodic kernel captured the seasonality.`,
    where: r`Lecture 8 · GP example, slides 37–40.`,
  },
];
