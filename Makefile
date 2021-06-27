mysql-start:                 ## Will run mysql using docker composer
	docker-compose up db

mysql-stop:                   ## Will stop mysql using docker composer
	docker-compose down --remove-orphans
