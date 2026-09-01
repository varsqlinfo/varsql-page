---
sidebar_position: 2
---

# 설치 및 시작

1. [Releases](https://github.com/varsqlinfo/varsql/releases/latest)에서 varsql-\[최선버전].zip 파일 다운로드

2. 압축 풀기.

3. [압축해제폴더]/varsql-app-\[최선버전]/bin ← 폴더로 이동

4. 로컬에 설치된 기본 java가 varsql java 버전과 호환되지 않을 때 새로운 java를 받아서 설치후 경로를 설정
   기본 java를 사용할 경우 5번으로

- window

```c
setenv.bat 파일 오픈후 주석(rem) 제거
JAVA_HOME 경로를 설정
```

- linux

```c
setenv.sh 파일 오픈후 주석(#) 제거
JAVA_HOME 경로를 설정
```

5. start

- window

```c
 startup.bat <-- 클릭
```

- linux

```c
./startup.sh
```

6. 브라우저 실행

브라우저 실행 http://localhost:12312/varsql
