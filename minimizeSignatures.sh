#!/bin/bash
set -e
htmlmin -o signatureTemplates/bam-signature.min.html signatureTemplates/bam-signature.html
htmlmin -o signatureTemplates/theodo-signature.min.html signatureTemplates/theodo-signature.html
htmlmin -o signatureTemplates/m33-signature.min.html signatureTemplates/m33-signature.html
htmlmin -o signatureTemplates/padok-signature.min.html signatureTemplates/padok-signature.html
htmlmin -o signatureTemplates/sicara-signature.min.html signatureTemplates/sicara-signature.html
echo 'signature templates minimized'
echo 'You need to update signature update dates in config.js'
