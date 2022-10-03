var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"books","pathMatch":"full"},{"path":"books","loadChildren":"./modules/book/book.module#BookModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/book/book-routing.module.ts","module":"BookRoutingModule","children":[{"path":"","component":"BooksComponent"}],"kind":"module"}],"module":"BookModule"}]},{"path":"passages","loadChildren":"./modules/passages/passages.module#PassagesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/passages/passages-routing.module.ts","module":"PassagesRoutingModule","children":[{"path":"","component":"PassagesComponent"}],"kind":"module"}],"module":"PassagesModule"}]},{"path":"insights","loadChildren":"./modules/insights/insights.module#InsightsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/insights/insights-routing.module.ts","module":"InsightsRoutingModule","children":[{"path":"","component":"InsightsComponent"}],"kind":"module"}],"module":"InsightsModule"}]},{"path":"capture","loadChildren":"./modules/capture/capture.module#CaptureModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modules/capture/capture-routing.module.ts","module":"CaptureRoutingModule","children":[{"path":"","component":"CaptureComponent"}],"kind":"module"}],"module":"CaptureModule"}]},{"path":"account","component":"AccountProfileComponent"}],"kind":"module"}]}
