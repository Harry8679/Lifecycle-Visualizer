import { useState } from 'react';
import useLifecycleLogger from '../hooks/useLifecycleLogger';

const LifecycleVisualizer = ({ addLog }) => {
  const [count, setCount] = useState(0);

  // ✅ Utilisation du hook personnalisé pour loguer le cycle de vie
  useLifecycleLogger('LifecycleVisualizer', addLog, [count]);

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">🔄 Composant en action</h2>
      <p className="mb-3">Compteur : {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Mettre à jour l'état
      </button>
    </div>
  );
};

export default LifecycleVisualizer;