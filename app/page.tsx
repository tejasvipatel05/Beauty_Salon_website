'use client';
import landingstyles from '@/styles/Landing.module.css';

export default function Home() {
  return (
    <div className={landingstyles.container}>
        <section className={landingstyles.hero}>
            <h1 className={landingstyles.hero}>RIDNO STUDIO</h1>
            <p className={landingstyles.hero}>
              Our beauty salon successfully provides quality services in the field of beauty and cosmetology,
              carefully caring for each client
            </p>
        </section>
      </div>
  );
}