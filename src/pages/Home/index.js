import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import { MovieIcon } from "../../icons/index";
import styles from "./style";

export default () => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();
  const handleSetSearchText = (event) => {
    setSearchText(event.target.value);
  };
  const handleCleanTextClick = (event) => {
    console.log(10);
  };
  const handleSearchTextClick = (event) => {
    console.log(10);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSetSearchText}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
