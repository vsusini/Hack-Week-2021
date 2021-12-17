# FROM python:3.7-alpine
# FROM mathworks/matlab:latest
# COPY . /app
# WORKDIR /app
# RUN pip install flask flask_cors
# ENTRYPOINT ["python"]
# EXPOSE 5001
# CMD ["app.py"]

FROM ubuntu:18.04
FROM python:3.7-alpine

RUN apt-get update
RUN apt-get install -y octave

COPY . /app
WORKDIR /app

RUN pip install flask flask_cors
ENTRYPOINT ["python"]
EXPOSE 5002

ENV SCRIPT=""
COPY octave_runner /
RUN chmod +x /octave_runner

CMD /octave_runner -d $SCRIPT
