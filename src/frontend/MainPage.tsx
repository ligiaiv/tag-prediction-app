import React from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'
import CreateSummaryPage from "./CreateSummaryPage.tsx";
import {Box, Grid} from '@mui/joy';

const MainPage: React.FunctionComponent = () => {
    const fetchUser= async (): Promise<UserResponse>  => {
      const response = await axios.get('http://localhost:8000/users');
      return response.data.data[0];
    }
    const { data: userData} = useQuery<UserResponse>({queryKey : ['user'], queryFn : fetchUser});
    console.log("data", userData)
    return (
        <div className="main-page">
          <Grid
            container
            spacing={2}
            sx={{
              margin:0,
              flexGrow: 1,
                height: {
                    xs: '100%',
                    sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                },
            }}
          >
            <Grid className="right-bar" columns={2}  sx = {{ flexGrow: 1, flexDirection: "row" }}>
                <Box mb={2}
                //      sx={{
                //     display: 'flex',
                //     flexDirection: 'column',
                //     flexGrow: 1,
                //     width: '100%',
                // }}
                >
                    <p>oieeeeee</p>

                </Box>
                <Box mb={2}             >
                    <p>oieeeeee</p>

                </Box>
                <Box mb={2}             >
                    <p>oieeeeee</p>

                </Box>

            </Grid>
            <Grid columns={2} sx={{ flexGrow: 1, alignItems: "center", padding:"100px"}}>
              <CreateSummaryPage/>
            </Grid>
          </Grid>

          {/*<Grid container spacing={2} sx={{ flexGrow: 1 }}>*/}
          {/*  <Grid size={8} >*/}
          {/*    <p>oieee</p>*/}
          {/*  </Grid>*/}
          {/*  <Grid size={4}>*/}
          {/*    <Card>size=4</Card>*/}
          {/*  </Grid>*/}
          {/*  <Grid size={4}>*/}
          {/*    <Card>size=4</Card>*/}
          {/*  </Grid>*/}
          {/*  <Grid size={8}>*/}
          {/*    <Card>size=8</Card>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}

        </div>
    )
}

export default MainPage;