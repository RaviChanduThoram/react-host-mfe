import { createRoot } from "react-dom/client";
import App from "./app/App";

(async () => {
  try {
    const { register } = await import("angularRemote/register");
    await register();
    console.log("[react-host] Angular remote registered.");
  } catch (e) {
    console.warn(
      "[react-host] Failed to load angularRemote/register. Is the Angular remote running?",
      e
    );
  }

  const rootEl = document.getElementById("root");
  if (!rootEl) throw new Error("Root element #root not found");
  const root = createRoot(rootEl);
  root.render(<App />);
})();
