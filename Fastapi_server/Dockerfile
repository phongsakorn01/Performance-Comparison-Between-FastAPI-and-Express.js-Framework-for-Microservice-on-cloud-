FROM python:3.9-slim

WORKDIR /app

COPY ./app /app

COPY ./requirements.txt /app

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY  . .

EXPOSE 8000

CMD [ "python", "main.py" ]