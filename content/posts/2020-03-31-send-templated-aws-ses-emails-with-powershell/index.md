---
title: Send templated AWS SES emails with Powershell
author: Dominic Böttger
date: 2020-03-31T00:00:00.000Z
excerpt: >-
  A short description on how a SES mail template can be stored and send with the
  AWS (Amazon Web Services) Powershell module.
hero: ./images/hero.jpg
---
There is a lot of documentation and examples for the Amazon Web Services cli tools but there are less examples for the AWS Powershell module. I had the problem that I did not find a working example to send emails via AWS SES and had to find a solution by myself. I hope the following post will save your time.

I assume that you already have the Powershell tools installed and your AWS credentials have been set up.

As I already had the AWS cli installed my credentials were already stored and I just had to install and load the powershell module.

```powershell
Install-Module -Name AWSPowerShell.NetCore
Import-Module AWSPowerShell.NetCore
```

If you need to install it differently or further informatins on how to set up the credentials you should have a look at the offical [AWS Powershell tools documentation](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-welcome.html)

## Creating and storing the template

First I created a json file for the template and saved the contents below as mytemplate.json.

```json
{
  "Template": {
    "TemplateName": "MyTemplate",
    "SubjectPart": "Greetings, TESTSTRING!",
    "HtmlPart": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitiona
l.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\"> <head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /
> <title>Demystifying Email Design</title> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/> </head> <body>
Español üäü {{name}}</body> </html>",
    "TextPart": "Dear TESTSTRING,\r\nYour favorite animal is TESTSTRING."
  }
}
```

To load the template into the SES template store the content of the json needs to be loaded ( Unicode is important! ), converted from json to a object and then piped to the New-SesTemplate CmdLet.

```powershell
Get-Content -Path ./mytemplate.json -Encoding UTF-8 | convertFrom-Json | New-SesTemplate
```

# Sending the mail

After the template has been created you are able to send mails with the content of the template and fill the placeholders in the template with data.

For this you should save the contents below in a file named myemail.json.

```json
{
  "Source":"Mary Major <mary.major@example.com>",
  "Template": "MyTemplate",
  "Destination_ToAddress": [ "test@example.com" ],
  "TemplateData": "{ \"name\":\"Español\", \"favoriteanimal\": \"alligator in IL template\" }"
}
```

The json needs to be adjusted to fulfill your needs. Which means especially the mail adresses should be replaced to align with your SES and domain configuration.

To send the mail you just need to execute the code below.

```powershell
 Get-Content -Path ../myemail.json -Encoding UTF-8 | convertFrom-JSON | Send-SESTemplatedEmail
```

**Congratulations for delivering your email via SES with Powershell! 👍**
