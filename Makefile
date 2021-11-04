.PHONY: dev-env prod-env
.DEFAULT_GOAL: help

default: help

help:
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

development-env: 
	cp .env.development packages/web/.env

	firebase use dev

production-env: 
	cp .env.production packages/web/.env
	firebase use prod

bootstrap:
	yarn --ignore-engines
	yarn bootstrap
	yarn link
	make development-env
	yarn build

clean:	
	npx lerna clean --yes
	rm -rf node_modules

deploy:
	yarn link
	make development-env
	yarn deploy
