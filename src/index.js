const ThermalPrinter = require('node-thermal-printer').printer;
const PrinterTypes = require('node-thermal-printer').types;
const nodePrinter = require('@flovy/node-printer');

const listPrinters = nodePrinter.getPrinters();

for (const printer of listPrinters) {
  const { shareName, driverName, portName } = printer || {};
  if (shareName !== 'tanquinha') continue;
  // Portname se começar com número é o ip
  // USB PORT: -> é via usb

  console.log(`Olha a ${shareName} feliz da vida!`);

  // not started with number
  if (!s.match(/^\d/)) {
    continue;
  }

  let printer = null;
  try {
    printer = new ThermalPrinter({
      type: PrinterTypes.TANCA,
      interface: `TCP://${portName}`,
    });
  } catch (e) {
    console.log('Failed to try to print');
  }

  if (!printer) return;

  const isConnected = await printer.isPrinterConnected();
  console.log('Status da impressora: ', isConnected);

  if (!isConnected)
    return console.log(
      'Impressora desligada, portanto não foi possível imprimir!'
    );

  printer.alignCenter();
  printer.println('Testing Print');
  printer.cut();

  try {
    await printer.execute();
    console.error('Print Finish!');
  } catch (error) {
    console.log('Print Error:', error);
  }
}
