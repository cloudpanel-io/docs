#!/bin/bash
rm -f /Users/$(whoami)/.ssh/known_hosts
#rm -rf /Users/$(whoami)/Library/Application\ Support/Unison/*
unison -prefer newer -ignore "Name .git" -ignore "Path var" -repeat watch /Users/admin/PhpstormProjects/cloudpanel-docs/cloudpanel-ce/ ssh://root@127.0.0.1//home/cloudpanel/htdocs/cloudpanel-docs.clp/ -ui text
