import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ handleClose }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static" sx={{ backgroundColor: "purple" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="User" {...a11yProps(0)} />
          <Tab label="Corporate" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <Button
              color="inherit"
              size="large"
              variant="text"
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                ml: "25%",
                mt: "5%",
                color: "white",
                backgroundColor: "purple",
                width: "50%",
                "&:hover": { backgroundColor: "purple" },
              }}
              onClick={handleClose}
            >
              <label>LOGIN</label>
            </Button>
            <h3 className="font-thin text-center mt-5">
              Don't have an account?
              <Link to="/sign-up">
                <span className="text-purple-600"> Sign Up</span>
              </Link>
            </h3>
          </>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />

            <Button
              color="inherit"
              size="large"
              variant="text"
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                ml: "25%",
                mt: "5%",
                color: "white",
                backgroundColor: "purple",
                width: "50%",
                "&:hover": { backgroundColor: "purple" },
              }}
              onClick={handleClose}
            >
              <label>LOGIN</label>
            </Button>
          </>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
