import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SearchResultData} from "../../../data/SearchResultData.ts";

const data: SearchResultData[] = [
    {
        image: "https://sps-opendata.pilotsmartke.gov.hk/rest/getRendition/fs-1%3A693265207413252869411532657339312395903827562313.JPG/square.png",
        name: "Kai Tak Cruise Terminal Car Park 1",
        address: "1st floor, Kai Tak Cruise Terminal, 33 Shing Fung Road, Kowloon Bay, KLN",
        totalVacancy: 100,
        googleMap: "https://www.google.com/maps/@22.3062049,114.2130947,20z"
    },
    {
        image: "",
        name: "Tsing Yin Street",
        address: "Tsing Yin Street, Area 10, Tuen Mun, New Territories",
        totalVacancy: 18,
        googleMap: "https://www.google.com/maps/@22.39818382,113.97418213,20z"
    }
]


export default function ResultTable() {
    return <>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Image</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Total&nbsp;Vacancy</TableCell>
                        <TableCell align="left">Google&nbsp;Map</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {
                                    item.image &&
                                    <img src={`${item.image}`} alt={item.name}/>
                                }
                            </TableCell>
                            <TableCell align="left">{item.name}</TableCell>
                            <TableCell align="left">{item.address}</TableCell>
                            <TableCell align="left">{item.totalVacancy}</TableCell>
                            <TableCell align="left"><Button href={`${item.googleMap}`}>Map</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}