var fs = require('fs');
var glob = require('glob');
var parser = require('typescript-react-intl').default;

const outDir = 'src/store/i18n/translations';

function runner(callback) {
  let results = [];
  glob('src/**/*.@(tsx|ts)', (error, files) => {
    if (error) {
      throw new Error(error);
    }

    files.forEach(file => {
      const contents = fs.readFileSync(file).toString();
      const result = parser(contents);
      results = results.concat(result);
    });

    callback(results);
  });
}

const pasteEmptyKeys = (data, englishLocale) => {
  Object.keys(englishLocale).forEach(key => {
    if (!data[key]) {
      data[key] = '';
    }
  });

  return data;
};

const deleteUnusedKeys = (englishLocale, currentLocale) => {
  Object.keys(currentLocale).forEach(key => {
    if (!englishLocale[key]) {
      delete currentLocale[key];
    }
  });
};

runner(results => {
  const englishLocale = {};
  const uaData = JSON.parse(fs.readFileSync(`${outDir}/ua.json`));
  const ruData = JSON.parse(fs.readFileSync(`${outDir}/ru.json`));

  results.forEach(result => {
    englishLocale[result.id] = result.defaultMessage;
  });

  const uaLocale = deleteUnusedKeys(
    englishLocale,
    pasteEmptyKeys(uaData, englishLocale),
  );
  const ruLocale = deleteUnusedKeys(
    englishLocale,
    pasteEmptyKeys(ruData, englishLocale),
  );
  fs.writeFileSync(`${outDir}/ua.json`, JSON.stringify(uaLocale, null, 2));
  fs.writeFileSync(`${outDir}/ru.json`, JSON.stringify(ruLocale, null, 2));
  fs.writeFileSync(`${outDir}/en.json`, JSON.stringify(englishLocale, null, 2));
});
