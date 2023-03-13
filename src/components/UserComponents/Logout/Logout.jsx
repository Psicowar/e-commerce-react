import { useAuthUser } from '../../../context/AuthUserContext/AuthUserContext';
import "./Logout.css"

const Logout = () => {
	const { logOutSucces } = useAuthUser()

	return <span className="logout-access" onClick={logOutSucces}>Logout</span>
};

export default Logout;
