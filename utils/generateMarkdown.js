// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

['MIT', 'APACHE 2.0', 'GPL', 'BSD 3', 'None']

// TODO: Create a function to generate markdown for README
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
