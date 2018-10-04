if ! [ -x "$(command -v tsc)" ]; then
    yarn global add typescript
fi

if ! [ -x "$(command -v nodemon)" ]; then
    yarn global add nodemon
fi

if [ ! -d node_modules ]
then 
    echo "Installing Server Dependencies"    
    yarn install
fi

tsc

npx concurrently \
    "tsc --watch --preserveWatchOutput" \
    "nodemon --inspect=0.0.0.0:9229 --watch dist dist/index.js"