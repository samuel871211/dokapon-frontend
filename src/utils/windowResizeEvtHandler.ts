export default function registerWindowResizeEvtHandler(): void {
  const HTMLEl = document.documentElement;
  const aspectRatioEl = document.getElementById("root")?.children[0];
  if (!aspectRatioEl) return console.error("root element not found");

  HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
  window.onresize = () => {
    HTMLEl.style.setProperty("--vw", `${aspectRatioEl.clientWidth / 100}px`);
    console.log("hello");
  };
}
