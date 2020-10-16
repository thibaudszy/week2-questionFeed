import React, { useState } from "react";
import Question from "../Question/Question";
import QuestionForm from "../QuestionForm/QuestionForm";
import "./Feed.scss";

export default function Scoreboard() {
  // =============================================================================
  // state declarations
  // =============================================================================

  // sorting state---------------------------------------------------------------------------
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  // players state---------------------------------------------------------------------------
  const [questions, set_questions] = useState([
    { id:1, name:"Thibaud", description:"I wrecked myself. error 404", category = "My code doesn't work", upvotes:3, resolved:false},
    { id:2, name:"Roibin", description:"variable not found", category = "My code doesn't work", upvotes:2, resolved:false},
    { id:3, name:"Tim", description:"I don't undestand useEffet", category = "Need explaining", upvotes:10, resolved:false}
   
  ]);

  // =======================================================================
  // returning the component
  // =======================================================================
  return (
    <div className="Feed">
      {/* <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={reset}> Reset score</button>
        <button onClick={randomize}> Randomize score</button>
      </p>
      <h1>Scoreboard</h1>
      {players_sorted.map((myPlayer) => {
        const { id, name, score } = myPlayer; */}

        return (
          <Question
            key={id}
            id={id}
            name={name}
            description={description}
            category = {category}
            upVotes={upVotes}
            resolved={resolved}
            // incrementupVote={incrementupVote}

          />
        );
      
      {/* <QuestionForm addQuestion={addQuestion} /> */}
    </div>
  );
}


// =============================================================================
// Functions from scoreboard
// =============================================================================

//   // =============================================================================
//   // Function declarations
//   // =============================================================================

//   // Sortiong functions---------------------------------------------------------------------------
//   function compare_score(player_a, player_b) {
//     return player_b.score - player_a.score;
//   }

//   function compare_name(player_a, player_b) {
//     const name_a = player_a.name.toUpperCase();
//     const name_b = player_b.name.toUpperCase();
//     return name_a < name_b ? -1 : name_a > name_b ? 1 : 0;
//   }

//   // change sorting of the players----------------------------------------------------
//   const change_sorting = (event) => {
//     set_sort_by(event.target.value);
//   };

//   // increment the score:--------------------------
//   const incrementScore = (id) => {
//     const newPlayers = [...players].map((player) =>
//       player.id === id ? { ...player, score: player.score + 1 } : player
//     );
//     set_players(newPlayers);
//   };

//   // Set score function---------------------------------------------------------------------------
//   const setScore = (num) => {
//     set_players(
//       [...players].map((player) =>
//         !isNaN(num) ? { ...player, score: num } : { ...player, score: num() }
//       )
//     );
//   };

//   // Reset function---------------------------------------------------------------------------
//   const reset = () => {
//     setScore(0);
//   };
//   // Randomize function---------------------------------------------------------------------------
//   const randomize = () => {
//     const generateRandom0_100 = () => {
//       return Math.round(Math.random() * 100);
//     };
//     setScore(generateRandom0_100);
//   };

//   // sorting the players-----------------------------------------------------------------------------

//   const players_sorted =
//     sort_by === "score"
//       ? [...players].sort(compare_score)
//       : [...players].sort(compare_name);
  // Adding new player-----------------------------------------------------------------------
//   const addPlayer = (newPlayer) => {
//     const ids = [...players].map((player) => player.id);
//     const uniqueId = Math.max(...ids) + 1;

//     const newPlayers = [
//       ...players,
//       { id: uniqueId, name: newPlayer, score: 0 },
//     ];

//     set_players(newPlayers);
//   };