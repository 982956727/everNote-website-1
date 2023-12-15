cd dist;
git init;
git remote remove origin;
git remote add origin git@github.com:982956727/vue-evernote-client.git;
git add .;
git commit -am "modify";
git branch -M main;
git push -f origin main &&
exit 0