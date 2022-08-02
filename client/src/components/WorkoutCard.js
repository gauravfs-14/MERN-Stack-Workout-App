import axios from "axios";

const WorkoutCard = ({workout, fetchData})=>{
  const deleteData = () =>{
    axios.delete(`http://localhost:8080/api/workouts/${workout._id}`)
      .then(res => {
        alert(res.data.message); 
        fetchData()
      })
      .catch(err => {
        alert("Some Error Occured!");
        console.error(err);
      });
  }
  return(
    <>
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
              <p>{workout.createdAt}</p>
          <div>
              <p className="delete" onClick={deleteData}>Delete</p>
              <p className="update">Update</p>
          </div>
            </div>

    </>
  )
}

export default WorkoutCard
