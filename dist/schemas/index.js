"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SampleSchema = new mongoose_1.Schema({
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
const Sample = (0, mongoose_1.model)("Sample", SampleSchema);
exports.default = Sample;
