const home = ({ data }) => {
  return (
    <div className="workout_container">
      {data &&
        data.map((workout) => (
          <>
            <div className="workout_details" key={workout._id}>
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
            </div>
          </>
        ))}
    </div>
  );
};

export default home;
