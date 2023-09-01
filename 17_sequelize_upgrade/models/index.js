'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// TODO: 모델 모듈 불러오기
const Player = require('./Player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);
const Team = require('./Team')(sequelize, Sequelize);

// TODO: 관계 형성
// 1) Player : Profile = 1 : 1
// 한 선수 당 하나의 프로필을 가짐
Player.hasOne(Profile, {
  foreignKey: 'player_id',
  sourceKey: 'player_id',
  // 연쇄 삭제, 수정
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Profile.belongsTo(Player, {
  foreignKey: 'player_id',
  targetKey: 'player_id',
});
// 2) Team : Player = 1 : N
// 한 팀에는 여러 선수가 존재
Team.hasMany(Player, { foreignKey: 'team_id', sourceKey: 'team_id' });
Player.belongsTo(Team, { foreignKey: 'team_id', sourceKey: 'team_id' });

// TODO: 관계 정의한 모델들을 db 객체에 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// player, profile, team 테이블 자동 생성
