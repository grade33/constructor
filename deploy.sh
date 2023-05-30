set -e

git add .
git commit -m "Deploy $1"
git push origin main
git push origin2 main
npm run deploy
npm run deploy2