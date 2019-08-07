const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'resto', // le nom d'utilisateur
password : 'RestoMbd69%', // le mot de passe
database : 'Resto', // le nom de la base de données
});
module.exports = connection;