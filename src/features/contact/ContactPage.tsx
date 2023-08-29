import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/store/configureStore";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function ContactPage(){
    const dispatch = useDispatch();
    const {data, title} = useAppSelector(state => state.counter);

    return(
        <>
            <Typography variant="h2" align="center">
                {title}
            </Typography>
            <Typography variant="h5" align="center">
                {/* The data is : {data}  */}
                <Facebook sx={{ fontSize:30 , marginRight: 10}} />
                <Instagram sx={{ fontSize:30 , marginRight: 10}} />
                <Twitter sx={{ fontSize:30 , marginRight: 10}} />
            </Typography>

            {/* <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} variant="contained" color="error">Decrement</Button>
                <Button onClick={() => dispatch(increment(1))} variant="contained" color="primary">Increment</Button>
                <Button onClick={() => dispatch(increment(5))} variant="contained" color="secondary">Increment by 5</Button>
            </ButtonGroup> */}
        </>
    )
}