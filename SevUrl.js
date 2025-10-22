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

  const vShotDealer = "test.com";
  const vShotspd_bt = "test.com";
  const vShotspdbt = "test.com";
  const vShotPad = "test.com";
  const vShotPad_ctrl = "test.com";


  

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
