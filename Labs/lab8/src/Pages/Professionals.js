import NavBar from "../Components/NavBar";
import { Button, Card } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PROFESSIONALS = [
    {
        name: "Mary Smith",
        qualifications: "Licensed Cosmetologist",
        image: "person1.png",
    },
    {
        name: "Jane Doe",
        qualifications: "Licensed Cosmetologist",
        image: "person2.png",
    },
    {
        name: "Emily Johnson",
        qualifications: "Licensed Cosmetologist",
        image: "person3.jpeg",
    },
    {
        name: "Maria Garcia",
        qualifications: "Licensed Cosmetologist",
        image: "person1.png",
    },

]

function Professionals() {

    const history = useNavigate();
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const service = queryParams.get("service");
        if (!service) {
            history('/services'); 
        } 
    }, [history]);

    const service = new URLSearchParams(window.location.search).get("service");

    return (
        <div>
        <NavBar/>
        {/* Title */}
        <div style={{fontFamily: "NonSans", fontSize: 40, margin: 20}}>Professionals</div>
        {/* Professionals */}
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {PROFESSIONALS.map((professional, index) => {
                return (
                    <Card onClick={() => {
                        // Navigate to /professionals?service=service.name
                        window.location.href = `/checkout?service=${service}&professional=${professional.name}`;
                    }} style={{margin: 10, padding: 10, width: 300, height: 300, display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 20, backgroundColor: "#e1f1fd", cursor: "pointer"}}>
                        <img src={require(`../images/${professional.image}`)} style={{width: "100%", height: 275, borderRadius: 20}}/>
                        <div style={{fontFamily: "NonSans", fontSize: 30, margin: 10}}>{professional.name}</div>
                        <div style={{fontFamily: "NonSans", fontSize: 15, margin: 10}}>{professional.qualifications}</div>
                    </Card>
                )
            })}
        </div> 
    </div>
    )
}

export default Professionals;