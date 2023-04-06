import React from "react";
import ClubCard from "./ClubCard";
interface ClubsProps {
  className?: string;
}

// [
//     {
//         "id": 908,
//         "name": "Stal Nysa",
//         "logo": "https://media-2.api-sports.io/volley/teams/908.png",
//         "national": false,
//         "country": {
//             "id": 34,
//             "name": "Poland",
//             "code": "PL",
//             "flag": "https://media-2.api-sports.io/flags/pl.svg"
//         }
//     },
//     {
//         "id": 910,
//         "name": "Zawiercie",
//         "logo": "https://media-3.api-sports.io/volley/teams/910.png",
//         "national": false,
//         "country": {
//             "id": 34,
//             "name": "Poland",
//             "code": "PL",
//             "flag": "https://media-3.api-sports.io/flags/pl.svg"
//         }
//     }
// ]

const Clubs: React.FC<ClubsProps> = ({ className }) => {
  return (
    <div className={`clubs ${className || ""}`}>
      <ClubCard
        name="PSG Stal Nysa"
        logo="https://media-2.api-sports.io/volley/teams/908.png"
        id={1}
      />
      <ClubCard
        name="PSG Stal Nysa"
        logo="https://media-2.api-sports.io/volley/teams/908.png"
        id={2}
      />
    </div>
  );
};

export default Clubs;
