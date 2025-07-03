export default function MiniLoader({ type = "warning", size = 100 }) {
  return (
    <div
      className={`spinner-border text-${type}`}
      style={{ scale: `${size}%` }}
    >

    </div>
  );
}