#!/bin/bash
set -e
htmlmin -o signatureTemplates/aleios-signature.min.html signatureTemplates/aleios-signature.html
htmlmin -o signatureTemplates/theodo-healthtech-signature.min.html signatureTemplates/theodo-healthtech-signature.html
htmlmin -o signatureTemplates/theodo-signature.min.html signatureTemplates/theodo-signature.html
echo 'signature templates minimized'
echo 'You need to update signature update dates in config.js'
