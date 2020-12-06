import { ListItemText, Button, ListItem } from '@material-ui/core'

const members = (props) => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <ListItem>
                    <ListItemText primary={props.name} secondary={props.position} />
                </ListItem>
            </div>
            <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "30px",
                marginTop:"15px"
            }}>
                <Button variant="text" href="/ApplyLeave" style={{ color: "#00896b", marginRight: "0px", float:"right" }} >Apply Leave</Button>
            </div>
            </div>
            
        </div>
    );
};

export default members;