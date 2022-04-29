const usersRouter = require('express').Router();
const {
    handleRegister,
    handleLogin,
    handleLogout,
    handleActivate,
    handleRefresh,
    getUserinfo,
    updateUserInfo
} = require('../controlers/User.controller');


// регистрация и авторизация
usersRouter.post('/signin', handleRegister);
usersRouter.post('/login', handleLogin);
usersRouter.post('/logout', handleLogout);
usersRouter.get('/activate/:link', handleActivate);
usersRouter.get('/refresh', handleRefresh);

// Получение/оновление информации о пользователе
usersRouter.get('/me', getUserinfo);
usersRouter.patch('/me', updateUserInfo);


module.exports = usersRouter;