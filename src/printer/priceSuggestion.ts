export function priceSuggestion(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {};

  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Cresci e Perdi Ponta Grossa');
  printer?.setTextNormal(); 
  printer?.bold(false);
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('10/03/2023 15:25:13');
  printer?.setTextNormal();
  printer?.drawLine();
  printer?.println('Avaliador: DFCOM3');
  printer?.println('Cliente: Vicctor Matheus');
  printer?.println('CPF: 501.214.798-70');
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('PRODUTOS AVALIAÇÃO');
  printer?.setTextNormal();
  printer?.bold(true);
  printer.table(["Descrição","     Qtd", "  Valor Min", "   Valor Max"]);           
  printer?.setTextNormal();
  printer.tableCustom([                 
    { text:"PRODUTO NOVO - SIMPLES", align:"LEFT"},
    { text:"1", align:"CENTER"},
    { text:"420,00", align:"CENTER"},
    { text:"520,00", align:"RIGHT"}
    ]);
  printer?.drawLine();
  printer.tableCustom([                 
    { text:"PRODUTO NOVO - SIMPLES", align:"LEFT" },
    { text:"1", align:"CENTER"},
    { text:"420,00", align:"CENTER"},
    { text:"520,00", align:"RIGHT"}
    ]);
  printer?.drawLine();
  printer.tableCustom([                 
    { text:"PRODUTO NOVO - SIMPLES", align:"LEFT" },
    { text:"1", align:"CENTER"},
    { text:"420,00", align:"CENTER"},
    { text:"520,00", align:"RIGHT"}
    ]);
  printer?.drawLine();
  printer.tableCustom([                 
    { text:"PRODUTO NOVO - SIMPLES", align:"LEFT" },
    { text:"1", align:"CENTER"},
    { text:"420,00", align:"CENTER"},
    { text:"520,00", align:"RIGHT"}
    ]);
  printer?.drawLine();
  printer?.cut();
  // printer?.beep();
}
