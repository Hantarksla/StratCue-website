(() => {
  const desk = document.querySelector(".term");
  if (!(desk instanceof HTMLElement)) return;

  const screens = new Set(
    [...desk.querySelectorAll(".term-nav button")].map((button) => button.getAttribute("data-screen")).filter(Boolean),
  );

  function show(screen) {
    if (!screens.has(screen)) return;
    desk.setAttribute("data-screen", screen);
    desk.querySelectorAll(".term-nav button").forEach((button) => {
      button.setAttribute("aria-pressed", button.getAttribute("data-screen") === screen ? "true" : "false");
    });
    const current = desk.querySelector(`.term-nav button[data-screen="${screen}"]`);
    const crumb = desk.querySelector(".crumb b");
    const key = current?.querySelector("[data-i18n]")?.getAttribute("data-i18n");
    if (crumb && key) crumb.setAttribute("data-i18n", key);
    window.AQ_LANDING?.apply();
  }

  desk.querySelectorAll(".term-nav button").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      const screen = node.getAttribute("data-screen");
      if (screen) show(screen);
    });
  });

  desk.querySelectorAll(".tool").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      const mode = node.getAttribute("data-tool");
      if (!mode) return;
      desk.setAttribute("data-tool", mode);
      desk.querySelectorAll(".tool").forEach((other) => {
        other.setAttribute("aria-pressed", other === node ? "true" : "false");
      });
    });
  });

  desk.querySelectorAll("[data-ema]").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      const on = node.getAttribute("aria-pressed") !== "true";
      node.setAttribute("aria-pressed", on ? "true" : "false");
      const id = node.getAttribute("data-ema");
      desk.querySelectorAll(`[data-ema-line="${id}"]`).forEach((line) => {
        line.toggleAttribute("hidden", !on);
      });
    });
  });

  desk.querySelectorAll(".iv").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      desk.querySelectorAll(".iv").forEach((other) => {
        other.setAttribute("aria-pressed", other === node ? "true" : "false");
      });
      desk.querySelectorAll(".iv-label").forEach((label) => {
        label.textContent = node.textContent ?? "";
      });
    });
  });

  desk.querySelectorAll(".wl-row").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      const symbol = node.getAttribute("data-symbol");
      if (!symbol) return;
      desk.querySelectorAll(".sym").forEach((item) => {
        item.textContent = symbol;
      });
      desk.querySelectorAll(".wl-row").forEach((other) => {
        other.setAttribute("aria-pressed", other === node ? "true" : "false");
      });
    });
  });

  const book = desk.querySelector(".book p");
  desk.querySelectorAll("[data-book]").forEach((node) => {
    if (!(node instanceof HTMLButtonElement)) return;
    node.addEventListener("click", () => {
      desk.querySelectorAll("[data-book]").forEach((other) => {
        other.setAttribute("aria-pressed", other === node ? "true" : "false");
      });
      if (book) book.setAttribute("data-i18n", node.getAttribute("data-book") === "trades" ? "book.empty" : "book.blocked");
      window.AQ_LANDING?.apply();
    });
  });
})();
