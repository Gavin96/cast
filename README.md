#forecast-angular
----
## Getting Start

1. Install dependencies:
```
$ npm install
$ bower install
```

2. Start application:
```
$ gulp serve
```

## Data Schema
```js
user: {
  id: uuid,
  username: character varying,
  password: character varying,
  ...
}

employee_info: {
  id: uuid,
  name: character varying,
  area: text,
  employee_id: character varying,
  employee_title_id: uuid,
  group_id: uuid
  ...
}

employee_title: {
  id: uuid,
  title: character varying,
  ...
}

employee_record: {
  id: uuid,
  project_title: character varying,
  date: timestamp,
  week_no: integer,
  employee_info_id: uuid
  ...
}

group: {
  id: uuid,
  title: character varying
  ...,
}
```

## API Calls

url:
  `/api/login`

params:
  `username: string, password: string`

request:
```json
{
  "username": "luna_123",
  "password": "Lnasd41231"
}
```

response:
  `true or false`

url:
  `api/sheet/employee_records`

params:
  `group_id: string, start_at: string, end_at: string`

request:
```json
{
  "group_id": "d732ab34-f4b8-4371-b882-fb73f3deb20f",
  "start_at": "2016-01-20 00:00:00",
  "end_at": "2016-11-01 00:00:00"
}
```

response:
```json
{
  "data": [
    {
      "employee_id": "",
      "record": [
        {
          "week_no": 1,
          "project_title": ""
        },
        {
          "week_no": 2,
          "project_title": ""
        },
        ...
      ]
    },
    ...
  ]
}
```

url:
`api/sheet/employee_info`

params:
`group_id: string`

request:
```json
{
  "group_id": "d732ab34-f4b8-4371-b882-fb73f3deb20f"
}
```

response:
```json
{
   "data": [
    {
      "employee_id": "",
      "name": "",
      "area": "",          
      "title": ""  
    },
    ...
  ]
}
```

