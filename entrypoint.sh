#!/usr/bin/env bash

python manage.py collectstatic --no-input
python manage.py migrate

$@