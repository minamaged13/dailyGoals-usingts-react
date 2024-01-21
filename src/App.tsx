import "./App.css";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
type courseGoal = {
  title: string;
  desc: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<courseGoal[]>([]);
  function handleAddGoal(goal:string,summary:string) {
    setGoals((prevState) => {
      const newGoal: courseGoal = {
        title: goal,
        desc: summary,
        id: Math.random(),
      };
      return [...prevState, newGoal];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals((prev)=>prev.filter((goal) => goal.id!==id))
  }
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "a list of goals" }}>
          <h1> your daily goals</h1>
        </Header>
       <NewGoal onAddGoal={handleAddGoal}/>
        <CourseGoalList onDeleteGoal={handleDeleteGoal} goals={goals} />
      </main>
    </>
  );
}

export default App;
