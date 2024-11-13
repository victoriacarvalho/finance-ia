import { TransactionPaymentMethod, TransactionType } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  LIGHT: "Luz",
  WATER: "Água",
  INTERNET: "Internet",
  CONDOMINIUM: "Condomínio",
  RENT: "Aluguel",
  HOME_MAINTENANCE: "Manutenção casa",
  TRANSPORTATION: "Transporte",
  FOOD: "Comida",
  MARKET: "Mercado",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  EDUCATION: "Luz",
  OTHER: "Outros",
  TRIP: "Viagem",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTIONS_TYPE_OPTIONS = [
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.DEPOSIT,
    label: "Ganho",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_TRANSFER],
  },
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.OTHER],
  },
  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: "LIGHT",
    label: "Luz",
  },
  {
    value: "WATER",
    label: "Água",
  },
  {
    value: "INTERNET",
    label: "Internet",
  },
  {
    value: "CONDOMINIUM",
    label: "Condomínio",
  },
  {
    value: "RENT",
    label: "Aluguel",
  },
  {
    value: "HOME_MAINTENANCE",
    label: "Manutenção da Casa",
  },
  {
    value: "TRANSPORTATION",
    label: "Transporte",
  },
  {
    value: "FOOD",
    label: "Comida",
  },
  {
    value: "MARKET",
    label: "Mercado",
  },
  {
    value: "ENTERTAINMENT",
    label: "Entretenimento",
  },
  {
    value: "HEALTH",
    label: "Saúde",
  },
  {
    value: "EDUCATION",
    label: "Educação",
  },
  {
    value: "OTHER",
    label: "Outros",
  },
  {
    value: "TRIP",
    label: "Viagem",
  },
];
