import { useEffect, useRef } from 'react';

const useLifecycleLogger = (componentName, addLog, dependencies = []) => {
  const isMounted = useRef(false);

  // Montage
  useEffect(() => {
    addLog(`🟢 [${componentName}] monté`);
    isMounted.current = true;

    // Démontage
    return () => {
      addLog(`🔴 [${componentName}] démonté`);
    };
  }, []);

  // Mise à jour
  useEffect(() => {
    if (isMounted.current) {
      addLog(`🟠 [${componentName}] mis à jour`);
    }
  }, dependencies);
};

export default useLifecycleLogger;