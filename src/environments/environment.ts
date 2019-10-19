// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  httpUrl: 'https://api.dev.telehealer.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// Here are the APIs

// This one should be hard-coded to retrieve the JWT (X-Access-Token)
// 1. curl -X POST 'https://api.dev.telehealer.com:443/login' --header 'Content-Type: application/json' 'Host: api.dev.telehealer.com:443' -d '{"email" : "viveks51@mail.com","password": "Vivek_21" }'


// 2. Retrieve all schedules 
// curl -X GET 'https://api.dev.telehealer.com:443/api/schedule?paginate=true&page_size=10&page=1' 'Host: api.dev.telehealer.com:443' -H 'X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZpdmVrczUxQG1haWwuY29tIiwibmFtZSI6IkpvaG4gRm94IiwidG9rZW5faWQiOiJmZmY5YTMwMC1lNWUyLTExZTgtYTMxZC1lYmI0MWE1NDY2ZGUiLCJjbGFpbSI6eyJhY2Nlc3MiOiJXIn0sInVzZXJfZ3VpZCI6IjgyOWUzOTczLTI2NzMtNDk3MC05NmMyLTE2MWNhYzYwNTI5OSIsInVzZXJfaWQiOjMzNiwicGhvbmUiOiIrOTE5NTMzOTk4MjEyIiwiaXNzIjoiRWVrc2hheSIsInZlcnNpb24iOiJkZWZhdWx0IiwidXNlcl9hY3RpdmF0ZWQiOiJBQ1RJVkFURUQiLCJyb2xlIjoiQlVTRVIiLCJpYXQiOjE1NzA3NjUxMDEsImV4cCI6MTU3MDc2ODcwMX0.Zwh374f6m9CfGAts55z13VWPWLUT0FBypFbNVTKZl4g'

// 3. Retrieve schedule details for a specific day
// curl -X GET 'https://api.dev.telehealer.com:443/api/schedule?month=10&day=10&year=2019' 'Accept: */*' 'Host: api.dev.telehealer.com:443' --header 'X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InZpdmVrczUxQG1haWwuY29tIiwibmFtZSI6IkpvaG4gRm94IiwidG9rZW5faWQiOiJmZmY5YTMwMC1lNWUyLTExZTgtYTMxZC1lYmI0MWE1NDY2ZGUiLCJjbGFpbSI6eyJhY2Nlc3MiOiJXIn0sInVzZXJfZ3VpZCI6IjgyOWUzOTczLTI2NzMtNDk3MC05NmMyLTE2MWNhYzYwNTI5OSIsInVzZXJfaWQiOjMzNiwicGhvbmUiOiIrOTE5NTMzOTk4MjEyIiwiaXNzIjoiRWVrc2hheSIsInZlcnNpb24iOiJkZWZhdWx0IiwidXNlcl9hY3RpdmF0ZWQiOiJBQ1RJVkFURUQiLCJyb2xlIjoiQlVTRVIiLCJpYXQiOjE1NzA3NjEzMTcsImV4cCI6MTU3MDc2NDkxN30.gpDV2o2iN7BkQDouxlTVFgqPElw-1dZUOTg_myS_xFU' 

// Replace the X-Access-Token values with the JWT value that comes through in the login response.
