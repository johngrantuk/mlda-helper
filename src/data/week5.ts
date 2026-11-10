import type { Question } from "../questions";

const r = String.raw;

export const week5: Question[] = [
  {
    week: 5,
    source: "Mock B1a",
    marks: 3,
    q: r`Jeremy splits his dataset into training, validation, and test sets. What is the purpose of each?`,
    a: r`- **Training:** fit the model's parameters (weights).
- **Validation:** choose hyperparameters / compare models (model selection).
- **Test:** a final, unbiased estimate of performance on unseen data, used once.`,
    e: r`The test set must not influence any choice, otherwise it is no longer an honest estimate of generalisation.`,
    where: r`Lecture 5 · Training, validation and test splits; model selection.`,
  },
  {
    week: 5,
    source: "Mock B1d(i–iii)",
    marks: 3,
    q: r`A werewolf dataset has 200 positives and 1800 negatives. Linear classifiers with L1 penalty $\lambda$ are fitted:

| $\lambda$ | Train AUC | Val AUC | Non-zero weights |
|---|---|---|---|
| 0.00 | 0.92 | 0.58 | 1.0 |
| 0.01 | 0.90 | 0.62 | 1.0 |
| 0.03 | 0.87 | 0.67 | 0.8 |
| 0.10 | 0.81 | 0.71 | 0.6 |
| 0.30 | 0.74 | 0.70 | 0.4 |
| 1.00 | 0.63 | 0.66 | 0.2 |
| 3.00 | 0.52 | 0.60 | 0.2 |

(i) Why record AUC rather than accuracy? (ii) Which classifier generalises best? (iii) Jeremy picks $\lambda=1$: suggest one advantage.`,
    a: r`(i) Classes are imbalanced (10% positive) — accuracy is misleading (always predicting "not werewolf" gives 90%); AUC is threshold-independent and robust to imbalance.
(ii) $\lambda=0.1$ (highest validation AUC, 0.71).
(iii) Sparser (only 20% of weights non-zero) → simpler, more interpretable, cheaper; also a smaller train/val gap (less overfit).`,
    e: r`Model selection uses **validation** performance, not training performance (training AUC just keeps rising as $\lambda\to0$ because of overfitting).`,
    where: r`Lecture 5 · Evaluating classifiers: ROC curve and AUC; model selection with a validation set.`,
  },
  {
    week: 5,
    source: "Workshop 5 T1",
    marks: 4,
    q: r`Two actions $a\in\{0,1\}$. Given: $p(\mathbf x|y=0)=0.2$, $p(\mathbf x|y=1)=0.2$, $p(y=0)=0.7$, $p(y=1)=0.3$, and losses $L(a{=}0|y{=}0)=0$, $L(a{=}0|y{=}1)=2$, $L(a{=}1|y{=}0)=3$, $L(a{=}1|y{=}1)=0$.

Compute $R(a=1\mid\mathbf x)$.`,
    a: r`$$R(a=1|\mathbf x)=2.1$$`,
    e: r`Posterior $\propto p(\mathbf x|y)p(y)$: $0.14$ vs $0.06$ → $p(y{=}0|\mathbf x)=0.7$, $p(y{=}1|\mathbf x)=0.3$.

$R(a=1|\mathbf x)=L(1|1)p(y{=}1|\mathbf x)+L(1|0)p(y{=}0|\mathbf x)=0(0.3)+3(0.7)=2.1$.

(For comparison $R(a=0|\mathbf x)=2(0.3)=0.6$, so action 0 is better.)`,
    where: r`Lecture 5 · Bayesian decision theory (slides 45–46).`,
  },
  {
    week: 5,
    source: "Workshop 5 T2",
    marks: 3,
    q: r`What does an ROC curve show? What does AUC stand for here and what is it used for?`,
    a: r`ROC plots **true positive rate vs false positive rate** as the classification threshold varies. **AUC = Area Under the Curve**: a single threshold-independent score for a classifier (1 = perfect, 0.5 = random).`,
    e: r`AUC equals the probability that a random positive is scored higher than a random negative. Useful for comparing classifiers, especially on imbalanced data.`,
    where: r`Lecture 5 · Evaluating classifiers: ROC curves and AUC (before PR curves, slide 41).`,
  },
  {
    week: 5,
    source: "Workshop 5 T3",
    marks: 4,
    q: r`Dave's binary-classification dataset has 95% class 0 and 5% class 1 in train, val and test. His neural network scores 95.00% accuracy on all three. He wants to release it. Good idea?`,
    a: r`**No.** 95% is exactly the accuracy of always predicting class 0. The model may have learnt nothing about class 1.`,
    e: r`With imbalance, accuracy is misleading. Check a confusion matrix, per-class precision/recall, ROC AUC or average precision, and compare to the majority-class baseline.`,
    where: r`Lecture 5 · Evaluating classifiers: accuracy vs precision/recall, ROC/PR curves.`,
  },
  {
    week: 5,
    source: "Lecture 5 Q1",
    marks: 2,
    q: r`Darren splits data into train/validation/test, trains 5 regression models and records $R^2$ on the training and validation sets. Which model(s) should he evaluate on the test set?`,
    a: r`Only the **one with the best validation score** (the chosen model).`,
    e: r`Evaluating several models on the test set and picking the best would leak the test set into model selection. Select with validation, report once on test.`,
    where: r`Lecture 5 · Model selection with training, validation and test sets.`,
  },
  {
    week: 5,
    source: "Lecture 5 Q3 (adapted)",
    marks: 4,
    q: r`A cancer classifier gives $p(y{=}1|\mathbf x)=0.2$. Losses: $L(a{=}0|y{=}1)=10$ (missed cancer), $L(a{=}1|y{=}0)=1$ (false alarm), $0$ for correct actions. Which action minimises risk?`,
    a: r`$R(a{=}1)=0.8$, $R(a{=}0)=2$ → choose **$a=1$ (diagnose cancer)**.`,
    e: r`$R(a{=}1|\mathbf x)=1\times p(y{=}0|\mathbf x)=0.8$. $R(a{=}0|\mathbf x)=10\times p(y{=}1|\mathbf x)=2$. Take the action with least risk, even though cancer is only 20% likely, because a miss is far costlier. Caveat: are the model's probabilities reliable?`,
    where: r`Lecture 5 · Bayesian decision theory (slides 45–46).`,
  },
  {
    week: 5,
    source: "Practice",
    marks: 3,
    q: r`A classifier has TP = 30, FP = 10, FN = 20. Compute precision, recall and F1.`,
    a: r`Precision $=0.75$, recall $=0.6$, $F_1\approx0.667$.`,
    e: r`Precision $=\frac{TP}{TP+FP}=\frac{30}{40}$; recall $=\frac{TP}{TP+FN}=\frac{30}{50}$; $F_1=\frac{2PR}{P+R}=\frac{2(0.45)}{1.35}$.`,
    where: r`Lecture 5 · Evaluating classifiers: precision, recall, F1, PR curves (slide 41).`,
  },
  {
    week: 5,
    source: "Practice",
    marks: 2,
    q: r`Two classes with 90 and 10 test samples have per-class scores 0.8 and 0.4. Compute the macro-average and the weighted average.`,
    a: r`Macro $=0.6$; weighted $=0.76$.`,
    e: r`Macro: $(0.8+0.4)/2$. Weighted: $(90\times0.8+10\times0.4)/100=0.76$. Macro treats classes equally; weighted accounts for class sizes.`,
    where: r`Lecture 5 · Multi-class classification: macro vs weighted average (slide 42).`,
  },
  {
    week: 5,
    source: "Mock B2a",
    marks: 2,
    q: r`**train_test_split(X, y, test_size=0.25, random_state=0, stratify=y)** — what does **stratify** do and why might it be important?`,
    a: r`It keeps the **class proportions** in both train and test splits the same as in the full dataset. Important when classes are imbalanced, so e.g. the rare class isn't missing or under-represented in a split.`,
    e: r`A random split of an imbalanced dataset can leave very few positives in the test set, giving noisy or unrepresentative metrics.`,
    where: r`Lecture 5 · Train/validation/test splits; workshop 5 pipelines and cross-validation.`,
  },
  {
    week: 5,
    source: "Mock B2c(i,ii)",
    marks: 4,
    q: r`A pipeline applies **StandardScaler()** then **MLPClassifier**. A separate **DecisionTreeClassifier** has no scaler.

(i) Explain how the pipeline preprocesses the inputs. (ii) Why was this not used for the tree?`,
    a: r`(i) The scaler is **fit on the training data only** (per feature mean and std) and then transforms inputs to zero mean, unit variance before they go to the MLP; inside cross-validation it's re-fit on each training fold.
(ii) Trees split on single-feature thresholds, so they are **invariant to monotonic feature scaling** — standardising changes nothing.`,
    e: r`Neural networks trained by gradient descent are sensitive to input scale; trees are not. A Pipeline avoids leaking validation/test statistics into the scaler.`,
    where: r`Lecture 1 (standardising), Lecture 5 (pipelines, CV), Lecture 7 (trees, no standardisation needed).`,
  },
  {
    week: 5,
    source: "Mock B2d(i,ii)",
    marks: 4,
    q: r`(i) What does **cross_val_score(tree, X_train, y_train, cv=3, scoring="roc_auc")** do? (ii) How can the *standard deviation* of the cross-validated AUC help when comparing models?`,
    a: r`(i) Splits the training set into 3 folds; for each fold, trains on the other 2 and computes ROC AUC on the held-out fold; returns the 3 scores.
(ii) It measures variability/stability across folds. If the difference in means is smaller than the std, the models may not genuinely differ; a lower std suggests a more reliable model.`,
    e: r`With only 3 folds the std is itself noisy, but it gives a sense of whether a difference in mean AUC is meaningful.`,
    where: r`Lecture 5 · Model selection: cross-validation. Workshop 5 A2–A4.`,
  },
  {
    week: 5,
    source: "Mock B2d(iii)",
    marks: 2,
    q: r`The code chooses between two models by comparing mean cross-validated AUC (**mlp if scores_mlp.mean() > scores_tree.mean() else tree**). Give one limitation and suggest an improvement.`,
    a: r`Limitations: it ignores the spread (std) of scores, and compares just one default-ish configuration of each model (no hyperparameter tuning). Improvements: tune hyperparameters with a grid search (inside CV), and/or take the std into account / use more folds or repeated CV.`,
    e: r`A small mean difference may be noise; and a model's best configuration (e.g. depth, hidden size, $\alpha$) may not be the one that was tried.`,
    where: r`Lecture 5 · Model selection and cross-validation / grid search (Workshop 5 A4).`,
  },
  {
    week: 5,
    source: "Mock B2e",
    marks: 2,
    q: r`Why does the code call **predict_proba(X_test)[:, 1]** instead of making discrete class predictions?`,
    a: r`To obtain **scores/probabilities** so that ROC AUC (and the ROC curve) can be computed across all thresholds; discrete labels would give only one point on the curve. Probabilities also let you choose a decision threshold or apply decision theory.`,
    e: r`**roc_auc_score** needs a continuous score for ranking positives above negatives.`,
    where: r`Lecture 5 · ROC curves/AUC and Bayesian decision theory.`,
  },
];
