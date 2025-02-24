import { useState, useEffect, useRef } from 'react';

const LifecycleVisualizer = ({ addLog }) => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);

  // Montage
  useEffect(() => {
    addLog('🟢 Composant monté');
    isMounted.current = true;

    return () => {
      addLog('🔴 Composant démonté');
    };
  }, []);

  // Mise à jour
  useEffect(() => {
    if (isMounted.current && count !== 0) {
      addLog(`🟠 Composant mis à jour (count: ${count})`);
    }
  }, [count]);

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