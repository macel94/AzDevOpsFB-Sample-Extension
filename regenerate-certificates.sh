#!/bin/bash

# Use rm -rf only if the directory exists
if [ -d "certificates" ]; then
  rm -rf certificates
fi

mkdir certificates 
mkcert -key-file ./certificates/key.pem -cert-file ./certificates/cert.pem localhost 127.0.0.1 ::1