// Related third party imports.
import { createRoot } from "react-dom/client";

// Local application/library specific imports.
import App from "App";

// Stateless vars declare.

const container = document.getElementById("root");
if (!container) throw new Error("no root element");
const root = createRoot(container);
root.render(<App />);
