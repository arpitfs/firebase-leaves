import './App.css';
import Members from './Members'

function Home() {
    
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <div style={{ marginLeft: "0px" }}>
                <Members name="Member 1" position="Software Engineer" />
                <Members name="Member 1" position="Software Engineer"/>
                <Members name="Member 1" position="Software Engineer" />
                <Members name="Member 1" position="Software Engineer" />
                <Members name="Member 1" position="Software Engineer" />
                <Members name="Member 5" position="Software Engineer" />
                <Members name="Member 6" position="Software Engineer" />
            </div>
        </div>
    );
}

export default Home;
