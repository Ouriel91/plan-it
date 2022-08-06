import { useEffect } from 'react'
import CardItem from '../Card/CardItem'
import Box from '@mui/material/Box'
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import logo from "../../images/my-events-logo.jpg"
import "../EventPage/EventPageFiles/components/navbar/navbar.scss";

function CardList({ fetchPlansWithItemsAction, deleteEventAction, plans, event, user }) {

    console.log("plans", plans)

    useEffect(() => {
        fetchPlansWithItemsAction()
    }, [])

    const renderItems = plans.map(plan => <CardItem key={plan.id} plan={plan} deleteEventAction={deleteEventAction} />)
    const renderings = plans.length === 0 ?
        <h1>Have no Events yet? 😪, create a new one 😉</h1>
        : (
            <div style={{ marginLeft: '30px' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {renderItems}
                    </Grid>
                </Box>
            </div>
        )

    return (
        <div>
            {/* <div className="navbar-event">
                <div className="wrapper-event">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="Plan it." height={90} width={90} />
                        </Link>
                        <div className="navbar-title" >
                            <p className="title22" >Plan it.</p>
                            <p className="navbar-sub-title">
                                Friends, Plan, Travel
                            </p>
                        </div>

                        <div className="centered-title-container">
                            <p className="centered-title">{event.headline}</p>
                        </div>
                    </div>
                    <div >
                        {/* <Link to="/my-events" className="my-events22">My Events</Link>
            <img className="user-image" src={image} alt={user.name} /> */}
                    {/* </div>
                </div>
            </div> */} */}
            {renderings}
            </div>
    )
}

export default CardList
