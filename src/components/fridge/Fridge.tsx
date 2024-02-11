'use client';

import React, { useMemo } from 'react';
import ReactFlow, {
  Controls,
  useNodesState,
} from 'reactflow';

import { NODE_DATA } from './data';

import 'reactflow/dist/style.css';

export function Fridge() {
  const [nodes, _, onNodesChange] = useNodesState<FridgeNodeData>(NODE_DATA);
  const nodeTypes = useMemo(() => ({
    fridge: FridgeNode,
  }), []);

  return (
    <div
      className="border bg-secondary"
      style={{ minWidth: 300, minHeight: 300, width: '80vw', height: '80vh' }}
    >
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

type FridgeNodeData = {
  label: string;
}

const FridgeNode = ({ data }: { data: FridgeNodeData }) => {
  return (
    <div className="font-serif border bg-background px-2">
      {data.label}
    </div>
  );
}
