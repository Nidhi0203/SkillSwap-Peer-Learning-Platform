import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css';
const Navba1r = () => {
    return (
        <>
            <Navbar className="nav-bar">
                
                    <Nav.Item className="nav-item">Home</Nav.Item>
                    <Nav.Item className="nav-item">Lectue</Nav.Item>
                    <Nav.Item className="nav-item">Skill</Nav.Item>
                    <Nav.Item className="nav-item">Explore</Nav.Item>
                    <Nav.Item className="nav-item">Trending</Nav.Item>
                    <Nav.Item className="nav-item">Search<input placeholder="Search Here"></input></Nav.Item>
            </Navbar>
        </>
    )
}
export default Navba1r;