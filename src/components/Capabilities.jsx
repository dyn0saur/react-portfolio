import React from 'react';
import capabilities from '../data/capabilities';
import CapabilityCard from './CapabilityCard';

export default function Capabilities(){
  const list = Array.isArray(capabilities) ? capabilities.filter(p => p && typeof p === 'object') : [];
  console.log('capabilities length:', list.length, list);
  return (
    <section id="capabilities" className="container section">
      <h2>Core Capabilities</h2>
      <div className="grid">
        {list.map((p, i) => (
          <CapabilityCard key={p.title ? `${p.title}-${i}` : i} project={p} />
        ))}
      </div>
    </section>
  );
}
