import "./Box.css";

export default function Box({ displayValue }) {
  return (
    <>
      <input
        type="text"
        className="box-title"
        value={displayValue}
        readOnly
      />
      <br />
    </>
  );
}
