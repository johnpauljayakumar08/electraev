
export enum OrderStatus {
  NEW = 'NEW',
  ACCEPTED = 'ACCEPTED',
  IN_PROGRESS = 'IN_PROGRESS',
  DISPATCHED = 'DISPATCHED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

export enum ASNStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  IN_TRANSIT = 'IN_TRANSIT',
  IN_YARD = 'IN_YARD',
  UNLOADED = 'UNLOADED',
  PUTAWAY = 'PUTAWAY'
}

export interface ASN {
  id: string; // ASN Number
  orderId: string; // Purchasing Document Number
  eta: string;
  shippingDate: string;
  shipFrom: string;
  shipTo: string;
  status: ASNStatus;
  carrier: string;
  scacId: string;
  grossWeight: number;
  items: { productName: string; quantity: number; batchNumber: string }[];
}

export interface QualityNotification {
  id: string; // NCR Number
  orderId: string;
  type: 'NCR' | 'CAPA' | 'INSPECTION';
  status: 'OPEN' | 'IN_REVIEW' | 'CLOSED';
  description: string;
  okCount: number;
  ngCount: number;
  rejectionRate: number;
  date: string;
}

export interface Order {
  id: string;
  purchasingDocNumber: string;
  productName: string;
  quantity: number;
  orderDate: string;
  expectedDelivery: string;
  status: OrderStatus;
  amount: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  stock: number;
  minStock: number;
  status: 'ACTIVE' | 'INACTIVE';
  price: number;
  binLocation: string;
  batchLot: string;
  expiryDate: string;
}

export interface Invoice {
  id: string;
  orderId: string;
  amount: number;
  date: string;
  dueDate: string;
  status: 'PAID' | 'PENDING' | 'OVERDUE';
}

export interface Notification {
  id: string;
  type: 'ORDER' | 'PAYMENT' | 'STOCK' | 'QUALITY' | 'SYSTEM';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface GenealogyReport {
  batterySerialNo: string;
  model: string;
  productionOrderNo: string;
  assemblyLine: string;
  shiftDateTime: string;
  finalQCStatus: 'PASS' | 'FAIL';
  subAssemblies: { name: string; serialBatch: string; supplier: string }[];
  rawMaterials: { name: string; batchLot: string; supplier: string; expiryDate: string }[];
  procurement: {
    supplierCode: string;
    supplierName: string;
    poNumber: string;
    asnNumber: string;
    grnNumber: string;
    qualityInspectionLot: string;
  };
  processHistory: {
    station: string;
    operation: string;
    parameters: string;
    result: 'OK' | 'NG';
    timestamp: string;
  }[];
  ncrCapa?: {
    ncrNo: string;
    description: string;
    rootCause: string;
    capaRef: string;
    disposition: string;
  };
}

export type ViewType = 'LANDING' | 'LOGIN' | 'OVERVIEW' | 'ORDERS' | 'ASN' | 'INVENTORY' | 'QUALITY' | 'PAYMENTS' | 'PROFILE' | 'GENEALOGY' | 'FLOW' | 'ANALYTICS';
