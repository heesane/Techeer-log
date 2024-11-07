FROM node:16-alpine

# set working directory
# 작업을 수행할 디렉토리를 지정
WORKDIR /frontend

# 현재 경로에 있는 것을 frontend로 복사
COPY . .

RUN npm cache clean --force

RUN npm install
RUN npm install recoil

RUN npm install framer-motion
RUN npm install vite

# Tags input을 사용하기 위해 추가
COPY react-tagsinput.css ./node_modules/react-tagsinput/react-tagsinput.css

# 배포 시에는 build 파일이 쓰이지 않으므로 상관 없음
RUN npm run build