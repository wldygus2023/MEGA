FROM node:20

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 올바른 경로로 package.json 복사
COPY sveltekit/package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 전체 복사
COPY sveltekit .

# SvelteKit 빌드
RUN npm run build

# 포트 설정
EXPOSE 3000

# 실행 명령
CMD ["npm", "run", "preview"]
