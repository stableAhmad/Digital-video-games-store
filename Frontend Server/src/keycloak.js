import Keycloak from "keycloak-js";




const config = {
    "realm": "demo",
    "auth-server-url": "http://localhost:8080/auth",
    "ssl-required": "external",
    "resource": "react-client-name",
    "public-client": true
}




export const _kc = new Keycloak(config);

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
    })
        .then((authenticated) => {
            if (!authenticated) {
                console.log("User is not authenticated.");
            }
            onAuthenticatedCallback();
        })
        .catch(console.error);
};

const doLogin = _kc.login;
const doLogout = _kc.logout;
const getToken = () => _kc.token;
const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;
const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
    initKeycloak,
    doLogin,
    doLogout,
    getToken,
    isLoggedIn,
    updateToken,
    getUsername,
    hasRole,
};

export default UserService;
