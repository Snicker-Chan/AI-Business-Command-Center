import { useState } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { Download, Plus, Trash2 } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const InvoiceForm = () => {
  const ref = useAnimation('fadeInUp')
  const [invoice, setInvoice] = useState({
    clientName: '',
    clientEmail: '',
    items: [{ description: '', quantity: 1, price: 0 }],
    dueDate: '',
    notes: ''
  })

  const addItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, price: 0 }]
    }))
  }

  const removeItem = (index) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }))
  }

  const updateItem = (index, field, value) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const calculateTotal = () => {
    return invoice.items.reduce((total, item) => total + (item.quantity * item.price), 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock PDF generation - replace with actual API call
    alert('Invoice PDF would be generated and downloaded here')
  }

  return (
    <div ref={ref} className="space-y-6 pt-16 lg:pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Invoice Manager</h1>
          <p className="text-gray-400 mt-2">Create and manage professional invoices</p>
        </div>
        <Button onClick={handleSubmit}>
          <Download className="w-4 h-4 mr-2" />
          Generate PDF
        </Button>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Client Name
              </label>
              <input
                type="text"
                value={invoice.clientName}
                onChange={(e) => setInvoice(prev => ({ ...prev, clientName: e.target.value }))}
                className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
                placeholder="Enter client name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Client Email
              </label>
              <input
                type="email"
                value={invoice.clientEmail}
                onChange={(e) => setInvoice(prev => ({ ...prev, clientEmail: e.target.value }))}
                className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
                placeholder="Enter client email"
              />
            </div>
          </div>

          {/* Invoice Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold gradient-text">Items</h3>
              <Button type="button" variant="secondary" onClick={addItem}>
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </div>
            
            <div className="space-y-4">
              {invoice.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                      className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
                      placeholder="Item description"
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                      className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
                      min="1"
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value) || 0)}
                      className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
                      step="0.01"
                      min="0"
                    />
                  </div>
                  <div className="w-20 text-right">
                    <span className="text-neon-green font-semibold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                  {invoice.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-2 text-neon-pink hover:bg-neon-pink/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Total and Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Due Date
              </label>
              <input
                type="date"
                value={invoice.dueDate}
                onChange={(e) => setInvoice(prev => ({ ...prev, dueDate: e.target.value }))}
                className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-neon-blue/10 rounded-lg">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-neon-green">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Notes
            </label>
            <textarea
              value={invoice.notes}
              onChange={(e) => setInvoice(prev => ({ ...prev, notes: e.target.value }))}
              rows={4}
              className="glass w-full px-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none"
              placeholder="Additional notes or terms..."
            />
          </div>
        </form>
      </Card>
    </div>
  )
}

export default InvoiceForm