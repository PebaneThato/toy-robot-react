# toy-robot-react

> Toy Robot using react

## Description and requirements:
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no
other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed.


## Create a react application that can read in commands of the following form -

```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```

- `PLACE` will put the toy robot on the table in position `X,Y` and facing `NORTH`, `SOUTH`, `EAST` or
`WEST`.
- The origin (0,0) can be considered to be the `SOUTH WEST` most corner.
- The first valid command to the robot is a `PLACE` command, after that, any sequence of
commands may be issued, in any order, including another `PLACE` command. The application
should discard all commands in the sequence until a valid `PLACE` command has been
executed.
- `MOVE` will move the toy robot one unit forward in the direction it is currently facing.
- `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified direction without changing
the position of the robot.
- `REPORT` will announce the `X,Y and F` of the robot. This can be in any form, but standard
output is sufficient.
- A robot that is not on the table can choose the ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT`
commands.
- Input can be from a file, or from standard input, as the developer chooses.

## Constraints:

- `The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any
move that would cause the robot to fall must be ignored`.

## Screenshot of the running application
![alt screenshot](https://i.imgur.com/bQokWLj.png)

## Built with

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://reactjs.org/)**
- **[Redux](https://github.com/reduxjs/redux)**
- **[Create-react-app](https://github.com/facebook/create-react-app)**

## Get started

#### Make sure you have Node.js installed on your machine

```bash
$ node --version
```

#### Clone the repo to your machine

#### Install npm package

```bash
$ npm install
```

#### Start local server

```bash
$ npm start
```

And open `http://localhost:3000` to view it in the browser.

#### Build production

```bash
$ npm build
```

#### Testing

```bash
$ npm test
```

