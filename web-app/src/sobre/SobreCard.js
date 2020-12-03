import React from 'react';
import style from './SobreCard.module.css';

const SobreCard = () => (
  <div className={style.pageCard}>
    <h2 className={style.title}>Sobre mim</h2>

<p>Olá, eu sou um Designer Gráfico com experiência em e-ecommerce, indústria gráfica e design industrial. Atualmente trabalho para três lojas virtuais como programador web.</p>

<h4>Marketing</h4>
<p>E-mail marketing, redes sociais, SEO e ferramentas do Google: ads, analytics, meu negócio, shopping e Search Console.</p>

<h4>Web design</h4>
<p>Desenvolvedor front end, criação de layout para Web sites responsivos e dinâmicos.</p>

<h4>Design gráfico</h4>
<p>Criação de layout para comunicação visual, apresentação, manual de produto, tratamento de imagens e fechamento de arquivos.
</p>   
  </div>
);

export default SobreCard;
