# functional-md
> render markdown content functional

[![npm](https://img.shields.io/npm/v/functional-md)](https://github.com/JiangWeixian/functional-md) [![NPM](https://img.shields.io/npm/l/functional-md)](https://github.com/JiangWeixian/functional-md)

## usage

```console
npm install functional-md
```

### table

```ts
import { table } from 'functional-md'

table({
  columns: [
    {
      dataIndex: 'id',
      title: 'ID'
    },
    {
      dataIndex: 'name',
      title: 'NAME'
    }
  ],
  dataSource: [
    {
      id: 1,
      name: 'jw'
    },
    {
      id: 2,
      name: 'jiangweixian'
    }
  ]
})
```

will output

|ID|NAME|
|-----|-----|
|1|jw|
|2|jiangweixian|

## features

- table
- menu
- list
- overflow-list
- badge
- code
- image
- link
