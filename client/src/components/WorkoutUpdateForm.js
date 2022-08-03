import axios from "axios";
import { useState } from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutUpdate = ({ id, workout, fetchData }) => {
  const [title, setTtle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const [form, setForm] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && load && reps) {
      axios
        .patch(`http://localhost:8080/api/workouts/${id}`, {
          title,
          load,
          reps,
        })
        .then(() => {
          fetchData();
          alert("Workout Updated successfully!");
        })
        .catch((err) => {
          alert("Some Error Occured!");
          console.error(err);
        });
    } else {
      alert("Please fill up the form");
    }
    setForm(false);
  };
  return !form === false ? (
    <form className="createWorkout" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setTtle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Load"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <input
        type="text"
        placeholder="Reps"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button type="submit">Add</button>
    </form>
  ) : (
    <WorkoutCard workout={workout} fetchData={fetchData} />
  );
};
export default WorkoutUpdate;
