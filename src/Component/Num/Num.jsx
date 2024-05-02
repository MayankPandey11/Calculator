import "./Num.css";

export default function Num({ onButtonClick }) {
  const arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
    "E",
  ];
  return (
    <>
      <div className="btn-container">
        {arr.map((ar) => (
          <button className="btn" onClick={() => onButtonClick(ar)}>
            {ar}
          </button>
        ))}
      </div>
    </>
  );
}
