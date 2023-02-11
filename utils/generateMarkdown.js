// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({title, descr, install, usage, license, contribute, tests, username, profile, email}) =>
  `# ${title} 

  ## Description 
  ${descr}

  ## Table of Contents

  ## Installation 
  ${install}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contribute}

  ## Tests
  ${tests}

  ## Questions
  ${username}
  ${profile}
  Email me with any further questions:
  ${email}

`;

module.exports = generateMarkdown;