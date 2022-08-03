import {useEffect} from 'react'
import CardItem from '../Card/CardItem'
import Box from '@mui/material/Box'
import Grid from "@mui/material/Grid";

function CardList({fetchPlansWithItemsAction,deleteEventAction, plans}) {

    console.log("plans",plans)

    useEffect(() => {
        fetchPlansWithItemsAction()
    },[])
    
    const renderItems = plans.map(plan => <CardItem key={plan.id} plan={plan} deleteEventAction={deleteEventAction}/>)
    const renderings = plans.length === 0 ? 
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
