import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Typography } from '@mui/material';


function Filter(props) {
    const categoryItem = props.categoryItems || [];
return (
    <Accordion elevation={0}>
        <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
        >
            <Typography component="span" sx={{
                fontSize: 18,
            }}>{props.categoryName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {categoryItem.map((data, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    color="initial"
                    sx={{
                        padding: "5px 20px",
                        bgcolor: "#f3f2ee",
                        my: 1,
                        borderRadius : 1,
                        cursor:'pointer',
                        '&:hover': {
                            bgcolor: "lightgrey",
                            // color:"white",
                            transition:"0.3s all ease"
                        },
                    }}>{data}</Typography>
            ))}
        </AccordionDetails>
    </Accordion>
)
}

export default Filter