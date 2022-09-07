// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  let badge = "";
  if (license != 'None') {
    badge = "![License Badge](https://img.shields.io/badge/license-" + license + "-yellow)";
  }

  return badge;
}

// A function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  let licenseLink;


  switch (license) {
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    case 'AGPL':
      licenseLink = 'https://www.gnu.org/licenses/agpl-3.0.en.html';
      break;
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'LGPL':
      licenseLink = 'https://www.gnu.org/licenses/lgpl-3.0.en.html';
      break;
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'Mozilla':
      licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'Unlicense':
      licenseLink = 'https://opensource.org/licenses/unlicense';
      break;
    default:
      licenseLink = '';
      break;
  }

  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  let licenseSection = '';

  if (license != 'None') {
    licenseSection += 'For detailed information about this license, go to ' + renderLicenseLink(license) + '.';
  }

  return licenseSection;
}
// Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation
${data.installation}


## Usage
${data.usage}


## License
This application is licensed under ${data.license}.

${renderLicenseSection(data.license)}


## Contribute
${data.contributors}


## Tests
${data.tests}


## Questions
If you have any questions about this project, you can contact me at ${data.email}. You can find me on Github at https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
