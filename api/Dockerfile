# Node.js 베이스 이미지
FROM node:20

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 필요한 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 환경 변수 로드 (.env 파일 복사)
COPY .env ./

# API 서버 실행 포트 설정
EXPOSE 5038

# 애플리케이션 실행
CMD ["node", "index.js"]
