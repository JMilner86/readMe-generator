const fs = require('fs');


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


const renderLicenseBadge = license => {
  if (license === 'None') {
    return '';
  }
    return `![image](https://img.shields.io/badge/license-${license.replace('-', '--')}-brightgreen)`;
};


const renderLicenseLink = license => {
  if (license === 'None') {
    return 'None';
  }
  
  let licenseDesc;

  switch(license) {
      case 'AGPL-3.0':
          licenseDesc = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.';
          break;
      case 'GPL-3.0':
          licenseDesc = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
          break;
      case 'LGPL-3.0':
          licenseDesc = 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.';
          break;
      case 'MPL-2.0':
          licenseDesc = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
          break;
      case 'Apache-2.0':
          licenseDesc = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'MIT':
          licenseDesc = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'BSL-1.0':
          licenseDesc = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'Unlicense':
          licenseDesc = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
  }

  return `
  
[https://choosealicense.com/licenses/${license.toLowerCase()}](https://choosealicense.com/licenses/${license.toLowerCase()})
${licenseDesc}
`;
};



module.exports = data => {
  let readMe = `# ${data.title}
${renderLicenseBadge(data.licenses)}

## Description
${data.description}

## Table of Contents

-[Installation](#installation)

-[Test](#test)

-[Usage](#usage)

-[License](#license)

-[Contributions](#contributions)

-[Additional Questions](#email)


## Installation

${data.installation}

## Test

${data.test}

## Usage

${data.usage}

## License
${renderLicenseLink(data.licenses)}

## Contributions

${data.contribution}

## Additional Questions

*Contact me with additional questions

${data.email}

[https://github.com/${data.github}](https://github.com/${data.github})

`;

writeFile(readMe);
}



