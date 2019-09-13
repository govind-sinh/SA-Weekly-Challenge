let zzConvert = (s, numRows) => {
    const L = s.length;
    let row = 0;
    let col = 0;
    let i = 0;
    let nextColstop = 0;
    let rowStop = numRows;
    const pa = [];
    if (numRows === 1) {
      return s;
    }
    while (i < L) {
      if (!pa[row]) {
        pa[row] = [];
      }
      pa[row][col] = s[i];
      if (i+1 === rowStop) {
        col += 1;
        row = numRows-2;
        nextColstop += numRows-1;
        rowStop += numRows + (numRows-2);
      } else if (col === nextColstop) {
        row++;
      } else if (row > 0) {
        row--;
        col += 1;
      }
      i++;
    }
    let opString = '';
    for (let index = 0; index < pa.length; index += 1) {
      opString += pa[index].join('');
    }
    return opString;
  };
//   console.log(zzConvert("PAYPALISHIRING", 4));