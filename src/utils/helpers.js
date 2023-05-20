import xml2js from 'xml2js'
export function xml2json(xml, callBack) {
    const parser = new xml2js.Parser({explicitArray: false});
    parser.parseString(xml, function (err, result) {
        callBack(result, err)
    });
  }