#!/bin/bash
#chkconfig:2019
#description:auto start web server

sleep 3

cd /home/www/TOOLSWEB/toolsWeb
node start.js
