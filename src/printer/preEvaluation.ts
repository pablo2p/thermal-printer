export function preEvaluation(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {};

  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('SENHA : 300');
  printer?.setTextNormal(); 
  printer?.drawLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('>>PRÉ-AVALIAÇÃO<<');
  printer?.setTextNormal(); 
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.bold(true);
  printer?.println('VOLUME 001/001');
  printer?.setTextNormal(); 
  printer?.drawLine();
  printer?.println('10/03/2023 11:00:00');
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.bold(true);
  printer?.println('CPF: 501.214.798-70');
  printer?.setTextNormal();
  printer?.println('Cliente: Victor Matheus');
  printer?.println('Telefone: (19) 998755-3052');
  printer?.println('ID Pré-avaliação: 640c55485csf5456161c6673d');
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.bold(true);
  printer?.println('HISTÓRICO DO CLIENTE');
  // printer?.setTextNormal();
  // printer?.bold(true);
  // printer.table(["Data","    Unidade", "        Status"]);           
  // printer?.setTextNormal();
  // printer.tableCustom([                 
  //   { text:"06/03/2023", align:"LEFT" },
  //   { text:"Divinolandia - Suporte", align:"CENTER"},
  //   { text:"Finalizado", align:"RIGHT"}
  // ]);
  // printer?.drawLine();
  // printer.tableCustom([                 
  // { text:"06/03/2023", align:"LEFT" },
  // { text:"Divinolandia - Suporte", align:"CENTER"},
  // { text:"Finalizado", align:"RIGHT"}
  // ]);
  // printer?.drawLine();
  // printer.tableCustom([    
  // { text:"06/03/2023     Motivo: sdasdasdasdasdasda", align:"LEFT" },
  // { text:"Divinolandia - Suporte", align:"CENTER"},
  // { text:"Cancelado", align:"RIGHT"}
  // ]);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.bold(true);
  printer?.println('Primeira Avaliação');
  printer?.cut();
  // printer?.beep();
}
