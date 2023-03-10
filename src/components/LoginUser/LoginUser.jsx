
import "./LoginUser.css"
import { useAuthUser } from "../../context/AuthUserContext/AuthUserContext";
import { useState } from "react";

const LoginUser = () => {

	const { authState, logInSucces, logInError, logOutSucces } = useAuthUser();
	const [form, setForm] = useState({username: "", password: ""})

	const handleLogin = (e) => {
		e.preventDefault();
		const uniqueUser = {
			username: "dayan",
			password: "dayan"
		}
		if(form.username === uniqueUser.username && form.password === uniqueUser.password) {
			logInSucces(form.username, form.password)
		} else {
			logInError()
		}
	}

	const handleChange = ({target}) => {
		const {name, value} = target
		setForm({...form, [name]:value})
	}

	return (
		<main>
			<form className="form__login" onSubmit={handleLogin}>
				<h3 className="pb-5 d-flex justify-content-center">Login</h3>
				<div className="mb-5">
					<label htmlFor="exampleInputEmail1" className="form-label">User</label>
					<input type="text" name="username" value={form.username} className="form-control" onChange={handleChange} />
					<label htmlFor="">We'll never share your data with anyone else.</label>
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" name="password" value={form.password} className="form-control" onChange={handleChange} />
				</div>
				<div className="d-grid gap-4 mt-3">
					<button type="submit" className="btn btn-primary ">Login</button>
					<button type="submit" className="btn btn-primary">Register</button>
				</div>
			</form>
		</main>
	)
};

export default LoginUser;
