const ThermalPrinter = require('node-thermal-printer').printer;
const PrinterTypes = require('node-thermal-printer').types;
const nodePrinter = require('@flovy/node-printer');

const listPrinters = nodePrinter.getPrinters();

(async () => {
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

    let printerConstructor = null;
    try {
      printerConstructor = new ThermalPrinter({
        type: PrinterTypes.TANCA,
        interface: `TCP://${portName}`,
      });
    } catch (e) {
      console.log('Failed to try to print');
    }

    if (!printerConstructor) return;

    const isConnected = await printerConstructor.isPrinterConnected();
    console.log('Status da impressora: ', isConnected);

    if (!isConnected)
      return console.log(
        'Impressora desligada, portanto não foi possível imprimir!'
      );

    printerConstructor.alignCenter();
    printerConstructor.println('Testing Print');
    printerConstructor.cut();

    try {
      await printerConstructor.execute();
      console.error('Print Finish!');
    } catch (error) {
      console.log('Print Error:', error);
    }
  }
})();
