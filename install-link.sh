#! /bin/sh
# echo $0
# $0代表当前目录下的父目录

cd $(dirname $0)
BASE=$(pwd) 

# 关联两个组件间的相互引用
cd $BASE/cstack-utils
yarn link

cd $BASE/cstack-domain
yarn link
yarn link @cstack/utils

cd $BASE/cstack-rest
yarn link

cd $BASE/cstack-components
yarn link
yarn link @cstack/utils

cd $BASE/cstack-app
yarn link @cstack/components
yarn link @cstack/utils
yarn link @cstack/rest
yarn link @cstack/domain

cd $BASE/cstack-service
yarn link @cstack/domain
yarn link @cstack/utils
