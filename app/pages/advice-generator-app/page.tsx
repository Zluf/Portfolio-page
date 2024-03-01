"use client";

import { useEffect, useState } from "react";
import "./style.css";

export default function page() {
  const [h2, setH2] = useState("");
  const [p, setP] = useState("");
  const [opacity, setOpacity] = useState(1);

  const generate = (cache: "default" | "no-cache") => {
    fetch("https://api.adviceslip.com/advice", { cache: cache }).then((resp) =>
      resp.json().then((data) => {
        setH2(`Advice #${data.slip.id}`);
        setP(`"${data.slip.advice}"`);
      })
    );
  };

  const generateClick = () => {
    setOpacity(0);
    setTimeout(function () {
      generate("no-cache");
    }, 400);
    setTimeout(function () {
      setOpacity(1);
    }, 500);
  };

  useEffect(() => {
    generate("default");
  });

  return (
    <main>
      <h2 style={{ opacity }}>{h2}</h2>
      <p style={{ opacity }}>{p}</p>
      <img
        src="/pages-img/advice-generator-app/images/pattern-divider-mobile.svg"
        alt="pattern divider"
      />
      <img
        src="/pages-img/advice-generator-app/images/pattern-divider-desktop.svg"
        alt="pattern divider"
      />
      <button className="btn-refresh" onClick={() => generateClick()}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </main>
  );
}
