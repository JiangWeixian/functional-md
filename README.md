# functional-md
> render markdown content in functional

[![npm](https://img.shields.io/npm/v/functional-md)](https://github.com/JiangWeixian/templates/tree/master/packages/core) [![GitHub](https://img.shields.io/github/license/jiangweixian/functional-md)](https://github.com/JiangWeixian/templates/tree/master/packages/ts-lib-template)


## usage

### table

```ts
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
  dataSource: [{
    id: 1,
    name: 'jw'
  }, {
    id: 2,
    name: 'jiangweixian'
  }]
})
```

will output

|ID|NAME|
|-----|-----|
|1|jw|
|2|jiangweixian|