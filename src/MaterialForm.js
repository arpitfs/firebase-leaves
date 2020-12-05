import { Button, TextField, Input, InputLabel, NativeSelect  } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import "./MaterialForm.css";
import { useState, useEffect } from 'react';
import { db } from "./firebase_config";
import firebase from "firebase";

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiTextField-root": {
            marginTop: "18px",
            width: "100%",
            display: "block",
        },
        "& .MuiButton-root": {
            background: "#9cf4e1",
            color: "white",
            letterSpacing: "6px",
            width: "100%",
            padding: "10px 0",
            marginTop: "20px",
        },
        "& .MuiButton-root:hover": {
            background: "#80f0d8",
        },
        "& .MuiOutlinedInput-input": {
            paddingRight: "45px",
        },
    },
}));

let holidays;
function MaterialForm() {
    const [holidayFromInput, setHolidayFrom] = useState();
    const [holidayTillInput, setHolidayTill] = useState();
    const [messageInput, setMessage] = useState();
    const [calculateVacation, setCalculateVaction] = useState();

    const submitHoliday = (e) => {
        console.log(holidayFromInput)
        e.preventDefault();

        // var parsedStartDay = parseDate(holidayFromInput);
        // var parshedEndDay = parseDate(holidayTillInput);

        // holidays = CalculateHolidays(parsedStartDay, parshedEndDay)
        // db.collection("todo").add({
        //     holidayFrom: parsedStartDay,
        //     holidayTill: parshedEndDay,
        //     message: messageInput,
        //     totalHolidays: holidays
        // });

    }

    function presetHolidays() {
        var parsedStartDay = parseDate(holidayFromInput);
        var parshedEndDay = parseDate(holidayTillInput);

        holidays = CalculateHolidays(parsedStartDay, parshedEndDay);

        setCalculateVaction(true);
    }

    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    }

    function CalculateHolidays(dDate1, dDate2) { // input given as Date objects
        var iWeeks, iDateDiff, iAdjust = 0;
        if (dDate2 < dDate1) return -1; // error code if dates transposed
        var iWeekday1 = dDate1.getDay(); // day of week
        var iWeekday2 = dDate2.getDay();
        iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1; // change Sunday from 0 to 7
        iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;
        if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1; // adjustment if both days on weekend
        iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1; // only count weekdays
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

        // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((dDate2.getTime() - dDate1.getTime()) / 604800000)

        if (iWeekday1 < iWeekday2) { //Equal to makes it reduce 5 days
            iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
        } else {
            iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
        }

        iDateDiff -= iAdjust // take into account both days on weekend
        return (iDateDiff + 1); // add 1 because dates are inclusive
    }

    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (values, e) => {
        console.log("Form data", values);
        e.target.reset();
    };

    return (
        <div className="materialForm">
            <h1>Vacation Tracker</h1>
            <form
                className={classes.root}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                noValidate
            >
                <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
                <NativeSelect
                value="Name"
                inputProps={{
                    name: 'name',
                    id: 'name-native-disabled',
                }}
                >
                <option value="">Select Name</option>
                <option value="olivier">Arpit Malik</option>
                </NativeSelect>
                <TextField
                    label="Vacation From"
                    type="date"
                    name="vdate"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{ marginBottom: "20px" }}
                    onChange={(e) => setHolidayFrom(e.target.value)}
                    inputRef={register({ required: true })}
                />
                {errors.vdate && <p>Required</p>}

                <TextField
                    label="Vacation Till"
                    style={{ marginBottom: "30px" }}
                    type="date"
                    name="tdate"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setHolidayTill(e.target.value)}
                    inputRef={register({ required: true })}
                />
                {errors.tdate && <p>Required</p>}

                <TextField
                    label="Additional Message"
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                    name="Message"
                    variant="outlined"
                    onChange={(e) => setMessage(e.target.value)}
                    inputRef={register({ required: true })}
                />
                {errors.Message && <p>Required</p>}
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Input
                        style={{textAlign: "center"}}
                        placeholder="Total Holidays"
                        inputProps={{ 'aria-label': 'description' }}
                        value={calculateVacation ? holidays : null} />
                    <Button
                        size="small"
                        style={{ backgroundColor: "#00896b", width: "50%", marginLeft: "5px" }}
                        onClick={presetHolidays}>
                        Calculate
                    </Button>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#00896b", marginBottom: "20px" }}
                    onClick={submitHoliday} >
                    Apply
                </Button>

            </form>
        </div>
    );
}

export default MaterialForm;