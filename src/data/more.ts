import type { Question } from "../questions";

const r = String.raw;
const S = "Exam-style";

export const more1: Question[] = [
  {
    week: 1,
    source: S,
    marks: 2,
    q: r`A dataset contains 500 RGB images, each $32\times32$ pixels. Each image is flattened into a vector. What is the shape of the dataset matrix $\mathbf X$?`,
    a: r`$$\mathbf X\in\mathbb R^{500\times3072}$$`,
    e: r`Each image has $3\times32\times32=3072$ numbers, so $D=3072$ and $N=500$. Rows are data points, columns are features.`,
    where: r`Lecture 1 · Image data (slides 34–35) and representing a dataset as an $N\times D$ matrix (slide 47).`,
  },
  {
    week: 1,
    source: S,
    marks: 2,
    q: r`Using the vocabulary [“I”, “like”, “sausage”, “hate”], write the bag-of-words vector for “I hate sausage sausage”.`,
    a: r`$$[1,\;0,\;2,\;1]^\top$$`,
    e: r`Count how many times each vocabulary word occurs: I = 1, like = 0, sausage = 2, hate = 1. Word order is discarded.`,
    where: r`Lecture 1 · Representing text as a histogram of word counts (slide 53).`,
  },
  {
    week: 1,
    source: S,
    marks: 5,
    q: r`Classify each variable as nominal, ordinal, interval or ratio (and say whether numerical ones are discrete or continuous):

(a) Postcode  (b) Star rating of a film (1–5)  (c) Temperature in Kelvin  (d) Calendar year of birth  (e) Height in cm`,
    a: r`(a) **Nominal**
(b) **Ordinal**
(c) **Ratio** (continuous)
(d) **Interval** (discrete)
(e) **Ratio** (continuous)`,
    e: r`Postcodes are labels with no order. Star ratings are ordered but the gaps aren't necessarily equal. Kelvin has a true zero. Year 0 is arbitrary so years are interval. Height has a true zero.`,
    where: r`Lecture 1 · Variable types (slides 41–44).`,
  },
  {
    week: 1,
    source: S,
    marks: 3,
    q: r`A feature has mean 50 and standard deviation 10 on the training set. What is the standardised value of $x=70$? After standardising the whole column, what are its mean and standard deviation?`,
    a: r`$z=\frac{70-50}{10}=2$. The standardised column has **mean 0 and standard deviation 1**.`,
    e: r`Standardising: $x_{new}=(x-\mu)/\sigma$ for each column.`,
    where: r`Lecture 1 · Standardising your data (slides 54–55).`,
  },
  {
    week: 1,
    source: S,
    marks: 3,
    q: r`The feature column $[4,\,?,\,8,\,6]$ has a missing value. Impute it with the mean. What is the imputed value, and give one reason you might prefer removing the data point instead.`,
    a: r`Mean of the observed values $=(4+8+6)/3=6$, so impute **6**. Removing avoids injecting an assumption (an invented value), at the cost of discarding other features/data of that point.`,
    e: r`Option 1 is to remove the affected data points, option 2 is to impute. Imputation keeps the data point but the value may be wrong, especially if many values are missing.`,
    where: r`Lecture 1 · Missing (or wrong) values (slide 49).`,
  },
];

export const more2: Question[] = [
  {
    week: 2,
    source: S,
    marks: 3,
    q: r`A linear model $f(x)=2x$ is evaluated on the training set $\{(1,3),(2,3)\}$. Compute the ridge loss $L_{ridge}=L_{SE}+\lambda w^2$ with $\lambda=0.1$.`,
    a: r`$$L_{ridge}=2+0.4=2.4$$`,
    e: r`Predictions: $2$ and $4$. Residuals: $3-2=1$ and $3-4=-1$, so $L_{SE}=1+1=2$. Penalty: $0.1\times2^2=0.4$.`,
    where: r`Lecture 2 · Ridge regression (Q2 in the lecture).`,
  },
  {
    week: 2,
    source: S,
    marks: 4,
    q: r`A regression model predicts $[1.5,\,2,\,2.5]$ for targets $[1,\,2,\,3]$. Compute the MSE and $R^2$.`,
    a: r`MSE $=\frac{0.5}{3}\approx0.167$; $R^2=0.75$.`,
    e: r`Squared errors: $0.25,0,0.25$ → sum $0.5$. Target mean $=2$; total sum of squares $=1+0+1=2$. $R^2=1-\frac{0.5}{2}=0.75$.`,
    where: r`Lecture 5 · Evaluating regression models ($R^2$ and MSE, slide 43); used in Lecture 2/Workshop 2.`,
  },
  {
    week: 2,
    source: S,
    marks: 4,
    q: r`Minimise $L(w)=(w-3)^2$ with gradient descent from $w_0=0$.

(a) With $\alpha=0.25$, what is $w$ after two steps? (b) What happens with $\alpha=1.5$?`,
    a: r`(a) $w_2=2.25$.
(b) It **diverges**: $w_1=9$, further from the minimum at 3 than before.`,
    e: r`$\nabla L=2(w-3)$. (a) $w_1=0-0.25(-6)=1.5$; $w_2=1.5-0.25(-3)=2.25$.
(b) $w_1=0-1.5(-6)=9$; then $\nabla L=12$ and $w_2=9-18=-9$: it overshoots by more each step. The learning rate must be small enough.`,
    where: r`Lecture 2 · Gradient descent algorithm (slide 53); $\alpha$ is a hyperparameter.`,
  },
  {
    week: 2,
    source: S,
    marks: 4,
    q: r`In ridge regression, describe how the training error and validation error change as $\lambda$ increases from very small to very large. How should you pick $\lambda$?`,
    a: r`**Training error** increases steadily (less flexibility). **Validation error** is U-shaped: high at tiny $\lambda$ (overfitting), lowest at some intermediate $\lambda$, high again at large $\lambda$ (underfitting, $\mathbf w\to0$). Choose the $\lambda$ with the lowest validation error.`,
    e: r`The test set is kept aside to estimate final performance once.`,
    where: r`Lecture 2 · Regularisation and model selection with a validation set; Workshop 2 A3.`,
  },
  {
    week: 2,
    source: S,
    marks: 3,
    q: r`Is the model $f(x)=w_0+w_1x+w_2x^2$ a linear model? Explain.`,
    a: r`**Yes**: it is linear in the **weights** ($f=\mathbf w^\top\phi(x)$ with $\phi(x)=[1,x,x^2]^\top$), although non-linear in $x$.`,
    e: r`Because it is linear in $\mathbf w$, squared error stays convex and can be minimised with the same linear-regression machinery. Feature transformations $\phi$ give non-linear fits.`,
    where: r`Lecture 2 · Linear regression with basis functions / polynomial features; Workshop 2 A1.`,
  },
];

export const more3: Question[] = [
  {
    week: 3,
    source: S,
    marks: 4,
    q: r`A logistic regression model has $f(\mathbf x)=2x_1-x_2+1$.

(a) What is $p(y{=}1|\mathbf x)$ for $\mathbf x=[1,3]^\top$? (b) For $\mathbf x=[2,1]^\top$, what is the probability of class 1 and the distance to the decision boundary?`,
    a: r`(a) $f=0$, so $p=\sigma(0)=0.5$ (the point is on the boundary).
(b) $f=4$, so $p=\sigma(4)\approx0.982$; distance $=\frac{|f|}{\|\mathbf w\|}=\frac{4}{\sqrt5}\approx1.79$.`,
    e: r`The boundary is $f(\mathbf x)=0$ (probability 0.5). $\|\mathbf w\|=\sqrt{2^2+(-1)^2}=\sqrt5$.`,
    where: r`Lecture 3 · Logistic regression and the decision boundary.`,
  },
  {
    week: 3,
    source: S,
    marks: 3,
    q: r`A logistic regression model assigns $p(y{=}1|\mathbf x)=0.8$ to a point with $y=1$ and $p(y{=}1|\mathbf x)=0.3$ to a point with $y=0$. Compute the average log loss over these two points.`,
    a: r`$$L_{log}=\frac{-\ln0.8-\ln0.7}{2}\approx0.290$$`,
    e: r`Point 1: $-\ln0.8=0.223$. Point 2 has $y=0$ so the probability of the true class is $1-0.3=0.7$: $-\ln0.7=0.357$. Average $=0.580/2$.`,
    where: r`Lecture 3 · Learning for logistic regression: log loss.`,
  },
  {
    week: 3,
    source: S,
    marks: 3,
    q: r`A 3-class multinomial logistic regression outputs logits $[3,1,1]^\top$. Compute the class probabilities and the predicted class.`,
    a: r`$\mathbf p\approx[0.787,\;0.106,\;0.106]^\top$; predicted class **0**.`,
    e: r`$e^3=20.09$, $e^1=2.718$ (twice); sum $=25.52$. The prediction is $\arg\max_k f(\mathbf x)$, the same as the most probable class.`,
    where: r`Lecture 3 · Softmax (slides 39–40) and MNIST prediction rule (slide 42).`,
  },
  {
    week: 3,
    source: S,
    marks: 3,
    q: r`Why is it a bad idea to classify by fitting linear regression directly to 0/1 labels? What does logistic regression do instead?`,
    a: r`Linear regression outputs unbounded values (not probabilities) and squared error isn't a good fit for class labels. Logistic regression passes the linear output $f(\mathbf x)$ (the log-odds) through a **sigmoid** to give a probability in $(0,1)$ and minimises the **log loss**.`,
    e: r`Equivalently, it models $\log\frac{p(y=1|\mathbf x)}{p(y=0|\mathbf x)}=\mathbf w^\top\mathbf x+b$.`,
    where: r`Lecture 3 · Linear classifiers → logistic regression for binary classification.`,
  },
  {
    week: 3,
    source: S,
    marks: 3,
    q: r`For a 3-class problem, softmax probabilities are $\mathbf p=[0.2,0.5,0.3]^\top$ and the true class is 1 (zero-indexed). Write the one-hot label $\mathbf y$ and the gradient of the log loss with respect to the logits.`,
    a: r`$\mathbf y=[0,1,0]^\top$; gradient $=\mathbf p-\mathbf y=[0.2,\,-0.5,\,0.3]^\top$.`,
    e: r`For softmax + log loss the gradient w.r.t. the logits is $\mathbf p-\mathbf y$. The negative entry (for the true class) means gradient descent increases that logit; the others are decreased.`,
    where: r`Lecture 3 · Learning for multinomial logistic regression (slide 41).`,
  },
];

export const more4: Question[] = [
  {
    week: 4,
    source: S,
    marks: 4,
    q: r`A standardised 2D dataset has covariance matrix $\mathbf\Sigma=\begin{bmatrix}1&0.8\\0.8&1\end{bmatrix}$ with eigenvalues $1.8$ and $0.2$. What is the first principal component, and what fraction of the variance does it explain?`,
    a: r`First PC $\propto[1,1]^\top/\sqrt2$ (eigenvector of the largest eigenvalue 1.8). It explains $1.8/2=90\%$.`,
    e: r`$\mathbf\Sigma[1,1]^\top=[1.8,1.8]^\top=1.8[1,1]^\top$. Total variance $=1.8+0.2=2$ (the trace).`,
    where: r`Lecture 4 · PCA: eigen-decomposition of the covariance matrix.`,
  },
  {
    week: 4,
    source: S,
    marks: 3,
    q: r`Compute the mean, median and (population) standard deviation of $[2,4,4,4,5,5,7,9]$.`,
    a: r`Mean $=5$, median $=4.5$, standard deviation $=2$.`,
    e: r`Sum $=40$, mean $=5$. Squared deviations: $9,1,1,1,0,0,4,16$ → sum $32$, variance $=32/8=4$, so $\sigma=2$. The median is the average of the 4th and 5th sorted values: $(4+5)/2$.`,
    where: r`Lecture 4 · Summary statistics.`,
  },
  {
    week: 4,
    source: S,
    marks: 3,
    q: r`What information does a box plot show? Why is it useful for comparing a feature across categories (e.g. Pokémon type)?`,
    a: r`A box plot shows the **median**, the **quartiles** (box = interquartile range), **whiskers** for the spread of non-outlying data, and individual **outliers**. Side-by-side boxes allow comparing the centre and spread of a variable across groups.`,
    e: r`It summarises a distribution compactly without assuming a shape and highlights outliers.`,
    where: r`Lecture 4 · Visualising distributions; Workshop 4 B1.`,
  },
  {
    week: 4,
    source: S,
    marks: 4,
    q: r`Describe the steps of PCA to reduce a dataset $\mathbf X\in\mathbb R^{N\times D}$ to $d$ dimensions.`,
    a: r`1. **Standardise** $\mathbf X$.
2. Compute the covariance matrix $\mathbf\Sigma=\frac1N\mathbf X^\top\mathbf X$.
3. **Eigen-decompose** $\mathbf\Sigma$.
4. Keep the $d$ eigenvectors with the **largest eigenvalues** as the columns of $\mathbf W\in\mathbb R^{D\times d}$.
5. Project: $\mathbf Z=\mathbf X\mathbf W\in\mathbb R^{N\times d}$.`,
    e: r`Each eigenvalue is the variance along its principal component; the fraction explained is $\sum_{i\le d}\lambda_i/\sum_i\lambda_i$.`,
    where: r`Lecture 4 · PCA and dimensionality reduction through a linear transformation.`,
  },
  {
    week: 4,
    source: S,
    marks: 3,
    q: r`Give two differences between PCA and t-SNE. Can you trust distances between clusters in a t-SNE plot?`,
    a: r`PCA is **linear**, deterministic and gives a mapping that can be applied to new data; t-SNE is **non-linear** and directly learns embeddings for the given points by gradient descent on a KL divergence. In t-SNE, between-cluster distances and cluster sizes should **not** be over-interpreted; it preserves local neighbourhoods.`,
    e: r`t-SNE's heavy-tailed Student-t distribution in the embedding space spreads points apart, so global geometry is distorted.`,
    where: r`Lecture 4 · t-SNE (slides 49–54) and PCA vs t-SNE on MNIST.`,
  },
];

export const more5: Question[] = [
  {
    week: 5,
    source: S,
    marks: 4,
    q: r`A classifier gives TP = 40, FN = 10, FP = 20, TN = 130. Compute the accuracy, precision, recall and false positive rate.`,
    a: r`Accuracy $=170/200=0.85$; precision $=40/60\approx0.667$; recall $=40/50=0.8$; FPR $=20/150\approx0.133$.`,
    e: r`Precision $=\frac{TP}{TP+FP}$, recall (TPR) $=\frac{TP}{TP+FN}$, FPR $=\frac{FP}{FP+TN}$. ROC curves plot TPR against FPR.`,
    where: r`Lecture 5 · Evaluating classifiers: accuracy, precision, recall, ROC and PR curves.`,
  },
  {
    week: 5,
    source: S,
    marks: 4,
    q: r`A classifier scores positives as $\{0.9,0.6\}$ and negatives as $\{0.7,0.2,0.1\}$. Compute the AUC.`,
    a: r`$$\text{AUC}=\frac56\approx0.833$$`,
    e: r`AUC is the fraction of (positive, negative) pairs where the positive is ranked higher. 6 pairs: 0.9 beats all three negatives (3); 0.6 beats 0.2 and 0.1 but not 0.7 (2). Total $5/6$.`,
    where: r`Lecture 5 · ROC curves and AUC; lecture Q2.`,
  },
  {
    week: 5,
    source: S,
    marks: 3,
    q: r`A student standardises the whole dataset with **StandardScaler** and then runs 5-fold cross-validation. What is wrong, and how do you fix it?`,
    a: r`**Data leakage**: the scaler's mean/std were computed using the validation folds, so information leaks into training and scores are optimistic. Fix: put the scaler in a **Pipeline** so it is fit only on the training portion of each fold.`,
    e: r`All preprocessing that learns from data (scaling, PCA, imputation) must be fit on training data only.`,
    where: r`Lecture 5 / Workshop 5 A1–A3: pipelines and cross-validation.`,
  },
  {
    week: 5,
    source: S,
    marks: 3,
    q: r`3-fold cross-validation gives accuracies $0.80,0.85,0.90$. Report the mean and standard deviation, and say how you would use them.`,
    a: r`Mean $=0.85$, standard deviation $\approx0.041$ (population). The mean estimates generalisation performance; the spread shows how stable it is, so compare models only if the difference in means is large relative to the spread.`,
    e: r`Deviations are $-0.05,0,+0.05$: variance $=0.005/3$.`,
    where: r`Lecture 5 · Model selection with cross-validation.`,
  },
  {
    week: 5,
    source: S,
    marks: 4,
    q: r`A classifier gives class probabilities from the softmax of logits $[1,2,3]$, i.e. $\mathbf p\approx[0.090,0.245,0.665]$. Actions $a\in\{0,1\}$ have losses (rows = action, columns = true class 0, 1, 2): $L(a{=}0)=[0,1,5]$, $L(a{=}1)=[2,0,1]$. Which action is optimal?`,
    a: r`$R(a{=}0)\approx3.57$, $R(a{=}1)\approx0.85$ → choose **$a=1$**.`,
    e: r`$R(a{=}i|\mathbf x)=\sum_jL(a{=}i|y{=}j)p(y{=}j|\mathbf x)$.
$R(0)=0(0.090)+1(0.245)+5(0.665)=3.57$. $R(1)=2(0.090)+0+1(0.665)=0.85$. Take the action with least risk.`,
    where: r`Lecture 5 · Bayesian decision theory (slides 45–46), lecture Q3.`,
  },
];

export const more6: Question[] = [
  {
    week: 6,
    source: S,
    marks: 5,
    q: r`A bank wants to use an ML model to approve or reject loan applications. State one ethical concern for each of Floridi and Cowls' five principles.`,
    a: r`- **Beneficence:** benefits the bank but may not serve customers' well-being.
- **Non-maleficence:** wrongful rejections harm people; sensitive data may be misused.
- **Autonomy:** applicants have little control or recourse over an automated decision.
- **Justice:** past lending data may encode discrimination against groups/areas.
- **Explicability:** applicants can't be told why they were rejected; accountability is unclear.`,
    e: r`Always give a concrete, scenario-specific concern for each principle.`,
    where: r`Lecture 6 · Floridi & Cowls ethical framework.`,
  },
  {
    week: 6,
    source: S,
    marks: 4,
    q: r`Give three ways a model can end up biased even if the learning algorithm itself is neutral.`,
    a: r`1. **Unrepresentative data:** some groups under-represented (e.g. PULSE and white faces).
2. **Historical bias:** labels encode past discrimination (e.g. recruitment, A-levels 2020).
3. **Poor labels / proxies:** the target measures something subjective or a proxy for it.
(Also feedback loops, where model outputs change future data.)`,
    e: r`A model learns the patterns in its data, including unfair ones.`,
    where: r`Lecture 6 · Data bias and example applications (slides 25–28).`,
  },
  {
    week: 6,
    source: S,
    marks: 5,
    q: r`A university wants to group students according to patterns in their use of the virtual learning environment. List possible features, say whether it's supervised or unsupervised, give one concern, and say whether it's appropriate.`,
    a: r`**Features:** logins per week, time on page, resources viewed, forum posts. **Output:** group/cluster membership.
**Type:** **unsupervised** (clustering); there are no labels.
**Concern:** privacy/surveillance; groups may be labelled as "good" or "bad" students unfairly.
**Appropriate?** Reasonable for aggregate insight with consent and transparency; not for automatic decisions about individuals.`,
    e: r`Clusters may not be meaningful, so they should be interpreted cautiously.`,
    where: r`Workshop 6 A3 and Lecture 4 (clustering).`,
  },
  {
    week: 6,
    source: S,
    marks: 5,
    q: r`A hospital wants to predict how long a patient will stay after surgery. List inputs/outputs, say what type of ML problem this is, and give one concern.`,
    a: r`**Inputs:** age, type of surgery, vital signs, history. **Output:** length of stay (days).
**Type:** supervised **regression**.
**Concern:** bias against groups (e.g. under-served patients), privacy of health data, or reducing a patient's care to save beds.
Appropriate with clinician oversight.`,
    e: r`The output is a continuous number, so it's regression (not classification).`,
    where: r`Workshop 6 A2.`,
  },
  {
    week: 6,
    source: S,
    marks: 3,
    q: r`Give three societal risks of deploying generative models (e.g. image generators and LLMs).`,
    a: r`E.g. **deepfakes**/misinformation and non-consensual imagery; **plagiarism** and de-skilling/over-reliance (cognitive decline); **privacy** and copyright of training data; bias towards high-resource languages; large **energy** use (climate impact).`,
    e: r`Link each risk to a principle (e.g. deepfakes → non-maleficence, language bias → justice).`,
    where: r`Lecture 6 · Deepfakes, plagiarism, cognitive decline, climate crisis (slides 29–40).`,
  },
];

export const more7: Question[] = [
  {
    week: 7,
    source: S,
    marks: 3,
    q: r`A node contains 30 samples of class A and 10 of class B. Compute its Gini impurity. What would the impurity decrease be if a split separated the classes perfectly?`,
    a: r`$G=1-0.75^2-0.25^2=0.375$. A perfect split gives pure children ($G=0$), so the decrease is **0.375**.`,
    e: r`Gini impurity $G=1-\sum_kp_k^2$, with $p_A=0.75$ and $p_B=0.25$.`,
    where: r`Lecture 7 · Gini impurity and CART splitting.`,
  },
  {
    week: 7,
    source: S,
    marks: 4,
    q: r`A parent node has 20 samples of each of two classes (Gini 0.5). A split gives a left child with $[15,5]$ and a right child with $[5,15]$. Compute the weighted child impurity and the impurity decrease.`,
    a: r`Each child has $G=0.375$; weighted impurity $=0.375$; decrease $=0.5-0.375=0.125$.`,
    e: r`$G=1-(0.75^2+0.25^2)=0.375$ for both children. Each has 20 of the 40 samples, so the weights are 0.5 each. CART picks the split with the largest decrease.`,
    where: r`Lecture 7 · Fitting trees with CART.`,
  },
  {
    week: 7,
    source: S,
    marks: 3,
    q: r`A regression-tree leaf contains training targets $[2,4,6]$. What does it predict, and what is its mean squared error?`,
    a: r`Prediction $=4$ (the mean); MSE $=\frac{4+0+4}{3}=\frac83\approx2.67$.`,
    e: r`For regression trees a leaf predicts the average target, and the split criterion is variance/MSE reduction instead of Gini.`,
    where: r`Lecture 7 · Regression trees.`,
  },
  {
    week: 7,
    source: S,
    marks: 4,
    q: r`Why does a random forest typically generalise better than a single deep decision tree? What does feature subsampling add?`,
    a: r`A deep tree has **high variance** (it overfits). Averaging many trees trained on different bootstrap samples **reduces variance**. Randomly subsampling features at each split **decorrelates** the trees, so averaging helps more.`,
    e: r`Averaging $M$ models with correlation $\rho$ reduces variance more when $\rho$ is small.`,
    where: r`Lecture 7 · Bagging to create ensembles.`,
  },
  {
    week: 7,
    source: S,
    marks: 4,
    q: r`In gradient boosting with squared loss $L=\tfrac12(y-f)^2$, the current predictions are $f=[3,5]$ for targets $y=[4,4]$. What target does the next tree fit? If it fits these perfectly and the step size is $\alpha=0.5$, what are the new predictions?`,
    a: r`Target = negative gradient $=y-f=[1,-1]$. New predictions $=[3,5]+0.5[1,-1]=[3.5,\,4.5]$.`,
    e: r`$\nabla_fL=f-y$, so the negative gradient is the residual. Update $f_t=f_{t-1}+\alpha F_t$.`,
    where: r`Lecture 7 · Gradient tree boosting algorithm (slides 38–40).`,
  },
];

export const more8: Question[] = [
  {
    week: 8,
    source: S,
    marks: 3,
    q: r`A GP has kernel $k(x,x')=2\exp\!\big(-\tfrac{(x-x')^2}{8}\big)$. Compute $\text{Var}[f(1)]$, $\text{Cov}[f(1),f(3)]$ and the correlation between $f(1)$ and $f(3)$.`,
    a: r`$\text{Var}=2$; $\text{Cov}=2e^{-0.5}\approx1.21$; correlation $=e^{-0.5}\approx0.607$.`,
    e: r`Here $2\ell^2=8$, so $\ell=2$. $k(1,1)=2$, $k(1,3)=2e^{-4/8}=2e^{-0.5}$. Correlation $=\text{Cov}/\sqrt{2\cdot2}$.`,
    where: r`Lecture 8 · Kernel functions define the covariance of function values.`,
  },
  {
    week: 8,
    source: S,
    marks: 5,
    q: r`Prior $f\sim GP\big(0,\exp(-\tfrac{(x-x')^2}{2})\big)$. You observe a single noise-free point $f(0)=2$. Find the posterior mean and variance at $x_*=1$.`,
    a: r`Mean $=2e^{-0.5}\approx1.21$; variance $=1-e^{-1}\approx0.632$.`,
    e: r`With one training point $K=k(0,0)=1$ and $k_*=k(1,0)=e^{-0.5}$. Mean $=k_*K^{-1}y=2e^{-0.5}$. Variance $=k(1,1)-k_*K^{-1}k_*=1-e^{-1}$.`,
    where: r`Lecture 8 · Conditioning a GP on training data.`,
  },
  {
    week: 8,
    source: S,
    marks: 3,
    q: r`What is the effect of the RBF kernel's length scale $\ell$ and its amplitude $\sigma^2$ on a GP's sample functions?`,
    a: r`**Large $\ell$:** smooth, slowly varying functions; **small $\ell$:** wiggly functions that vary quickly. **Larger $\sigma^2$:** larger vertical variation (greater prior variance).`,
    e: r`In the CO$_2$ example, a tiny $\ell$ ($10^{-5}$) "broke" the fit, whereas a suitable $\ell$ captured the trend. Hyperparameters can be optimised by maximising the marginal likelihood.`,
    where: r`Lecture 8 · Kernel hyperparameters (slides 37–40).`,
  },
  {
    week: 8,
    source: S,
    marks: 3,
    q: r`For a zero-mean GP with an RBF kernel, what are the posterior mean and variance at a test input $x_*$ very far from all training inputs?`,
    a: r`Mean $\to0$ (the prior mean) and variance $\to k(x_*,x_*)$ (the prior variance).`,
    e: r`Far-away points are uncorrelated with the training data under the RBF kernel, so observations tell us nothing and the GP reverts to its prior. Uncertainty grows away from the data.`,
    where: r`Lecture 8 · GP posterior and uncertainty (confidence intervals).`,
  },
  {
    week: 8,
    source: S,
    marks: 3,
    q: r`Why is fitting a GP expensive for large datasets? How are kernel hyperparameters chosen?`,
    a: r`It requires inverting an $N\times N$ matrix: $O(N^3)$ time and $O(N^2)$ memory. Hyperparameters are chosen by **maximising the marginal likelihood** of the training data.`,
    e: r`This is why GPs shine in the low-data setting but not with millions of points.`,
    where: r`Lecture 8 · Pros and cons of Gaussian processes (slide 41).`,
  },
];

export const more9: Question[] = [
  {
    week: 9,
    source: S,
    marks: 4,
    q: r`A network has one hidden ReLU layer: $\mathbf h=\text{ReLU}(\mathbf W\mathbf x+\mathbf b)$, $f=\mathbf v^\top\mathbf h+c$, with
$$\mathbf W=\begin{bmatrix}1&-1\\2&0\end{bmatrix},\;\mathbf b=\begin{bmatrix}0\\-1\end{bmatrix},\;\mathbf v=\begin{bmatrix}1\\-1\end{bmatrix},\;c=0.5.$$
Compute $f$ for $\mathbf x=[2,1]^\top$.`,
    a: r`$$f=-1.5$$`,
    e: r`$\mathbf W\mathbf x=[1,4]^\top$, plus $\mathbf b$: $[1,3]^\top$. ReLU leaves it unchanged: $\mathbf h=[1,3]^\top$. $f=1-3+0.5=-1.5$.`,
    where: r`Lecture 9 · MLP forward pass.`,
  },
  {
    week: 9,
    source: S,
    marks: 3,
    q: r`Why must an MLP use non-linear activation functions between layers?`,
    a: r`Without them, stacked linear layers collapse into a single linear map ($\mathbf W^{(2)}\mathbf W^{(1)}\mathbf x=\mathbf W'\mathbf x$), so the network could only represent linear functions. Non-linearities let it learn complex functions and features.`,
    e: r`Combining ReLUs yields piecewise-linear functions of arbitrary complexity as width/depth grow.`,
    where: r`Lecture 9 · Learning features / the MLP architecture.`,
  },
  {
    week: 9,
    source: S,
    marks: 3,
    q: r`A network outputs logits $[2,0,0]$ for a data point whose true class is 0. Compute the softmax probability of the true class and the log loss.`,
    a: r`$p_0=\frac{e^2}{e^2+2}\approx0.787$; log loss $=-\ln0.787\approx0.240$.`,
    e: r`$e^2=7.389$; denominator $=9.389$. For one-hot $\mathbf y$, $L=-\mathbf y^\top\log\mathbf p=-\log p_{\text{true class}}$.`,
    where: r`Lecture 9 · Softmax and log loss for training MLP classifiers; Workshop 9 Part A.`,
  },
  {
    week: 9,
    source: S,
    marks: 2,
    q: r`A training set has 10,000 examples. You train with mini-batch SGD with batch size 100 for 5 epochs. How many parameter updates are performed?`,
    a: r`$\frac{10000}{100}\times5=500$ updates.`,
    e: r`One epoch is one pass through the data = 100 mini-batches, with one gradient step per mini-batch.`,
    where: r`Lecture 9 · Training an MLP with backpropagation + SGD.`,
  },
  {
    week: 9,
    source: S,
    marks: 4,
    q: r`What is dropout? How does it reduce overfitting, and what happens at test time?`,
    a: r`During training each hidden neuron is randomly switched off (typically with probability 50%) for each forward/backward pass. This prevents co-adaptation and is like cheaply training an **ensemble of sub-networks**. At **test time** all neurons are used (with activations scaled to account for dropout).`,
    e: r`Other regularisers: early stopping and weight decay.`,
    where: r`Lecture 9 · Regularising DNNs: dropout (slide 39).`,
  },
];

export const more10: Question[] = [
  {
    week: 10,
    source: S,
    marks: 4,
    q: r`A conv layer takes a $28\times28$ grayscale image with 8 filters of size $3\times3$, padding 1, stride 1. What is the output shape and number of parameters (with biases)?`,
    a: r`Output $8\times28\times28$; parameters $8\times(3\cdot3\cdot1+1)=80$.`,
    e: r`Output size $=\frac{28+2(1)-3}{1}+1=28$. Padding of 1 with a $3\times3$ kernel preserves the spatial size.`,
    where: r`Lecture 10 · Convolutional layers: padding, stride, parameter count.`,
  },
  {
    week: 10,
    source: S,
    marks: 3,
    q: r`A $32\times32$ input goes through a conv layer with $4\times4$ kernels, stride 2, no padding. What is the output spatial size?`,
    a: r`$\lfloor(32-4)/2\rfloor+1=15$, so $15\times15$.`,
    e: r`Output size $=\lfloor\frac{H+2P-K}{S}\rfloor+1$.`,
    where: r`Lecture 10 · Convolution arithmetic (stride).`,
  },
  {
    week: 10,
    source: S,
    marks: 3,
    q: r`A $2\times2$ max-pooling layer with stride 2 is applied to a $16\times28\times28$ feature map. What is the output shape and how many trainable parameters does the layer have?`,
    a: r`Output $16\times14\times14$; **0** trainable parameters.`,
    e: r`Pooling takes the maximum in each window; it has no weights. It reduces spatial size and adds a little translation invariance.`,
    where: r`Lecture 10 · Conv nets: pooling layers (e.g. AlexNet architecture).`,
  },
  {
    week: 10,
    source: S,
    marks: 4,
    q: r`Compare the parameters needed to connect a $224\times224$ RGB image to 1000 hidden units with a fully connected layer versus a conv layer with 64 filters of size $3\times3$ (with biases). Why do convolutions suit images?`,
    a: r`Fully connected: $224\cdot224\cdot3\cdot1000+1000=150{,}529{,}000$. Conv: $64\times(3\cdot3\cdot3+1)=1792$.
Convolutions use **weight sharing** and **local connectivity**, so far fewer parameters, and are translation equivariant.`,
    e: r`$224\times224\times3=150{,}528$ inputs, each connected to 1000 units.`,
    where: r`Lecture 10 · Convolutional layers vs fully connected layers.`,
  },
  {
    week: 10,
    source: S,
    marks: 4,
    q: r`When would you use a pre-trained network as a fixed feature extractor versus fine-tuning it?`,
    a: r`**Feature extractor** (train just a new classifier on $\phi(\mathbf x)$): small dataset, similar to the pre-training domain, little compute.
**Fine-tuning** (continue training, low learning rate, new head): more data and/or **domain shift**, where the features need adapting.`,
    e: r`Fine-tuning is still usually cheaper than training from scratch.`,
    where: r`Lecture 10 · Pre-trained networks, domain shift, fine-tuning (slides 39–43).`,
  },
];
