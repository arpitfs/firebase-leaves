import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { Button } from '@material-ui/core'

export default function LeaveForm() {
    const value = "";
    const handleDateChange = () => {
        value = "Updated Value"
    }
    return (
        <div>
            <form>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
                >
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div>
                                
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Leave From"
                                    format="MM/dd/yyyy"
                                    value={value}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                    </div>
                            <div>
                                
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Leave Till"
                                format="MM/dd/yyyy"
                                value={value}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                                </div>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div style={{paddingTop:"30px"}}>
                    <Button variant="contained" color="primary">
                            Submit
                    </Button>
                    </div>
                        
                    </div>

            </form>
        </div>
    )
}
