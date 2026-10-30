import type { Question } from "../questions";

const r = String.raw;

export const week10: Question[] = [
  {
    week: 10,
    source: "Lecture 10 Q1",
    marks: 4,
    q: r`A convolutional layer takes a $32\times32$ RGB image and uses 16 filters with kernel size $5\times5$, no padding, stride 1.

What size is the output? How many trainable parameters (each filter has a bias)?`,
    a: r`Output: $16\times28\times28$. Parameters: $16\times(5\times5\times3+1)=1216$.`,
    e: r`Output size $=32-5+1=28$ per spatial side; one channel per filter. Each filter spans all 3 input channels: $5\cdot5\cdot3=75$ weights $+1$ bias $=76$; $\times16=1216$.`,
    where: r`Lecture 10 · Convolutional layers: filters, kernel size, stride, padding.`,
  },
  {
    week: 10,
    source: "Lecture 10 Q2",
    marks: 5,
    q: r`A Vision Transformer takes a $224\times224$ RGB image, splits it into non-overlapping $16\times16$ patches, each flattened and linearly projected to dimension 768.

How many patches? What is the token sequence shape? How many parameters in the projection (with bias)?`,
    a: r`$196$ patches ($14\times14$); tokens $196\times768$ (197 if a class token is added). Parameters: $768\times768+768=590{,}592$.`,
    e: r`$224/16=14$ per side. Each patch has $16\cdot16\cdot3=768$ values, projected to 768: weight matrix $768\times768$ plus bias of 768.`,
    where: r`Lecture 10 · Vision transformers (patch embedding).`,
  },
  {
    week: 10,
    source: "Lecture 10 Q3",
    marks: 3,
    q: r`Explain what transfer learning is and why it is useful when training a neural network on a small dataset.`,
    a: r`Re-using a network **pre-trained on a large dataset** (e.g. ImageNet) for a new task: use its features $\phi(\mathbf x)$ with a new head (or fine-tune). It helps because the learned features are already generic, so you need less data, time and compute, and it's less prone to overfitting than training from scratch.`,
    e: r`Two flavours: (1) feature extraction — freeze the network and train e.g. logistic regression on $\phi(\mathbf x)$; (2) **fine-tuning** — continue training the whole network with a low learning rate and a task-specific head, useful with domain shift.`,
    where: r`Lecture 10 · Pre-trained networks, domain shift, fine-tuning (slides 39–43).`,
  },
  {
    week: 10,
    source: "Workshop 10 T1",
    marks: 4,
    q: r`State whether (i) a fully connected layer and (ii) a convolutional layer are translation equivariant, and briefly justify.`,
    a: r`(i) **Not** translation equivariant. (ii) **Yes** (ignoring boundary effects).`,
    e: r`(i) Each input position has its own independent weight, so shifting the input produces an unrelated output. (ii) The same filter is applied at every location (weight sharing), so shifting the input shifts the output feature map by the same amount.`,
    where: r`Lecture 10 · Convolutional networks: weight sharing and translation equivariance.`,
  },
  {
    week: 10,
    source: "Workshop 10 T2",
    marks: 3,
    q: r`Dave has a small set of vegetable images and a slow laptop, and wants a turnip classifier. How can transfer learning help?`,
    a: r`Download a network pre-trained on a large image dataset, pass his images through it to get feature vectors, and train a simple (cheap) classifier on them; or fine-tune with a low learning rate and a new head. Little data and compute are needed.`,
    e: r`Early/mid layers learn general visual features (edges, textures, shapes) that transfer across image tasks.`,
    where: r`Lecture 10 · Pre-trained networks and fine-tuning.`,
  },
  {
    week: 10,
    source: "Workshop 10 T3",
    marks: 4,
    q: r`Describe how self-attention works in a transformer.`,
    a: r`Each token's embedding is linearly projected to a **query**, **key** and **value**. For each token, the query is compared (dot product) with every token's key; the scores are scaled and passed through a **softmax** to give attention weights, and the output is the weighted sum of the value vectors. Every token can thus gather information from all other tokens, with content-based weights.`,
    e: r`$\text{Attention}(Q,K,V)=\text{softmax}\!\big(QK^\top/\sqrt{d}\big)V$. Multi-head attention runs several in parallel. Because attention ignores order, positional information must be added.`,
    where: r`Lecture 10 · The transformer architecture (2017) and vision transformers.`,
  },
  {
    week: 10,
    source: "Practice",
    marks: 2,
    q: r`What is *domain shift* and how does fine-tuning address it?`,
    a: r`Domain shift is when the target task's data differs from the pre-training data (e.g. ImageNet photos vs lung X-rays). Fine-tuning further trains the pre-trained network on the target dataset (low learning rate, new head) so its features adapt to the new domain.`,
    e: r`Fine-tuning is usually much cheaper than training from scratch.`,
    where: r`Lecture 10 · Domain shift (slide 42) and Fine-tuning (slide 43).`,
  },
];
