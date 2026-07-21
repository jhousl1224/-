import "./styles/base.css";
import "./styles/layout.css";
import "./styles/starfield.css";
import "./styles/guide.css";
import "./styles/hero.css";
import "./styles/form.css";
import "./styles/result.css";

import { mountStarfield } from "./components/starfield";
import { mountHero } from "./components/hero";
import { mountForm } from "./components/form";
import { mountResult } from "./components/result";
import { buildProfile } from "./lib/profile";
import { generateAnalysis } from "./lib/analysis";
import type { BirthInput } from "./lib/types";

const app = document.querySelector<HTMLDivElement>("#app")!;

mountStarfield(app);
mountHero(app, () => {
  const inputSection = document.getElementById("input");
  inputSection?.classList.remove("section--locked");
  inputSection?.scrollIntoView({ behavior: "smooth" });
});
mountForm(app, handleSubmit);
const result = mountResult(app);

function handleSubmit(input: BirthInput) {
  const resultSection = document.getElementById("result");
  resultSection?.classList.remove("section--locked");
  resultSection?.scrollIntoView({ behavior: "smooth" });
  const profile = buildProfile(input);
  const analysis = generateAnalysis(profile);
  void result.showResult(profile, analysis);
}
