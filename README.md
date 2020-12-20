### 프로젝트 세팅 연습

### Client

- npx create-react-app client --template typescript

### Server

패키지 설치 & 역활

    express
    apollo-server-express
    nodemon
    typescript
    ts-node : s-node 는 메모리 상에서 티입스크립트를 transpile 하여 바로 실행할 수 있게 해준다.
    @typescript-eslint/parser @typescript-eslint/eslint-plugin : 타입스크립트 esLint parser, ts linting 규칙을 처리하는 플러그인
    prettier eslint-plugin-prettier eslint-config-prettier : eslint plugin, config 동시적용, prettier 규칙과 충동하는 tsLint 규칙 비활성화.
    tsconfig-paths:
    graphql graphql-tools : graphql 쿼리 사용하기 위한 모듈과 graphql 스키마 설정을 도와 주는 라이브러리
    eslint-import-resolver-alias : lint 적용시에도 절대경로 알려주기위한 플러그인

실행 명령어

    tsc --init : tsconfig.json 파일 생성

tsconfig 옵션 정리
[here](https://geonlee.tistory.com/214)
