import type { Question } from "../questions";

const r = String.raw;

export const week9: Question[] = [
  {
    week: 9,
    source: "Mock A1e(i)",
    marks: 2,
    q: r`$f(\mathbf x)=\mathbf W^{(2)}g(\mathbf W^{(1)}\mathbf x)$ with $g$ = element-wise ReLU,
$$\mathbf W^{(1)}=\begin{bmatrix}1&1\\1&2\end{bmatrix},\quad\mathbf W^{(2)}=\begin{bmatrix}3&1\\6&2\\9&3\end{bmatrix}$$
Compute $f\big([3,\,-2]^\top\big)$.`,
    a: r`$$f=[3,\,6,\,9]^\top$$`,
    e: r`$\mathbf W^{(1)}\mathbf x=[3-2,\;3-4]^\top=[1,-1]^\top$. ReLU → $[1,0]^\top$.
$\mathbf W^{(2)}[1,0]^\top=[3,6,9]^\top$.`,
    where: r`Lecture 9 · The multilayer perceptron: forward pass with linear layers and ReLU activations.`,
  },
  {
    week: 9,
    source: "Mock A1e(ii)",
    marks: 2,
    q: r`For the same network, suggest an input $\mathbf x$ for which $g(\mathbf W^{(1)}\mathbf x)=\mathbf W^{(1)}\mathbf x$, and justify.`,
    a: r`E.g. $\mathbf x=[1,1]^\top$, since $\mathbf W^{(1)}\mathbf x=[2,3]^\top$ has all non-negative entries, which ReLU leaves unchanged.`,
    e: r`Need $x_1+x_2\ge0$ and $x_1+2x_2\ge0$. Any such $\mathbf x$ works (also $\mathbf x=\mathbf 0$).`,
    where: r`Lecture 9 · ReLU activation: $\max(0,z)$ is the identity for non-negative inputs.`,
  },
  {
    week: 9,
    source: "Workshop 9 T1",
    marks: 3,
    q: r`An MLP (no biases, all ReLU) has inputs $x_1,x_2$, hidden neurons A, B and output neurons C, D.

Weights: $x_1\to A=5$, $x_2\to A=-6$, $x_1\to B=-2$, $x_2\to B=1$, $A\to C=30$, $B\to C=-0.1$, $A\to D=-14$, $B\to D=0.1$.

For $x_1=1$, $x_2=3$, which neurons are activated?`,
    a: r`**B and D** are activated (non-zero). A and C are off.`,
    e: r`A: $5(1)-6(3)=-13\to\text{ReLU}=0$. B: $-2(1)+1(3)=1\to1$.
C: $30(0)-0.1(1)=-0.1\to0$. D: $-14(0)+0.1(1)=0.1\to0.1$.`,
    where: r`Lecture 9 · MLP forward pass and ReLU. Workshop 9 Figure T1.`,
  },
  {
    week: 9,
    source: "Workshop 9 T2",
    marks: 3,
    q: r`An MLP for 5-class classification takes $\mathbf x\in\mathbb R^{12}$: Linear+ReLU (20), Linear+ReLU (10), Linear (5 logits). How many trainable parameters (weights + biases)?`,
    a: r`$$525$$`,
    e: r`Layer 1: $12\times20+20=260$. Layer 2: $20\times10+10=210$. Layer 3: $10\times5+5=55$. Total $=260+210+55=525$.`,
    where: r`Lecture 9 · The MLP architecture: $\mathbf W\in\mathbb R^{out\times in}$ plus bias per layer.`,
  },
  {
    week: 9,
    source: "Mock B2c(iii)",
    marks: 3,
    q: r`**MLPClassifier(hidden_layer_sizes=(32, 16), activation="relu")** is trained on 5 input features with a single output (log-odds of class 1). How many trainable parameters (weights + biases)?`,
    a: r`$$737$$`,
    e: r`$5\to32$: $5\times32+32=192$. $32\to16$: $32\times16+16=528$. $16\to1$: $16+1=17$. Total $=192+528+17=737$.`,
    where: r`Lecture 9 · Counting parameters in an MLP.`,
  },
  {
    week: 9,
    source: "Workshop 9 T3",
    marks: 3,
    q: r`Describe how to perform early stopping when fitting an MLP, and why it is useful.`,
    a: r`Monitor the **validation loss** during training. Stop when it stops improving (e.g. no improvement for a "patience" number of epochs), and keep the weights from the best epoch.
It's useful because it acts as **regularisation**: training loss keeps falling but validation loss eventually rises as the model overfits. It also saves compute.`,
    e: r`Other regularisers in the lecture: weight decay (L2), dropout (randomly switching off hidden units, like training an ensemble of sub-networks, slide 39).`,
    where: r`Lecture 9 · Regularising DNNs (early stopping, dropout).`,
  },
  {
    week: 9,
    source: "Lecture 9 Q1",
    marks: 3,
    q: r`A network has one input $x$, two hidden ReLU units $h_1=\text{ReLU}(x)$, $h_2=\text{ReLU}(x-1)$, and output $f(x)=h_1-h_2$. Sketch $f(x)$.`,
    a: r`$$f(x)=\begin{cases}0&x\le0\\x&0\le x\le1\\1&x\ge1\end{cases}$$
A clipped ramp: flat at 0, rises with slope 1 from 0 to 1, flat at 1.`,
    e: r`For $x\ge1$: $x-(x-1)=1$. A sum of ReLUs gives piecewise linear functions; this is how MLPs build flexible non-linear functions.`,
    where: r`Lecture 9 · Why hidden layers + non-linear activations give non-linear functions.`,
  },
  {
    week: 9,
    source: "Lecture 9 Q3",
    marks: 4,
    q: r`Barry's GPU has 12 GB. Training with batch size 64 requires 4 GB for model parameters and 6 GB for forward-pass activations, yet SGD gives an out-of-memory error.

Explain why and suggest a smaller batch size that fits.`,
    a: r`Backpropagation also needs a **gradient for every parameter** (another ≈4 GB): $4+4+6=14$ GB $>12$ GB.
Activations scale with batch size. Need $4+4+a\le12\Rightarrow a\le4$ GB $\Rightarrow$ batch $\le64\times\tfrac46\approx42$. Use batch size **32** (activations ≈ 3 GB, total ≈ 11 GB).`,
    e: r`Memory = parameters + gradients + activations (+ optimiser state for e.g. Adam). Only activations scale with batch size.`,
    where: r`Lecture 9 · Training an MLP with backpropagation + SGD (mini-batches).`,
  },
  {
    week: 9,
    source: "Practice",
    marks: 2,
    q: r`When might you *not* use deep learning?`,
    a: r`Tabular data (tree-based models are hard to beat), when interpretability is required (prefer a linear model), when there's little data, or when compute is limited.`,
    e: r`DNNs excel with lots of data on images, text and audio, but are hard to interpret and expensive to train from scratch.`,
    where: r`Lecture 9 · "Why not use deep learning for everything?" (slide 45).`,
  },
  {
    week: 9,
    source: "Practice",
    marks: 3,
    q: r`An MLP for MNIST has 784 inputs, one hidden layer of 50 units, and 10 outputs (with biases). How many parameters? What output nonlinearity gives class probabilities?`,
    a: r`$784\times50+50+50\times10+10=39{,}760$ parameters. **Softmax** over the 10 logits.`,
    e: r`Output logits $f(\mathbf x)=\mathbf V\mathbf h+\mathbf c$ and $\mathbf p=S(f(\mathbf x))$, trained with log loss.`,
    where: r`Workshop 9 Part A: writing your own MLP.`,
  },
];
