import styles from "./Recent.module.scss";
import Chart from "react-apexcharts";
import constructionImage from "../../assets/construction.png";

export const Recent = () => {
  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      grid: {
        show: false,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    series: [
      {
        name: "Valor",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <section className={styles.container}>
      <div className={styles.dashboardArea}>
        <strong>Dashboard</strong>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboard}>
            <Chart
              options={options}
              series={options.series}
              type="line"
              width={600}
              height={250}
            />
          </div>

          <div className={styles.dashboardCards}>
            <div className={styles.dashboardCard}>
              <p>Obras</p>
              <div>
                <span className={styles.big}>322</span>
                <span className={styles.colorBlue}>11%</span>
              </div>
            </div>
            <div className={styles.dashboardCard}>
              <p>Balanço Comercial</p>
              <div>
                <span className={styles.big}>R$ 32212</span>
                <span className={styles.colorBlue}>11%</span>
              </div>
            </div>
            <div className={styles.dashboardCard}>
              <p>Items em estoque</p>
              <div>
                <span className={styles.big}>39</span>
                <span className={styles.Gray}>11%</span>
              </div>
            </div>
            <div className={styles.dashboardCard}>
              <p>Funcionários</p>
              <div>
                <span className={styles.big}>49</span>
                <span className={styles.colorBlue}>11%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.constructionArea}>
        <strong>Obras</strong>
        <div className={styles.constructionContent}>
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>
          <div className={styles.constructionCard}>
            <p className={styles.title}>Prédio de 9 andares</p>
            <img src={constructionImage} alt="" />
            <p>
              <span>Local: </span>
              Barra da tijuca
            </p>
            <p>
              <span>Funcionários: </span>
              12
            </p>
            <p>
              <span>Tempo estimado: </span>
              27 semanas
            </p>
            <p>
              <span>Tempo gasto: </span>
              12 semanas
            </p>
            <p>
              <span>Balanço comercial: </span>
              R$ 120000
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ordersArea}>
        <strong>Pedidos</strong>
        <div className={styles.ordersContent}>
          <div className={styles.orderCard}>
            <p>Ferragens</p>
            <div className={styles.orderCardContent}>
              <div className={styles.left}>
                <p>
                  <span>Local: </span>
                  Barra da tijuca
                </p>{" "}
                <p>
                  <span>Unidades: </span>
                  397
                </p>{" "}
                <p>
                  <span>Status: </span>A caminho
                </p>
              </div>
              <div className={styles.right}>
                <p>
                  <span>Itens: </span>
                  49
                </p>{" "}
                <p>
                  <span>Local de Estoque: </span>
                  Rua 5
                </p>
              </div>
            </div>
          </div>

          <div className={styles.orderCard}>
            <p>Ferragens</p>
            <div className={styles.orderCardContent}>
              <div className={styles.left}>
                <p>
                  <span>Local: </span>
                  Barra da tijuca
                </p>{" "}
                <p>
                  <span>Unidades: </span>
                  397
                </p>{" "}
                <p>
                  <span>Status: </span>A caminho
                </p>
              </div>
              <div className={styles.right}>
                <p>
                  <span>Itens: </span>
                  49
                </p>{" "}
                <p>
                  <span>Local de Estoque: </span>
                  Rua 5
                </p>
              </div>
            </div>
          </div>

          <div className={styles.orderCard}>
            <p>Ferragens</p>
            <div className={styles.orderCardContent}>
              <div className={styles.left}>
                <p>
                  <span>Local: </span>
                  Barra da tijuca
                </p>{" "}
                <p>
                  <span>Unidades: </span>
                  397
                </p>{" "}
                <p>
                  <span>Status: </span>A caminho
                </p>
              </div>
              <div className={styles.right}>
                <p>
                  <span>Itens: </span>
                  49
                </p>{" "}
                <p>
                  <span>Local de Estoque: </span>
                  Rua 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
