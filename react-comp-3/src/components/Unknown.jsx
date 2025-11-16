import React, { useState, useEffect } from "react";

function HabitLooper() {
  // State for habits: an array of objects { id, name, progress }
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });
  const [newHabit, setNewHabit] = useState("");

  // Save habits to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Add a new habit with 0% progress
  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([
        ...habits,
        { id: Date.now(), name: newHabit.trim(), progress: 0 },
      ]);
      setNewHabit("");
    }
  };

  // Increase progress by 25%, max 100%
  const markDone = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, progress: Math.min(h.progress + 25, 100) } : h
      )
    );
  };

  // Undo progress by 25%, min 0%
  const undoDone = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, progress: Math.max(h.progress - 25, 0) } : h
      )
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Visual Habit Looper</h2>
      <input
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Add a new habit"
        style={{ padding: 8, width: "70%", marginRight: 8 }}
      />
      <button onClick={addHabit} style={{ padding: 8 }}>
        Add Habit
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        {habits.map(({ id, name, progress }) => (
          <li
            key={id}
            style={{
              marginBottom: 16,
              padding: 10,
              border: "1px solid #ccc",
              borderRadius: 6,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{name}</strong>
              <span>{progress}%</span>
            </div>
            <div
              style={{
                height: 10,
                background: "#eee",
                borderRadius: 5,
                overflow: "hidden",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: progress === 100 ? "green" : "#007bff",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => markDone(id)} disabled={progress >= 100}>
                Done
              </button>{" "}
              <button onClick={() => undoDone(id)} disabled={progress <= 0}>
                Undo
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitLooper;
