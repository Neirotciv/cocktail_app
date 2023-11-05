export default function SearchList({ onLetterClick }) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-wrap items-center w-full my-4 lg:justify-center">
      {alphabet.map((letter, index) => {
        return (
          <div key={index} onClick={() => onLetterClick(letter)}>
            <span className="m-2 cursor-pointer hover:bg-black/30">
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}
