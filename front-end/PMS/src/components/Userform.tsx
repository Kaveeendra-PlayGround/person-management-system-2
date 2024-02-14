import {colors, Grid, Input, Typography} from "@mui/material";

const Userform = (props : any) => {
    return (
        <>

            <Grid
                container
                spacing={2}
                sx={{
                    backgroundColor: "#ffffff",
                    marginBottom : "30px",
                    display : "block"
                }}
            >
                <Grid item xs={12}>
                    <Typography component={'h1'}
                    sx={ {color: "#000000"}}
                    >User Form</Typography>
                </Grid>
                {/*id grid*/}
                <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                    <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: "#000000",
                        marginRight: '20px',
                        fontSize : '16px',
                        width : '100px',
                        display : 'block'
                    }}
                    >ID</Typography>
                    <Input
                        type="number"
                        id="id"
                        name="id"
                        sx={{
                            width:"400px"
                        }}
                        value={''}
                        onChange={e=>{}}
                    />
                </Grid>
                {/*name grid*/}
                

            </Grid>
        </>
    );
};

export default Userform;