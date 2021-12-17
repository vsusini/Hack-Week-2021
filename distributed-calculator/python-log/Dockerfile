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

COPY . /app
WORKDIR /app

RUN apt-get -q update && \
apt-get install -q -y --no-install-recommends \
xorg \
unzip \
wget \
curl && \
apt-get clean && \
rm -rf /var/lib/apt/lists/* 

RUN mkdir /mcr-install && \
mkdir /opt/mcr && \
cd /mcr-install && \
wget --no-check-certificate -q https://ssd.mathworks.com/supportfiles/downloads/R2020a/Release/5/deployment_files/installer/complete/glnxa64/MATLAB_Runtime_R2020a_Update_5_glnxa64.zip && \
unzip -q MATLAB_Runtime_R2020a_Update_5_glnxa64.zip && \
rm -f MATLAB_Runtime_R2020a_Update_5_glnxa64.zip && \
./install -destinationFolder /opt/mcr -agreeToLicense yes -mode silent && \
cd / && \
rm -rf mcr-install

RUN echo "alive"

ENV LD_LIBRARY_PATH /opt/mcr/v98/runtime/glnxa64:/opt/mcr/v98/bin/glnxa64:/opt/mcr/v98/sys/os/glnxa64:/opt/mcr/v98/extern/bin/glnxa64

ENV XAPPLRESDIR /etc/X11/app-defaults

RUN pip install flask flask_cors
ENTRYPOINT ["python"]
EXPOSE 5002

