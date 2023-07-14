import PageHeader from "./component/PageHeader.tsx";
import SearchBox from "./component/SearchBox.tsx";
import ResultTable from "./component/ResultTable.tsx";
import Box from "@mui/material/Box";


export default function LandingPage() {
    return <>
        <Box sx={{margin: '0 0 0 10px',
            height: 40,
        textAlign: 'left'}}>
            <PageHeader/>
        </Box>
        <Box sx={{margin: '0 0 0 10px'}}>
            <SearchBox/>
        </Box>
        <Box>
            <ResultTable/>
        </Box>
    </>
}