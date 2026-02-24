import { useEffect } from "react";
import HostTabContent from "../components/HostTabContent";

export default function App() {
  useEffect(() => {}, []);
  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 20 }}>
      <h1>React Host</h1>
      <p>Angular remote below — the 4th tab shows the React content:</p>

      <mfe-header-element>
        <div slot="host">
          <HostTabContent />
        </div>
      </mfe-header-element>
    </div>
  );
}
