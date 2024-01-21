type CourseGoalProps= {
   title: string;
   desc: string;
   onDelete: (id:number)=> void;
   id:number;
 }

export default function CourseGoal({
  title,
  desc,
  onDelete,
  id
}:CourseGoalProps ) {
  return (
    <article>
      <div>
        <h2> {title}</h2>
        <p>{desc}</p>
      </div>
      <button onClick={()=> onDelete(id)}>delete</button>
    </article>
  );
}
