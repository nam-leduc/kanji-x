import * as React from "react";
import DataTable from "./components/DataTable";
import { Button, Chip, Container, Divider } from "@mui/material";

export default function App() {
  return (
    <>
      <Container maxWidth="md">
        <Button variant="contained">Ôn tập</Button>

        <Divider>
          <Chip label="Bảng chữ" />
        </Divider>

        <div style={{ marginTop: 20 }}>
          <DataTable />
        </div>
      </Container>
    </>
  );
}
