"use client";
import { useState } from "react";
import Warning from "./Warning";

export default function Button({ className, text, onClick }) {

  return (
    <>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
