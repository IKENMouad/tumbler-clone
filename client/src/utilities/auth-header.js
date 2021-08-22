import { authenticationService } from "../services/auth.service";

function authHeader() {
    const currentUser = authenticationService.currentUser;
    if (currentUser && currentUser.token) {
        return {
            Authorization: `${currentUser.token}`,
            'Content-Type': 'application/json',
        };
    } else {
        return {};
    }
}

export default authHeader;
