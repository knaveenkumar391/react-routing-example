import React from "react";
import LinearScaleOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import "../Components/card1.css";
import { Grid, Typography, styled } from "@mui/material";

function StyledCard(props) {
  const { cardTitle, isenableSideMenu, children } = props;
  const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: "#ffffff",
    width: "100%",
    minHeight: "10rem",
    marginBottom: theme.spacing(4),
    borderRadius: theme.spacing(2),
  }));

  return (
    <StyledGrid container direction="column">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, height: "3rem" }}
      >
        <Typography variant="h6">{cardTitle}</Typography>
        {isenableSideMenu && <LinearScaleOutlinedIcon />}
      </Grid>
      <Grid container sx={{px: 2, mt: 1}}>{children}</Grid>
    </StyledGrid>
  );
}

export default StyledCard;
