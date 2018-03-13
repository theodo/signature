Render: [https://theodo.github.io/signature/](https://theodo.github.io/signature/)

# Installing the project

Just git clone the repo :)

# Testing and deploying

It is crucial that the signature html be minimized to avoid unwanted white spaces (font-size: 0 does not work).

* `npm install html-minifier-cli -g`
* When testing and before every commit, don't forget to run `./minimizeSignatures.sh`

**BEWARE**
Modifying the signature's style is very tricky.
Indeed, the various mail clients modify the signature's style...
You need to check that the signature renders correcty when received on:

* Gmail
* Outlook 2013+

# Trick for comparing a CSS logo with original image

* Put your logo in a div with position relative
* Add an img of the real logo with the following style `style="position: absolute; top: 0; width: 100%; height: 100%; left: 0; opacity: 0.5; filter: invert()"`
* Every difference between your CSS and the true logo will not be grey.
  Example for BAM:
  ![BAM Logo Diff](images/BAM-logo-diffs.png)
