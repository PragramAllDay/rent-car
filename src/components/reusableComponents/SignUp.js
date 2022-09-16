import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Header from "../reusableComponents/Header";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MaterialUIPickers from "./DatePicker";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  const labeled = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <Header />
      <h1
        className=" font-bold text-xl text-center pt-10 text-purple-900	 text-[30px]"
        sx={{ color: "purple" }}
      >
        SIGNUP
      </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          columnGap: "40px",
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "48%",
            justifyContent: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name*"
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Last Name*"
            variant="standard"
            fullWidth
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "48%",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Mobile No*"
            variant="standard"
            type={"number"}
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Email Address*"
            variant="standard"
            type={"email"}
            fullWidth
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "48%",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Password*"
            type={"password"}
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Confirm Password*"
            type={"password"}
            variant="standard"
            fullWidth
          />
        </div>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2%",
          gap: "20%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Gender:</h1>
          <div style={{ display: "flex" }}>
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
            <h1 className="mt-2">Male</h1>
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
            <h1 className="mt-2">Female</h1>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="pb-5">Date of Birth:</h1>
          <MaterialUIPickers />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margingTop: "20px",
          marginLeft: "25%",
        }}
      >
        <TextField
          id="standard-basic"
          label="How did you hear about us*"
          variant="standard"
          fullWidth
        />

        <p className="mt-5">
          <Switch {...labeled} defaultChecked />I understand and agree that the
          use of this Website, Mobile Apps, AI and ALL other related Technology
          Platforms are subject to the Terms of Use and Privacy Policy.
        </p>
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
        >
          <h1 className="text-white">SIGNUP</h1>
        </Button>
      </Box>
    </>
  );
}
