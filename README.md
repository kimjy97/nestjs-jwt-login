# nestjs-jwt-login
Nest.js 의 jwt 토큰과 쿠키를 이용한 로그인 코드입니다.
<br/>
<br/>
<br/>
# Intro.
## 실행 방법
- 환경변수 파일 수정 `.local.env` or `.dev.env` 수정
  - 서버 PORT
  - DB PORT
  - DB URL
  - DB USERNAME
  - DB PASSWORD
  - DB SCHEMA NAME

- Module 설치

```
npm install
```

- 서버 실행
```
npm run start:dev
```
or
```
npm run start:local
```
## DB 테이블

- user
  - id : BIGINT NOT NULL AUTO_INCREMENT - ***PK***
  - username : VARCHAR NOT NULL
  - password : VARCHAR NOT NULL
  - name : VARCHAR NOT NULL
- user_authority
  - id : BIGINT NOT NULL AUTO_INCREMENT - ***PK***
  - user_id : BIGINT NOT NULL
  - authority_name : ENUM('ROLE_USER', 'ROLE_ADMIN') NOT NULL

## MySQL 쿼리문
- user 테이블 생성
```sql
CREATE TABLE user (
  id BIGINT NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  PRIMARY KEY(id)
) charset=utf8;
```
- user_authority 테이블 생성
```sql
CREATE TABLE IF NOT EXISTS `test`.`user_authority` (
  id BIGINT NOT NULL AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  authority_name ENUM('ROLE_USER', 'ROLE_ADMIN') NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;
```
- user_authority 테이블 Role 부여
```sql
insert into user_authority (user_id, authority_name) values (1,'ROLE_USER');
insert into user_authority (user_id, authority_name) values (1,'ROLE_ADMIN');
insert into user_authority (user_id, authority_name) values (2,'ROLE_USER');
```

## APIs
- ***POST*** : /auth/register
```json
{
    "username": "abc123",
    "password": "123456",
    "name": "홍길동"
}
```
- ***POST*** : /auth/login
```json
{
    "username": "abc123",
    "password": "123456",
}
```
- ***GET*** : /auth/authenticate
  - Header -> Authorization : Bearer [Token]
<br/>
<br/>
<br/>
<br/>
