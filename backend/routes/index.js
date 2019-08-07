var express = require('express');
var router = express.Router();

const connection = require('../conf');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



/* IMAGES */


router.post('/images', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO Librairies SET ?', formData, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'une image");
    }
  });
});


router.get('/images', (req, res) => {
  connection.query('SELECT * from images', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des images');
    } else {
      res.json(results);
    }
  });
});



/*  PLATS  */


router.post('/plats', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO Plat SET ?', formData, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un plat");
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/plats', (req, res) => {
  connection.query('SELECT * from Plat', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des plats');
    } else {
      res.json(results);
    }
  });
});

router.get('/plats/:plats_id', (req, res) => {
  const plats_id = req.params.actu_id;
  connection.query(`SELECT * from Plat WHERE id=${plats_id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un plat");
    } else {
      res.json(results);
      date = new Date();
    }
  });
});

router.put('/plats/:plats_id', (req, res) => {
  const plats_id = req.params.plats_id;
  const formData = req.body;

  connection.query(`UPDATE Plat SET ? WHERE id = ${plats_id}`, [formData, plats_id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un plat");
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/plats/:id', (req, res) => {
  const id = req.params.id;

  connection.query(`DELETE FROM Plat WHERE id = ?`, id, err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un plat");
    } else {
      res.sendStatus(200);
    }
  });
});



/*  VIN  */


router.post('/vins', (req, res) => {
  const formData = req.body;

  connection.query('INSERT INTO Vin SET ?', formData, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un vin");
    } else {
      res.sendStatus(200);
    }
  });
});

router.get('/vins', (req, res) => {
  connection.query('SELECT * from Vin', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des vins');
    } else {
      res.json(results);
    }
  });
});

router.get('/vins/:vins_id', (req, res) => {
  const vins_id = req.params.actu_id;
  connection.query(`SELECT * from Vin WHERE id=${vins_id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un vin");
    } else {
      res.json(results);
      date = new Date();
    }
  });
});

router.put('/vins/:vins_id', (req, res) => {
  const vins_id = req.params.vins_id;
  const formData = req.body;

  connection.query(`UPDATE Vin SET ? WHERE id = ${vins_id}`, [formData, vins_id], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un vin");
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/vins/:id', (req, res) => {
  const id = req.params.id;

  connection.query(`DELETE FROM Vin WHERE id = ?`, id, err => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un vin");
    } else {
      res.sendStatus(200);
    }
  });
});



module.exports = router;
