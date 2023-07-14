import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {SearchResultData} from "../../../data/SearchResultData.ts";
import { styled } from '@mui/material/styles';

type Props = {
    data: SearchResultData[]
}

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function ResultTable(props:Props) {
    return <>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Image</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Address</StyledTableCell>
                        <StyledTableCell align="left">Total&nbsp;Vacancy</StyledTableCell>
                        <StyledTableCell align="left">Google&nbsp;Map</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((item) => (
                        <StyledTableRow
                            hover
                            key={item.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <StyledTableCell component="th" scope="row">
                                {
                                    item.image &&
                                    <img src={`${item.image}`} alt={item.name}/>
                                }
                            </StyledTableCell>
                            <StyledTableCell align="left">{item.name}</StyledTableCell>
                            <StyledTableCell align="left">{item.address}</StyledTableCell>
                            <StyledTableCell align="left">{item.totalVacancy}</StyledTableCell>
                            <StyledTableCell align="left"><Button href={`${item.googleMap}`}>Map</Button></StyledTableCell>
                        </StyledTableRow >
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}