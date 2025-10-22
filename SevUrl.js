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
