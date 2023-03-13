export function devolution(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {};

  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('TERMO DE DEVOLUÇÃO DE MERCADORIAS ENTREGUES PARA AVALIAÇÃO');
  printer?.newLine();
  printer?.setTextNormal();
  printer?.alignLeft();
  printer?.bold(true);
  printer?.print('Data de cancelamento: ');
  printer?.bold(false);
  printer?.println('09/03/2023 11:50:00');
  printer?.bold(true);
  printer?.print('Motivo do cancelamento: ');
  printer?.bold(false);
  printer?.println('Não enquadrou ao perfil da loja');  
  printer?.newLine();
  printer?.println('Eu "Nome cliente", CPF n° "111.111.110-30", declaro que retirei os produtos que por mim foram entregues na Cresci e Perdi, procedendo à conferência de todos os itens, estando eles no mesmo estado.');
  printer?.newLine();
  printer?.alignCenter();
  printer?.println('----------------------');
  printer?.println('"Nome Cliente"');
  printer?.cut();
  // printer?.beep();
}
