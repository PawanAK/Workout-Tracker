import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      console.log(data);
      setWorkouts(data);
    };
  
    fetchWorkouts();
  }, []);

    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const data = await response.json();
      console.log(data);
    };

    fetchWorkouts();

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout.id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
