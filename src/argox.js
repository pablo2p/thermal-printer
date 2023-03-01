var pplaBuilder = require('ppla-builder');

pplaBuilder
  .rotation(pplaBuilder.DIRECTIONS.LANDSCAPE)
  .fontType(pplaBuilder.FONT_TYPE[':'].value)
  .fontSubType(pplaBuilder.COURIER_SUBTYPES.ECMA94)
  .hScale(5)
  .vScale(3)
  .x(100)
  .y(150)
  .label('This is a test label');
