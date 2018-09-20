default: build up

build:
	docker-compose build

up:
	docker-compose up

clean:
	docker-compose down --rmi all
