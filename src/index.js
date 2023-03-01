// const ThermalPrinter = require('node-thermal-printer').printer;
// const PrinterTypes = require('node-thermal-printer').types;
var Printer = require('zuzel-printer');
const util = require('util');

console.log(
  'installed printers:\n' +
    util.inspect(Printer.list(), { colors: true, depth: 10 })
);

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
