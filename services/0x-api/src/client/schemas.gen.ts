// This file is auto-generated by @hey-api/openapi-ts

export const $BUY_TOKEN_NOT_AUTHORIZED_FOR_TRADE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['BUY_TOKEN_NOT_AUTHORIZED_FOR_TRADE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INPUT_INVALID = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INPUT_INVALID'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        details: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              field: {
                type: 'string',
                description: 'The input field name',
              },
              reason: {
                type: 'string',
                description: 'The validation failure reason',
              },
            },
            required: ['field', 'reason'],
            additionalProperties: false,
          },
          description: 'The list of invalid inputs',
        },
      },
      required: ['zid', 'details'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INSUFFICIENT_BALANCE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INSUFFICIENT_BALANCE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        taker: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The taker of the transaction',
        },
        sellToken: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The sell token',
        },
        sellAmount: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description: 'The sell amount',
        },
        balance: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description: 'The current balance of the taker for the sell token',
        },
      },
      required: ['zid', 'taker', 'sellToken', 'sellAmount', 'balance'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INSUFFICIENT_BALANCE_OR_ALLOWANCE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INSUFFICIENT_BALANCE_OR_ALLOWANCE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
        taker: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The intended signer of the meta-transaction',
        },
        sellToken: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The sell token',
        },
        sellAmount: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description: 'The sell amount',
        },
        minBalanceOrAllowance: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description:
            'The smaller value of the balance or the allowance of the taker',
        },
      },
      required: [
        'zid',
        'metaTransactionHash',
        'taker',
        'sellToken',
        'sellAmount',
        'minBalanceOrAllowance',
      ],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INTERNAL_SERVER_ERROR = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INTERNAL_SERVER_ERROR'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INVALID_SIGNATURE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INVALID_SIGNATURE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
        taker: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The intended signer of the meta-transaction',
        },
      },
      required: ['zid', 'metaTransactionHash', 'taker'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $INVALID_SIGNER = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['INVALID_SIGNER'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
        taker: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The intended signer of the meta-transaction',
        },
        signer: {
          type: 'string',
          pattern: '^0x[a-fA-F0-9]{40}$',
          description: 'The signer of the meta-transaction',
        },
      },
      required: ['zid', 'metaTransactionHash', 'taker', 'signer'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $META_TRANSACTION_EXPIRY_TOO_SOON = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['META_TRANSACTION_EXPIRY_TOO_SOON'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
        expiry: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description:
            'The expiry of the meta-transaction provided by the caller in ms',
        },
      },
      required: ['zid', 'metaTransactionHash', 'expiry'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $META_TRANSACTION_INVALID = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['META_TRANSACTION_INVALID'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
      },
      required: ['zid', 'metaTransactionHash'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $META_TRANSACTION_STATUS_NOT_FOUND = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['META_TRANSACTION_STATUS_NOT_FOUND'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $PENDING_TRADES_ALREADY_EXIST = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['PENDING_TRADES_ALREADY_EXIST'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        metaTransactionHash: {
          type: 'string',
          description:
            'The hash of the meta-transaction provided by the caller',
        },
        pendingMetaTransactionHashes: {
          type: 'array',
          items: {
            type: 'string',
          },
          description:
            'The list of pending meta-transaction hashes for the same taker and sell token',
        },
      },
      required: ['zid', 'metaTransactionHash', 'pendingMetaTransactionHashes'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $SELL_AMOUNT_TOO_SMALL = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['SELL_AMOUNT_TOO_SMALL'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
        minSellAmount: {
          allOf: [
            {},
            {
              type: 'string',
              pattern: '^[-+]?(0|[1-9]\\d*)(\\.\\d+)?$',
            },
          ],
          description:
            'The minimum sell amount required for the trade to go through',
        },
      },
      required: ['zid', 'minSellAmount'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $SELL_TOKEN_NOT_AUTHORIZED_FOR_TRADE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['SELL_TOKEN_NOT_AUTHORIZED_FOR_TRADE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $TAKER_NOT_AUTHORIZED_FOR_TRADE = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['TAKER_NOT_AUTHORIZED_FOR_TRADE'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $TOKEN_NOT_SUPPORTED = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['TOKEN_NOT_SUPPORTED'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const

export const $UNCATEGORIZED = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      enum: ['UNCATEGORIZED'],
    },
    message: {
      type: 'string',
    },
    data: {
      type: 'object',
      properties: {
        zid: {
          type: 'string',
          description: 'The unique ZeroEx identifier of the request',
        },
      },
      required: ['zid'],
      additionalProperties: false,
    },
  },
  required: ['name', 'message', 'data'],
  additionalProperties: false,
} as const
