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
    privateCar: string;
    LGV:string;
    HGV: string;
    coach: string;
    motorCycle: string;
}

type p = keyof VehicleType;

async function createResultDate(districtInput: string, vehicleType: p) {
    const resultList: SearchResultData[] = [];
    const tempInfo = await ParkingInfoApi.getParkingInfo();
    const tempVac = await SearchVacancyApi.getParkingVacancyInfo(vehicleType);
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
                        if (parkingVacancyDatum[vehicleType] != undefined &&
                            parkingVacancyDatum[vehicleType][0].vacancy_type === "A" &&
                            parkingVacancyDatum[vehicleType][0].vacancy != -1) {
                            resultVac = parkingVacancyDatum[vehicleType][0].vacancy
                        }
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
    const [vehicleType, setVehicleType] = React.useState('');
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
                        value={vehicleType}
                        label="Vehicle Type"
                        onChange={handleVehicleTypeChange}
                    >
                        <MenuItem value={'privateCar'}>Private Car</MenuItem>
                        <MenuItem value={'LGV'}>LGV</MenuItem>
                        <MenuItem value={'HGV'}>HGV</MenuItem>
                        <MenuItem value={'coach'}>Coach</MenuItem>
                        <MenuItem value={'motorCycle'}>Motorcycle</MenuItem>
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