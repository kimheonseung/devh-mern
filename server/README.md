# NodeJS API Server

- Express
- MongoDB
- JWT
  

## User API
### 1. get users list
```shell
# [GET] user/list
```
### 2. get one user
```shell
# [GET] user/username?username=admin
```
### 3. login (return tokens)
```shell
# [POST] user/login
```
### 4. create user
```shell
# [POST] user/create
```
### 5. update user
```shell
# [POST] user/update
```
### 6. delete user
```shell
# [POST] user/delete
```
  
  
## Token API
### 1. refresh token
```shell
# [POST] token/refresh
```
  
  
## Authority API
### 1. get authorities
```shell
# [GET] authority/list
```
### 2. get one authority
```shell 
# [GET] authority/name?name=root
```
### 3. create authority
```shell
# [POST] authority/create
```
### 4. update authority
```shell
# [POST] authority/update
```
### 5. delete authority
```shell
# [POST] authority/delete
```
  
  
## Department API
### 1. get departments
```shell
# [GET] department/list
```
### 2. get one department
```shell 
# [GET] department/name?name=경영
```
### 3. get department tree
```shell
# [GET] department/tree
```
### 4. create department
```shell
# [POST] department/create
```
### 5. update department
```shell
# [POST] department/update
```
### 6. delete department
```shell
# [POST] department/delete
```