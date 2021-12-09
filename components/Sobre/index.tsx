import Head from 'next/head';
import { useState } from 'react';

const banner =
  'https://images.unsplash.com/photo-1638115275995-18fb07309128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80';

export default function Sobre() {
  return (
    <div id="sobre" className="mt-3 flex flex-col justify-center items-center">
      <h1 className="text-2xl my-10 font-bold">EMPRESA</h1>
      <div className="grid grid-flow-col grid-cols-2">
        <p className="row-span-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          ducimus temporibus inventore repellendus maiores fugiat libero numquam
          deserunt perspiciatis suscipit quia dolore a sint dolor, omnis,
          impedit, officiis aspernatur vel. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eligendi similique perferendis
          dignissimos molestiae aliquam modi tempora autem iure minima. Maiores,
          nobis inventore natus mollitia enim excepturi placeat in libero error!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
          odio in non perferendis quo velit optio harum amet. Iure, recusandae.
          Obcaecati ex atque eius iusto natus officiis suscipit, reprehenderit
          blanditiis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ipsum beatae saepe blanditiis aliquid tempore deleniti esse, porro hic
          eligendi? Facere temporibus quisquam dolorem fugiat numquam ea
          pariatur quae perspiciatis? Fugiat.
        </p>
        <img src={banner} alt="banner" className="rounded max-h-96 w-screen" />
        <div className="w-full flex-none -ml-full rounded-3xl transform bg-yellow-700 shadow-lg bg-gradient-to-br from-cyan-400 to-light-blue-500 -rotate-1 sm:-rotate-2"></div>
      </div>
    </div>
  );
}
