FROM node:11.10.1 as build
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY apps/package.json ./
COPY apps/package-lock.json ./
RUN npm install
COPY ./apps/ ./
CMD ["npm", "run", "build"]

FROM ubuntu:18.04
WORKDIR /backend
EXPOSE 8080
COPY apps/requirements.txt ./requirements.txt
RUN apt-get update -y
RUN apt-get install -y locales python3.7 python3-pip
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y locales && sed -i -e' s/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && dpkg-reconfigure --frontend=noninteractive locales && update-locale LANG=en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8
RUN pip3 install --no-cache-dir -r requirements.txt
COPY --from=build /frontend/build /backend/build
COPY ./apps/api/ ./
CMD ["python3", "numeral.py"]

