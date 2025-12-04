import React from "react";

export default function PartnersContainer({ children, withoutPaddingBottom }) {
  return (
    <section className={`partners-block-redesign ${withoutPaddingBottom ? "no-pb" : ""}`}>
      {children}
    </section>
  );
}
