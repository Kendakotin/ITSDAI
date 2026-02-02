import { ChatInterface } from './components/ChatInterface'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            ITSD AI
          </h1>
          <p className="text-slate-400 text-lg">Intelligent Network Diagnostics & Troubleshooting Assistant</p>
        </header>

        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-cyan-400">Network Diagnostics</CardTitle>
            <CardDescription className="text-slate-400">
              Describe your network issue or run automated diagnostics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChatInterface />
          </CardContent>
        </Card>

        <footer className="text-center text-slate-600 text-sm mt-12">
          <p>© 2026 Kendakotin | Built with React + Vite + Tailwind</p>
        </footer>
      </div>
    </div>
  )
}

export default App
