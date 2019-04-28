[![Build Status](https://travis-ci.org/drewmoore/my-transit.svg?branch=master)](https://travis-ci.org/drewmoore/my-transit)
[![codecov](https://codecov.io/gh/drewmoore/my-transit/branch/master/graph/badge.svg)](https://codecov.io/gh/drewmoore/my-transit)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4b8892070e2d36d69702/test_coverage)](https://codeclimate.com/github/drewmoore/my-transit/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4b8892070e2d36d69702/maintainability)](https://codeclimate.com/github/drewmoore/my-transit/maintainability)


# My Transit
Personalized transit reports, currently Berlin's BVG

## Set-Up Environment
- install docker
  - follow steps given at https://docs.docker.com/install/linux/docker-ce/ubuntu/
  - allow non-root use (allows root-level permissions for user!):
    - `sudo groupadd docker`
    - `sudo usermod -G docker -a $USER`
    - logout/login user. May require system restart
- install docker-compose
  - sudo apt install docker-compose

## Commands
- run tests
  - `docker-compose run web yarn test`
- run locally
  - `docker-compose run web`
- deploy
  - `export DIGITALOCEAN_ACCESS_TOKEN=...;`
  - `docker-machine create --driver digitalocean --digitalocean-region fra1 my-transit`
  - `docker-machine ssh my-transit "docker swarm init --advertise-addr ...`
  - `docker-machine env my-transit`
  - `eval $(docker-machine env my-transit)`
  - `docker stack deploy -c docker-compose.yml my-transit`
