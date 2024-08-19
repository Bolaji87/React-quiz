import React from "react";

export default function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.floor(percentage)}%)
      </p>
    </div>
  );
}
t;
