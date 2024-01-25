import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type courseGoalListprop = {
  goals: { title: string; desc: string; id: number }[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: courseGoalListprop) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">you have no course goals yet</InfoBox>;
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity='medium'>you are collecting alot of goals</InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal
              id={goal.id}
              onDelete={onDeleteGoal}
              title={goal.title}
              desc={goal.desc}
            ></CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
