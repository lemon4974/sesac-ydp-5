use sesac2;

drop table visitor;

create table visitor (
	id int primary key not null auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

insert into visitor values (1, '홍길동', '내가 왔다.');
insert into visitor values (2, '이찬혁', '으라차차');

select * from visitor;
desc visitor;

create table users (
	id int primary key not null auto_increment,
    pw varchar(20),
    name varchar(20)
);
select * from users;

-- 새로운 데이터베이스 생성
CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);

-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) 
    VALUES ('sean', 'sean', '1234'), ('test', 'test', '1234'), ('apple', 'apple', '1234'), ('hello', 'hello', '1234');
-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;











