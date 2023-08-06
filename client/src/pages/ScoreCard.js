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
  <div className="scorecard-container">
  <h1 className="scorecard-title">Golf Score Card</h1>
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
         <TableRow key={index + 1} className="table-row">
           <TableCell>{index + 1}</TableCell>
           <TableCell className="par-input" contentEditable="true"></TableCell>
           <TableCell>
             <input type="checkbox" className="checkbox-input" />
           </TableCell>
           <TableCell>
             <input type="checkbox" className="checkbox-input" />
           </TableCell>
           <TableCell>
             <Button
               variant="outlined"
               onClick={() => handleIncrement(index)}
               className="score-button"
             >
               -
             </Button>
             <span className="score-count">{count}</span>
             <Button
               variant="outlined"
               onClick={() => handleDecrement(index)}
               className="score-button"
             >
               +
             </Button>
           </TableCell>
           <TableCell className="par-input" contentEditable="true"></TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
</div>
);
};

export default ScoreCard;





