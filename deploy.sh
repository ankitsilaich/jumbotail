#!/bin/bash
rm -rf out || exit 0;
( cd build
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@nodemeatspace.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force  "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
)
