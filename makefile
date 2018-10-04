default: build up

build:
	cd .build && docker-compose -f prod.docker-compose.yml build

up:
	cd .build && docker-compose -f prod.docker-compose.yml up

upd:
	cd .build && docker-compose -f prod.docker-compose.yml up -d

clean:
	cd .build && docker-compose -f prod.docker-compose.yml down --rmi all
	cd .build && docker-compose -f dev.docker-compose.yml down --rmi all

dev: dev-build dev-up

dev-build:
	cd .build && docker-compose -f dev.docker-compose.yml build

dev-up:
	cd .build && docker-compose -f dev.docker-compose.yml up
