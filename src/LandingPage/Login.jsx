import { useState } from "react"

import { Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Navba1r from './Navbar';
const Login = () => {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("");

    const handelChange = () => {
        // obj.push({
        //     email:email,
        //     password:password,
        // })
        // console.log(obj);
        console.log(email)
        console.log(password)
    }
    return (
        <>
            <Navba1r></Navba1r>
            <main className="sGM">
                <Container className="container">
                    <form action="" onSubmit={handelChange}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="email">Gmail</label></td>
                                    <td><input type="email" onChange={(e) => { setemail(e.target.value) }} /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="password">Password</label>
                                    </td>
                                    <td>
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Button>Submit</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </Container>
            </main>
        </>
    )
}
export default Login;