.PHONY: setup lint pysetup fesetup test fetest pytest pythonlint frontendlint mypy pylint flake8 black blacklint frontend

help:
	@echo "setup - sets up frontend and backend environment, make sure you have npm installed and venv activated"
	@echo "lint - run all lint tools (frontend and backend) and save reports to reports/ dir"
	@echo "pysetup - setups backend env, activate virtual env before running"
	@echo "fesetup - setups frontend, make sure you have npm installed"
	@echo "test - runs tests"
	@echo "fetest - runs frontend tests"
	@echo "pytest - runs backend tests"
	@echo "pythonlint - run all lint tools (pylint, flake8, bandit) and save reports to reports/ dir"
	@echo "frontendlint - run frontend lint"
	@echo "mypy - runs mypy"
	@echo "pylint - runs pylint"
	@echo "flake8 - runs flake8"
	@echo "black - runs black"
	@echo "blacklint - run black with check flag that only reports on code formatting"
	@echo "frontend - runs npm start dev environment"

setup: pysetup fesetup

test: pytest fetest

lint: pythonlint frontendlint

# Backend tasks
pysetup:
	@echo "** Running python setup..."
	@echo "** Installing dependencies..."
	@pip install -r backend/requirements.txt -r backend/requirements.dev.txt

pytest:
	@echo "** Running python tests..."
	@cd backend/ && pytest;

mypy:
	@echo "** Running mypy..."
	@mypy --config-file backend/mypy.ini backend/

flake8:
	@echo "** Running flake8..."
	@flake8 --config=backend/.flake8 backend/

pylint:
	@echo "** Running pylint..."
	@pylint --load-plugins pylint_django --django-settings-module=core.settings --init-hook "import sys; import os; sys.path.append(os.path.join(os.getcwd(), 'backend'))" --rcfile backend/.pylintrc backend/

black:
	@echo "** Running black..."
	@black backend --target-version py311 --line-length 119

blacklint:
	@echo "** Running black..."
	@black backend --target-version py311 --line-length 119 --check

pythonlint: blacklint mypy pylint flake8


# Frontend tasks
fesetup:
	@echo "** Running frontend setup..."
	@echo "** Installing dependencies..."
	@cd frontend/ && npm ci

fetest:
	@echo "** Running frontend jest tests..."
	@cd frontend/ && npm run test

frontend:
	@echo "** Starting dev server..."
	@cd frontend/ && npm start

frontendlint:
	@echo "** Running javascript lint tools..."
	@cd frontend/ && npm run lint
