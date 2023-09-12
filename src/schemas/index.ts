import { Schema, model } from "mongoose";

interface Logs {
  start_time: number;
  time_spent: number;
  attempts: number;
  success: boolean;
  mobile: boolean;
  input: any[];
  history: any[];
}

interface Authorization {
  authorization_code: string;
  bin: string;
  last4: string;
  exp_month: string;
  exp_year: string;
  channel: string;
  card_type: string;
  bank: string;
  country_code: string;
  brand: string;
  reusable: boolean;
  signature: string;
  account_name: string | null;
  receiver_bank_account_number: string | number | null;
  receiver_bank: string | number | null;
}

export interface ISampleSchema {
  amount: number;
  reference: string;
  accessCode: string;
  status: boolean;
  ip_address: string;
  gateway_response: string;
  logs: Logs;
  transaction_authorization: Authorization;
  domain: string;
  verified: boolean;
  created_at: Date;
  updated_at: Date;
}

const SampleSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  reference: {
    type: String,
    required: true,
    unique: true,
  },
  accessCode: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  ip_address: {
    type: String,
    default: null,
  },
  gateway_response: {
    type: String,
    default: null,
  },
  domain: {
    type: String,
    default: null,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  logs: {
    default: null,
    type: {
      start_time: {
        type: Number,
        required: true,
      },
      time_spent: {
        type: Number,
        required: true,
      },
      attempts: {
        type: Number,
        required: true,
      },
      success: {
        type: Boolean,
        required: true,
      },
      mobile: {
        type: Boolean,
        required: true,
      },
      input: {
        type: [],
      },
      history: {
        type: [],
      },
    },
  },
  transaction_authorization: {
    default: null,
    type: {
      authorization_code: {
        type: String,
        required: true,
      },
      bin: {
        type: String,
        required: true,
      },
      last4: {
        type: String,
        required: true,
      },
      exp_month: {
        type: String,
        required: true,
      },
      exp_year: {
        type: String,
        required: true,
      },
      channel: {
        type: String,
        required: true,
      },
      card_type: {
        type: String,
        required: true,
      },
      bank: {
        type: String,
        required: true,
      },
      country_code: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      reusable: {
        type: Boolean,
        required: true,
      },
      signature: {
        type: String,
        required: true,
      },
      account_name: {
        type: String,
        required: true,
      },
      receiver_bank_account_number: {
        type: Number,
        required: true,
      },
      receiver_bank: {
        type: Number,
        required: true,
      },
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

const Sample = model<ISampleSchema>("Sample", SampleSchema);
export default Sample;
