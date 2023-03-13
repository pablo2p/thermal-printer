import { printer as ThermalPrinter, types as PrinterTypes } from './lib';
import nodePrinter, { getPrinters } from '@flovy/node-printer';
import { cashierConferency } from './printer/cashierConferency';
import { moneyEvaluation } from './printer/moneyEvaluation';
import { giracreditoEvaluation } from './printer/giracreditoEvaluation';
import { giracredito } from './printer/giracredito';
import { example } from './printer/exemplae';
import { devolution } from './printer/devolution';
import { preEvaluationPassword } from './printer/preEvaluationPassword';
import { preEvaluation } from './printer/preEvaluation';
import { priceSuggestion } from './printer/priceSuggestion';
import { reinforcement } from './printer/reinforcement';
import { cashierClosure } from './printer/cashierClosure';

const listPrinters: any = getPrinters();
const defaultShareName = 'tanquinha';

(async () => {
  for (const printer of listPrinters) {
    const { shareName, driverName, portName, name } = printer || {};
    if (!String(shareName).includes(defaultShareName)) continue;

    console.log(driverName);
    const thermalOpts: any = {
      type: PrinterTypes.TANCA
    };

    // not started with number
    if (portName.match(/^\d/)) {
      thermalOpts['interface'] = `TCP://${portName}`;
    } else {
      thermalOpts['interface'] = `printer:${name}`;
      thermalOpts['driver'] = nodePrinter;
    }

    let thermalPrinter: any = null;
    try {
      thermalPrinter = new ThermalPrinter(thermalOpts);
    } catch (e) {
      console.log('Failed to try to print');
    }

    if (!thermalPrinter) return;

    const isConnected = await thermalPrinter.isPrinterConnected();
    console.log('Status da impressora: ', isConnected);

    if (!isConnected) {
      return console.log(
        'Impressora desligada, portanto não foi possível imprimir!'
      );
    }

    const printerOpts = {
      cashierConferency,
      example,
      moneyEvaluation,
      giracredito,
      giracreditoEvaluation,
      devolution,
      preEvaluationPassword,
      preEvaluation,
      priceSuggestion,
      reinforcement,
      cashierClosure
    };

    const printerType = 'cashierConferency';

    // for (const printerDetails of Object.values(printerOpts)) {
    // printerDetails(thermalPrinter);
    printerOpts[printerType](thermalPrinter);
    // thermalPrinter?.alignCenter();
    // thermalPrinter?.newLine();
    // thermalPrinter?.println('Example');
    // thermalPrinter?.cut();
    // thermalPrinter?.beep();

    try {
      await thermalPrinter.execute();
    } catch (error) {
      console.log('Print Error:', error);
      continue;
    }
    // }
  }
})();
