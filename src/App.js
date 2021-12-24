import { Person } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
     
      <Grid container>
        <Grid  item sm={2}></Grid>
        <Grid item sm={8}> <Main /></Grid>
        <Grid item sm={2}></Grid>
        
      </Grid>

      <Footer />
    </div>
  );
}

export default App;
