import type { Question } from "../questions";

const r = String.raw;

export const week2: Question[] = [
  {
    week: 2,
    source: "Mock A1a",
    marks: 4,
    q: r`Linear model $f(x)=wx$. A single data point $x=2$, target $y=6$, current weight $w=2$. Loss $L(w)=(y-wx)^2$.

What is $w$ after one gradient descent step with learning rate $0.1$? Did the loss increase or decrease?`,
    a: r`$$w=2.8,\quad\text{loss decreased from }4\text{ to }0.16$$`,
    e: r`$$\frac{dL}{dw}=-2x(y-wx)=-2(2)(6-4)=-8$$
$$w_{new}=w-\alpha\frac{dL}{dw}=2-0.1(-8)=2.8$$
Loss before: $(6-4)^2=4$. Loss after: $(6-2.8\times2)^2=(0.4)^2=0.16$ → **decreased**.`,
    where: r`Lecture 2 · Gradient descent algorithm (slides 50–53): $w_{t+1}=w_t-\alpha\nabla L(w_t)$.`,
  },
  {
    week: 2,
    source: "Lecture 2 Q3",
    marks: 4,
    q: r`Minimise $L(\theta)=-\log\theta+\theta^2+e^{0.1\theta}$ using gradient descent. Starting from $\theta_{t=0}=10.2$ with learning rate $0.25$, what is $\theta_{t=1}$?`,
    a: r`$$\theta_{t=1}\approx 5.06$$`,
    e: r`$$\nabla L=-\frac1\theta+2\theta+0.1e^{0.1\theta}$$
At $\theta=10.2$: $-0.098+20.4+0.1e^{1.02}=-0.098+20.4+0.277\approx20.579$.

$$\theta_{1}=10.2-0.25\times20.579\approx5.055$$`,
    where: r`Lecture 2 · Gradient descent (GD) algorithm (slide 53).`,
  },
  {
    week: 2,
    source: "Workshop 2 T1",
    marks: 3,
    q: r`Alf fits $\hat y=wx+b$ by minimising squared error to this training set. What are $w$ and $b$?

| $x$ | -2 | -1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| $y$ | 8 | 6 | 4 | 2 | 0 |`,
    a: r`$$w=-2,\quad b=4$$`,
    e: r`Every point lies exactly on the line $y=4-2x$ ($x=0\Rightarrow4$; each +1 in $x$ lowers $y$ by 2). A perfect fit has zero squared error, which is the minimum possible.`,
    where: r`Lecture 2 · Linear regression: minimising squared error (and lecture Q1 on finding $w,b$).`,
  },
  {
    week: 2,
    source: "Workshop 2 T2",
    marks: 4,
    q: r`Alf now fits the same model to the same data using ridge loss $L_{ridge}=L_{SE}+\lambda w^2$, but accidentally sets $\lambda=10^{99}$.

What $w$ will the model have, and what is $L_{ridge}$ on the training set?`,
    a: r`$$w=0,\quad b=\bar y=4,\quad L_{ridge}=40$$`,
    e: r`A gigantic $\lambda$ forces $w\to0$ (the bias $b$ is not penalised). With $w=0$ the best $b$ is the mean of $y$, which is $4$.

Then $L_{SE}=(8-4)^2+(6-4)^2+0+(2-4)^2+(0-4)^2=16+4+0+4+16=40$, and the penalty is $\approx0$.`,
    where: r`Lecture 2 · Regularisation: ridge regression and the effect of $\lambda$ (underfitting when too large).`,
  },
  {
    week: 2,
    source: "Workshop 2 T3",
    marks: 3,
    q: r`With several weights, how do ridge regression and lasso regression differ? Which is better for obtaining sparse weights?`,
    a: r`**Ridge** penalises $\lambda\|\mathbf w\|_2^2$ (L2); **lasso** penalises $\lambda\|\mathbf w\|_1$ (L1). **Lasso** gives sparse weights (many exactly zero).`,
    e: r`The L2 penalty shrinks all weights smoothly towards zero but rarely makes them exactly zero. The L1 penalty has a kink at zero so it pushes many weights exactly to zero, effectively doing feature selection.`,
    where: r`Lecture 2 · Lasso regression (slides 48–49), alongside ridge regression.`,
  },
  {
    week: 2,
    source: "Practice",
    marks: 3,
    q: r`Lasso loss is $L_{lasso}(\mathbf w)=\frac{1}{2N}\|\mathbf y-\Phi\mathbf w\|^2+\lambda|\mathbf w|$. The absolute value isn't differentiable at 0. Is this a problem for finding the minimum?`,
    a: r`**No.** The loss is still **convex** (sum of convex functions) and **piecewise differentiable**, so gradient descent still works.`,
    e: r`$|w|$ has gradient $+1$ for $w>0$ and $-1$ for $w<0$; we can evaluate a gradient everywhere except exactly $w=0$. Convexity means a minimum found is a global minimum.`,
    where: r`Lecture 2 · "Lasso is convex" and "Piecewise differentiability" (slides 48–50).`,
  },
  {
    week: 2,
    source: "Practice",
    marks: 4,
    q: r`A degree-10 polynomial regression has training $R^2\approx1$ but validation $R^2\ll1$ (even negative). What does this suggest, and how can ridge regression help? How should $\lambda$ be chosen?`,
    a: r`**Overfitting.** Ridge penalises large weights, giving a smoother function. Choose $\lambda$ with the **highest validation** score (e.g. sweep it over many orders of magnitude).`,
    e: r`The model memorises noise in the training set. Increasing $\lambda$ lowers training $R^2$ but can raise validation $R^2$ — until $\lambda$ gets too large and the model underfits. The test set is only used once at the end.`,
    where: r`Lecture 2 · Overfitting, regularisation, and using a validation set for model selection. Workshop 2 Part A.`,
  },
  {
    week: 2,
    source: "Practice",
    marks: 3,
    q: r`Why does a gradient descent step reduce the loss? State the step rule and the role of the learning rate.`,
    a: r`$\mathbf w_{t+1}=\mathbf w_t-\alpha\nabla L(\mathbf w_t)$. The negative gradient is the direction of locally steepest descent; $\alpha$ must be small enough for the approximation to hold.`,
    e: r`By a first-order Taylor expansion, $L(\mathbf w+\Delta)\approx L(\mathbf w)+\nabla L^\top\Delta$. With $\Delta=-\alpha\nabla L$ this is $L-\alpha\|\nabla L\|^2\le L$ as long as $\alpha$ is small. $\alpha$ is another hyperparameter.`,
    where: r`Lecture 2 · Gradient descent rationale (slide 52).`,
  },
];
