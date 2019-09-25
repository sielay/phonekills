#!/bin/bash
aws configure set default.s3.max_concurrent_requests 50
aws s3 sync ./public s3://phonekills.co.uk --acl=public-read --delete --profile sielaygod
aws cloudfront create-invalidation --distribution-id E3K81M7CLNJTYO --paths "/*"