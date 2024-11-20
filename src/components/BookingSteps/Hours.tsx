import { useNavigate } from 'react-router-dom';

const Hours = () => {
  const navigate = useNavigate();

  const goToNextStep = () => {
    navigate('/domestic-cleaning/booking/signup'); // Navigate to the final "Signup" step
  };

  return (
    <div>
      <h1>Hours Step</h1>
      <p>Select the hours required for the service.</p>
      {/* Add options or inputs for selecting hours */}
      <input type="number" min="1" max="12" placeholder="Enter hours" />
      <button onClick={goToNextStep}>Next</button>
    </div>
  );
};

export default Hours;
