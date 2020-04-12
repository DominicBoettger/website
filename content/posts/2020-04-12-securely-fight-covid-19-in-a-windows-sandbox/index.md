---
title: Securely fight COVID-19 in a Windows Sandbox
author: Dominic Böttger
date: '2020-04-12'
excerpt: A simple script which installs the Folding@Home client into a Windows Sandbox.
hero: images/cdc-w9keokhajkw-unsplash.jpg
---
Microsoft released a nice and simple Powershell script that installs the Folding@Home client into a Windows Sandbox to ensure that the Folding@Home client is completely separated from your machine. I am not aware of any known security issues but safety first and it's also fun to try out the Windows Sandbox 😀.

The Powershell script checks the system requirements ( at least Windows 10 Pro Insider build 18362 is needed to support the sandbox feature ). After checking the requirements it installs the Windows Sandbox feature, creates the configuration and startup script for the Sandbox.

To install the Folding@Home Sandbox you need to run the following command in an elevated ( run as administrator ) Powershell:

```Powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/microsoft/Windows-Sandbox-Utilities/master/Folding%20In%20Sandbox/install_folding_sandbox_on_host.ps1')
```

The script should install and configure a Sandbox and start the Sandbox with the Folding@Home client.

On my machine I already had Hyper-V installed and I got the message "0x80072746 The connection to this sandbox was lost". I solved the problem by uninstalling Hyper-V, rebooting and installing Hyper-V again.

If you run the script multiple times it will update your configuration and check for new versions of the Folding@Home client.

You can find additional information in the Readme provided in the [Github repository](https://github.com/microsoft/Windows-Sandbox-Utilities/tree/master/Folding%20In%20Sandbox).


Photo by CDC on Unsplash