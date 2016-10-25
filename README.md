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
