const fs = require('fs');
const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');

const invoice = {
  shipping: {
    name: 'John Doe',
    address: '1234 Main Street',
    city: 'San Francisco',
    state: 'CA',
    country: 'US',
    postal_code: 94111,
  },
  items: [
    {
      item: 'TC 100',
      description: 'Toner Cartridge',
      quantity: 2,
      amount: 6000,
    },
    {
      item: 'USB_EXT',
      description: 'USB Cable Extender',
      quantity: 1,
      amount: 2000,
    },
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234,
};

async function createInvoice(invoice) {
  const qrcode = await QRCode.toDataURL(
    'some-cool-unique-id-with-long-letters',
  );
  const doc = new PDFDocument({ size: 'A4' });

  doc.font('ZapfDingbats').pipe(fs.createWriteStream('./out/test.pdf'));

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc, qrcode);

  doc.end();
}

function generateHeader(doc) {
  doc
    .fillColor('#444444')
    .fontSize(20)
    .text('BookLake', 50, 57)
    .fontSize(10)
    .moveDown();
}

function generateFooter(doc, qrcode) {
  doc
    .image(qrcode, 40, 600)
    .fontSize(10)
    .text('Thank you for choosing book lake', 50, 700, {
      align: 'center',
      width: 500,
    });
}

function generateCustomerInformation(doc, invoice) {
  const shipping = invoice.shipping;

  doc
    .text(`Замовлення №: ${invoice.invoice_nr}`, 50, 200)
    .text(`Дата рибалки: 25.06.2019`, 50, 215)
    .text(`Озеро: Несамовите`, 50, 130)

    .text(shipping.name, 300, 200)
    .text(shipping.address, 300, 215)
    .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 130)
    .moveDown();
}

function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
  doc
    .fontSize(10)
    .text(c1, 50, y)
    .text(c2, 150, y)
    .text(c3, 280, y, { width: 90, align: 'right' })
    .text(c4, 370, y, { width: 90, align: 'right' })
    .text(c5, 0, y, { align: 'right' });
}

function generateInvoiceTable(doc, invoice) {
  let i,
    invoiceTableTop = 330;

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.item,
      item.description,
      item.amount / item.quantity,
      item.quantity,
      item.amount,
    );
  }
}

createInvoice(invoice);

const order = {
  date: 'Tue, 24 Dec 2019 10:01:41 GMT',
  id: 'some-uuid',
  lake: 'Some lake name according to locale',
  fishingType: 'some fishing type',
  fishingDayType: 'some fishing day type',
  buyer: {
    name: 'Test user',
    email: 'test-user@gmail.com',
    phone: '095-324-23-13',
  },
  places: [
    {
      id: 'some-place-is',
      placeNumber: 'some-place-number',
      options: ['id', 'of', 'selected', 'options'],
      requiredOptions: ['id', 'of', 'required', 'options'],
      price: 'price for place + prices for all options',
    },
  ],
};
