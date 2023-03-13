export function cashierClosure(printer: any) {
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
  printer?.println('CNPJ: 23212902000197');                          //rua + numero
  printer?.println('R. Tiradentes,');
  printer?.println('Centro');
  printer?.println('Ponta Grossa TEL: 19987553052');
  printer?.drawLine();
  printer?.newLine();
  printer?.alignLeft();
  printer?.println('Abertura: 13/03/2023 08:50:15');  
  printer?.println('Fechamento: 13/03/2023 09:40:10');  
  printer?.println('Operador: avaliador-pontagrossa1');  
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.alignCenter();
  printer?.println("Fechamento de Caixa")
  printer?.println("Avaliação")
  printer?.setTextNormal();
  printer?.bold(true);
  printer.leftRight("Inicio Caixa", "R$ 1.500,00");
  printer.leftRight("Dinheiro", "R$ 440,00");
  printer.leftRight("Giracrédito", "R$ 0,00");
  printer.leftRight("Reforço", "R$ 0,00");
  printer?.drawLine();
  printer?.leftRight("Valor Previsto:", "R$1.060,00");
  printer?.leftRight("Total Avaliações:", "R$ 440,00");
  printer?.drawLine();
  printer?.newLine();
  printer?.setTextNormal();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Avaliações Recusadas');
  printer?.setTextNormal();
  printer?.bold(true);
  printer?.println("Não aceitou o valor: 1");
  printer?.println("Não enquadrou ao perfil da loja: 1");
  printer?.println("Outros: 1");
  printer?.println("Motivos indefinidos");
  printer?.newLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.alignCenter();
  printer?.println('Avaliações Canceladas');
  printer?.setTextNormal();
  printer?.bold(true);
  printer?.println("Quantidade: 1");
  printer?.println("Valor Total: R$ 20,00");
  printer?.drawLine();
  printer?.setTextNormal();
  printer?.leftRight("Quantidade Avaliações: ","5");
  printer?.leftRight("Quantidade Via Sistema: ","5");
  printer?.leftRight("Quantidade Via Manual: ","0");
  printer?.leftRight("Quantidade Valorização Manual: ","0");
  printer?.leftRight("Total Valorizado: ","R$ 0,00");

  printer?.cut();
  // printer?.beep();
}
