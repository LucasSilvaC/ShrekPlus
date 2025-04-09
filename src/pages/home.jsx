import React from 'react';
import Header from '../componentes/header';
import Footer from '../componentes/footer';
import Category from '../componentes/category';
import Card from '../componentes/card';
import List from '../componentes/list';

export default function Home() {
  return (
    <>
      <Header />
      <Category />
      <Card />
      <List />
      <Footer />
    </>
  );
}
