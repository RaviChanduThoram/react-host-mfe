export default function HostTabContent() {
  return (
    <article style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>React Host Component</h3>
      <p>
        This content is rendered by the <strong>React host</strong> and
        projected into the Angular remote via a named slot.
      </p>
      <ul>
        <li>Fully controlled by the host</li>
        <li>Isolated via Shadow DOM</li>
        <li>Framework-agnostic integration</li>
      </ul>
    </article>
  );
}
