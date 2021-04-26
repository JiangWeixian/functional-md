"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe('table', function () {
    test('default render mode should work', function () {
        var data = src_1.table({
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
        });
        console.log(data);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2ppYW5nd2VpL3Byb2plY3RzL2Z1bmN0aW9uYWwtbWQvdGVzdC90YWJsZS50ZXN0LnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQThCO0FBRTlCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDaEIsSUFBSSxDQUFDLGlDQUFpQyxFQUFFO1FBQ3RDLElBQU0sSUFBSSxHQUFHLFdBQUssQ0FBQztZQUNqQixPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsU0FBUyxFQUFFLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRCxVQUFVLEVBQUUsQ0FBQztvQkFDWCxFQUFFLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsSUFBSTtpQkFDWCxFQUFFO29CQUNELEVBQUUsRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxjQUFjO2lCQUNyQixDQUFDO1NBQ0gsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaWFuZ3dlaS9wcm9qZWN0cy9mdW5jdGlvbmFsLW1kL3Rlc3QvdGFibGUudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWJsZSB9IGZyb20gJy4uL3NyYydcblxuZGVzY3JpYmUoJ3RhYmxlJywgKCkgPT4ge1xuICB0ZXN0KCdkZWZhdWx0IHJlbmRlciBtb2RlIHNob3VsZCB3b3JrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB0YWJsZSh7XG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhSW5kZXg6ICdpZCcsXG4gICAgICAgICAgdGl0bGU6ICdJRCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGFJbmRleDogJ25hbWUnLFxuICAgICAgICAgIHRpdGxlOiAnTkFNRSdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGRhdGFTb3VyY2U6IFt7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnancnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnamlhbmd3ZWl4aWFuJ1xuICAgICAgfV1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH0pXG59KVxuIl0sInZlcnNpb24iOjN9