import styles from "./Banners.module.css";

export const Banners = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            BANNERS HTML5 <br />
            RICH MEDIA
          </h2>
          <p className={styles.description}>
            Os criativos HTML5 são anúncios desenvolvidos com Javascript, HTML5
            e CSS.
          </p>
          <p className={styles.description}>
            São veiculados em páginas da Web ou em apps para dispositivos móveis
          </p>
          <div className={styles.wrapper__banners}>
            {/* banners 300x250 */}
            <iframe
              src="https://verpecas.com.br/p/sebrae/22-02/completo/v2/banners/5-Ana-300x250-300kB-15%20seg-ate%203/"
              width="300"
              height="250"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SEBRAE"
            />
            <iframe
              src="https://verpecas.com.br/p/senai/01/completo2/v2/banners/11-2-300x250-150kb-Indeterminado-Indeterminado/"
              width="300"
              height="250"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SENAI"
            />
            <iframe
              src="https://verpecas.com.br/p/senai/01/completo/linha1/v2/banners/3-1-300x250-150kb-Indeterminado-Indeterminado/"
              width="300"
              height="250"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SENAI"
            />

            {/* banners 300x600 */}
            <iframe
              src="https://digitalwp.com.br/portfolio/caixa-mega-da-virada/banners/11-Conversa%cc%83o%20Online-300x600-150kB-livre-livre/"
              width="300"
              height="600"
              sandbox="allow-same-origin allow-scripts"
              title="Banner CAIXA"
            />
            <iframe
              src="https://verpecas.com.br/p/senai/01/completo/linha1/v2/banners/4-1-300x600-150kb-Indeterminado-Indeterminado/"
              width="300"
              height="600"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SENAI"
            />
            <iframe
              src="https://verpecas.com.br/p/sebrae/22-02/completo/v2/banners/16-Ana-300x600-50kB-15%20seg-sim/"
              width="300"
              height="600"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SEBRAE"
            />

            {/* banners horizontais */}
            <iframe
              src="https://verpecas.com.br/p/sebrae/22-06/completo/v2/banners/11-Linha%201-970x250-200kB-15%20seg-nao/"
              width="970"
              height="250"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SEBRAE"
            />
            <iframe
              src="https://digitalwp.com.br/portfolio/caixa-mega-da-virada/banners/1-Transmissa%cc%83o-970x150-400kB-livre-livre/"
              width="970"
              height="150"
              sandbox="allow-same-origin allow-scripts"
              title="Banner CAIXA"
            />
            <iframe
              src="https://verpecas.com.br/p/sesi/01/completo/v2/banners/1-Linha%201-728x90-150kb-indeterminado-indeterminado/"
              width="728"
              height="90"
              sandbox="allow-same-origin allow-scripts"
              title="Banner SESI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
