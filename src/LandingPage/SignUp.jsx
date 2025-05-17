import { useState } from "react";
// import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './SignUp.css'
const SignUp = () => {
    const [email, setemail] = useState("");
    const [pass, setPassword] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        const obj = {
            mail: email,
            passw: pass,
        }
        console.log(obj);
    }

    return (
        <main className="sGM">
            <Container className="container">
                <form onSubmit={handelSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="email" >Email</label></td>
                                <td><input type="email" onChange={(e) => setemail(e.target.value)} required></input></td>
                                {/* <br /> */}
                            </tr>
                            <tr>
                                <td><label htmlFor="password">Password</label></td>
                                <td><input type="password" onChange={(e) => setPassword(e.target.value)} required /></td>
                                {/* <br /> */}
                            </tr>
                            <tr>
                                <td>
                                    <Button type="submit"> Submit</Button>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Already has account? <a href="http://">Log in</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Container>
        </main>
    )
}
export default SignUp;