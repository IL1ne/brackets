module.exports = function check(str, bracketsConfig) {

  for(let i=0;i<str.length;i++) {
      for(q=0;q<bracketsConfig.length; q++) {
        let braketCase="";
        braketCase=bracketsConfig[q][0]+""+bracketsConfig[q][1];

      if (str.includes(braketCase)) {
        str = str.replace(braketCase,"");
        i=0;
        j=0;
      }
    }
  };

  return str.length == 0;
}
