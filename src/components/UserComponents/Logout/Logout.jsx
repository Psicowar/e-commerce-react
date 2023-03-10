import { useAuthUser } from '../../../context/AuthUserContext/AuthUserContext';

const Logout = () => {
	const { logOutSucces } = useAuthUser()

	return <span onClick={logOutSucces}>Logout</span>
};

export default Logout;
