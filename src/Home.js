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
                <Members name="Arpit Malik" status={true} />
                <Members name="Amol Sakalkale" status={1} />
                <Members name="Sumeet Verma" status={0} />
                <Members name="Mandar Joshi" status={0} />
                <Members name="Anees Mohammed" status={0} />
                <Members name="Uday Patil" status={0} />
                <Members name="Vikram" status={0} />
            </div>
        </div>
    );
}

export default Home;
