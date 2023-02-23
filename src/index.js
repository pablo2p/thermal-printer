const ThermalPrinter = require('node-thermal-printer').printer;
const PrinterTypes = require('node-thermal-printer').types;

let printer = null;
try {
  printer = new ThermalPrinter({
    type: PrinterTypes.TANCA,
    interface: 'printer:auto',
  });
} catch (e) {
  console.log('Failed to try to print');
}

if (!printer) return;

printer.alignCenter();
printer.println('Testing Print');
printer.cut();

try {
  printer.execute();
  console.error('Print Finish!');
} catch (error) {
  console.log('Print Error:', error);
}
