import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ROWS from "./ROWS";

console.log(ROWS);

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  fontSize: 32,
  minWidth: 100,
}));

function Kanji({ defaultCell }) {
  const [cell, setCell] = React.useState(defaultCell);

  function toggleRemembered(cell) {
    setCell({
      ...cell,
      remembered: !cell.remembered,
    });
  }

  return (
    <>
      {cell.remembered && (
        <StyledButton
          variant="contained"
          color="success"
          onDoubleClick={() => toggleRemembered(cell)}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        >
          {cell.kanji}
        </StyledButton>
      )}

      {!cell.remembered && (
        <StyledButton
          variant="outlined"
          onDoubleClick={() => toggleRemembered(cell)}
          disableTouchRipple={true}
          disableFocusRipple={true}
          disableRipple={true}
        >
          {cell.kanji}
        </StyledButton>
      )}
    </>
  );
}

export default function BasicTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={{ xs: 5 }} spacing={2}>
        {ROWS.map((kanji) => (
          <Grid item xs={1} key={kanji.kanji}>
            <Kanji defaultCell={kanji}></Kanji>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
