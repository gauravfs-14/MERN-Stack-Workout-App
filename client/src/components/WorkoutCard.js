import axios from "axios";
import { useState } from "react";
import WorkoutUpdate from "./WorkoutUpdateForm";

const WorkoutCard = ({ workout, fetchData }) => {
  const [form, setForm] = useState(false);
  const deleteData = () => {
    axios
      .delete(`http://localhost:8080/api/workouts/${workout._id}`)
      .then((res) => {
        alert(res.data.message);
        fetchData();
      })
      .catch((err) => {
        alert("Some Error Occured!");
        console.error(err);
      });
  };
  const updateData = () => {
    setForm(true);
  };
  return (
    <>
      {form === false ? (
        <div className="workout_details">
          <h4>{workout.title}</h4>
          <p>
            <strong>Load (kg):</strong>
            {workout.load}
          </p>
          <p>
            <strong>Reps:</strong>
            {workout.reps}
          </p>
          <p>{workout.createdAt.slice(0, 10)}</p>
          <div>
            <p className="delete" onClick={deleteData}>
              Delete
            </p>
            <p className="update" onClick={updateData}>
              Update
            </p>
          </div>
        </div>
      ) : (
        <WorkoutUpdate
          id={workout._id}
          fetchData={fetchData}
          workout={workout}
        />
      )}
    </>
  );
};

export default WorkoutCard;
