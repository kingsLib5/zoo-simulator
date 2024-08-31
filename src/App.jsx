import React from 'react';
import Zoo from './components/Zoo';
import ZooControls from './components/Zoocontrols';

function App() {
  const zooRef = React.useRef();

  const handleAdvanceTime = () => {
    zooRef.current.updateHealth();
  };

  const handleFeedAnimals = () => {
    zooRef.current.feedAnimals();
  };

  return (
    <div className="container mx-auto p-4">
      <Zoo ref={zooRef} />
      <ZooControls onAdvanceTime={handleAdvanceTime} onFeedAnimals={handleFeedAnimals} />
    </div>
  );
}

export default App;
