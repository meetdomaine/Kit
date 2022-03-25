#!/usr/bin/env bash

rm -rf temp

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD);
git clone $SRC_THEME_REPO_URL temp;
cd temp && git checkout $CURRENT_BRANCH;

if
  [ ! -f ./src/config/settings_schema.json ] || [ ! -f ./src/layout/theme.liquid ] || [ ! -f ./src/snippets/snippet.liquid ] || [ ! -f ./src/templates/product.liquid ];
then
  echo "Necessarily files not found on branch - exiting"
  exit 1;
fi

echo "Sucessfully validated files exist on branch"
