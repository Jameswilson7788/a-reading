set -e
yarn build
cd dist
git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/Jameswilson7788/a-reading.git master:gh-pages
git push -f https://github.com/Jameswilson7788/a-reading.git master
cd -