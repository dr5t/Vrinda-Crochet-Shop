import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardImage, CardContent } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <h1 className="text-4xl font-headline text-center mb-8">Vrinda Crochet</h1>
      <p className="text-center text-text-muted mb-12">Handcrafted with intention. Warm, soft, and made just for you.</p>
      
      <div className="flex justify-center gap-4 mb-12">
        <Button variant="primary">Shop Now</Button>
        <Button variant="outline">Custom Orders</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card isHoverable>
          <CardImage src="https://via.placeholder.com/400x500" alt="Placeholder" />
          <CardContent>
            <h3 className="font-semibold text-lg mb-1">Crochet Scrunchie</h3>
            <p className="text-text-muted">₹250</p>
          </CardContent>
        </Card>
        <Card isHoverable>
          <CardImage src="https://via.placeholder.com/400x500" alt="Placeholder" />
          <CardContent>
            <h3 className="font-semibold text-lg mb-1">Daisy Coasters</h3>
            <p className="text-text-muted">₹400</p>
          </CardContent>
        </Card>
        <Card isHoverable>
          <CardImage src="https://via.placeholder.com/400x500" alt="Placeholder" />
          <CardContent>
            <h3 className="font-semibold text-lg mb-1">Custom Amigurumi</h3>
            <p className="text-text-muted">₹1200</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
