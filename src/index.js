// const ThermalPrinter = require('node-thermal-printer').printer;
// const PrinterTypes = require('node-thermal-printer').types;
const { exec } = require('child_process');
exec('wmic printer list brief', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
  // list of printers with brief details
  console.log(stdout);
  // the *entire* stdout and stderr (buffered)
  stdout = stdout.split('  ');
  var printers = [];
  j = 0;
  stdout = stdout.filter((item) => item);
  for (i = 0; i < stdout.length; i++) {
    if (stdout[i] == ' \r\r\n' || stdout[i] == '\r\r\n') {
      printers[j] = stdout[i + 1];
      j++;
    }
  }
  // list of only printers name
  console.log(printers);
  console.log(stderr);
});

// let printer = null;
// try {
//   printer = new ThermalPrinter({
//     type: PrinterTypes.TANCA,
//     interface: 'printer:auto',
//   });
// } catch (e) {
//   console.log('Failed to try to print');
// }

// if (!printer) return;

// (async () => {
//   const isConnected = await printer.isPrinterConnected();
//   console.log('Status da impressora: ', isConnected);

//   if (!isConnected)
//     return console.log(
//       'Impressora desligada, portanto não foi possível imprimir!'
//     );

//   printer.alignCenter();
//   printer.println('Testing Print');
//   printer.cut();

//   try {
//     await printer.execute();
//     console.error('Print Finish!');
//   } catch (error) {
//     console.log('Print Error:', error);
//   }
// })();
