#!/usr/bin/env node
// #!노드설치경로 node
// 이거 추가한 후
// npm i -g 전역으로 설치해 놓으면
// 이 파일 자체가 어느 cli에서도 사용가능 한 명령이 되어버린다!!

console.log("Hello CLI");
console.log(process.argv);
// process.argv는 사용자가 입력한 내용을 배열로 출력해요
// process.argv[0] 노드 설치 경로
// process.argv[1] 파일 위치 경로 => 인데스 파일의 위치가아니라
// 노드 전역 모듈들 전역 패키지 모듈들이 들어가 있는 자리!
