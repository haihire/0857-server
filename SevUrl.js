export function SevUrl() {
  //local
  const url = "localhost";
  const CallBack = "cmd-test";
  const server_port = 7771;
  const scanner_port = 8806;
  const express_port = 3000;
  const sql_host = "localhost";
  const sql_user = "root";
  const sql_password = "tjdtn153";
  const allowUrl = "test";

  const vShotDealer = "baccarat-dealer.pd-bet-services.com";
  const vShotspd_bt = "0857-services.com";
  const vShotspdbt = "spdbt.com";
  const vShotPad = "baccarat-pad.pd-bet-services.com";
  const vShotPad_ctrl = "baccarat-control.pd-bet-services.com";

  //test
  //  const url = "baccarat-server.pd-bet-test.com";
  // const CallBack = "so-test";
  // const server_port = 7771;
  // const scanner_port = 8806;
  // const express_port = 80;
  // const sql_host = "172.31.38.103";
  // const sql_user = "holdem";
  // const sql_password = "holdem!@12";
  // const allowUrl = "services";

  // const vShotDealer = "baccarat-dealer.pd-bet-test.com";
  // const vShotspd_bt = "pd-bet-test.com";
  // const vShotspdbt = "spdbt.com";
  // const vShotPad = "baccarat-pad.pd-bet-test.com";

  //services
  //  const url = "baccarat-server.pd-bet-services.com";
  // const CallBack = "so-api";
  // const server_port = 7771;
  // const scanner_port = 8806;
  // const express_port = 80;
  // const sql_host = "172.31.16.196";
  // const sql_user = "holdem";
  // const sql_password = "holdem!@12";
  // const allowUrl = "services";

  // const vShotDealer = "baccarat-dealer.pd-bet-services.com";
  // const vShotspd_bt = "0857-services.com";
  // const vShotspdbt = "spdbt.com";
  // const vShotPad = "baccarat-pad.pd-bet-services.com";

  return {
    CallBack: CallBack,
    url: url,
    server_port: server_port,
    scanner_port: scanner_port,
    express_port: express_port,
    sql_host: sql_host,
    sql_user: sql_user,
    sql_password: sql_password,
    allowUrl: allowUrl,

    vShotDealer: vShotDealer,
    vShotspd_bt: vShotspd_bt,
    vShotspdbt: vShotspdbt,
    vShotPad: vShotPad,
    vShotPad_ctrl: vShotPad_ctrl,
  };
}
