import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TableView from "./pages/TableView";
import teamdata from "./data/teamdata";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Adds each team's total points to display on its Team Card
function sumPoints(teamdata) {
  let points = 0;
  teamdata.actividades.forEach((actividad) => {
    console.log(actividad.puntos);
    points += actividad.puntos;
  });
  return points;
}

// Route definition
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Main teamdata={teamdata} sumPoints={sumPoints} />}
      ></Route>
      {
        // A separate table view will be created for each team
        teamdata.map((team) => (
          <Route
            path={`team/${team.id}`}
            element={<TableView team={team} score={sumPoints(team)} />}
          />
        ))
      }
    </Routes>
  </BrowserRouter>
);
