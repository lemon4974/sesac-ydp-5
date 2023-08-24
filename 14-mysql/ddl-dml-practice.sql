use sesac;

create table member3 (
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

desc member3;

-- 5-1. 컬럼 추가
alter table member3 add interest varchar(100);

-- 5-2. 컬럼 수정
alter table member3 modify id varchar(10);

-- 5-3. 컬럼 삭제
alter table member3 drop age;

create table user2 (
	id varchar(10) primary key not null,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

desc user2;
select * from user2;

insert into user2 values('hong1234', '8o4bkg','홍길동', 'M', '1990-01-31', '33');
insert into user2 values('sexysung', '87awjkdf','성춘향', 'F', '1992-03-31', '31');
insert into user2 values('power70', 'qxur8sda','변사또', 'M', '1970-05-02', '53');
insert into user2 values('hanjo', 'jk48fn4','한조', 'M', '1984-10-18', '39');
insert into user2 values('widowmaker', '38ewifh3','위도우', 'F', '1976-06-27', '47');
insert into user2 values('dvadva', 'k3f3ah','송하나', 'F', '2001-06-03', '22');
insert into user2 values('jungkrat', '4ifha7f','정크랫', 'M', '1999-11-11', '24');

select birthday from user2 order by birthday;
select * from user2 where gender='M' order by name desc;
select id, name from user2 where birthday > '1989-12-31' and birthday < '2000-01-01' ;
select * from user2 where birthday like '____-06-__' order by birthday asc;
select * from user2 where gender='M' and birthday > '1969-12-31' and birthday < '1980-01-01';
select * from user2 order by age desc limit 3;
select * from user2 where age >= 25 and age <= 50;
update user2 set pw = '12345678' where id = 'hong1234';
delete from user2 where id = 'jungkrat';

create table authors (
	author_id int primary key not null,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50) 
);
desc authors;

create table books (
	book_id int primary key not null,
    title varchar(100),
    author_id int,
    publication_date date,
    foreign key (author_id) references authors(author_id) on update cascade on delete cascade
);
desc books;

create table orders (
	order_id int primary key not null,
    book_id int,
    customer_name varchar(50),
    order_date date,
    foreign key (book_id) references books(book_id) on update cascade on delete cascade
);
desc orders;

drop table user;






