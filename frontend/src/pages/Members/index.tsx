import styles from "./Members.module.scss";
import Chart from "react-apexcharts";

export const Members = () => {
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
          <div className={styles.members}>
            <p>Membros</p>
            <Chart
              options={options}
              series={options.series}
              width={800}
              height={250}
              type="line"
            />
          </div>

          <div className={styles.membersPerConstruction}>
            <p>Obras que demandaram mais membros</p>
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

      <div className={styles.membersListArea}>
        <strong>Lista de Membros</strong>

        <div className={styles.membersListContent}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nota</th>
                <th>Data de admissão</th>
                <th>Idade</th>
                <th>Status</th>
                <th>Local de Trabalho</th>
                <th>Salário</th>
                <th>Número de Obras</th>
                <th>Cargo</th>
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
