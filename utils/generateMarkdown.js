// Takes in the license and returns a badge based on which license is being used
function renderLicenseBadge(license) {
  //use switch statement to handle license
  switch(license) {
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`;
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]${renderLicenseLink(license)}`;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${renderLicenseLink(license)}`;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]${renderLicenseLink(license)}`;
    default:
      return '';
  }
}

// Takes in a license and will return a link to the usage of the license
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT': 
      return `(https://opensource.org/licenses/MIT)`;
    case 'APACHE 2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3':
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return '';
  }
}

// Takes in the license and creates a license section that will detail the license used
function renderLicenseSection(license) {
  switch(license) {
    case 'MIT': 
      return `## License  
Licensed under the [MIT License](LICENSE)`;
    case 'APACHE 2.0':
      return `## License  
Licensed under the [APACHE 2.0 License](LICENSE)`;
    case 'GPL':
      return `## License  
Licensed under the [GPL License](LICENSE)`;
    case 'BSD 3':
      return `## License  
Licensed under the [BSD 3 License](LICENSE)`;
    default:
      return '';
  }
}

// This function will take in the answers from the user and use it to populate a string literal template 
// that will act as a professional readme
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

${data.tableOfContents ? `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
` : ''}
## Installation

${data.installationInstructions}

## Usage

${data.usage}

## Contributing

${data.contributions}

## Tests

${data.testInstructions}

## Questions
If you have any questions you can reach me at:  
Github: ${data.githubName}  
Github link: https://github.com/${data.githubName}  
Email: ${data.email}
  
${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
