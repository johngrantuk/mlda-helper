import type { Question } from "../questions";

const r = String.raw;

export const week6: Question[] = [
  {
    week: 6,
    source: "Mock B1e",
    marks: 5,
    q: r`A werewolf classifier works well, so Susan proposes reusing the approach to predict whether a person in an incident report is a likely criminal suspect. The score is used to prioritise patrols and decide who is stopped for questioning.

State one potential ethical concern for **each** of the five principles of Floridi and Cowls.`,
    a: r`- **Beneficence:** may not actually improve safety/well-being; benefits mostly to the institution, not those affected.
- **Non-maleficence:** harm from false positives (wrongful stops, stigma), privacy intrusion, and feedback loops from over-policing.
- **Autonomy:** people stopped have no say or consent; humans may defer to the algorithm (automation bias), eroding officer decision-making.
- **Justice:** historical labels reflect biased policing, so the model can discriminate by group/location and entrench inequality.
- **Explicability:** opaque model; no way to explain or contest why someone was flagged; unclear accountability.`,
    e: r`The five principles are: **beneficence, non-maleficence, autonomy, justice, explicability** (explainability + accountability). For any scenario: go through each and give a concrete, scenario-specific concern.`,
    where: r`Lecture 6 · An ethical framework for ML: Floridi & Cowls principles, applied to LLMs (slides ~22–24) and contentious applications (slides 33–35).`,
  },
  {
    week: 6,
    source: "Lecture 6 Q",
    marks: 5,
    q: r`Propose an ML scenario of your choice and critique it according to the five Floridi and Cowls principles. (Try: an automatic essay-marking system.)`,
    a: r`E.g. essay marking:
- **Beneficence:** faster feedback and consistency.
- **Non-maleficence:** unfair grades harm students; privacy of essays.
- **Autonomy:** students/teachers lose control; automated decisions with little recourse.
- **Justice:** may favour certain writing styles/dialects and penalise others.
- **Explicability:** can the grade be explained and appealed?`,
    e: r`The lecture applies the framework to ChatGPT-style LLMs: privacy/de-skilling (non-maleficence), reduced choice (autonomy), uneven benefit for high-resource languages (justice), no real "why this output?" explanation (explicability).`,
    where: r`Lecture 6 · End-of-lecture question (slide 42) and the Floridi & Cowls framework.`,
  },
  {
    week: 6,
    source: "Workshop 6 A1",
    marks: 5,
    q: r`A manufacturer wants to use sensor readings from industrial machines to predict whether a machine will fail in the next 7 days. State the input/output, the ML type, a concern, and whether it's appropriate.`,
    a: r`**Inputs:** sensor readings (temperature, vibration, hours of use…). **Output:** fail within 7 days (yes/no).
**Type:** supervised **classification**.
**Concern:** imbalanced data (failures are rare); false negatives are costly; reliance on the model could reduce maintenance checks.
**Appropriate?** Generally yes — low societal risk, objective labels — with human oversight.`,
    e: r`Good ML problems have clear measurable labels, enough data, low-stakes errors or human oversight, and no unfair impact on people.`,
    where: r`Workshop 6 · Part A "Is ML appropriate?" (draws on Lectures 1, 5, 6).`,
  },
  {
    week: 6,
    source: "Workshop 6 A4/A5",
    marks: 5,
    q: r`(A4) A company wants to rank new job applicants using past CVs and hiring decisions. (A5) A school wants an AI to decide which students are "lazy" and which are "hard-working". Is ML appropriate for each?`,
    a: r`**A4:** risky: historical decisions encode bias (e.g. Amazon's tool penalised CVs containing "women"). Needs auditing, human review, transparency.
**A5:** **not appropriate:** "lazy" is subjective, not an objective label; high risk of stigma and discrimination, unfair labelling of children.`,
    e: r`The target label must be well-defined and not merely a proxy for biased human judgement. Models trained on biased history reproduce it.`,
    where: r`Lecture 6 · Recruitment tools (slide 25) and Data bias; Workshop 6 Part A.`,
  },
  {
    week: 6,
    source: "Practice",
    marks: 3,
    q: r`Give two real examples from the lecture where ML caused harm through bias.`,
    a: r`- **Recruitment:** model trained on mostly male applicants penalised CVs with the word "women".
- **PULSE face depixelizer:** tended to generate white faces (training data dominated by white faces).
- **A-level grading (2020):** algorithm favoured privately educated students; high performers at weaker schools lost out.`,
    e: r`Common cause: biased or unrepresentative training data, or objectives that bake in historical inequality.`,
    where: r`Lecture 6 · Data bias examples (slides 25–28).`,
  },
  {
    week: 6,
    source: "Practice",
    marks: 2,
    q: r`How can recommender systems on social media cause societal harm?`,
    a: r`They show users content aligning with their views (filter bubbles/echo chambers) and can amplify radical views and misinformation.`,
    e: r`Engagement-optimising objectives conflict with societal well-being; examples include Cambridge Analytica and radicalisation concerns.`,
    where: r`Lecture 6 · Recommender systems (slide 31), Cambridge Analytica (slide 32).`,
  },
];
