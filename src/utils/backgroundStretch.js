export const triggerBackgroundStretch = (origin = "50% 0%") => {
    const event = new CustomEvent("backgroundStretch", { detail: { origin } });
    window.dispatchEvent(event);
  };
  