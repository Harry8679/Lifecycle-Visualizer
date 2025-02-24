import { useState } from 'react';
import LifecycleVisualizer from './components/LifecycleVisualizer';
import EventLog from './components/EventLog';

const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [log, setLog] = useState([]);

  const addLog = (event) => {
    setLog((prev) => [...prev, `${new Date().toLocaleTimeString()} - ${event}`]);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">🚀 React Lifecycle Visualizer</h1>
      <div className="space-x-2 mb-5">
        <button
          onClick={() => setShowComponent(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Monter Composant
        </button>
        <button
          onClick={() => setShowComponent(false)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Démonter Composant
        </button>
      </div>
      {showComponent && <LifecycleVisualizer addLog={addLog} />}
      <EventLog logs={log} />
    </div>
  );
};

export default App;