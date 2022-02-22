#! /bin/bash

# Move to the component directory 
cd ../src/lib/components; 

# Copy the scaffoldng component as a new component with the provided component name
cp -R ./__Component ./$1; 

## Find and replace all instance of __Component with the provided component name; 
cd ./$1; 
sed -i 's/__Component/${1}/g' *
sed -i 's/__ComponentProps/${1}Props/g' *


