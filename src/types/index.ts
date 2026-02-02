export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  isError?: boolean
}

export interface NetworkDiagnostics {
  status: 'idle' | 'running' | 'completed' | 'error'
  results: {
    ping?: number
    packetLoss?: number
    dnsResolution?: boolean
    gatewayReachable?: boolean
  }
}
