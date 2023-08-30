-- database 인코딩 다시 정의해서 생성
show databases;
drop database sesac;

-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac2 character set utf8mb4 collate utf8mb4_unicode_ci;

use sesac2;

drop table visitor;

create table visitor (
	id int primary key not null auto_increment,
    name varchar(10) not null,
    comment mediumtext
);
desc visitor;

insert into visitor values (1, '홍길동', '내가 왔다.');
insert into visitor values (2, '이찬혁', '으라차차');
-- insert into visitor (name, comment) values('홍길동', '내가 왔다.');

select * from visitor;
