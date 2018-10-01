# My Transit
Personalized transit reports, currently Berlin's BVG

## Commands
- build Docker image
  - `docker build -t cantsnuffthedrewster/my-transit-app .`
- deploy
  - `export DIGITALOCEAN_ACCESS_TOKEN=...;`
  - `docker-machine create --driver digitalocean --digitalocean-region fra1 my-transit`
  - ` docker-machine ssh my-transit "docker swarm init --advertise-addr ...`
  - ` docker-machine env my-transit`
  - `eval $(docker-machine env my-transit)`
  - `docker stack deploy -c docker-compose.yml my-transit`
