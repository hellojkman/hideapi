# hideapi(aws나 몽고db등의 키를 깃허브에 업로드 시킬때 숨기기 위한 방법)   

***주의사항 : restful.js 의 const env =require("dotenv").config({ path: "/home/bitnami/park/.env"}); 구문에서 path 를 .env 위치로 잘 맞추어 줘야함.
1. git push 시에 중요한 데이터를 담은 파일을 push하지 않게 하기위하여 .gitignore 파일을 생성한다 (vi .gitignore)
2. 중요한 데이터를 담은 파일을 넣기 위하여 .env 파일을 생성한다. (vi .env)
3. 키값을 env 파일안에 기입한다. (uri="a")
4. restful.js 파일 내용과 같이 키를 쓸 부분에 다음과 같이 기입한다.   
const env =require("dotenv").config({ path: "/home/bitnami/apihide/.env"});   
var uri = process.env.uri;
5. .gitignore 안에 내가 숨기고 싶은 키를 넣은 파일 명을 기입한다 (.env)
6. 실행 시키기 위하여 dotenv 모듈을 설치한다. (sudo npm install dotenv) 
7. postman 등을 이용하여 정상적으로 작동 되는지 확인한다.
8. 작동이 잘되면 깃에 push하여 키값이 담긴 .env 파일이 업로드 되지 않는지 확인한다.
