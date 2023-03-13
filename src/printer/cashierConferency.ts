export function cashierConferency(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {}
  printer.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer.bold(true);
  printer.setTextDoubleHeight();
  printer.setTextDoubleWidth();
  printer?.println('Cresci e Perdi Ponta Grossa');
  printer.setTextNormal(); 
  printer.bold(false);
  printer?.println('CNPJ: 23212902000197');                          //rua + numero
  printer?.println('R. Tiradentes,');
  printer?.println('Centro');
  printer?.println('Ponta Grossa TEL: 19987553052');
  printer?.drawLine();
  printer?.println('Data : 13/03/2023 09:54:00');
  printer?.println('ID Caixa: 640f0df644f583001133ffae');
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Conferência de Avaliação');
  printer?.newLine();
  printer?.println('Dinheiro');
  printer?.setTextNormal();
  printer?.bold(true);
  printer.table(["  Nome","       CPF", "        Valor"]);           
  printer?.setTextNormal();
  printer.tableCustom([                 
    { text:"Victor Matheus Custódio de Carvalho", align:"LEFT" },
    { text:"501.214.798-70", align:"CENTER"},
    { text:"R$ 410,00", align:"RIGHT"}
  ]);
  printer?.bold(true);
  printer?.println('Quantidade: 2');
  printer?.println('Total Dinheiro: R$440,00');
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Giracrédito');
  printer?.setTextNormal();
  printer?.bold(true);
  printer.table(["  Nome","       CPF", "        Valor"]);           
  printer?.setTextNormal();
  printer.tableCustom([                 
    { text:"Victor Matheus Custódio de Carvalho", align:"LEFT" },
    { text:"259.665.938-76", align:"CENTER"},
    { text:"R$ 250,00", align:"RIGHT"}
  ]);
  printer?.bold(true);
  printer?.println('Quantidade: 1');
  printer?.println('Total Giracrédito: R$250,00');
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Total Geral');
  printer?.setTextNormal();
  printer?.bold(true);
  printer?.println('Quantidade: 1');
  printer?.println('Valor Total: R$690,00');
  printer?.cut();
  // printer?.beep();
}
