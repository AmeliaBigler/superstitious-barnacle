// Define a function that returns a license badge based on which license is passed in. If there is no license, return an empty string.
function renderLicenseBadge(license) {
  switch (license) {
    case 'Academic Free License v3.0':
      licenseBadge = '';
      break;
    case 'Apache license':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Artistic license 2.0':
      licenseBadge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
      break;
    case 'Boost Software License 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 2-clause "Simplified"':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-clause "New"':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Creative Commons Attribution 4.0':
      licenseBadge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
      break;
    case 'Creative Commons Attribution Share Alike 4.0':
      licenseBadge = '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)';
      break;
    case 'Do What The F*ck You Want To Public License':
      licenseBadge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
      break;
    case 'Educational Community License v2.0':
      licenseBadge = '';
      break;
    case 'Eclipse Public 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'Eclipse Public 2.0':
      licenseBadge = '';
      break;
    case 'European Union Public License 1.1':
      licenseBadge = '';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC':
      licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'LaTeX Project Public License v1.3c':
      licenseBadge = '';
      break;
    case 'Microsoft Public License':
      licenseBadge = '';
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Open Software License 3.0':
      licenseBadge = '';
      break;
    case 'PostgreSQL License 1.1':
      licenseBadge = '';
      break;
    case 'SIL Open Font License 1.1':
      licenseBadge = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
      break;
    case 'University of Illinois/NCSA Open Source':
      licenseBadge = '';
      break;
    case 'The Unlicense':
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case 'zLib License':
      licenseBadge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
      break;
    case 'N/A':
      licenseBadge = '';
  }
  return licenseBadge;
}

// Define a function that returns the license link. If there is no license, return an empty string.
function renderLicenseLink(license) {
  switch (license) {
    case 'Academic Free License v3.0':
      licenseLink = '';
      break;
    case 'Apache license':
      licenseLink = '[Apache License](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Artistic license 2.0':
      licenseLink = '[Artistic-2.0](https://opensource.org/licenses/Artistic-2.0)';
      break;
    case 'Boost Software License 1.0':
      licenseLink = '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 2-clause "Simplified"':
      licenseLink = '[BSD 2-clause "Simplified"](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-clause "New"':
      licenseLink = '[BSD 3-clause "New"](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      licenseLink = '[CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Creative Commons Attribution 4.0':
      licenseLink = '[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)';
      break;
    case 'Creative Commons Attribution Share Alike 4.0':
      licenseLink = '[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)';
      break;
    case 'Do What The F*ck You Want To Public License':
      licenseLink = '[WTFPL](http://www.wtfpl.net/about/)';
      break;
    case 'Educational Community License v2.0':
      licenseLink = '[Educational Community License v2.0](https://opensource.org/license/ecl2-php/)';
      break;
    case 'Eclipse Public 1.0':
      licenseLink = '[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'Eclipse Public 2.0':
      licenseLink = '[Eclipse Public License 2.0](https://opensource.org/license/epl-2-0/)';
      break;
    case 'European Union Public License 1.1':
      licenseLink = '[European Union Public License 1.1](https://opensource.org/license/eupl-1-1/)';
      break;
    case 'GNU Affero General Public License v3.0':
      licenseLink = '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC':
      licenseLink = '[ISC](https://opensource.org/licenses/ISC)';
      break;
    case 'LaTeX Project Public License v1.3c':
      licenseLink = '[LaTeX Project Public License v1.3c](https://opensource.org/license/lppl/)';
      break;
    case 'Microsoft Public License':
      licenseLink = '[MS-PL](https://opensource.org/license/ms-pl-html/)';
      break;
    case 'MIT':
      licenseLink = '[MIT](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      licenseLink = '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Open Software License 3.0':
      licenseLink = '[Open Software License 3.0](https://opensource.org/license/osl-3-0-php/)';
      break;
    case 'PostgreSQL License 1.1':
      licenseLink = '[PostgreSQL](https://opensource.org/license/postgresql/)';
      break;
    case 'SIL Open Font License 1.1':
      licenseLink = '[Open Font-1.1](https://opensource.org/licenses/OFL-1.1)';
      break;
    case 'University of Illinois/NCSA Open Source':
      licenseLink = '[University of Illinois/NCSA Open Source](https://opensource.org/license/uoi-ncsa-php/)';
      break;
    case 'The Unlicense':
      licenseLink = '[Unlicense](http://unlicense.org/)';
      break;
    case 'zLib License':
      licenseLink = '[zLib License](https://opensource.org/licenses/Zlib)';
      break;
    case 'N/A':
      licenseLink = '';
  }
  return licenseLink;
}

// Define a function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);

    return '\n## License \nThis app is covered under the following license: ' + licenseLink + '.\n';
  }
}

function renderLicenseTable(license) {
  if (license === 'N/A') {
    return '\n3. [Contributing](#contributing)\n4. [Tests](#tests)\n5. [Questions](#questions)';
  } else {
    return '\n3. [License](#license)\n4. [Contributing](#contributing)\n5. [Tests](#tests)\n6. [Questions](#questions)';
  }
}

// Define function to generate markdown for README.
const generateMarkdown = ({title, descr, install, usage, license, contribute, tests, username, profile, email}) =>{

  const licenseBadge = renderLicenseBadge(license);
  const licenseTable = renderLicenseTable(license);
  const licenseSection = renderLicenseSection(license);

  return `${licenseBadge} 
# ${title} 

## Description 
${descr}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)${licenseTable}

## Installation 
${install}

## Usage
${usage}
${licenseSection}
## Contributing
${contribute}

## Tests
${tests}

## Questions
My GitHub Profile: [${username}](${profile})
\nEmail me with any further questions:
${email}

`;
}

module.exports = generateMarkdown;