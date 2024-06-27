#!/bin/bash
set -e
htmlmin -o signatureTemplates/aleios-signature.min.html signatureTemplates/aleios-signature.html
htmlmin -o signatureTemplates/theodo-signature.min.html signatureTemplates/theodo-signature.html
htmlmin -o signatureTemplates/theodo-healthtech-signature.min.html signatureTemplates/theodo-healthtech-signature.html
htmlmin -o signatureTemplates/theodo-apps-signature.min.html signatureTemplates/theodo-apps-signature.html
htmlmin -o signatureTemplates/theodo-cloud-signature.min.html signatureTemplates/theodo-cloud-signature.html
htmlmin -o signatureTemplates/theodo-data-ai-signature.min.html signatureTemplates/theodo-data-ai-signature.html
htmlmin -o signatureTemplates/theodo-fintech-signature.min.html signatureTemplates/theodo-fintech-signature.html
htmlmin -o signatureTemplates/theodo-govtech-signature.min.html signatureTemplates/theodo-govtech-signature.html
echo 'signature templates minimized'
echo 'You need to update signature update dates in config.js'
