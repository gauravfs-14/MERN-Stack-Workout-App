import axios from "axios";
import { useState } from "react";

const WorkoutForm = ({ fetchData }) => {
  const [title, setTtle] = useState("");
  const [load, setLoad] = useState();
  const [reps, setReps] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && load && reps) {
      axios
        .post("http://localhost:8080/api/workouts", { title, load, reps })
        .then(() => {
          fetchData();
          alert("Workout Created!");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong!");
        });
    } else {
      alert("Please fill up the form");
    }
    setTtle("");
    setLoad("");
    setReps("");
  };
  return (
    <>
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
    </>
  );
};

export default WorkoutForm;
