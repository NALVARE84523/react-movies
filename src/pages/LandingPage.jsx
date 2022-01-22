import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import React, { Component }  from 'react'

export function LandingPage() {
  return (
    <>
      <Search />
      <MoviesGrid />
    </>
  );
}
