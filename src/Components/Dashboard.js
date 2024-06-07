import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "material-ui-search-bar";
import MailIcon from "@mui/icons-material/EmailOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import {
  Button,
  Input,
  TextField,
  Typography,
  lighten,
  styled,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import RocketIcon from "@mui/icons-material/Rocket";
import StarsIcon from "@mui/icons-material/Stars";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EventNoteIcon from "@mui/icons-material/EventNote";

import WorkdayLogo from "../Assets/Workday2.png";
import mainImage from "../Assets/mainPicture.png";
import cardImage1 from "../Assets/leftcardImage.png";
import StyledCard from "./StyledCard";
import "../Components/dashboard.css";
import LinearScaleOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Link from '@mui/material/Link';
import GridViewIcon from '@mui/icons-material/GridView';

function Dashboard() {
  const [cardData, setCardData] = useState([
    {
      headding: "A",
      subHeadiing:
        "kjdskjgbdssjgbdsjbsjdbdskjvds,jbv,djbvdvkjdn.kvjndvkjbdfn,vjdblvkjnvkjldhkjbdfkjjbgdsfkjfdskjdfskjdskjgdfskjbgdjsbgdbvhdjvhbdjvhbdvjhbdvkjbdskjbvhkjhvbdbvs",
      isIconEnable: true,
    },
    {
      headding: "B",
      subHeadiing: "sub2",
      isIconEnable: false,
    },
    {
      headding: "C",
      subHeadiing: "sub3",
      isIconEnable: false,
    },
    {
      headding: "D",
      subHeadiing: "sub4",
      isIconEnable: false,
    },
  ]);

  const logoAndLabelData = [
    {
      label: "Contingent Worker Job Aids",
      logo: <RocketIcon className="card-logo" />,
    },
    {
      label: "Favorites",
      logo: <EventNoteIcon className="card-logo" />,
    },
    {
      label: "Favorites",
      logo: <StarsIcon className="card-logo" />,
    },
    {
      label: "Directory",
      logo: <PermContactCalendarIcon className="card-logo" />,
    },
  ];

  return (
    <Grid>
      <Grid container>
        {/* lg for desktop screen and md for tablet screen xs is pending for mobile screen */}
        <Grid container item md={2.5} lg={2.5} className="header-menu-left">
          <Grid container className="menu-icon" md={7} lg={7}>
            <MenuIcon fontSize="medium" />
            <Typography variant="h6" className="typography-menu-icon">
              Menu
            </Typography>
          </Grid>
          <Grid container className="logo-grid" md={5} lg={5}>
            <img className="wrk-day-logo" src={WorkdayLogo} />
          </Grid>
        </Grid>
        <Grid container item md={7.5} lg={7.5} className="header-menu-middle">
          <TextField
            className="search-input-filed"
            variant="standard"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <SearchOutlinedIcon
                  fontSize="medium"
                  style={{ paddingLeft: 25, paddingRight: 10, fill: "gray" }}
                />
              ),
              disableUnderline: true,
            }}
          ></TextField>
          {/* <SearchBar className="search-bar" /> */}
        </Grid>
        <Grid container item md={2} lg={2} className="header-menu-right">
          <Grid className="right-icons">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid className="right-icons">
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid className="right-icons">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <img src={mainImage} className="main-image" />
      </Grid>
      <Grid container className="main-content-grid">
        <Grid container sx={{ marginBottom: "24px", mx: 3, mt: 2 }}>
          <Grid container md={8} lg={8} className="content-left-header">
            <Typography className="left-hedder-typ">
              {" "}
              Good Evening, Akash Kulkarni.
            </Typography>
          </Grid>
          <Grid container md={4} lg={4} className="content-right-header">
            <Typography className="right-header-typ" variant="p">
              {" "}
              Good Evening, Akash Kulkarni.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ mx: 3 }}>
          <Grid container direction="column" md={8.5}>
            <StyledCard
              cardTitle="Awaiting Your Action"
              isenableSideMenu={true}
            >
              <Grid container sx={{ height: "2rem", justifyContent: "center" }}>
                <Typography variant="subtitle1">{`You're all caught-up on your tasks `}</Typography>
              </Grid>
            </StyledCard>
            <StyledCard cardTitle="Timely Suggestions" isenableSideMenu={false}>
              <Grid container sx={{ height: "2rem", justifyContent: "center" }}>
                <Typography variant="subtitle1">{`Here's you will get your updates...`}</Typography>
              </Grid>
            </StyledCard>
            <StyledCard cardTitle="Timely Suggestions" isenableSideMenu={false}>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid
                  container
                  direction={"column"}
                  md={5.9}
                  sx={{ alignItems: "center" }}
                >
                  <Grid
                    container
                    direction={"column"}
                    sx={{
                      border: "1px solid #cdcecf",
                      borderRadius: "15px",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <img
                      src={cardImage1}
                      style={{
                        height: "220px",
                        width: "100%",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                    <Typography variant="subtitle1" sx={{ my: 1 }}>
                      Understand your People Network
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container md={5.9} sx={{ justifyContent: "center" }}>
                  <Grid
                    container
                    direction={"column"}
                    sx={{
                      border: "1px solid #cdcecf",
                      borderRadius: "15px",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <img
                      src={cardImage1}
                      style={{
                        height: "220px",
                        width: "100%",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                    <Typography variant="subtitle1" sx={{ my: 1 }}>
                      Understand your People Network
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </StyledCard>
          </Grid>
          <Grid container md={3.1} direction="column">
            <StyledCard cardTitle="Timely Suggestions" isenableSideMenu={false}>
              <Grid container sx={{ justifyContent: "center" }}>
                <Typography variant="subtitle1">{`Here's you will get your updates...`}</Typography>
              </Grid>
            </StyledCard>
            <StyledCard cardTitle="Your Top Apps" isenableSideMenu={false}>
              <Grid container mb={2}>
                {logoAndLabelData.map((item) => (
                  <Grid container className="card-con">
                    <Grid container md={3} sx={{ justifyContent: "center" }}>
                      {item.logo}
                    </Grid>
                    <Grid
                      container
                      md={9}
                      sx={{
                        fontSize: 19,
                        fontWeight: "600",
                        alignItems: "center",
                        padding: "10px",
                      }}
                    >
                      {item.label}
                    </Grid>
                  </Grid>
                ))}
                <Grid container alignItems={'end'} mt={'10px'} >
                  <GridViewIcon className="link-icon"/>
                  <Link className="link-apps"   variant="body2" underline="always" sx={{fontWeight:600,fontSize:13}}>
                    {'View All Apps'}
                  </Link>
                </Grid>
              </Grid>
            </StyledCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
