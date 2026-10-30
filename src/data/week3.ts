import type { Question } from "../questions";

const r = String.raw;

export const week3: Question[] = [
  {
    week: 3,
    source: "Mock A1b",
    marks: 4,
    q: r`A linear classifier uses $f(\mathbf x)=\begin{bmatrix}1&2\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix}+4$ and the threshold
$$\hat y=\begin{cases}1&f(\mathbf x)\ge2\\0&f(\mathbf x)<2\end{cases}$$
Write down the equation of the decision boundary, and say which side is $\hat y=1$ and which is $\hat y=0$.`,
    a: r`Boundary: $$x_1+2x_2=-2$$
A straight line through $(-2,0)$ and $(0,-1)$. The side the normal $[1,2]^\top$ points to (including the origin) is $\hat y=1$; the other side (lower-left) is $\hat y=0$.`,
    e: r`The boundary is where $f(\mathbf x)=2$: $x_1+2x_2+4=2\Rightarrow x_1+2x_2=-2$.

Test the origin: $f=4\ge2$, so $\hat y=1$ on the origin's side, i.e. where $x_1+2x_2>-2$.`,
    where: r`Lecture 3 · Linear classifiers: linear model plus threshold function, and the decision boundary.`,
  },
  {
    week: 3,
    source: "Lecture 3 Q1",
    marks: 3,
    q: r`A linear model $f(\mathbf x)=\mathbf w^\top\mathbf x+b$ with $\mathbf w=[1,-1,2]^\top$, $b=1$ is trained with logistic regression for binary classification ($y\in\{0,1\}$).

Compute $p(y=0\mid\mathbf x^{(t)})$ for $\mathbf x^{(t)}=[0,2,1]^\top$.`,
    a: r`$$p(y=0\mid\mathbf x)=1-\sigma(1)\approx0.269$$`,
    e: r`$f=0-2+2+1=1$ is the **log-odds** of class 1, so $p(y=1\mid\mathbf x)=\sigma(1)=\frac{1}{1+e^{-1}}\approx0.731$.

Therefore $p(y=0\mid\mathbf x)=1-0.731=0.269$.`,
    where: r`Lecture 3 · Logistic regression for binary classification: sigmoid and log-odds.`,
  },
  {
    week: 3,
    source: "Workshop 3 T1",
    marks: 3,
    q: r`$f(\mathbf x)=\mathbf w^\top\mathbf x+b$ with $\mathbf w=[3,\,2.5]^\top$, $b=0$, trained by logistic regression. What is the predicted probability of class 1 for $\mathbf x^{(t)}=[1,-1]^\top$?`,
    a: r`$$p(y=1\mid\mathbf x)=\sigma(0.5)\approx0.622$$`,
    e: r`$f=3(1)+2.5(-1)=0.5$. Then $\sigma(0.5)=\frac1{1+e^{-0.5}}=\frac{1}{1.6065}\approx0.622$.`,
    where: r`Lecture 3 · Logistic regression (sigmoid of the linear model).`,
  },
  {
    week: 3,
    source: "Workshop 3 T2",
    marks: 3,
    q: r`A linear classifier has $f(x_1,x_2)=x_1+2x_2$ with threshold $\hat y=1$ if $f\ge7$ else $0$.

What is the distance between its decision boundary and the point $[2,2]^\top$? (Distance from $(x_1^*,x_2^*)$ to $ax_1+bx_2+c=0$ is $\frac{|ax_1^*+bx_2^*+c|}{\sqrt{a^2+b^2}}$.)`,
    a: r`$$\frac{1}{\sqrt5}\approx0.447$$`,
    e: r`Boundary: $x_1+2x_2-7=0$. At $(2,2)$: $|2+4-7|/\sqrt{1^2+2^2}=1/\sqrt5$.`,
    where: r`Lecture 3 · Decision boundary of a linear classifier (distance to the boundary ∝ $f(\mathbf x)/\|\mathbf w\|$).`,
  },
  {
    week: 3,
    source: "Workshop 3 T3",
    marks: 3,
    q: r`From a geometric perspective, explain why shrinking the weight vector with L2 regularisation makes the predicted probabilities of a logistic regression classifier less extreme.`,
    a: r`The logit equals $\|\mathbf w\|\times$(signed distance to the boundary). Smaller $\|\mathbf w\|$ → logits closer to 0 → probabilities closer to 0.5, and the lines of constant probability (e.g. $p=0.9$) sit **further** from the decision boundary.`,
    e: r`$f(\mathbf x)=\mathbf w^\top\mathbf x+b=\|\mathbf w\|\,d(\mathbf x)$ where $d$ is the signed distance to the boundary. The boundary location depends on the *direction* of $\mathbf w$; scaling it down only flattens the sigmoid, widening the region of uncertainty.`,
    where: r`Lecture 3 · Logistic regression with regularisation. Workshop 3 A2–A3 (0.9-probability lines).`,
  },
  {
    week: 3,
    source: "Lecture 3 Q3 (adapted)",
    marks: 3,
    q: r`Two logistic regression models are trained on the same *linearly separable* dataset: Model A has larger $\|\mathbf w\|$ than Model B, with the same decision boundary. Which has the lower training log loss? What happens to $\|\mathbf w\|$ if there is no regularisation?`,
    a: r`Model A (larger $\|\mathbf w\|$) has the **lower** log loss. Without regularisation, $\|\mathbf w\|\to\infty$ as loss $\to0$.`,
    e: r`On separable data, scaling up $\mathbf w$ makes probabilities for the correct classes closer to 1, so log loss keeps decreasing. Regularisation stops $\|\mathbf w\|$ growing without bound.`,
    where: r`Lecture 3 · Logistic regression: log loss and regularisation.`,
  },
  {
    week: 3,
    source: "Mock B1c(ii)",
    marks: 2,
    q: r`What probabilistic quantity is maximised when minimising the log loss of a logistic regression classifier? What is the infimum of the log loss?`,
    a: r`It maximises the **(conditional) likelihood of the training labels** given the inputs, $\prod_n p(y^{(n)}\mid\mathbf x^{(n)})$. The infimum is **0**.`,
    e: r`Log loss is the negative log-likelihood averaged over the data. Each term $-\log p\ge0$, and it approaches 0 only as the probability of every correct label approaches 1 (never reached exactly, hence "infimum").`,
    where: r`Lecture 3 · Learning for logistic regression: the log loss.`,
  },
  {
    week: 3,
    source: "Mock B1c(i,iii)",
    marks: 2,
    q: r`A linear classifier $f(\mathbf x)=\mathbf w^\top\mathbf x+b$ is fit to data with 5 features (hour, latitude, longitude, full moon, witness count) minimising $L_{total}=L_{log}+\lambda|\mathbf w|$.

(i) How many elements does $\mathbf w$ have? (ii) What happens to $\mathbf w$ as $\lambda$ increases?`,
    a: r`(i) **5** — one weight per feature ($b$ is separate).
(ii) Weights shrink towards zero, with more becoming exactly **zero** (sparse). As $\lambda\to\infty$, $\mathbf w=\mathbf 0$.`,
    e: r`The penalty is L1 (lasso-style), which produces sparse solutions, so increasing $\lambda$ progressively removes features from the model.`,
    where: r`Lecture 3 (logistic regression with regularisation) and Lecture 2 (lasso / L1 sparsity).`,
  },
  {
    week: 3,
    source: "Practice",
    marks: 3,
    q: r`In multinomial logistic regression with $K=3$ classes, the logits are $f(\mathbf x)=[1,2,3]^\top$. Compute the class probabilities with softmax.`,
    a: r`$$\mathbf p\approx[0.090,\;0.245,\;0.665]^\top$$`,
    e: r`$e^1=2.718,\;e^2=7.389,\;e^3=20.086$; sum $=30.19$. Dividing gives $0.090,\,0.245,\,0.665$. Softmax makes the outputs positive and sum to 1.`,
    where: r`Lecture 3 · Softmax (slides 39–40).`,
  },
  {
    week: 3,
    source: "Practice",
    marks: 2,
    q: r`A multinomial logistic regression for MNIST maps a vectorised $28\times28$ image to 10 logits using $f(\mathbf x)=\mathbf W\mathbf x+\mathbf b$. How many parameters does it have?`,
    a: r`$$10\times784+10=7850$$`,
    e: r`$\mathbf x\in\mathbb R^{784}$ and $K=10$ classes, so $\mathbf W\in\mathbb R^{10\times784}$ and $\mathbf b\in\mathbb R^{10}$.`,
    where: r`Lecture 3 · Digit classification on MNIST (slides 41–42).`,
  },
];
