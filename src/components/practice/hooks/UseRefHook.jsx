import { useRef } from "react";

const UseRefHook = ()=>{

    const userName = document.getElementById("userName");
    const password = document.getElementById("password");

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userNameRef.current.value, passwordRef.current.value)
        // console.log(userName.value, password.value)
    }
    return(
        <div className="flex flex-col items-center justify-center mt-5">
            <h1>useRef Hook</h1>
            <form className="flex flex-col gap-3 mt-5" onSubmit={handleSubmit}>
                <input type="text" id='userName' className="bg-white text-black p-2" ref={userNameRef}/>
                <input type="text" id='password' className="bg-white text-black p-2" ref={passwordRef}/>
                <button className="bg-white text-black p-2 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default UseRefHook;