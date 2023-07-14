import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {Button, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import {SearchResultData} from "../../../data/SearchResultData.ts";
import ResultTable from "./ResultTable.tsx";
import * as ParkingInfoApi from "../../../Api/ParkingInfoApi.ts";
import * as SearchVacancyApi from "../../../Api/SearchVacancyApi.ts"

type VehicleType = {
    name: string;
    index: number;
}

const vehicleType0: VehicleType = {name: '', index: 0}
const vehicleType1: VehicleType = {name: 'privateCar', index: 1}
const vehicleType2: VehicleType = {name: 'LGV', index: 2}
const vehicleType3: VehicleType = {name: 'HGV', index: 3}
const vehicleType4: VehicleType = {name: 'coach', index: 4}
const vehicleType5: VehicleType = {name: 'motorCycle', index: 5}


async function createResultDate(districtInput: string, vehicleType: VehicleType) {
    const resultList: SearchResultData[] = [];
    const tempInfo = await ParkingInfoApi.getParkingInfo();
    const tempVac = await SearchVacancyApi.getParkingVacancyInfo(vehicleType.name);
    if (tempInfo!=undefined && tempVac!=undefined)  {
        for (const parkingInfoDatum of tempInfo.results) {
            let resultVac = 0;
            let imgUrl = '';
            if (parkingInfoDatum.district === districtInput) {
                if (parkingInfoDatum.renditionUrls?.square) {
                    imgUrl = parkingInfoDatum.renditionUrls.square
                }
                for (const parkingVacancyDatum of tempVac.results) {
                    if (parkingVacancyDatum.park_Id === parkingInfoDatum.park_Id) {
                        if(parkingVacancyDatum[vehicleType] &&
                            parkingVacancyDatum[vehicleType][0].vacancy_type==="A" &&
                            parkingVacancyDatum[vehicleType][0].vacancy!=-1)
                            resultVac = parkingVacancyDatum[vehicleType][0].vacancy
                        resultList.push({
                                image: imgUrl,
                                name: parkingInfoDatum.name,
                                address: parkingInfoDatum.displayAddress,
                                totalVacancy: resultVac,
                                googleMap: `https://www.google.com/maps/@${parkingInfoDatum.latitude},${parkingInfoDatum.longitude},20z`
                            }
                        )
                    }
                }

            }
        }
    }
    return resultList;
}

export default function SearchBox() {
    const [districtInput, setDistrictInput] = React.useState('');
    const [vehicleType, setVehicleType] = React.useState<VehicleType>(vehicleType0);
    const [resultData, setResultData] = React.useState<SearchResultData[]>([]);
    const handleVehicleTypeChange = (event: SelectChangeEvent) => {
        setVehicleType(event.target.value);
    };
    const handleDistrictInput =  (event) =>    {
        setDistrictInput(event.target.value);
    };

    const handleSearch = async () => {
        setResultData(await createResultDate(districtInput, vehicleType))
    }

    return <>
    <Box sx={{
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
                <TextField
                    fullWidth
                    id="district-input"
                    label="District"
                    variant="outlined"
                    value={districtInput}
                    onChange={handleDistrictInput}/>
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
                        value={vehicleType.name}
                        label="Vehicle Type"
                        onChange={handleVehicleTypeChange}
                    >
                        <MenuItem value={vehicleType1.name}>Private Car</MenuItem>
                        <MenuItem value={vehicleType2.name}>LGV</MenuItem>
                        <MenuItem value={vehicleType3.name}>HGV</MenuItem>
                        <MenuItem value={vehicleType4.name}>Coach</MenuItem>
                        <MenuItem value={vehicleType5.name}>Motorcycle</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid xs={4}>
                <Button
                    variant="contained"
                    onClick={handleSearch}
                >Search</Button>
            </Grid>
            <Grid xs={8}></Grid>
        </Grid>
    </Box>
    <Box sx={{height: '15px'}}></Box>
    <Box>
        <ResultTable data={resultData}/>
    </Box>
    </>
}