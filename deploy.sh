echo Plz, your username
read username
echo Upload to $username

git add .
git commit -am "Aktualisierung"
git push git@github.com:$username/code-playground.git