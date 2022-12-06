import React from 'react'
import TextField from "@mui/material/TextField";
import { Box, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';


export const SearchBar = ({setSearchQuery}) => {
  return (
    <Box sx={{ width: 400, maxWidth: '100%'}}>
        <form>
            <TextField
                fullWidth
                id="search-bar"
                className="text"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Ingresa tu destino"
                variant="standard"
                placeholder="Ejemplo: Puerto Vallarta"
                size="small"
                autoComplete="off"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
        </form>
    </Box>
  )
}
