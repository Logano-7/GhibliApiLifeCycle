import React, { useState } from "react";
import MainLayout from "../components/index.js";

export function HomePage() {
  return (
    <MainLayout>
      <h1>Learning React</h1>
  
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
  
      <ul>
        {list.map((item, idx) => {
          return (
            <li key={idx} onDoubleClick={() => onDblClick(idx)}>
              {item}
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}