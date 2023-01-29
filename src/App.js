import * as React from "react";
import DataTable from "./components/DataTable";
import { Button, Chip, Container, Divider } from "@mui/material";
import KanjiTableSelection from "./components/KanjiTableSelection";
import ROWS, { RENDER_TABLES } from "./components/ROWS";

export default function App() {
  const [value, setValue] = React.useState(RENDER_TABLES[0]);
  const [inputValue, setInputValue] = React.useState("");

  const dataForTableSelection = {
    value, setValue, inputValue, setInputValue
  }

  console.log(ROWS);
  console.log(ROWS.find(x => x.id === value.id));

  return (
    <>
      <Container maxWidth="md">
        <Button variant="contained">Ôn tập</Button>

        <Divider>
          <Chip label="Bảng chữ" />
        </Divider>

        <KanjiTableSelection {...dataForTableSelection}/>

        <div style={{ marginTop: 20 }}>
          <DataTable table={ROWS.find(x => x.id === value.id)} />
        </div>
      </Container>
    </>
  );
}
