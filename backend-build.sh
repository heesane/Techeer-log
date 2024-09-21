echo "This Backend Build Script is Testing"
##!/bin/sh
#
#echo "1. Enter the backend directory"
#
#cd ~/Techeer-log/backend
#
#echo "## 2. Build Java Gradle"
#
#sudo ./gradlew clean build
#
#echo "## 3. Build Docker Image"
#
#if [ $? -eq 1 ]; then
#  echo "BUILD SUCCESS"
#  sudo ./gradlew clean jib
#
#  if [ $? -eq 0 ]; then
#    echo "JIB BUILD SUCCESS"
#  else
#    echo "JIB BUILD FAILED"
#  fi
#else
#  echo "BUILD FAILED"
#  exit 1
#fi