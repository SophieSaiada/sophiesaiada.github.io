import React from "react";

import ChipsSection, { BREAK_LINE } from "../chips-section";

const Hobbies = () => (
  <ChipsSection
    title="Hobbies"
    values={[
      { name: "Skating", icon: { type: "emoji", emoji: "🛼" } },
      { name: "Embroidery", icon: { type: "emoji", emoji: "🧵" } },
      {
        name: "Marvel (OK, & DC)",
        icon: { type: "emoji", emoji: "🦸‍♀️" }
      },
      { name: "Vegan food", icon: { type: "emoji", emoji: "🌱" } },
      { name: "Dinosaurs", icon: { type: "emoji", emoji: "🦕" } },
      { name: "Disney princesses", icon: { type: "emoji", emoji: "👸" } },
      { name: "Birds", icon: { type: "emoji", emoji: "🦜" } }
    ]}
  />
);

export default Hobbies;
