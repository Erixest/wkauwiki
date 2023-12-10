
### Prerequisites
python`>= 3.8`

### Installing

```bash
# Create a virtual environment
# for example using `virtualenv`
virtualenv -p python3 .venv

# activate venv
source .venv/bin/activte

# Install requirements
pip install -r requirements.txt

# execute migration graph
./manage.py migrate

# run local dev server
./manage.py runserver
```
### Docker

Or just build && run Dockerfile

A local instance of the wiki is now available at [localhost:8000](localhost:8000)

