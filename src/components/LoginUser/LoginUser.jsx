
import "./LoginUser.css"

const LoginUser = () => {
	return (
		<main>
			<form className="form__login">
				<h3 className="pb-5 d-flex justify-content-center">Login</h3>
				<div className="mb-5">
					<label htmlFor="exampleInputEmail1" className="form-label">User</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					<label htmlFor="">We'll never share your data with anyone else.</label>
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
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
