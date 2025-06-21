import React from "react";

import ChipsSection, { BREAK_LINE } from "./ChipsSection";

const Hobbies = () => (
  <ChipsSection
    title="Hobbies"
    values={[
      { name: "Skating", icon: { type: "emoji", emoji: "🛼" } },
      { name: "Embroidery", icon: { type: "emoji", emoji: "🧵" } },
      { name: "Drumming", icon: { type: "emoji", emoji: "🥁" } },
      {
        name: "Marvel (OK, and sometimes DC)",
        icon: { type: "emoji", emoji: "🦸‍♀️" }
      },
      { name: "Zouk", icon: { type: "emoji", emoji: "💃" } },
      { name: "Vegan food", icon: { type: "emoji", emoji: "🌱" } },
      { name: "Dinosaurs facts", icon: { type: "emoji", emoji: "🦕" } },
      { name: "Disney princesses", icon: { type: "emoji", emoji: "👸" } },
      { name: "Watching birds", icon: { type: "emoji", emoji: "🦜" } }
    ]}
  />
);

export default Hobbies;
