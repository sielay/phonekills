#!/bin/bash
aws configure set default.s3.max_concurrent_requests 50
aws s3 sync ./public s3://sielay.com --acl=public-read --delete --profile sielaygod
aws cloudfront create-invalidation --distribution-id E3A7I7P96TY7U7 --paths "/*"