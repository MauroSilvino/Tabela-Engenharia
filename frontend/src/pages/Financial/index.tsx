import styles from "./Financial.module.scss";
import Chart from "react-apexcharts";

export const Financial = () => {
  const options1 = {
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

  const options2 = {
    series: [75, 25],
    labels: ["Ganhos", "Gastos"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.balanceArea}>
        <strong>Balanço</strong>
        <div className={styles.balanceContent}>
          <div className={styles.dashboard}>
            <Chart
              options={options1}
              series={options1.series}
              type="line"
              width={600}
              height={250}
            />
          </div>

          <div className={styles.totalBalance}>
            <strong>Lucro das obras</strong>

            <Chart
              options={options2}
              series={options2.series}
              type="donut"
              width={600}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className={styles.notesArea}>
        <strong>Notas</strong>

        <div className={styles.notesContent}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Número de Ordem</th>
                <th>Data emissão</th>
                <th>CNPJ</th>
                <th>Descrição</th>
                <th>Produto</th>
                <th>Valor Total</th>
                <th>Valor Unitário</th>
                <th>Mercadorias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.membersArea}>
        <strong>Membros</strong>

        <div className={styles.membersContent}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Data admissão</th>
                <th>Salário</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>{" "}
              <tr>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
              </tr>
            </tbody>
          </table>

          <div>
            <Chart
              options={options1}
              series={options1.series}
              type="line"
              width={600}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
