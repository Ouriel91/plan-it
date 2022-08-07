import { useEffect } from 'react'
import CardItem from '../Card/CardItem'
import Box from '@mui/material/Box'
import Grid from "@mui/material/Grid";
import "../EventPage/EventPageFiles/components/navbar/navbar.scss";
import CardNavbar from './CardNavBar/CardNavbar';
import Footer from '../Footer/Footer';

function CardList({ fetchPlansWithItemsAction, deleteEventAction, plans, event, user }) {

    useEffect(() => {
        fetchPlansWithItemsAction()
    }, [fetchPlansWithItemsAction])

    const renderItems = plans.map(plan => <CardItem key={plan.id} plan={plan} deleteEventAction={deleteEventAction} />)
    const renderings = plans.length === 0 ?       
            <h1>Have no Events yet? 😪, create a new one 😉</h1>  
        : ( 
            <div style={{ marginLeft: '30px', marginTop: '50px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {renderItems}
                    </Grid>
                </Box>
            </div>
        )

    return (
        <div>
            <CardNavbar user={user}/>
            {renderings}
            <Footer/>
        </div>
    )
}

export default CardList
