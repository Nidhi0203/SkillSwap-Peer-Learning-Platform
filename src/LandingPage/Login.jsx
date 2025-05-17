import  {useState} from "react"
const Login=()=>{
    const [email,setemail]=useState("")
    const  [password,setPassword]=useState("");
    
    const handelChange=()=>{
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
        <form action="" onSubmit={handelChange}>
        <table>
            <tbody>
                <tr>
                    <td><label htmlFor="email">Email</label></td>
                    <td><input type="email" onChange={(e)=>{setemail(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="password">Password</label>
                    </td>
                    <td>
                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    </td>
                </tr>
            </tbody>
        </table>
        </form>
        </>
    )
}
export default Login;