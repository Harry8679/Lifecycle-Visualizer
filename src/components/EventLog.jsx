const EventLog = ({ logs }) => (
  <div className="mt-6 p-4 bg-gray-200 rounded shadow">
    <h3 className="text-xl font-semibold mb-2">📋 Journal d'événements :</h3>
    <ul className="space-y-1 max-h-60 overflow-auto">
      {logs.map((log, idx) => (
        <li key={idx} className="text-sm">{log}</li>
      ))}
    </ul>
  </div>
);

export default EventLog;