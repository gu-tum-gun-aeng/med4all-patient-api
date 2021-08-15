#!/bin/bash
x=1
while [ $x -le 99999 ]
do
  printf "\nWelcome $x times"
   curl -X 'POST' 'https://api.med4all.care/patient' \
    -H 'accept: text/html; charset=utf-8' \
    -H 'Content-Type: application/json' \
    -d '{
    "id": 1,
    "cdPersonID": "0000000000000",
    "cdPersonFirstName": "John",
    "cdPersonLastName": "Doe",
    "cdPersonAge": 30,
    "cdPersonPhone1": "0811231234",
    "emPatientCommitStatusCode": 1,
    "crProvinceCode": "00",
    "crAmpurCode": "01",
    "createdAt": "2014-01-01T23:28:56.782Z"
  }'&
  sleep 1
  x=$(( $x + 1 ))
done

