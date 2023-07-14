import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";

export default function SearchBox() {
    const [vehicleType, setVehicleType] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setVehicleType(event.target.value);
    };
    return <Box sx={{
        flexGrow: 1,
        padding: '20px 20px 20px 20px',
        border: '1px solid black',
        borderRadius: '5px'
    }}>
        <Grid container spacing={2}>
            <Grid xs={4}>
                District
            </Grid>
            <Grid xs={8}>
                <TextField fullWidth id="outlined-basic" label="District" variant="outlined"/>
            </Grid>
            <Grid xs={4}>
                Vehicle Type
            </Grid>
            <Grid xs={8}>
                <FormControl fullWidth>
                    <InputLabel id="vehicle-type">Vehicle Type</InputLabel>
                    <Select
                        labelId="vehicle-type"
                        id="vehicle-type-select"
                        value={vehicleType}
                        label="Vehicle Type"
                        onChange={handleChange}
                    >
                        <MenuItem value={'privateCar'}>Private Car</MenuItem>
                        <MenuItem value={'LGV'}>LGV</MenuItem>
                        <MenuItem value={'HGV'}>HGV</MenuItem>
                        <MenuItem value={'coach'}>Coach</MenuItem>
                        <MenuItem value={'motorcycle'}>Motorcycle</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid xs={4}>
                <Button variant="contained">Search</Button>
            </Grid>
            <Grid xs={8}></Grid>
        </Grid>
    </Box>
}