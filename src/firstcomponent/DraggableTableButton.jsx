// src/firstcomponent/DraggableTableButton.jsx
import React, { useState } from "react";  // ← ye change kiya
import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  TABLE: "table",
};

const tableData = [
  { id: 1, name: "Rahul Sharma", age: 28, city: "Mumbai" },
  { id: 2, name: "Priya Singh", age: 34, city: "Delhi" },     // ← fix
  { id: 3, name: "Amit Kumar", age: 31, city: "Bangalore" },
  { id: 4, name: "Neha Verma", age: 26, city: "Pune" },
];

// Draggable Button
export function DraggableTableButton() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TABLE,
    item: { type: "table" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "16px",
        backgroundColor: "#28a745",
        color: "white",
        borderRadius: "12px",
        cursor: "move",
        textAlign: "center",
        fontWeight: "bold",
        opacity: isDragging ? 0.5 : 1,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        userSelect: "none",
      }}
    >
      Drag to Add Table
    </div>
  );
}

// Drop Area
export function DropArea({ children }) {
  const [tables, setTables] = useState([]);  // ← React.useState → useState

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.TABLE,
    drop: () => {
      setTables((prev) => [...prev, Date.now()]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        minHeight: "100vh",
        padding: "30px",
        backgroundColor: isOver ? "rgba(0, 255, 150, 0.15)" : "transparent",
        border: isOver ? "4px dashed #00ff9d" : "none",
        borderRadius: "10px",
        transition: "all 0.3s",
      }}
    >
      {children}
      {tables.map((key) => (
        <Table key={key} />
      ))}
    </div>
  );
}

// Table Component
function Table() {
  return (
    <div
      style={{
        margin: "40px 0",
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ background: "#1976d2", color: "white", padding: "18px", fontSize: "20px", fontWeight: "bold" }}>
        Employee Data Table
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>City</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>   {/* ← :hover hata diya */}
              <td style={tdStyle}>{row.id}</td>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.age}</td>
              <td style={tdStyle}>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = { padding: "16px", textAlign: "left", fontWeight: "600", borderBottom: "2px solid #ddd" };
const tdStyle = { padding: "16px", borderBottom: "1px solid #eee" };