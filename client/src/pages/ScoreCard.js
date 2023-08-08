import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../utils/mutations";

const ScoreCard = () => {
  const [holeCounts, setHoleCounts] = useState(Array(18).fill(0));
  const [GIRValues, setGIRValues] = useState(Array(18).fill(false));
  const [FIRValues, setFIRValues] = useState(Array(18).fill(false));
  const [parValues, setParValues] = useState(Array(18).fill(0));
  const [scoreToParValues, setScoreToParValues] = useState(Array(18).fill(0));

  const handleIncrement = (holeIndex) => {
    setHoleCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[holeIndex] = prevCounts[holeIndex] + 1;
      return newCounts;
    });
  };

  const handleDecrement = (holeIndex) => {
    setHoleCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[holeIndex] = prevCounts[holeIndex] - 1;
      return newCounts;
    });
  };

  const handleFIRChange = (holeIndex) => {
    setFIRValues((prevFIRValues) => {
      const newFIRValues = [...prevFIRValues];
      newFIRValues[holeIndex] = !prevFIRValues[holeIndex];
      return newFIRValues;
    });
  };

  const handleGIRChange = (holeIndex) => {
    setGIRValues((prevGIRValues) => {
      const newGIRValues = [...prevGIRValues];
      newGIRValues[holeIndex] = !prevGIRValues[holeIndex];
      return newGIRValues;
    });
  };
  const handleParChange = (holeIndex, event) => {
    const newParValues = [...parValues];
    newParValues[holeIndex] = parseInt(event.target.value, 10);
    setParValues(newParValues);
  };

  const handleScoreToParChange = (holeIndex, event) => {
    const newScoreToParValues = [...scoreToParValues];
    newScoreToParValues[holeIndex] = parseInt(event.target.value, 10);
    setScoreToParValues(newScoreToParValues);
  };

  const [createGame] = useMutation(ADD_GAME);

  const saveScoreCardToDB = () => {
    const scoreCardData = holeCounts.map((count, index) => ({
      hole: index + 1,
      par: parValues[index],
      GIR: GIRValues[index],
      FIR: FIRValues[index],
      putts: count,
      scoreToPar: scoreToParValues[index],
    }));
    console.log(scoreCardData);

    createGame({ variables: { gameData: scoreCardData } })
      .then((response) => {
        alert("Score card saved successfully", response.data);
      })
      .catch((error) => {
        console.error("Error saving score card:", error);
      });
  };
  return (
    <div className="scorecard-container">
  
      <h1 className="scorecard-title">Golf Score Card</h1>
      <Button variant="contained" onClick={saveScoreCardToDB}>
        Save Score Card
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hole</TableCell>
              <TableCell>Par</TableCell>
              <TableCell>F.I.R</TableCell>
              <TableCell>G.I.R</TableCell>
              <TableCell>Putts</TableCell>
              <TableCell>Score to Par</TableCell>
            </TableRow>``
          </TableHead>
          <TableBody>
            {holeCounts.map((count, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="par-input">
                  <input
                    type="number" className="test-input"
                    size="small"
                    value={parValues[index]}
                    onChange={(event) => handleParChange(index, event)}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={FIRValues[index]}
                    onChange={() => handleFIRChange(index)}
                  />
                </TableCell>
                <TableCell>
                  <input
                    className="checkbox-input"
                    type="checkbox"
                    checked={GIRValues[index]}
                    onChange={() => handleGIRChange(index)}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </Button>
                  <span>{count}</span>
                  <Button
                    variant="outlined"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell className="par-input">
                  <input
                    type="number" className="test-input"
                    size="small"
                    value={scoreToParValues[index]}
                    onChange={(event) => handleScoreToParChange(index, event)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScoreCard;
