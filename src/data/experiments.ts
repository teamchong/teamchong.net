export type Experiment = {
  title: string;
  url: string;
  repo?: string;
  blurb: string;
  tags?: string[];
};

export const experiments: Experiment[] = [
  // Add experiments here as you ship them.
  // {
  //   title: "Edge LLM Router",
  //   url: "https://router.teamchong.net",
  //   repo: "https://github.com/teamchong/edge-llm-router",
  //   blurb: "Routes prompts across in-browser, edge, and frontier models.",
  //   tags: ["workers-ai", "webgpu", "zig"],
  // },
];
