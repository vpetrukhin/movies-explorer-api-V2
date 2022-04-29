const MovieRouter = require('express').Router();
const { getMovies, handleDeleteMovie, handleSaveMovie } = require('../controlers/Movie.controller');

MovieRouter.get('/', getMovies); // Возвращает все сохраненные фильмы
MovieRouter.post('/', handleSaveMovie); // Сохранение фильма
MovieRouter.delete('/_id', handleDeleteMovie); // Удаление фильма

module.exports = MovieRouter;