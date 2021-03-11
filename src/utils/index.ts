export const LOGIN_TOKEN = 'UserLogin';

export const login = () => 
    localStorage.setItem(LOGIN_TOKEN, 'TOKEN_USER');

export const logout = () => 
    localStorage.removeItem(LOGIN_TOKEN);

export const isLogin = () => {
    if (localStorage.getItem(LOGIN_TOKEN)) {
        return true;
    }

    return false;
}