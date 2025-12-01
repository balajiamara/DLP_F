// // src/pages/Dashboard.jsx
// import React from "react";
// import "./Dashboard.css";

// export default function Dashboard() {
//   // Dummy data for now – later replace with real API data
//   const user = {
//     name: "Balaji",
//     email: "balaji@example.com",
//   };

//   const todaysPlan = [
//     {
//       id: 1,
//       goalTitle: "Python Basics",
//       topics: ["Lists & Tuples", "Sets basics", "If/Else revision"],
//       plannedHours: 2,
//       completed: 1, // topics completed
//       totalTopics: 3,
//     },
//     {
//       id: 2,
//       goalTitle: "SQL Fundamentals",
//       topics: ["SELECT & WHERE", "ORDER BY & LIMIT"],
//       plannedHours: 1.5,
//       completed: 0,
//       totalTopics: 2,
//     },
//   ];

//   const goals = [
//     {
//       id: 1,
//       title: "Complete Python Basics",
//       deadline: "2025-12-05",
//       status: "In Progress",
//       progress: 60,
//     },
//     {
//       id: 2,
//       title: "Master SQL Queries",
//       deadline: "2025-12-10",
//       status: "In Progress",
//       progress: 40,
//     },
//     {
//       id: 3,
//       title: "React Fundamentals",
//       deadline: "2025-12-20",
//       status: "Not Started",
//       progress: 10,
//     },
//   ];

//   const weeklyProgress = {
//     hoursPlanned: 10,
//     hoursCompleted: 6,
//   };

//   const weeklyPercent = Math.round(
//     (weeklyProgress.hoursCompleted / weeklyProgress.hoursPlanned) * 100
//   );

//   const aiHint =
//     "You are close to finishing 'Python Basics'. Tomorrow, focus on practice problems for loops and functions.";

//   const handleLogout = () => {
//     console.log("Logout clicked");
//     // Later: clear auth & redirect
//   };

//   const today = new Date().toLocaleDateString("en-IN", {
//     weekday: "long",
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   return (
//     <div className="dash-root">
//       <div className="dash-container">
//         {/* ===== Top Bar ===== */}
//         <header className="dash-header">
//           <div className="dash-greeting">
//             <p className="dash-greeting-label">Welcome back,</p>
//             <h1 className="dash-greeting-title">
//               {user.name} 👋
//             </h1>
//             <p className="dash-greeting-subtitle">
//               Today is <span className="pill pill-date">{today}</span>.  
//               Stay consistent and your goals will follow.
//             </p>
//           </div>

//           <div className="dash-user-card">
//             <div className="dash-user-info">
//               <div className="dash-avatar">
//                 {user.name.charAt(0).toUpperCase()}
//               </div>
//               <div>
//                 <p className="dash-user-name">{user.name}</p>
//                 <p className="dash-user-email">{user.email}</p>
//               </div>
//             </div>
//             <button className="dash-logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </header>

//         {/* ===== Main Grid ===== */}
//         <main className="dash-main">
//           <section className="dash-card dash-today">
//             <div className="dash-card-header">
//               <h2>Today&apos;s Plan</h2>
//               <button className="ghost-btn">+ Add Plan</button>
//             </div>
//             <p className="dash-card-subtitle">
//               Focus on what matters most today. Mark topics as you complete them.
//             </p>

//             <div className="today-list">
//               {todaysPlan.map((plan) => {
//                 const percent = Math.round(
//                   (plan.completed / plan.totalTopics) * 100
//                 );
//                 return (
//                   <div key={plan.id} className="today-item">
//                     <div className="today-item-header">
//                       <div className="today-item-goal">
//                         <span className="today-goal-pill">
//                           {plan.goalTitle}
//                         </span>
//                         <span className="today-hours">
//                           {plan.plannedHours} hrs
//                         </span>
//                       </div>
//                       <span className="today-progress-label">
//                         {plan.completed}/{plan.totalTopics} done
//                       </span>
//                     </div>

//                     <div className="today-topics">
//                       {plan.topics.map((topic, idx) => (
//                         <div key={idx} className="topic-pill">
//                           <span className="topic-dot" />
//                           <span>{topic}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="today-progress-bar">
//                       <div
//                         className="today-progress-fill"
//                         style={{ width: `${percent}%` }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>

//           <section className="dash-card dash-goals">
//             <div className="dash-card-header">
//               <h2>Goals & Deadlines</h2>
//               <button className="ghost-btn">Manage Goals</button>
//             </div>
//             <p className="dash-card-subtitle">
//               Keep an eye on your upcoming deadlines and overall progress.
//             </p>

//             <div className="goals-list">
//               {goals.map((goal) => (
//                 <div key={goal.id} className="goal-item">
//                   <div className="goal-main">
//                     <p className="goal-title">{goal.title}</p>
//                     <p className="goal-deadline">
//                       Due: <span>{goal.deadline}</span>
//                     </p>
//                   </div>
//                   <div className="goal-meta">
//                     <span
//                       className={`status-pill status-${goal.status
//                         .toLowerCase()
//                         .replace(" ", "-")}`}
//                     >
//                       {goal.status}
//                     </span>
//                     <div className="goal-progress">
//                       <div
//                         className="goal-progress-fill"
//                         style={{ width: `${goal.progress}%` }}
//                       />
//                     </div>
//                     <span className="goal-progress-text">
//                       {goal.progress}%
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>

//         {/* ===== Bottom Row ===== */}
//         <section className="dash-bottom">
//           <div className="dash-card dash-progress">
//             <div className="dash-card-header">
//               <h2>Weekly Progress</h2>
//             </div>
//             <p className="dash-card-subtitle">
//               You&apos;re building consistency. Keep your streak alive!
//             </p>

//             <div className="progress-summary">
//               <div className="progress-numbers">
//                 <div>
//                   <p className="progress-label">Planned</p>
//                   <p className="progress-value">
//                     {weeklyProgress.hoursPlanned} hrs
//                   </p>
//                 </div>
//                 <div>
//                   <p className="progress-label">Completed</p>
//                   <p className="progress-value">
//                     {weeklyProgress.hoursCompleted} hrs
//                   </p>
//                 </div>
//                 <div>
//                   <p className="progress-label">Completion</p>
//                   <p className="progress-value">{weeklyPercent}%</p>
//                 </div>
//               </div>

//               <div className="progress-bar">
//                 <div
//                   className="progress-bar-fill"
//                   style={{ width: `${weeklyPercent}%` }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="dash-card dash-ai">
//             <div className="dash-card-header">
//               <h2>AI Study Suggestions</h2>
//               <span className="pill pill-ai">Smart Tips</span>
//             </div>
//             <p className="dash-card-subtitle">
//               Powered by your goals and recent activity.
//             </p>

//             <p className="ai-text">{aiHint}</p>

//             <div className="ai-actions">
//               <button className="primary-btn">Open AI Planner</button>
//               <button className="ghost-btn subtle">Refresh Suggestion</button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }




// PRODUCTION

// src/pages/Dashboard.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const API_BASE = "https://dailylearningplan.onrender.com/api";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "Learner",
    email: "",
  });

  const [goals, setGoals] = useState([]);
  const [dailyPlans, setDailyPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiHint, setAiHint] = useState(
    "Click the button to generate an AI-powered study suggestion."
  );
  const [error, setError] = useState("");

  // ---------------------------
  // Load user & fetch data
  // ---------------------------
  useEffect(() => {
    // Load stored user (if you saved it in Login)
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        // ignore
      }
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [goalsRes, plansRes] = await Promise.all([
          fetch(`${API_BASE}/goals/`, {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Token ${localStorage.getItem("authToken")}`
            },
          }),
          fetch(`${API_BASE}/daily-plans/`, {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Token ${localStorage.getItem("authToken")}`
            },
          }),
        ]);

        if (!goalsRes.ok || !plansRes.ok) {
          setError("Failed to load data from server.");
          setGoals([]);
          setDailyPlans([]);
          return;
        }

        const goalsData = await goalsRes.json().catch(() => []);
        const plansData = await plansRes.json().catch(() => []);

        setGoals(Array.isArray(goalsData) ? goalsData : []);
        setDailyPlans(Array.isArray(plansData) ? plansData : []);
      } catch (err) {
        console.error("Dashboard data error:", err);
        setError("Something went wrong while loading data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ---------------------------
  // Derived: Today's Plan
  // (keeps SAME structure as your dummy todaysPlan[])
  // ---------------------------
  const todaysPlan = useMemo(() => {
  if (!dailyPlans.length) return [];

  const todayISO = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"

  return dailyPlans
    .filter((dp) => {
      if (!dp.date) return false;
      return String(dp.date).slice(0, 10) === todayISO;
    })
    .map((dp) => {
      const goalTitle = dp.goal_title || dp.goal?.title || "Daily Plan";

      let topicsArray = [];
      if (Array.isArray(dp.topics)) {
        topicsArray = dp.topics;
      } else if (typeof dp.topics === "string") {
        topicsArray = dp.topics
          .split(/[\n,]/)
          .map((t) => t.trim())
          .filter(Boolean);
      }

      const totalTopics = topicsArray.length || 1;
      const completed = dp.is_completed ? totalTopics : 0;

      return {
        id: dp.id,
        goalTitle,
        topics: topicsArray.length ? topicsArray : ["Study session"],
        plannedHours: dp.study_hours || 0,
        completed,
        totalTopics,
      };
    });
}, [dailyPlans]);


  // ---------------------------
  // Derived: Weekly Progress (last 7 days)
  // ---------------------------
  const weeklyProgress = useMemo(() => {
    if (!dailyPlans.length) {
      return {
        hoursPlanned: 0,
        hoursCompleted: 0,
        percent: 0,
      };
    }

    const now = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(now.getDate() - 6); // including today

    let planned = 0;
    let completed = 0;

    for (const dp of dailyPlans) {
      if (!dp.date) continue;
      const d = new Date(dp.date);
      if (isNaN(d.getTime())) continue;

      if (d >= sevenDaysAgo && d <= now) {
        const hrs = Number(dp.study_hours) || 0;
        planned += hrs;
        if (dp.is_completed) {
          completed += hrs;
        }
      }
    }

    const percent =
      planned === 0 ? 0 : Math.round((completed / planned) * 100);

    return {
      hoursPlanned: planned,
      hoursCompleted: completed,
      percent,
    };
  }, [dailyPlans]);

  // ---------------------------
  // AI: generate-plan
  // ---------------------------
  const handleGenerateAIPlan = async () => {
    try {
      setAiLoading(true);
      setAiHint("Generating plan...");

      const today = new Date().toISOString().slice(0, 10);

      const res = await fetch(`${API_BASE}/ai/generate-plan/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Token ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          date: today,
          // Optionally send goal ids if your backend wants them:
          // goals: goals.map((g) => g.id),
        }),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setAiHint(
          data.detail ||
            data.error ||
            "Could not generate a plan right now. Try again."
        );
        return;
      }

      const data = await res.json().catch(() => ({}));

      setAiHint(
        data.plan ||
          data.suggestion ||
          data.message ||
          JSON.stringify(data, null, 2)
      );
    } catch (err) {
      console.error("AI generate error:", err);
      setAiHint("Something went wrong. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  // ---------------------------
  // Logout (optional redirect)
  // ---------------------------
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  // ---------------------------
  // Date text (same as your dummy)
  // ---------------------------
  const todayText = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { hoursPlanned, hoursCompleted, percent: weeklyPercent } =
    weeklyProgress;

  // ---------------------------
  // JSX – SAME STRUCTURE & CLASSES
  // ---------------------------
  return (
    <div className="dash-root">
      <div className="dash-container">
        {/* ===== Top Bar ===== */}
        <header className="dash-header">
          <div className="dash-greeting">
            <p className="dash-greeting-label">Welcome back,</p>
            <h1 className="dash-greeting-title">
              {user.name} 👋
            </h1>
            <p className="dash-greeting-subtitle">
              Today is <span className="pill pill-date">{todayText}</span>.{"  "}
              Stay consistent and your goals will follow.
            </p>
          </div>

          <div className="dash-user-card">
            <div className="dash-user-info">
              <div className="dash-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <p className="dash-user-name">{user.name}</p>
                {user.email && (
                  <p className="dash-user-email">{user.email}</p>
                )}
              </div>
            </div>
            <button className="dash-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {error && (
          <p className="error-text server-error" style={{ marginTop: "8px" }}>
            {error}
          </p>
        )}

        {/* ===== Main Grid ===== */}
        <main className="dash-main">
          {/* ------- Today’s Plan ------- */}
          <section className="dash-card dash-today">
            <div className="dash-card-header">
              <h2>Today&apos;s Plan</h2>
              <button
                className="ghost-btn"
                onClick={() => navigate("/daily-plan")}
              >
                + Add Plan
              </button>
            </div>
            <p className="dash-card-subtitle">
              Focus on what matters most today. Mark topics as you complete
              them.
            </p>

            {loading ? (
              <p className="loading-text">Loading your daily plans...</p>
            ) : todaysPlan.length === 0 ? (
              <p className="empty-text">
                No plans for today yet. Click <strong>+ Add Plan</strong> to
                create one.
              </p>
            ) : (
              <div className="today-list">
                {todaysPlan.map((plan) => {
                  const percent = Math.round(
                    (plan.completed / plan.totalTopics) * 100
                  );
                  return (
                    <div key={plan.id} className="today-item">
                      <div className="today-item-header">
                        <div className="today-item-goal">
                          <span className="today-goal-pill">
                            {plan.goalTitle}
                          </span>
                          <span className="today-hours">
                            {plan.plannedHours} hrs
                          </span>
                        </div>
                        <span className="today-progress-label">
                          {plan.completed}/{plan.totalTopics} done
                        </span>
                      </div>

                      <div className="today-topics">
                        {plan.topics.map((topic, idx) => (
                          <div key={idx} className="topic-pill">
                            <span className="topic-dot" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>

                      <div className="today-progress-bar">
                        <div
                          className="today-progress-fill"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* ------- Goals & Deadlines ------- */}
          <section className="dash-card dash-goals">
            <div className="dash-card-header">
              <h2>Goals & Deadlines</h2>
              <button
                className="ghost-btn"
                onClick={() => navigate("/goal")}
              >
                Manage Goals
              </button>
            </div>
            <p className="dash-card-subtitle">
              Keep an eye on your upcoming deadlines and overall progress.
            </p>

            {loading ? (
              <p className="loading-text">Loading your goals...</p>
            ) : goals.length === 0 ? (
              <p className="empty-text">
                No goals yet. Click <strong>Manage Goals</strong> to create
                one.
              </p>
            ) : (
              <div className="goals-list">
                {goals.map((goal) => {
                  // Try to infer progress/status if your API doesn’t have them
                  const progress =
                    typeof goal.progress === "number" ? goal.progress : 0;
                  const status =
                    goal.status ||
                    (progress >= 100
                      ? "Completed"
                      : progress > 0
                      ? "In Progress"
                      : "Not Started");

                  return (
                    <div key={goal.id} className="goal-item">
                      <div className="goal-main">
                        <p className="goal-title">{goal.title}</p>
                        {goal.deadline && (
                          <p className="goal-deadline">
                            Due:{" "}
                            <span>
                              {new Date(goal.deadline).toLocaleDateString()}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="goal-meta">
                        <span
                          className={`status-pill status-${status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {status}
                        </span>
                        <div className="goal-progress">
                          <div
                            className="goal-progress-fill"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="goal-progress-text">
                          {progress}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </main>

        {/* ===== Bottom Row ===== */}
        <section className="dash-bottom">
          {/* ------- Weekly Progress ------- */}
          <div className="dash-card dash-progress">
            <div className="dash-card-header">
              <h2>Weekly Progress</h2>
            </div>
            <p className="dash-card-subtitle">
              You&apos;re building consistency. Keep your streak alive!
            </p>

            <div className="progress-summary">
              <div className="progress-numbers">
                <div>
                  <p className="progress-label">Planned</p>
                  <p className="progress-value">{hoursPlanned} hrs</p>
                </div>
                <div>
                  <p className="progress-label">Completed</p>
                  <p className="progress-value">{hoursCompleted} hrs</p>
                </div>
                <div>
                  <p className="progress-label">Completion</p>
                  <p className="progress-value">{weeklyPercent}%</p>
                </div>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${weeklyPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* ------- AI Study Suggestions ------- */}
          <div className="dash-card dash-ai">
            <div className="dash-card-header">
              <h2>AI Study Suggestions</h2>
              <span className="pill pill-ai">Smart Tips</span>
            </div>
            <p className="dash-card-subtitle">
              Powered by your goals and recent activity.
            </p>

            <p className="ai-text">{aiHint}</p>

            <div className="ai-actions">
              <button
                className="primary-btn"
                onClick={handleGenerateAIPlan}
                disabled={aiLoading}
              >
                {aiLoading ? "Generating..." : "Open AI Planner"}
              </button>
              <button
                className="ghost-btn subtle"
                onClick={handleGenerateAIPlan}
                disabled={aiLoading}
              >
                Refresh Suggestion
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
