# TeamsAccordian

## Functionality

This Angular application takes in data from a local JSON file and displays the formatted data in a nested accordion displayed on the rendered page.

## Considerations for alternative approaches

1. I would consider the reformatting of the data the job of an API to take the workload away from the browser, as this is some heavy lifting
2. The JSON loader would have been better using a get request, however, this is possibly pre-optimisation
3. I would have liked to make a more dynamic data formatter function, possibly using recursion rather than relying on a fixed depth of nested data (3 layers deep)
4. I would have preferred to use more modern CSS tricks, such as flexbox/grid and animations
5. I would have liked to add more unit tests for example rendered items tests, however I have covered the most important sections

# General information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
