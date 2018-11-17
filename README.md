[![Build Status](https://travis-ci.org/drewmoore/my-transit.svg?branch=master)](https://travis-ci.org/drewmoore/my-transit)
[![codecov](https://codecov.io/gh/drewmoore/my-transit/branch/master/graph/badge.svg)](https://codecov.io/gh/drewmoore/my-transit)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4b8892070e2d36d69702/test_coverage)](https://codeclimate.com/github/drewmoore/my-transit/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4b8892070e2d36d69702/maintainability)](https://codeclimate.com/github/drewmoore/my-transit/maintainability)


# My Transit
Personalized transit reports, currently Berlin's BVG

## Commands
- build Docker image
  - `docker build -t cantsnuffthedrewster/my-transit-app .`
- run tests
  - `docker-compose build`
  - `docker-compose run web yarn test`
- deploy
  - `export DIGITALOCEAN_ACCESS_TOKEN=...;`
  - `docker-machine create --driver digitalocean --digitalocean-region fra1 my-transit`
  - ` docker-machine ssh my-transit "docker swarm init --advertise-addr ...`
  - ` docker-machine env my-transit`
  - `eval $(docker-machine env my-transit)`
  - `docker stack deploy -c docker-compose.yml my-transit`
