#! /bin/bash
set -e

rm -fr _site
bundle exec jekyll build
cd _site || exit

aws-vault exec benlimmer.com_s3deploy -- s3deploy \
  -region us-east-1 \
  -bucket benlimmer.com \
  -distribution-id E2ZJLY90YUBA3S
