import Cookies from "js-cookie";

export function handleConsole() {
	const cookie = Cookies.get("Auth-Token");
	if (!cookie) {
		window.open("https://dev.montplex.com/engula/auth0/login");
	} else {
		window.open("https://dev.montplex.com");
	}
}