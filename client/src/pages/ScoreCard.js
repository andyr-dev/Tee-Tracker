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

const ScoreCard = () => {
  const [holeCounts, setHoleCounts] = useState(Array(18).fill(0));

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

  return (
    <div>
      <h1>Golf Score Card</h1>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {holeCounts.map((count, index) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell contentEditable="true"></TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleIncrement(index)}
                  >
                    -
                  </Button>
                  <span>{count}</span>
                  <Button
                    variant="outlined"
                    onClick={() => handleDecrement(index)}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell contentEditable="true"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScoreCard;
