#!/bin/bash
set -e
htmlmin -o signatureTemplates/aleios-signature.min.html signatureTemplates/aleios-signature.html
htmlmin -o signatureTemplates/bam-signature.min.html signatureTemplates/bam-signature.html
htmlmin -o signatureTemplates/theodo-signature.min.html signatureTemplates/theodo-signature.html
htmlmin -o signatureTemplates/m33-signature.min.html signatureTemplates/m33-signature.html
htmlmin -o signatureTemplates/padok-signature.min.html signatureTemplates/padok-signature.html
htmlmin -o signatureTemplates/sicara-signature.min.html signatureTemplates/sicara-signature.html
htmlmin -o signatureTemplates/sipios-signature.min.html signatureTemplates/sipios-signature.html
htmlmin -o signatureTemplates/hokla-signature.min.html signatureTemplates/hokla-signature.html
htmlmin -o signatureTemplates/kumo-signature.min.html signatureTemplates/kumo-signature.html
htmlmin -o signatureTemplates/m33-foundation-signature.min.html signatureTemplates/m33-foundation-signature.html
htmlmin -o signatureTemplates/solona-signature.min.html signatureTemplates/solona-signature.html
echo 'signature templates minimized'
echo 'You need to update signature update dates in config.js'
