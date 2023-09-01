const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize');
// TODO: 컨트롤러

exports.index = (req, res) => {
  res.render('index');
};

exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const player = await Player.findOne({
      where: { player_id: player_id },
    });
    res.send(player);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.postPlayer = async (req, res) => {
  try {
    const { name, age, team_id } = req.body;
    const newPlayer = await Player.create({
      name: name,
      age: age,
      team_id: team_id,
    });
    res.send(newPlayer);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};

exports.patchPlayer = async (req, res) => {
  try {
    const { player_id } = req.params;
    const { team_id } = req.body;
    const updatedPlayer = await Player.update(
      { team_id: team_id },
      {
        where: {
          player_id: player_id,
        },
      }
    );

    res.send(updatedPlayer); // 성공시 [1], 실패시 [0]
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.deletePlayer = async (req, res) => {
  const { player_id } = req.params;
  try {
    const result = await Player.destroy({
      where: { player_id: player_id },
    });
    console.log(result);
    if (result === 1) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.getTeams = async (req, res) => {
  try {
    // 쿼리 스트링 꺼내오기 (req.query)
    console.log(req.query);
    const { sort, search } = req.query;
    let teams;

    // sort키가 있으면 name 기준 오름차순 정렬
    if (sort === 'name_asc') {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        order: [['name', 'asc']],
      });
    } else if (search) {
      //search key에 대한 값이 있다면
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
        where: {
          name: { [Op.like]: `%${search}%` },
        },
      });
    } else {
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }
    // 없으면 findAll()

    res.send(teams);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!!');
  }
};

exports.getTeam = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      attributes: ['team_id', 'name'],
      where: { team_id: team_id },
    });
    res.send(team);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};
exports.getTeamPlayers = async (req, res) => {
  try {
    const { team_id } = req.params;
    const team = await Team.findOne({
      where: { team_id: team_id },
      include: [{ model: Player }], //join 같은 역할
    });
    res.send(team);
  } catch (err) {
    console.error(err);
    res.send('Internal Server Error!!');
  }
};
