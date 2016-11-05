# claudia-test

## Getting started
Need to install CLaudia
`npm install claudia -g`

Then set up AWS credentials in `~/aws/credentials`
 ```
 ## claudia-chatbot-mcy
[claudia]
aws_access_key_id = [key]
aws_secret_access_key = [secret]
region=ap-southeast-1
sslEnabled=true
logger=process.stdout
```

Set the encvironment variable to select the correct AWS profile
`AWS_PROFILE=claudia`

After that `npm install` will add the other necessary files

Use Claudia to create/deploy
`claudia create --region us-east-1 --api-module app`

## Create an app in Facebook under developers
 - link to page
 - add Messenger platform to app
 - configure webhooks 
 
`claudia update --configure-fb-bot`
Insert the callback URL provided by claudia, followed by the verify token, into the appropirate fields under facebook webhook config
Then connect it to a page and paste the page access token back into claudia


