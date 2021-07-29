---
title: Create Start-up Service on RPi
description: Using commandline systemctl to enable a start-up service
img: https://images.unsplash.com/photo-1588336271629-1704e27ef8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80
alt: nice image
authors:
  - moenupa
  - dependabot
tags:
  - raspberry pi
categories:
  - linux
---

# Create Start-up Service on RPi

## Write Service

```bash
$ sudo vim /etc/systemd/system/rc-local.service
```

```bash
[Unit]
Description="/etc/rc.local Compatibility"

[Service]
Type=oneshot
ExecStart=/etc/rc.local start
TimeoutSec=0
StandardInput=tty
RemainAfterExit=yes
SysVStartPriority=99

[Install]
WantedBy=multi-user.target
```

## Link to Shell Script

```bash
$ sudo vim /etc/rc.local
```

```bash
#!/bin/sh
# /etc/rc.local
if test -d /etc/rc.local.d; then
	for rcscript in /etc/rc.local.d/\*.sh; do
		test -r "${rcscript}" && sh ${rcscript}
	done
	unset rcscript
fi
```

## Enable the service

```bash
$ sudo chmod a+x /etc/rc.local
$ sudo mkdir /etc/rc.local.d
$ sudo systemctl enable rc-local.service
```

## AUTOSTARTUP!

THEN EVERY `sh` file UNDER `/etc/rc.local.d/` WILL AUTOSTARTUP

## Reference

[https://blog.csdn.net/u014025444/article/details/90142558](https://blog.csdn.net/u014025444/article/details/90142558)
