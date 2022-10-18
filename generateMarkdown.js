const licenseArray = [
  {
    name: "Apache",
    badgeUrl: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://choosealicense.com/licenses/apache-2.0/",
  },
  {
    name: "GNU GPL 3.0",
    badgeUrl: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://choosealicense.com/licenses/gpl-3.0/",
  },
  {
    name: "GNU GPL 2.0",
    badgeUrl: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    link: "https://choosealicense.com/licenses/gpl-2.0/",
  },
  {
    name: "GNU LGPL",
    badgeUrl: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    link: "https://choosealicense.com/licenses/lgpl-3.0/",
  },
  {
    name: "MIT",
    badgeUrl: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://choosealicense.com/licenses/mit/",
  },
  {
    name: "BSD 2",
    badgeUrl: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    link: "https://choosealicense.com/licenses/bsd-2-clause/",
  },
  {
    name: "BSD 3",
    badgeUrl: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://choosealicense.com/licenses/bsd-3-clause/",
  },
  {
    name: "Boost",
    badgeUrl: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "https://choosealicense.com/licenses/bsl-1.0/",
  },
  {
    name: "Creative Commons",
    badgeUrl: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    link: "https://choosealicense.com/licenses/cc0-1.0/",
  },
  {
    name: "Eclipse",
    badgeUrl: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    link: "https://choosealicense.com/licenses/epl-1.0/",
  },
  {
    name: "GNU Affero",
    badgeUrl: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    link: "https://choosealicense.com/licenses/agpl-3.0/",
  },
  {
    name: "Mozilla",
    badgeUrl: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://choosealicense.com/licenses/mpl-2.0/",
  },
  {
    name: "Unlicense",
    badgeUrl: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "https://choosealicense.com/licenses/unlicense/",
  }
]

const { name, badgeUrl, link } = licenseArray

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  console.log(name);
  if (license == name) {
    return badgeUrl;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == name) {
    return link;
  } else {
    return "No License";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return licenseSection = `## License

    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributers}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
