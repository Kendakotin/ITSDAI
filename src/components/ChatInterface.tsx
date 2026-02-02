import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import type { Message } from '../types'
import { Send, Bot, User, Terminal } from 'lucide-react'

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I am George, your ITSD AI Network Assistant. Describe your network issue or ask me to run diagnostics.',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'm analyzing your network issue: "${input}"\n\nLet me run some diagnostics...\n\n✓ DNS Resolution: OK\n✓ Gateway Ping: 2ms\n✓ Packet Loss: 0%\n\nRecommendation: Check your firewall settings or try flushing DNS with \`ipconfig /flushdns\`.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="h-[400px] overflow-y-auto space-y-4 pr-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              message.role === 'user' ? 'bg-blue-600' : 'bg-cyan-600'
            }`}>
              {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <Card className={`max-w-[80%] border-0 ${
              message.role === 'user' 
                ? 'bg-blue-600/20 text-blue-100' 
                : 'bg-slate-800/50 text-slate-200'
            }`}>
              <CardContent className="p-3 text-sm whitespace-pre-line">
                {message.content}
              </CardContent>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center animate-pulse">
              <Terminal size={16} />
            </div>
            <Card className="bg-slate-800/30 border-0">
              <CardContent className="p-3 text-sm text-slate-400">
                Analyzing network diagnostics...
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-4 border-t border-slate-800">
        <Input
          placeholder="Describe your network issue (e.g., 'Slow internet', 'Cannot connect to VPN')..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600"
        />
        <Button 
          onClick={handleSend} 
          disabled={isLoading || !input.trim()}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  )
}
