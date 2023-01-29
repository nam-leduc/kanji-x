import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { RENDER_TABLES } from "./ROWS";

export default function KanjiTableSelection({value, setValue, inputValue, setInputValue}) {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={RENDER_TABLES}
      sx={{ width: 300 }}
      value={value}

      onChange={(event, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        console.log(newInputValue);
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Bảng Kanji" />}
    />
  );
}
