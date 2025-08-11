import styles from "./Banners.module.css";

export const Banners = () => {
  const banners = [
    {
      id: 1,
      url: "https://verpecas.com.br/p/sebrae/22-02/completo/v2/banners/5-Ana-300x250-300kB-15%20seg-ate%203/",
      title: "Banner SEBRAE",
      width: 300,
      height: 250,
    },
    {
      id: 2,
      url: "https://verpecas.com.br/p/senai/01/completo2/v2/banners/11-2-300x250-150kb-Indeterminado-Indeterminado/",
      title: "Banner SENAI",
      width: 300,
      height: 250,
    },
    {
      id: 3,
      url: "https://verpecas.com.br/p/senai/01/completo/linha1/v2/banners/3-1-300x250-150kb-Indeterminado-Indeterminado/",
      title: "Banner SENAI",
      width: 300,
      height: 250,
    },
    {
      id: 4,
      url: "https://digitalwp.com.br/portfolio/caixa-mega-da-virada/banners/11-Conversa%cc%83o%20Online-300x600-150kB-livre-livre/",
      title: "Banner CAIXA",
      width: 300,
      height: 600,
    },
    {
      id: 5,
      url: "https://verpecas.com.br/p/senai/01/completo/linha1/v2/banners/4-1-300x600-150kb-Indeterminado-Indeterminado/",
      title: "Banner SENAI",
      width: 300,
      height: 600,
    },
    {
      id: 6,
      url: "https://verpecas.com.br/p/sebrae/22-02/completo/v2/banners/16-Ana-300x600-50kB-15%20seg-sim/",
      title: "Banner SEBRAE",
      width: 300,
      height: 600,
    },
    {
      id: 7,
      url: "https://verpecas.com.br/p/sebrae/22-06/completo/v2/banners/11-Linha%201-970x250-200kB-15%20seg-nao/",
      title: "Banner SEBRAE",
      width: 970,
      height: 250,
    },
    {
      id: 8,
      url: "https://digitalwp.com.br/portfolio/caixa-mega-da-virada/banners/1-Transmissa%cc%83o-970x150-400kB-livre-livre/",
      title: "Banner CAIXA",
      width: 970,
      height: 150,
    },
    {
      id: 9,
      url: "https://verpecas.com.br/p/sesi/01/completo/v2/banners/1-Linha%201-728x90-150kb-indeterminado-indeterminado/",
      title: "Banner SESI",
      width: 728,
      height: 90,
    },
  ];

  return (
    <section id="banners">
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Banners HTML5 <br />
            Rich Media
          </h2>
          <p className={styles.description}>
            Os criativos HTML5 são anúncios desenvolvidos com Javascript, HTML5
            e CSS.
          </p>
          <p className={styles.description}>
            São veiculados em páginas da Web ou em apps para dispositivos móveis
          </p>
          <div className={styles.wrapper__banners}>
            {banners.map((banner) => (
              <iframe
                id={banner.id}
                src={banner.url}
                title={banner.title}
                width={banner.width}
                height={banner.height}
                sandbox="allow-same-origin allow-scripts"
                scrolling="no"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
