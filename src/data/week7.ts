import type { Question } from "../questions";

const r = String.raw;

export const week7: Question[] = [
  {
    week: 7,
    source: "Workshop 7 T1 / Mock A1c",
    marks: 4,
    q: r`Consider this classification tree (3 classes, inputs $x_1,x_2,x_3$):

- **Root:** $x_1\le-0.923$? (samples 200, value [66, 67, 67])
  - **True →** node: $x_2\le1.948$? (value [0, 3, 47])
    - True → leaf, value [0, 0, 43]
    - False → leaf, value [0, 3, 4]
  - **False →** node: $x_3\le-0.306$? (value [66, 64, 20])
    - True → leaf, value [7, 48, 19] (74 samples)
    - False → leaf, value [59, 16, 1] (76 samples)

Predict $p(y=0\mid\mathbf x)$ for $\mathbf x=[-0.8,\,-0.4,\,1.1]^\top$.`,
    a: r`$$p(y=0\mid\mathbf x)=\frac{59}{76}\approx0.776$$`,
    e: r`$x_1=-0.8>-0.923$ → **False** (right). Then $x_3=1.1>-0.306$ → **False** (right) → leaf with value $[59,16,1]$.

The predicted class probabilities are the class proportions in that leaf: $59/(59+16+1)=59/76$.`,
    where: r`Lecture 7 · Classification trees: prediction from leaf class proportions. (Workshop 7 Figure T1 = Mock Figure A1c.)`,
  },
  {
    week: 7,
    source: "Workshop 7 T2 / Lecture 7 Q2",
    marks: 3,
    q: r`Compute the Gini impurity for the leaf with value $[7,48,19]$ (74 samples).`,
    a: r`$$G=1-\Big(\tfrac7{74}\Big)^2-\Big(\tfrac{48}{74}\Big)^2-\Big(\tfrac{19}{74}\Big)^2\approx0.504$$`,
    e: r`$G=1-\sum_k p_k^2$ with $p=[0.0946,\,0.6486,\,0.2568]$: $1-(0.0089+0.4207+0.0659)=1-0.4956=0.504$. A pure leaf has $G=0$; for 3 balanced classes $G=2/3$.`,
    where: r`Lecture 7 · Gini impurity as a measure of node purity in CART.`,
  },
  {
    week: 7,
    source: "Workshop 7 T3",
    marks: 4,
    q: r`Describe how the CART algorithm grows a classification tree from training data.`,
    a: r`Start with all data at the root. At each node, **greedily** search every feature and threshold, pick the split that gives the largest reduction in impurity (e.g. Gini, weighted by child sizes). Recurse on each child until a stopping condition (max depth, min samples, pure node). Each leaf predicts the class proportions of its training points.`,
    e: r`CART is greedy (best split now, no look-ahead), so the tree isn't globally optimal. Without stopping criteria, trees overfit by growing until leaves are pure. For regression the leaf predicts the mean and impurity is MSE/variance.`,
    where: r`Lecture 7 · Fitting trees with the CART algorithm; trees can overfit.`,
  },
  {
    week: 7,
    source: "Lecture 7 Q3",
    marks: 3,
    q: r`Why does bootstrap sampling leave about 36.8% of training points out-of-bag?`,
    a: r`Each of the $N$ draws (with replacement) misses a given point with prob. $1-\frac1N$. After $N$ draws: $$\Big(1-\frac1N\Big)^N\xrightarrow{N\to\infty}e^{-1}\approx0.368$$`,
    e: r`So each bootstrap sample contains about 63.2% of the unique training points; the left-out ones can be used to evaluate the tree (out-of-bag error).`,
    where: r`Lecture 7 · Bagging: bootstrap sampling to create an ensemble.`,
  },
  {
    week: 7,
    source: "Mock B2b",
    marks: 3,
    q: r`For **DecisionTreeClassifier(max_depth=5, criterion='gini', random_state=0)**, explain the role of each keyword argument.`,
    a: r`- **max_depth=5:** limits tree depth — controls complexity and reduces overfitting.
- **criterion='gini':** impurity measure used to choose splits.
- **random_state=0:** fixes the random seed (e.g. tie-breaking between equally good splits) for reproducibility.`,
    e: r`Deeper trees fit training data better but overfit; pick **max_depth** by cross-validation (Workshop 7 B3).`,
    where: r`Lecture 7 · Decision trees; Workshop 7 B2–B3 (varying max_depth).`,
  },
  {
    week: 7,
    source: "Practice",
    marks: 3,
    q: r`Do tree-based models need standardised features? Why or why not?`,
    a: r`**No.** Each split compares a single feature to a threshold, so monotonic rescaling doesn't change which splits are possible/best.`,
    e: r`This contrasts with linear models, k-NN and neural networks, which are scale-sensitive.`,
    where: r`Workshop 7 B1 and Lecture 7 · Decision trees.`,
  },
  {
    week: 7,
    source: "Practice",
    marks: 4,
    q: r`Explain the difference between bagging (random forests) and gradient boosting.`,
    a: r`**Bagging:** train many trees independently on bootstrap samples (random forests also subsample features) and average/vote → reduces variance.
**Gradient boosting:** build trees **sequentially**, each fit to the **negative gradient** of the loss at the current ensemble, and add it with step size $\alpha$: $f_t=f_{t-1}+\alpha F_t$.`,
    e: r`For squared error, the negative gradient is the residual $y-f(x)$, so each new tree corrects the previous errors. XGBoost is gradient tree boosting plus a bag of tricks.`,
    where: r`Lecture 7 · Bagging and gradient tree boosting (slides 38–42).`,
  },
];
