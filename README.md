# 2021 Backend 평가 시험

## 평가 시험 안내
* 시험 일시 2021. 12. 23(목) 17:00 - 17:55 (55분)
* 시험 유형: 비대면 (플랫폼 MS Teams), Open-book 시험
* 공지의 용이한 전달을 위해 MS Teams KWEB 팀의 화요일 분반 채널에서 열린 모임에 참여합니다.
* 스터디 자료, 실습 자료, 과제 등의 자료를 참고할 수 있습니다.
    * 타인과의 communication은 엄격히 금지합니다. 적발 시 0점 처리 및 보충 스터디 참여 불가
* git을 통해 깃헙의 시험지 배부 저장소에서 시험지를 배부받고, 답안을 작성한 뒤 git을 이용하여 본인의 개별 저장소를 통해 제출합니다.
* 채점 결과는 추후 개별 저장소를 통해 통지되고, Pass/Fail 기준은 공지방을 통해 공지됩니다.
* 기타 문의사항은 스터디장 이메일(btstar_cy@korea.ac.kr)로 문의바랍니다.

## git을 이용한 시험지 배부 및 답안 제출

### 시험지 저장소와 연동

```sh
$ git remote add problems https://github.com/KWEBofficial/21-backend-exam
```

* 연동한 이후 다시 연동할 필요는 없음

### 시험지 다운로드

```sh
$ git pull problems main
```

* 시험지는 시험 시작 시 업로드될 예정

### 답안 제출

```sh
$ git add .
$ git commit -m "<commit-message>"
$ git push
```
