
import { OrderStatus, ASNStatus, Order, Product, Invoice, Notification, ASN, QualityNotification, GenealogyReport } from './types';

export const MOCK_ORDERS: Order[] = [
  { id: 'PO-2024-9921', purchasingDocNumber: '4500012345', productName: 'LFP-48V 100Ah Battery Pack', quantity: 50, orderDate: '2024-05-15', expectedDelivery: '2024-05-22', status: OrderStatus.NEW, amount: 7525000 },
  { id: 'PO-2024-9922', purchasingDocNumber: '4500012346', productName: 'NMC-24V 60Ah Residential Units', quantity: 120, orderDate: '2024-05-16', expectedDelivery: '2024-05-25', status: OrderStatus.NEW, amount: 4244000 },
  { id: 'PO-2024-8842', purchasingDocNumber: '4500012347', productName: 'Solar Storage NMC Modules', quantity: 80, orderDate: '2024-05-12', expectedDelivery: '2024-05-19', status: OrderStatus.IN_PROGRESS, amount: 6450000 },
  { id: 'PO-2024-7712', purchasingDocNumber: '4500012348', productName: 'High-Density EV Cells (Batch A)', quantity: 5000, orderDate: '2024-05-10', expectedDelivery: '2024-05-14', status: OrderStatus.DELIVERED, amount: 12800000 },
];

export const MOCK_ASNS: ASN[] = [
  {
    id: 'ASN-88001122',
    orderId: 'PO-2024-8842',
    eta: '2024-05-19 14:00',
    shippingDate: '2024-05-17 09:00',
    shipFrom: 'Pune Plant - Warehouse A',
    shipTo: 'VoltCore Logistics Hub - Chennai',
    status: ASNStatus.IN_TRANSIT,
    carrier: 'BlueDart Logistics',
    scacId: 'BLDR',
    grossWeight: 1250.5,
    items: [{ productName: 'Solar Storage NMC Modules', quantity: 80, batchNumber: 'BAT-2024-Q2-001' }]
  },
  {
    id: 'ASN-88001123',
    orderId: 'PO-2024-7712',
    eta: '2024-05-14 10:00',
    shippingDate: '2024-05-12 08:30',
    shipFrom: 'Pune Plant - Warehouse B',
    shipTo: 'Mahindra EV Factory - Pune',
    status: ASNStatus.PUTAWAY,
    carrier: 'TCI Express',
    scacId: 'TCIE',
    grossWeight: 450.0,
    items: [{ productName: 'High-Density EV Cells', quantity: 5000, batchNumber: 'CEL-2024-X1' }]
  }
];

export const MOCK_QUALITY: QualityNotification[] = [
  { id: 'NCR-2024-001', orderId: 'PO-2024-7712', type: 'NCR', status: 'CLOSED', description: 'Cell Voltage Variance in Batch X1', okCount: 4995, ngCount: 5, rejectionRate: 0.1, date: '2024-05-14' },
  { id: 'CAPA-2024-004', orderId: 'PO-2024-8842', type: 'CAPA', status: 'IN_REVIEW', description: 'Moisture ingress during transit - Corrective Action', okCount: 0, ngCount: 0, rejectionRate: 0, date: '2024-05-16' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'P-101', name: 'LFP-48V Industrial Pack', sku: 'BBS-LFP-01', stock: 45, minStock: 10, status: 'ACTIVE', price: 150500, binLocation: 'BIN-A1-04', batchLot: 'LFP24-05', expiryDate: '2028-12-31' },
  { id: 'P-102', name: 'NMC-24V Module', sku: 'BBS-NMC-88', stock: 15, minStock: 50, status: 'ACTIVE', price: 35000, binLocation: 'BIN-B2-12', batchLot: 'NMC24-02', expiryDate: '2027-06-30' },
  { id: 'P-103', name: 'EV Cell Gen-3', sku: 'BBS-EVC-03', stock: 12500, minStock: 2000, status: 'ACTIVE', price: 2560, binLocation: 'CELL-ST-09', batchLot: 'EVC24-X', expiryDate: '2030-01-01' },
];

export const MOCK_GENEALOGY: GenealogyReport = {
  batterySerialNo: 'BAT-IND-2024-000123',
  model: '48V Lithium-Ion Pack',
  productionOrderNo: 'PRD-45001234',
  assemblyLine: 'Line-2',
  shiftDateTime: 'Shift-B / 10-Jan-2026 / 14:32',
  finalQCStatus: 'PASS',
  subAssemblies: [
    { name: 'Cell Module', serialBatch: 'CM-BAT-0923', supplier: 'ABC Cells Pvt Ltd' },
    { name: 'BMS', serialBatch: 'BMS-778899', supplier: 'XYZ Electronics' },
    { name: 'Wiring Harness', serialBatch: 'WH-4567', supplier: 'LMN Auto' },
    { name: 'Cooling Plate', serialBatch: 'CP-8899', supplier: 'ThermoTech' }
  ],
  rawMaterials: [
    { name: 'Cells', batchLot: 'CELL-B-0923', supplier: 'ABC Cells Pvt Ltd', expiryDate: '30-Dec-2027' },
    { name: 'Electrolyte', batchLot: 'EL-5566', supplier: 'ChemSource Ltd', expiryDate: '15-Aug-2026' },
    { name: 'Adhesive', batchLot: 'ADH-8890', supplier: 'BondIt Chemicals', expiryDate: '10-Jul-2026' },
    { name: 'Fasteners', batchLot: 'FST-3322', supplier: 'FastenPro', expiryDate: 'NA' }
  ],
  procurement: {
    supplierCode: 'SUP-10234',
    supplierName: 'ABC Cells Pvt Ltd',
    poNumber: '4500012345',
    asnNumber: 'ASN-987654',
    grnNumber: '5000456789',
    qualityInspectionLot: 'QL-332211'
  },
  processHistory: [
    { station: 'S01', operation: 'Cell Welding', parameters: 'Voltage: 3.65V', result: 'OK', timestamp: '10-Jan-2026 13:10' },
    { station: 'S03', operation: 'Module Assembly', parameters: 'Torque: 6Nm', result: 'OK', timestamp: '10-Jan-2026 13:45' },
    { station: 'S05', operation: 'Final Testing', parameters: 'Pack Voltage: 48.2V', result: 'OK', timestamp: '10-Jan-2026 14:25' }
  ],
  ncrCapa: {
    ncrNo: 'NCR-2024-014',
    description: 'Voltage deviation at initial test',
    rootCause: 'Loose terminal connection',
    capaRef: 'CAPA-2024-009',
    disposition: 'Reworked and Accepted'
  }
};

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-BBS-4412', orderId: 'PO-2024-7712', amount: 12800000, date: '2024-05-14', dueDate: '2024-06-14', status: 'PAID' },
  { id: 'INV-BBS-4414', orderId: 'PO-2024-8842', amount: 6450000, date: '2024-05-12', dueDate: '2024-06-12', status: 'PENDING' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: '1', type: 'ORDER', title: 'New PO: Mahindra Electric', message: 'Urgent PO received for 50 LFP packs (PO-2024-9921)', time: '2 mins ago', read: false },
  { id: '4', type: 'QUALITY', title: 'NCR Raised: VoltCore Hub', message: 'NCR-2024-001 has been raised for inspection failure.', time: '1 hour ago', read: false },
];

export const ANALYTICS_DATA = [
  { name: 'Jan', orders: 45, revenue: 58200000 },
  { name: 'Feb', orders: 52, revenue: 69350000 },
  { name: 'Mar', orders: 38, revenue: 47980000 },
  { name: 'Apr', orders: 65, revenue: 81800000 },
  { name: 'May', orders: 72, revenue: 94100000 },
  { name: 'Jun', orders: 60, revenue: 70650000 },
];

export const REVENUE_BY_TYPE = [
  { category: 'Industrial LFP', amount: 45000000, percent: 45 },
  { category: 'EV Cells', amount: 34000000, percent: 34 },
  { category: 'Residential Storage', amount: 17000000, percent: 17 },
  { category: 'Other', amount: 4100000, percent: 4 },
];
