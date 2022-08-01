#! /bin/sh
# echo $0
# $0代表当前目录下的父目录

cd $(dirname $0)
BASE=$(pwd)

projects=(cstack-app cstack-components cstack-rest cstack-domain cstack-utils cstack-service)

for project in ${projects[@]}
do
  echo "install $project"
  cd $BASE/$project
  cnpm install
done  
