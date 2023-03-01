import { NavLink } from 'react-router-dom';
import "./NavBarComponent.css"

const NavBarComponent = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
			<div className="container-fluid bg-secondary" >
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
						<li className="nav-item ">
							<NavLink to="/"><p className='nav-link m-0 s'>Home</p></NavLink>
						</li>
						<li className="nav-item dropdown ">
							<p className="nav-link dropdown-toggle m-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Wishes List
							</p>
							<ul className="dropdown-menu bg-secondary">
								<NavLink to="/wishes/all"><li><p className="dropdown-item m-0">All</p></li></NavLink>
								<NavLink to="/wishes/active"><li><p className="dropdown-item m-0">Active</p></li></NavLink>
								<NavLink to="/wishes/completed"><li><p className="dropdown-item m-0">Completed</p></li></NavLink>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
};

export default NavBarComponent;
