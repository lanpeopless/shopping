# Angular 实战拼多多

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0-beta.11.

## HTTP 的调试工具

### 课程中的 Postman 请求的共享

[帖子的请求集合](https://www.getpostman.com/collections/406a2e8e136b27ffc946)

## 积极加载和懒加载的对比

使用 `ng build --prod`，积极加载的情况下

```bash
drwxr-xr-x  11 wangpeng  staff     352  6 17 07:40 .
drwxr-xr-x   3 wangpeng  staff      96  6 17 07:40 ..
-rw-r--r--   1 wangpeng  staff   23643  6 17 07:40 3rdpartylicenses.txt
drwxr-xr-x   5 wangpeng  staff     160  6 17 07:40 assets
-rw-r--r--   1 wangpeng  staff   12014  6 17 07:40 favicon.ico
-rw-r--r--   1 wangpeng  staff     620  6 17 07:40 index.html
-rw-r--r--   1 wangpeng  staff  368944  6 17 07:40 main.33b3d298e8d03659aa54.js
-rw-r--r--   1 wangpeng  staff   69670  6 17 07:40 polyfills-es5.922a67fd874dc92cb2b6.js
-rw-r--r--   1 wangpeng  staff   43976  6 17 07:40 polyfills.e5eef260008d5514eb7b.js
-rw-r--r--   1 wangpeng  staff    1440  6 17 07:40 runtime.741402d1d47331ce975c.js
-rw-r--r--   1 wangpeng  staff      65  6 17 07:40 styles.12ed50d287d52d080a31.css
```

使用 `ng build --prod`，懒加载的情况下

```bash
drwxr-xr-x  15 wangpeng  staff     480  6 17 07:41 .
drwxr-xr-x   3 wangpeng  staff      96  6 17 07:41 ..
-rw-r--r--   1 wangpeng  staff   23643  6 17 07:41 3rdpartylicenses.txt
-rw-r--r--   1 wangpeng  staff    1336  6 17 07:41 5.7d591d5c9c977fbd2d06.js
-rw-r--r--   1 wangpeng  staff    1322  6 17 07:41 6.d0583e13cafd80ee47e8.js
-rw-r--r--   1 wangpeng  staff   10991  6 17 07:41 7.cb95badbc2bac2f4b6d9.js
-rw-r--r--   1 wangpeng  staff    5822  6 17 07:41 8.27b1356226edb45f37ab.js
drwxr-xr-x   5 wangpeng  staff     160  6 17 07:41 assets
-rw-r--r--   1 wangpeng  staff   12014  6 17 07:41 favicon.ico
-rw-r--r--   1 wangpeng  staff     620  6 17 07:41 index.html
-rw-r--r--   1 wangpeng  staff  388423  6 17 07:41 main.11abc942d7d81feb6ed6.js
-rw-r--r--   1 wangpeng  staff   69670  6 17 07:41 polyfills-es5.922a67fd874dc92cb2b6.js
-rw-r--r--   1 wangpeng  staff   43976  6 17 07:41 polyfills.e5eef260008d5514eb7b.js
-rw-r--r--   1 wangpeng  staff    2271  6 17 07:41 runtime.cb354968c2a2a19dc366.js
-rw-r--r--   1 wangpeng  staff      65  6 17 07:41 styles.12ed50d287d52d080a31.css
```

使用 `ng build --aot --prod --build-optimizer=true --vendor-chunk=true` 积极加载的情况下

```bash
drwxr-xr-x  12 wangpeng  staff     384  6 17 07:51 .
drwxr-xr-x   3 wangpeng  staff      96  6 17 07:51 ..
-rw-r--r--   1 wangpeng  staff   23644  6 17 07:51 3rdpartylicenses.txt
drwxr-xr-x   5 wangpeng  staff     160  6 17 07:51 assets
-rw-r--r--   1 wangpeng  staff   12014  6 17 07:51 favicon.ico
-rw-r--r--   1 wangpeng  staff     674  6 17 07:51 index.html
-rw-r--r--   1 wangpeng  staff   84434  6 17 07:51 main.b4a253a8caf85953a60b.js
-rw-r--r--   1 wangpeng  staff   69670  6 17 07:51 polyfills-es5.922a67fd874dc92cb2b6.js
-rw-r--r--   1 wangpeng  staff   43976  6 17 07:51 polyfills.e5eef260008d5514eb7b.js
-rw-r--r--   1 wangpeng  staff    1440  6 17 07:51 runtime.741402d1d47331ce975c.js
-rw-r--r--   1 wangpeng  staff      65  6 17 07:51 styles.12ed50d287d52d080a31.css
-rw-r--r--   1 wangpeng  staff  317845  6 17 07:51 vendor.428c17d34d513a2a5130.js
```

使用 `ng build --aot --prod --build-optimizer=true --vendor-chunk=true` 懒加载的情况下

```bash
drwxr-xr-x  16 wangpeng  staff     512  6 17 07:47 .
drwxr-xr-x   3 wangpeng  staff      96  6 17 07:47 ..
-rw-r--r--   1 wangpeng  staff   23644  6 17 07:47 3rdpartylicenses.txt
-rw-r--r--   1 wangpeng  staff    1336  6 17 07:47 6.471161611c1f28894f1e.js
-rw-r--r--   1 wangpeng  staff    1322  6 17 07:47 7.d17b4a82a0cdc132600e.js
-rw-r--r--   1 wangpeng  staff   10991  6 17 07:47 8.c95e533ecbc39efae1ff.js
-rw-r--r--   1 wangpeng  staff    5822  6 17 07:47 9.66cf756448938c5357be.js
drwxr-xr-x   5 wangpeng  staff     160  6 17 07:47 assets
-rw-r--r--   1 wangpeng  staff   12014  6 17 07:47 favicon.ico
-rw-r--r--   1 wangpeng  staff     674  6 17 07:47 index.html
-rw-r--r--   1 wangpeng  staff   70858  6 17 07:47 main.a787cc76b064ba910b7d.js
-rw-r--r--   1 wangpeng  staff   69670  6 17 07:47 polyfills-es5.922a67fd874dc92cb2b6.js
-rw-r--r--   1 wangpeng  staff   43976  6 17 07:47 polyfills.e5eef260008d5514eb7b.js
-rw-r--r--   1 wangpeng  staff    2271  6 17 07:47 runtime.391c010b008ff9f9b503.js
-rw-r--r--   1 wangpeng  staff      65  6 17 07:47 styles.12ed50d287d52d080a31.css
-rw-r--r--   1 wangpeng  staff  317845  6 17 07:47 vendor.428c17d34d513a2a5130.js
```

## 什么时候采用懒加载

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
