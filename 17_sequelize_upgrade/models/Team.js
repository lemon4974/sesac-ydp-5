const TeamModel = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(63),
      allowNull: false,
    },
  }, {
    freezeTableName: true
  });
  return Team;
};

module.exports = TeamModel;