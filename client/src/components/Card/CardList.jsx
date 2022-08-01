import {useEffect, useState} from 'react'
import CardItem from '../Card/CardItem'
import Box from '@mui/material/Box'
import Grid from "@mui/material/Grid";

function CardList({fetchEventAction, plans}) {

    console.log("plans",plans)
    const [allPlans, setAllPlans] = useState([])

    useEffect(() => {
        fetchEventAction()
        setAllPlans(plans)
    },[fetchEventAction])
    
    const renderItems = allPlans.map(plan => <CardItem key={plan.id} plan={plan}/>)
    const renderings = allPlans.length === 0 ? 
        <h1>Have no Events yet? 😪, create a new one 😉</h1> 
        : (
        <div style={{marginLeft: '30px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {renderItems}
                </Grid> 
            </Box> 
        </div>
        )
        
    return (
        <div>{renderings}</div>
    )
}

export default CardList
