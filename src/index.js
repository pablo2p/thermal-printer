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

    console.log(`Olha a ${shareName} feliz da vida! - ${driverName}`);

    const thermalOpts = {
      type: PrinterTypes.TANCA,
    };

    // not started with number
    if (portName.match(/^\d/)) {
      thermalOpts['interface'] = `TCP://${portName}`;
    } else {
      thermalOpts['interface'] = `printer:${driverName}`;
    }

    let printerConstructor = null;
    try {
      printerConstructor = new ThermalPrinter(thermalOpts);
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
    printerConstructor.print('Cresci e Perdi');
    printerConstructor.println('Testing Print');
    printerConstructor.cut();
    printerConstructor.beep();

    try {
      await printerConstructor.execute();
      console.error('Print Finish!');
    } catch (error) {
      console.log('Print Error:', error);
    }
  }
})();
