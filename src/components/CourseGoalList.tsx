import CourseGoal from "./CourseGoal";

type courseGoalListprop = {
  goals: { title: string; desc: string; id: number }[];
  onDeleteGoal: (id:number)=>void;
};
export default function CourseGoalList({ goals ,onDeleteGoal}: courseGoalListprop) {
  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title} desc={goal.desc}></CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
