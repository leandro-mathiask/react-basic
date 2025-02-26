import React from "react";

export function ParagraphCreated({
  color = "white",
  typeText = "uppercase",
  children,
}) {
  return (
    <>
      <div style={{ textTransform: typeText, color: color }}>{children}</div>
    </>
  );
}
