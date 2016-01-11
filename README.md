# CS6460
### Running locally

```sh
gulp watch --env=dev
```

This will build the app and open it up in the browser.

#### Options
```
--env
```

Either `prod` or `dev`

```
--force-build
```

This will skip the linting of your code. Before commiting the code, however, you should run it once with the linter on.

### Testing
```sh
gulp karma
```

and

```
gulp protractor
```
