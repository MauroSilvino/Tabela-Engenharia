import styles from "./Orders.module.scss";
import Chart from "react-apexcharts";

export const Orders = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    series: [
      {
        data: [
          {
            x: "Cimento",
            y: 10,
          },
          {
            x: "Coluna",
            y: 18,
          },

          {
            x: "Tijolo",
            y: 13,
          },
          {
            x: "Arame",
            y: 5,
          },
          {
            x: "Tinta",
            y: 9,
          },
        ],
      },
    ],
  };

  const options2 = {
    series: [75, 25],
    labels: ["Cimento", "Linha"],
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
      <div className={styles.dashboardArea}>
        <div className={styles.dashboardContent}>
          <div className={styles.common}>
            <p>Itens mais comprados</p>
            <Chart
              options={options}
              series={options.series}
              width={800}
              height={250}
              type="bar"
            />
          </div>

          <div className={styles.perItem}>
            <p>Valor gasto por item</p>
            <Chart
              options={options2}
              series={options2.series}
              width={400}
              height={250}
              type="donut"
            />
          </div>
        </div>
      </div>

      <div className={styles.ordersListArea}>
        <strong>Lista de Pedidos</strong>

        <div className={styles.ordersListContent}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nota</th>
                <th>Produto</th>
                <th>Unidades</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Valor</th>
                <th>Local de Entrega</th>
                <th>Previsão</th>
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
              </tr>
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
    </section>
  );
};
