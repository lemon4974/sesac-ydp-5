// visitor 모델 정의

const User = (Sequelize, DataTypes) => {
  // Sequelize: models/index.js에서 sequelize
  // DataTypes: models/index.js에서 Sequelize
  const model = Sequelize.define(
    'user', //모델 이름 설정
    {
      // 컬럼 정의
      id: {
        // id INT NOT NULL PRIMARY KEY auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
      },
      pw: {
        type: DataTypes.STRING(20),
      },
    },
    {
      tableName: 'user', // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정(모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      timestamps: false, //createAt updated 컬럼 자동 생성
    }
  );

  return model;
};

module.exports = User;
