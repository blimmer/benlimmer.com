#! /bin/bash
set -e

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

rm -fr _site
bundle exec jekyll build
cd _site || exit

if [[ -n $CI ]]; then
  "$GOPATH"/bin/s3deploy \
      -config "$ROOT_DIR"/.s3deploy.yml \
      -region us-east-1 \
      -bucket benlimmer.com \
      -distribution-id E14QCBE51HD2BQ
else
  aws-vault exec benlimmer.com_s3deploy -- s3deploy \
    -config "$ROOT_DIR"/.s3deploy.yml \
    -region us-east-1 \
    -bucket benlimmer.com \
    -distribution-id E14QCBE51HD2BQ
fi
