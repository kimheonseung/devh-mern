# NodeJS API Server

- Express
- MongoDB
- JWT

### dotenv
```shell
MONGO_USER
MONGO_PW
MONGO_DB
MONGO_HOST
SERVER_PORT
AES_KEY
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
JWT_ACCESS_HEADER
JWT_REFRESH_HEADER
```  

## User API
### 1. get users list
```shell
# [GET] user/list
{
    "timestamp": "2022-03-20T08:35:46.057Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27ce9",
            "id": 1,
            "username": "root",
            "password": "$2a$10$7/OVVzZfA9wI1q4viJVmkefkzF7W7bgzwXoBJUXl2C4IVCVMz4tNi",
            "name": "김루트",
            "nickname": "루트김",
            "email": "root@devh.com",
            "phone": "000-0000-0001",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [
                "6236e60d8529f4bb28f27cd2",
                "6236e60d8529f4bb28f27cd3",
                "6236e60d8529f4bb28f27cd4",
                "6236e60d8529f4bb28f27cd5"
            ],
            "departments": [],
            "loginAt": "2022-03-20T08:30:05.019Z",
            "passwordChangedAt": "2022-03-20T08:30:05.019Z",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cea",
            "id": 2,
            "username": "admin",
            "password": "$2a$10$jGszCh15WEW3jxzoLKdNMuFt7ZV53cYPfPnrZH1w7RmZJnGnz3lDC",
            "name": "김관리",
            "nickname": "관리김",
            "email": "admin@devh.com",
            "phone": "000-0000-0002",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [
                "6236e60d8529f4bb28f27cd3",
                "6236e60d8529f4bb28f27cd4",
                "6236e60d8529f4bb28f27cd5"
            ],
            "departments": [],
            "loginAt": "2022-03-20T08:30:05.020Z",
            "passwordChangedAt": "2022-03-20T08:30:05.020Z",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27ceb",
            "id": 3,
            "username": "normal",
            "password": "$2a$10$mvtG3BrlehPfFLDz5.XNveoRYK1LJhp5yudKuXKiwfiSyjb30kk1i",
            "name": "김일반",
            "nickname": "일반김",
            "email": "normal@devh.com",
            "phone": "000-0000-0003",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [
                "6236e60d8529f4bb28f27cd4",
                "6236e60d8529f4bb28f27cd5"
            ],
            "departments": [],
            "loginAt": "2022-03-20T08:30:05.020Z",
            "passwordChangedAt": "2022-03-20T08:30:05.020Z",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cec",
            "id": 4,
            "username": "guest",
            "password": "$2a$10$EWTFu2lWmFvzmP50VtXpPuAdOEESre0ta6FFkxaV/ED9VVcRh/0sW",
            "name": "김손님",
            "nickname": "손님김",
            "email": "guest@devh.com",
            "phone": "000-0000-0004",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [
                "6236e60d8529f4bb28f27cd5"
            ],
            "departments": [],
            "loginAt": "2022-03-20T08:30:05.020Z",
            "passwordChangedAt": "2022-03-20T08:30:05.020Z",
            "__v": 0
        }
    ],
    "paging": {
        "total": 4,
        "rows": 10,
        "page": 1,
        "size": 10,
        "totalPage": 1,
        "start": 1,
        "end": 1,
        "prev": false,
        "next": false,
        "pageList": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    }
}
```
### 2. get one user
```shell
# [GET] user/username?username=admin
{
    "timestamp": "2022-03-20T08:36:12.503Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27cea",
            "id": 2,
            "username": "admin",
            "password": "$2a$10$jGszCh15WEW3jxzoLKdNMuFt7ZV53cYPfPnrZH1w7RmZJnGnz3lDC",
            "name": "김관리",
            "nickname": "관리김",
            "email": "admin@devh.com",
            "phone": "000-0000-0002",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [
                "6236e60d8529f4bb28f27cd3",
                "6236e60d8529f4bb28f27cd4",
                "6236e60d8529f4bb28f27cd5"
            ],
            "departments": [],
            "loginAt": "2022-03-20T08:30:05.020Z",
            "passwordChangedAt": "2022-03-20T08:30:05.020Z",
            "__v": 0
        }
    ]
}
```
### 3. login (return tokens)
```shell
# [POST] user/login
requestBody: {
    "username": "guest",
    "password": "FUvINCZ04YfsfKkLiOTzvA==" # AES256 encoded
}
{
    "timestamp": "2022-03-20T08:37:17.385Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwiYXV0aG9yaXRpZXMiOlsiNjIzNmU2MGQ4NTI5ZjRiYjI4ZjI3Y2Q1Il0sImRlcGFydG1lbnRzIjpbXSwiaWF0IjoxNjQ3NzY1NDM3LCJleHAiOjE2NDc3NjYzMzd9.SFs3fD3jOCdbgNMh_LwNpk9Ak3VD_IaeAJGE_JkhqpQ",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwiYXV0aG9yaXRpZXMiOlsiNjIzNmU2MGQ4NTI5ZjRiYjI4ZjI3Y2Q1Il0sImRlcGFydG1lbnRzIjpbXSwiaWF0IjoxNjQ3NzY1NDM3LCJleHAiOjE2NTU1NDE0Mzd9.41cgVFIeyvHJqddTBq6Lfl1OvKefFLRPcVRzOMa41UQ"
        }
    ]
}
```
### 4. create user
```shell
# [POST] user/create
requestBody: {
    "username": "hskim",
    "password": "RB03OK92CA1itKa5o6fksA==", # AES256 encoded
    "phone": "010-1234-5670",
    "email": "hskim@devh.com",
    "nickname": "hsk",
    "name": "HeonSeung Kim"
}
{
    "timestamp": "2022-03-20T08:40:41.045Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "username": "hskim",
            "password": "$2b$10$b.si/Yk8AOH8KlnJnQLyRu6pUndRLjXnGilwynO6YT/pZShq6uKpq",
            "name": "HeonSeung Kim",
            "nickname": "hsk",
            "email": "hskim@devh.com",
            "phone": "010-1234-5670",
            "accessIp": "*.*.*.*",
            "loginFailIp": "",
            "loginFailCount": 0,
            "statusMessage": "",
            "backgroundImage": "",
            "profileImage": "",
            "loginFailedAt": null,
            "authorities": [],
            "departments": [],
            "_id": "6236e8889e41332c269ba9f0",
            "loginAt": "2022-03-20T08:40:40.812Z",
            "passwordChangedAt": "2022-03-20T08:40:40.812Z",
            "id": 5,
            "__v": 0
        }
    ]
}
```
### 5. update user
```shell
# [POST] user/update
requestBody: {
    "id": 5,
    "phone": "010-1234-5678"
}
{
    "timestamp": "2022-03-20T08:42:23.793Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
### 6. delete user
```shell
# [POST] user/delete
requestBody: {
    "username": "hskim"
}
{
    "timestamp": "2022-03-20T08:42:23.793Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
  
  
## Token API
### 1. refresh token
```shell
# [POST] token/refresh
header: {
    "Authorization": "${expiredToken}",
    "Authorization_": "${refreshToken}"
}
{
    "timestamp": "2022-03-20T08:39:30.306Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwiYXV0aG9yaXRpZXMiOlsiNjIzNmU2MGQ4NTI5ZjRiYjI4ZjI3Y2Q1Il0sImRlcGFydG1lbnRzIjpbXSwiaWF0IjoxNjQ3NzY1NTcwLCJleHAiOjE2NDc3NjY0NzB9.Wi4cKaOHaAZ3I52yM-AElohZzu93B8HDrRvQkVyGcsk",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imd1ZXN0IiwiYXV0aG9yaXRpZXMiOlsiNjIzNmU2MGQ4NTI5ZjRiYjI4ZjI3Y2Q1Il0sImRlcGFydG1lbnRzIjpbXSwiaWF0IjoxNjQ3NzY1NTcwLCJleHAiOjE2NTU1NDE1NzB9.TNMexuRLySn47L0b9JUXM04Dv0esSRa3cQq40dvVm44"
        }
    ]
}
```
  
  
## Authority API
### 1. get authorities
```shell
# [GET] authority/list
{
    "timestamp": "2022-03-20T08:31:38.883Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27cd2",
            "id": 1,
            "name": "root",
            "description": "루트",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd3",
            "id": 2,
            "name": "admin",
            "description": "관리자",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd4",
            "id": 3,
            "name": "normal",
            "description": "일반",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd5",
            "id": 4,
            "name": "guest",
            "description": "게스트",
            "__v": 0
        }
    ],
    "paging": {
        "total": 4,
        "rows": 10,
        "page": 1,
        "size": 10,
        "totalPage": 1,
        "start": 1,
        "end": 1,
        "prev": false,
        "next": false,
        "pageList": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    }
}
```
### 2. get one authority
```shell 
# [GET] authority/name?name=root
{
    "timestamp": "2022-03-20T08:32:28.318Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27cd2",
            "id": 1,
            "name": "root",
            "description": "루트",
            "__v": 0
        }
    ]
}
```
### 3. create authority
```shell
# [POST] authority/create
requestBody: {
    "name": "test"
}
{
    "timestamp": "2022-03-20T08:44:09.853Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "name": "test",
            "description": "",
            "_id": "6236e9599e41332c269ba9f6",
            "id": 5,
            "__v": 0
        }
    ]
}
```
### 4. update authority
```shell
# [POST] authority/update
requestBody: {
    "id": 5,
    "description": "update1"
}
{
    "timestamp": "2022-03-20T08:45:03.643Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
### 5. delete authority
```shell
# [POST] authority/delete
requestBody: {
    "name": "test"
}
{
    "timestamp": "2022-03-20T08:45:03.643Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
  
  
## Department API
### 1. get departments
```shell
# [GET] department/list
{
    "timestamp": "2022-03-20T08:32:50.641Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27cd6",
            "id": 1,
            "name": "DevH.Co",
            "description": "회사명",
            "department": null,
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd7",
            "id": 2,
            "name": "대표이사",
            "description": "대표",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd8",
            "id": 3,
            "name": "기획",
            "description": "기획",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cd9",
            "id": 4,
            "name": "감사",
            "description": "감사",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cda",
            "id": 5,
            "name": "경영",
            "description": "경영",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cdb",
            "id": 6,
            "name": "영업",
            "description": "영업",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cdc",
            "id": 7,
            "name": "연구소",
            "description": "연구소",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cdd",
            "id": 8,
            "name": "인사",
            "description": "인사",
            "department": "6236e60d8529f4bb28f27cda",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cde",
            "id": 9,
            "name": "재무",
            "description": "재무",
            "department": "6236e60d8529f4bb28f27cda",
            "__v": 0
        },
        {
            "_id": "6236e60d8529f4bb28f27cdf",
            "id": 10,
            "name": "국내영업",
            "description": "국내영업",
            "department": "6236e60d8529f4bb28f27cdb",
            "__v": 0
        }
    ],
    "paging": {
        "total": 19,
        "rows": 10,
        "page": 1,
        "size": 10,
        "totalPage": 2,
        "start": 1,
        "end": 2,
        "prev": false,
        "next": false,
        "pageList": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    }
}
```
### 2. get one department
```shell 
# [GET] department/name?name=경영
{
    "timestamp": "2022-03-20T08:33:56.384Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "_id": "6236e60d8529f4bb28f27cda",
            "id": 5,
            "name": "경영",
            "description": "경영",
            "department": "6236e60d8529f4bb28f27cd6",
            "__v": 0
        }
    ]
}
```
### 3. get department tree
```shell
# [GET] department/tree
{
    "timestamp": "2022-03-20T08:34:06.976Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "text": "DevH.Co",
            "children": [
                {
                    "text": "대표이사",
                    "children": [],
                    "id": 2,
                    "name": "대표이사",
                    "description": "대표",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                },
                {
                    "text": "기획",
                    "children": [],
                    "id": 3,
                    "name": "기획",
                    "description": "기획",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                },
                {
                    "text": "감사",
                    "children": [],
                    "id": 4,
                    "name": "감사",
                    "description": "감사",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                },
                {
                    "text": "경영",
                    "children": [
                        {
                            "text": "인사",
                            "children": [],
                            "id": 8,
                            "name": "인사",
                            "description": "인사",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cda",
                                "id": 5,
                                "name": "경영",
                                "description": "경영",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        },
                        {
                            "text": "재무",
                            "children": [],
                            "id": 9,
                            "name": "재무",
                            "description": "재무",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cda",
                                "id": 5,
                                "name": "경영",
                                "description": "경영",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        }
                    ],
                    "id": 5,
                    "name": "경영",
                    "description": "경영",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                },
                {
                    "text": "영업",
                    "children": [
                        {
                            "text": "국내영업",
                            "children": [],
                            "id": 10,
                            "name": "국내영업",
                            "description": "국내영업",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cdb",
                                "id": 6,
                                "name": "영업",
                                "description": "영업",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        },
                        {
                            "text": "해외영업",
                            "children": [],
                            "id": 11,
                            "name": "해외영업",
                            "description": "해외영업",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cdb",
                                "id": 6,
                                "name": "영업",
                                "description": "영업",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        }
                    ],
                    "id": 6,
                    "name": "영업",
                    "description": "영업",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                },
                {
                    "text": "연구소",
                    "children": [
                        {
                            "text": "1연구소",
                            "children": [
                                {
                                    "text": "C개발",
                                    "children": [],
                                    "id": 15,
                                    "name": "C개발",
                                    "description": "C개발",
                                    "department": {
                                        "_id": "6236e60d8529f4bb28f27ce1",
                                        "id": 12,
                                        "name": "1연구소",
                                        "description": "1연구소",
                                        "department": "6236e60d8529f4bb28f27cdc",
                                        "__v": 0
                                    }
                                },
                                {
                                    "text": "C설계",
                                    "children": [],
                                    "id": 16,
                                    "name": "C설계",
                                    "description": "C설계",
                                    "department": {
                                        "_id": "6236e60d8529f4bb28f27ce1",
                                        "id": 12,
                                        "name": "1연구소",
                                        "description": "1연구소",
                                        "department": "6236e60d8529f4bb28f27cdc",
                                        "__v": 0
                                    }
                                }
                            ],
                            "id": 12,
                            "name": "1연구소",
                            "description": "1연구소",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cdc",
                                "id": 7,
                                "name": "연구소",
                                "description": "연구소",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        },
                        {
                            "text": "2연구소",
                            "children": [
                                {
                                    "text": "JAVA개발",
                                    "children": [],
                                    "id": 17,
                                    "name": "JAVA개발",
                                    "description": "JAVA개발",
                                    "department": {
                                        "_id": "6236e60d8529f4bb28f27ce2",
                                        "id": 13,
                                        "name": "2연구소",
                                        "description": "2연구소",
                                        "department": "6236e60d8529f4bb28f27cdc",
                                        "__v": 0
                                    }
                                },
                                {
                                    "text": "JAVA설계",
                                    "children": [],
                                    "id": 18,
                                    "name": "JAVA설계",
                                    "description": "JAVA설계",
                                    "department": {
                                        "_id": "6236e60d8529f4bb28f27ce2",
                                        "id": 13,
                                        "name": "2연구소",
                                        "description": "2연구소",
                                        "department": "6236e60d8529f4bb28f27cdc",
                                        "__v": 0
                                    }
                                }
                            ],
                            "id": 13,
                            "name": "2연구소",
                            "description": "2연구소",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cdc",
                                "id": 7,
                                "name": "연구소",
                                "description": "연구소",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        },
                        {
                            "text": "3연구소",
                            "children": [
                                {
                                    "text": "QA",
                                    "children": [],
                                    "id": 19,
                                    "name": "QA",
                                    "description": "QA",
                                    "department": {
                                        "_id": "6236e60d8529f4bb28f27ce3",
                                        "id": 14,
                                        "name": "3연구소",
                                        "description": "3연구소",
                                        "department": "6236e60d8529f4bb28f27cdc",
                                        "__v": 0
                                    }
                                }
                            ],
                            "id": 14,
                            "name": "3연구소",
                            "description": "3연구소",
                            "department": {
                                "_id": "6236e60d8529f4bb28f27cdc",
                                "id": 7,
                                "name": "연구소",
                                "description": "연구소",
                                "department": "6236e60d8529f4bb28f27cd6",
                                "__v": 0
                            }
                        }
                    ],
                    "id": 7,
                    "name": "연구소",
                    "description": "연구소",
                    "department": {
                        "_id": "6236e60d8529f4bb28f27cd6",
                        "id": 1,
                        "name": "DevH.Co",
                        "description": "회사명",
                        "department": null,
                        "__v": 0
                    }
                }
            ],
            "id": 1,
            "name": "DevH.Co",
            "description": "회사명",
            "department": null
        }
    ]
}
```
### 4. create department
```shell
# [POST] department/create
requestBody: {
    "name": "임시부서",
    "departmentId": 17
}
{
    "timestamp": "2022-03-20T08:46:58.129Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        {
            "name": "임시부서",
            "description": "",
            "department": {
                "_id": "6236e60d8529f4bb28f27ce6",
                "id": 17,
                "name": "JAVA개발",
                "description": "JAVA개발",
                "department": "6236e60d8529f4bb28f27ce2",
                "__v": 0
            },
            "_id": "6236ea019e41332c269ba9fd",
            "id": 20,
            "__v": 0
        }
    ]
}
```
### 5. update department
```shell
# [POST] department/update
requestBody: {
    "id": 20,
    "departmentId": 1,
    "description": "updateParent"
}
{
    "timestamp": "2022-03-20T08:47:51.862Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
### 6. delete department
```shell
# [POST] department/delete
requestBody: {
    "name": "임시부서"
}
{
    "timestamp": "2022-03-20T08:49:10.116Z",
    "status": 200,
    "message": "Success",
    "description": "Response Success",
    "data": [
        true
    ]
}
```
