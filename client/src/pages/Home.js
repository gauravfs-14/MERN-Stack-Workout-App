import WorkoutCard from "../components/WorkoutCard.js";
import WorkoutForm from "../components/WorkoutForm";

const home = ({ data, fetchData }) => {
  return (
    <div className="workout_container">
      <WorkoutForm fetchData={fetchData} />
      {data &&
        data.map((workout) => (
          <>
            <WorkoutCard key={workout._id} workout={workout} fetchData ={fetchData} />
          </>
        ))}
    </div>
  );
};

export default home;
