import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import { toast } from "react-toastify";

const authUserContext = createContext();

export const useAuthUser = () => {
	return useContext(authUserContext)
}

const dataFromLocalStorage = JSON.parse(localStorage.getItem("userAuth"))


export const AuthUserProvider = ({ children }) => {

	const initialValue = { 
		username: dataFromLocalStorage ? dataFromLocalStorage.username : " ", 
		password: dataFromLocalStorage ? dataFromLocalStorage.password : " ",
		isAuthenticated: dataFromLocalStorage ? true : false,
		error: "" 
	}

	const ACTIONS = {
		LOG_IN_SUCCES: "LOGIN_SUCCES",
		LOG_IN_ERROR: "LOGIN_ERROR",
		LOG_OUT_SUCCES: "LOG_OUT"

	}


	const reducer = (state, action) => {
		switch (action.type) {
			case ACTIONS.LOG_IN_SUCCES:
				return {
					username: action.payload.username,
					password: action.payload.password,
					error: "",
					isAuthenticated: true
				};
			case ACTIONS.LOG_IN_ERROR:
				return {
					...initialValue,
					error: "Wrong credentials"
				};

			case ACTIONS.LOG_OUT_SUCCES:
				return {
					...initialValue
				};
			default: return state
		}
	}
	
	const [authState, dispatch] = useReducer(reducer, initialValue)

	const logInSucces = useCallback((username, password) => {
		dispatch({ type: ACTIONS.LOG_IN_SUCCES, payload: { username, password } })
		localStorage.setItem("userAuth", JSON.stringify({ username, password }) )
		toast.success("Logged successfully!")
	}, [])

	const logInError = useCallback(() => {
		dispatch({ type: ACTIONS.LOG_IN_ERROR })
	}, [])

	const logOutSucces = useCallback(() => {
		localStorage.removeItem("userAuth")
		dispatch({ type: ACTIONS.LOG_OUT_SUCCES })
		toast.success("Logged off successfully!")
	}, [])


	const dataAuth = useMemo(() => ({
		authState,
		logInSucces,
		logInError,
		logOutSucces
	}), [authState, logInSucces, logInError, logOutSucces])

	
	return <authUserContext.Provider value={dataAuth}>{children}</authUserContext.Provider>


};


